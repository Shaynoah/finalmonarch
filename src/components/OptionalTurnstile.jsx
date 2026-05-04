import React, { useCallback } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'

/**
 * Renders Cloudflare Turnstile when `VITE_TURNSTILE_SITE_KEY` is set.
 * Omit from bundle behavior: no widget, no token required (server skips verify).
 */
const OptionalTurnstile = ({ onTokenChange }) => {
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY

  const onSuccess = useCallback(
    (token) => {
      onTokenChange?.(token)
    },
    [onTokenChange]
  )

  const onExpire = useCallback(() => {
    onTokenChange?.(null)
  }, [onTokenChange])

  if (!siteKey) return null

  return (
    <div className="form-turnstile">
      <Turnstile
        siteKey={siteKey}
        onSuccess={onSuccess}
        onExpire={onExpire}
        options={{ theme: 'auto', size: 'normal' }}
      />
    </div>
  )
}

export default OptionalTurnstile
