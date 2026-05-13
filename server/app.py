"""
Claim form email relay: sends via Office 365 SMTP.
Copy .env.example to .env and set SENDER_PASSWORD (never commit .env).

Optional: Cloudflare Turnstile — set TURNSTILE_SECRET_KEY and matching site key on the frontend.
Rate limiting: RATE_LIMIT_ENABLED / RATE_LIMIT_FORMS (see .env.example).
"""
import json as json_std
import os
import re
import smtplib
import traceback
import urllib.error
import urllib.parse
import urllib.request
from html import escape
from email.message import EmailMessage
from pathlib import Path

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.errors import RateLimitExceeded

_ENV_PATH = Path(__file__).resolve().parent / ".env"


def _load_env() -> None:
    """Load server/.env into os.environ. Call again after editing .env without restart."""
    load_dotenv(_ENV_PATH, override=True)


_load_env()

app = Flask(__name__)
CORS(app)


def _rate_limit_key() -> str:
    """Best IP for abuse limits when behind Cloudflare or a reverse proxy."""
    cf = (request.headers.get("CF-Connecting-IP") or "").strip()
    if cf:
        return cf
    xff = (request.headers.get("X-Forwarded-For") or "").strip()
    if xff:
        return xff.split(",")[0].strip()
    return request.remote_addr or "unknown"


_form_rate_limit = (os.environ.get("RATE_LIMIT_FORMS") or "10 per minute").strip()
_rate_limit_enabled = (os.environ.get("RATE_LIMIT_ENABLED") or "true").strip().lower() in (
    "1",
    "true",
    "yes",
)

limiter = Limiter(
    key_func=_rate_limit_key,
    app=app,
    default_limits=[],
    storage_uri=(os.environ.get("RATELIMIT_STORAGE_URI") or "memory://").strip(),
    enabled=_rate_limit_enabled,
    # Avoid crashing the request if Redis/storage is misconfigured (limits may be skipped).
    swallow_errors=True,
)


@app.errorhandler(RateLimitExceeded)
def _rate_limit_exceeded(_e):
    return (
        jsonify(
            {
                "ok": False,
                "error": "Too many submissions from this address. Please wait a minute and try again.",
            }
        ),
        429,
    )


def _turnstile_verify_ok(body: dict) -> tuple[bool, str | None]:
    """If TURNSTILE_SECRET_KEY is unset, skips verification (optional CAPTCHA)."""
    try:
        secret = (os.environ.get("TURNSTILE_SECRET_KEY") or "").strip()
        if not secret:
            return True, None

        token = (
            str(body.get("captchaToken") or body.get("cf-turnstile-response") or "").strip()
        )
        if not token:
            return False, (
                "Security check required. Complete the verification below the form and try again."
            )

        remote_ip = None
        cf = (request.headers.get("CF-Connecting-IP") or "").strip()
        if cf:
            remote_ip = cf
        else:
            xff = (request.headers.get("X-Forwarded-For") or "").strip()
            if xff:
                remote_ip = xff.split(",")[0].strip()
            elif request.remote_addr:
                remote_ip = request.remote_addr

        payload = urllib.parse.urlencode(
            {
                "secret": secret,
                "response": token,
                **({"remoteip": remote_ip} if remote_ip else {}),
            }
        ).encode()

        req = urllib.request.Request(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            data=payload,
            method="POST",
            headers={"Content-Type": "application/x-www-form-urlencoded"},
        )

        try:
            with urllib.request.urlopen(req, timeout=12) as resp:
                raw = resp.read().decode()
            out = json_std.loads(raw)
        except (
            urllib.error.URLError,
            TimeoutError,
            OSError,
            ValueError,
            json_std.JSONDecodeError,
            UnicodeDecodeError,
        ):
            return False, "Could not verify security check. Please try again."

        if not out.get("success"):
            err_codes = out.get("error-codes") or []
            app.logger.warning("Turnstile verification failed: %s", err_codes)
            return False, "Security verification failed. Refresh the page and try again."

        return True, None
    except Exception:
        app.logger.error("Turnstile handler error:\n%s", traceback.format_exc())
        return False, "Could not verify security check. Please try again."


def _smtp_host() -> str:
    return (os.environ.get("SMTP_HOST") or "smtp.office365.com").strip()


def _smtp_port() -> int:
    raw = (os.environ.get("SMTP_PORT") or "587").strip()
    try:
        return int(raw)
    except ValueError:
        return 587


def _sender_email() -> str:
    return (os.environ.get("SENDER_EMAIL") or "alerts@monarchinsurance.co.ke").strip()


def _sender_password() -> str | None:
    # In .env, if password contains # you MUST use double quotes or everything after # is ignored
    p = (os.environ.get("SENDER_PASSWORD") or "").strip()
    return p or None


_STAFF_COPY_EMAIL = "snoah@monarchinsurance.co.ke"


def _ensure_staff_in_recipients(to_header: str) -> str:
    """Append staff copy address to To list if not already present (case-insensitive)."""
    parts = [p.strip() for p in re.split(r"[;,]", to_header) if p.strip()]
    lowered = {p.lower() for p in parts}
    if _STAFF_COPY_EMAIL.lower() not in lowered:
        parts.append(_STAFF_COPY_EMAIL)
    return ", ".join(parts)


def _form_recipient_email() -> str:
    """Inbox for contact / quote submissions (POST /api/contact). Default: info@monarchinsurance.co.ke."""
    for key in ("FORM_RECIPIENT_EMAIL", "CONTACT_RECIPIENT_EMAIL"):
        v = (os.environ.get(key) or "").strip()
        if v:
            return _ensure_staff_in_recipients(v)
    return _ensure_staff_in_recipients("info@monarchinsurance.co.ke")


def _quote_recipient_to_header() -> str:
    """
    To header for Get a Quote (formSource get-a-quote). Comma-separated for multiple inboxes.
    Override with QUOTE_RECIPIENT_EMAIL (comma or semicolon separated).
    """
    raw = (os.environ.get("QUOTE_RECIPIENT_EMAIL") or "").strip()
    if raw:
        parts = [p.strip() for p in re.split(r"[;,]", raw) if p.strip()]
        if parts:
            return _ensure_staff_in_recipients(", ".join(parts))
    return _ensure_staff_in_recipients(
        "requests@monarchinsurance.co.ke, gmunywoki@monarchinsurance.co.ke"
    )


def _contact_to_header(data: dict) -> str:
    """Route POST /api/contact: Get a Quote (formSource) → quote inboxes; else → general contact."""
    if (data.get("formSource") or "").strip().lower() == "get-a-quote":
        return _quote_recipient_to_header()
    return _form_recipient_email()


def _claim_recipient_to_header() -> str:
    """
    To header for claim reports (POST /api/claim). Comma-separated for multiple inboxes.
    Override with CLAIM_RECIPIENT_EMAIL (comma or semicolon separated).
    """
    raw = (os.environ.get("CLAIM_RECIPIENT_EMAIL") or "").strip()
    if raw:
        parts = [p.strip() for p in re.split(r"[;,]", raw) if p.strip()]
        if parts:
            return _ensure_staff_in_recipients(", ".join(parts))
    return _ensure_staff_in_recipients(
        "claimsteam@monarchinsurance.co.ke, gmunywoki@monarchinsurance.co.ke"
    )


def build_body(data: dict) -> str:
    lines = [
        f"First Name: {data.get('firstName', '')}",
        f"Last Name: {data.get('lastName', '')}",
        f"Submitter email (reply-to): {data.get('email', '')}",
        f"Type Of Cover: {data.get('typeOfCover', '')}",
        f"Policy/Registration Number: {data.get('policyNumber', '')}",
        "",
        "Claim Description:",
        data.get("claimDescription", ""),
    ]
    return "\n".join(lines)


def _build_contact_html(data: dict, subject_line: str) -> str:
    name = escape((data.get("name") or "").strip() or "Not provided")
    email = escape((data.get("email") or "").strip() or "Not provided")
    phone = escape((data.get("phone") or "").strip() or "Not provided")
    subject = escape(subject_line or "Not provided")
    message = escape((data.get("message") or "").strip() or "No message provided").replace(
        "\n", "<br>"
    )

    return f"""\
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,sans-serif;color:#1f2937;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="width:100%;max-width:640px;background:#ffffff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
            <tr>
              <td style="padding:20px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;width:170px;font-size:14px;">Name</td>
                    <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:600;">{name}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;width:170px;font-size:14px;">Email</td>
                    <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:600;">{email}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;width:170px;font-size:14px;">Phone</td>
                    <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:600;">{phone}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;width:170px;font-size:14px;">Subject</td>
                    <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:600;">{subject}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 24px 24px;">
                <div style="font-size:14px;color:#6b7280;margin-bottom:8px;">Message</div>
                <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:14px;font-size:14px;line-height:1.6;color:#111827;">
                  {message}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
"""


def _require_password_and_smtp_send(msg: EmailMessage) -> None:
    """Log in and send. Raises LookupError if SENDER_PASSWORD is missing."""
    sender_password = _sender_password()
    if not sender_password:
        raise LookupError("missing_password")
    with smtplib.SMTP(_smtp_host(), _smtp_port(), timeout=30) as server:
        server.starttls()
        server.login(_sender_email(), sender_password)
        server.send_message(msg)


@app.route("/api/health", methods=["GET"])
def health():
    _load_env()
    return jsonify({
        "ok": True,
        "env_file": str(_ENV_PATH),
        "sender_password_loaded": bool(_sender_password()),
        "smtp_host": _smtp_host(),
        "smtp_port": _smtp_port(),
        "contact_recipient": _form_recipient_email(),
        "quote_recipients": _quote_recipient_to_header(),
        "claim_recipients": _claim_recipient_to_header(),
    })


@app.route("/api/claim", methods=["POST"])
@limiter.limit(_form_rate_limit)
def submit_claim():
    _load_env()
    data = request.get_json(silent=True) or {}
    ok_captcha, captcha_err = _turnstile_verify_ok(data)
    if not ok_captcha:
        return jsonify({"ok": False, "error": captcha_err}), 400

    required = ["firstName", "lastName", "email", "typeOfCover", "policyNumber", "claimDescription"]
    missing = [k for k in required if not str(data.get(k, "")).strip()]
    if missing:
        return jsonify({"ok": False, "error": f"Missing fields: {', '.join(missing)}"}), 400

    subject = f"Claim report — {data.get('typeOfCover', 'General')}"

    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = _sender_email()
    msg["To"] = _claim_recipient_to_header()
    msg["Reply-To"] = data.get("email", "")
    msg.set_content(build_body(data))

    try:
        _require_password_and_smtp_send(msg)
    except LookupError:
        return (
            jsonify({
                "ok": False,
                "error": (
                    "Server missing SENDER_PASSWORD after loading server/.env. "
                    "If the password contains #, wrap it in double quotes in .env, e.g. "
                    'SENDER_PASSWORD="your#secret"'
                ),
            }),
            503,
        )
    except Exception:
        app.logger.error(traceback.format_exc())
        return jsonify({"ok": False, "error": "Could not send email. Check server logs."}), 502

    return jsonify({"ok": True})


@app.route("/api/contact", methods=["POST"])
@limiter.limit(_form_rate_limit)
def submit_contact():
    _load_env()
    data = request.get_json(silent=True) or {}
    ok_captcha, captcha_err = _turnstile_verify_ok(data)
    if not ok_captcha:
        return jsonify({"ok": False, "error": captcha_err}), 400

    required = ["name", "email", "subject", "message"]
    missing = [k for k in required if not str(data.get(k, "")).strip()]
    if missing:
        return jsonify({"ok": False, "error": f"Missing fields: {', '.join(missing)}"}), 400

    subject_line = (data.get("subject") or "").strip() or "Website Contact Form Inquiry"
    phone = (data.get("phone") or "").strip()
    body_lines = [
        f"Name: {data.get('name', '').strip()}",
        f"Email: {data.get('email', '').strip()}",
        f"Phone: {phone if phone else 'Not provided'}",
        "",
        "Message:",
        (data.get("message") or "").strip(),
    ]
    body = "\n".join(body_lines)

    msg = EmailMessage()
    # Quote flow (from /get-a-quote): subject begins with "Quote request" — no "Contact form:" prefix
    if re.match(r"^quote\s+request\b", subject_line, re.I):
        rest = re.sub(r"^quote\s+request\s*", "", subject_line, count=1, flags=re.I).strip()
        if rest.startswith("—"):
            msg["Subject"] = f"Quote Request {rest}"
        elif rest.startswith("-"):
            msg["Subject"] = f"Quote Request — {rest[1:].strip()}"
        elif rest:
            msg["Subject"] = f"Quote Request — {rest}"
        else:
            msg["Subject"] = "Quote Request"
    else:
        msg["Subject"] = f"Contact form: {subject_line}"
    msg["From"] = _sender_email()
    msg["To"] = _contact_to_header(data)
    msg["Reply-To"] = data.get("email", "").strip()
    msg.set_content(body)
    msg.add_alternative(_build_contact_html(data, subject_line), subtype="html")

    try:
        _require_password_and_smtp_send(msg)
    except LookupError:
        return (
            jsonify({
                "ok": False,
                "error": (
                    "Server missing SENDER_PASSWORD after loading server/.env. "
                    "If the password contains #, wrap it in double quotes in .env, e.g. "
                    'SENDER_PASSWORD="your#secret"'
                ),
            }),
            503,
        )
    except Exception:
        app.logger.error(traceback.format_exc())
        return jsonify({"ok": False, "error": "Could not send email. Check server logs."}), 502

    return jsonify({"ok": True})


if __name__ == "__main__":
    port = int(os.environ.get("FLASK_PORT", "5000"))
    _load_env()
    print(f"[claim-api] Loaded .env from {_ENV_PATH}")
    print(
        f"[claim-api] SMTP {_smtp_host()}:{_smtp_port()}  "
        f"SENDER_EMAIL={_sender_email()!r}  "
        f"SENDER_PASSWORD={'set' if _sender_password() else 'MISSING'}"
    )
    app.run(host="127.0.0.1", port=port, debug=True)
