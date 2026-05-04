# Monarch Insurance - React Website

A modern, animated website for Monarch Insurance built with React and Vite.

## Features

- ✨ Modern, responsive design
- 🎨 Beautiful animations and transitions
- 🎯 Smooth scrolling navigation
- 📱 Fully mobile responsive
- ⚡ Fast performance with Vite
- 🎭 Interactive components with React hooks

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Claim form email (Office 365 SMTP)

The Report Claim page sends mail through a small Python API (`server/app.py`). Vite proxies `/api` to that service during `npm run dev`.

1. Create a virtual environment and install server dependencies (from the project root):

```bash
cd server
python -m venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
```

2. Copy `server/.env.example` to `server/.env` and set `SENDER_PASSWORD` to the password for the **alerts@** mailbox. Set `SMTP_HOST` and `SMTP_PORT` (defaults: `smtp.office365.com` and `587`). Set **`FORM_RECIPIENT_EMAIL`** (default `snoah@monarchinsurance.co.ke`) — this inbox receives **both** claim and contact form messages. **Never commit `server/.env`.**

3. In a second terminal, start the API:

```bash
cd server
# activate .venv first
python app.py
```

4. With `python app.py` running on port 5000, run `npm run dev` in the project root. The **From** address is `SENDER_EMAIL`. All form submissions (**claim**, **contact**, and **get-a-quote**) go to the same **To** address from `FORM_RECIPIENT_EMAIL` (see `.env.example`). The **Get a Quote** page (`/get-a-quote`) submits through **`POST /api/contact`** with the same JSON shape as the contact page (`name`, `email`, `phone`, `subject`, `message`).

**Production:** static hosting for the React app does not include this API. Run the Flask app (or another host) and set `VITE_CLAIM_API_URL` and `VITE_CONTACT_API_URL` if the API is not same-origin (both quote and contact forms use `VITE_CONTACT_API_URL` for the mail endpoint).

**Microsoft 365:** the mailbox may need SMTP AUTH enabled; accounts with MFA often require an app password instead of the normal sign-in password.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
monarchIns/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── StatCard.jsx
│   │   ├── Insurance.jsx
│   │   ├── InsuranceCard.jsx
│   │   ├── Pages.jsx
│   │   ├── Contact.jsx
│   │   ├── Careers.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Adding Your Logo

Replace the logo placeholder in `src/components/Navbar.jsx`:

```jsx
<div className="nav-logo">
  <img src="/path-to-your-logo.svg" alt="Monarch Insurance" />
</div>
```

### Color Scheme

The color scheme is defined in `src/styles.css` using CSS variables:

- Primary Green: `#11422e`
- Black: `#000000`
- White: `#ffffff`

You can modify these in the `:root` section of the CSS file.

## Technologies Used

- React 18
- Vite
- CSS3 (with animations)
- Inter font family

## License

© 2024 Monarch Insurance. All rights reserved.
