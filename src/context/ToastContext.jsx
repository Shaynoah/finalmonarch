import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'

const ToastContext = createContext(null)

const DEFAULT_DURATION_MS = 5200

function ToastItem({ id, type, message, exiting, onDismiss, onExitComplete }) {
  const handleAnimationEnd = (e) => {
    if (exiting && e.animationName === 'toast-out') {
      onExitComplete(id)
    }
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className={`toast-item toast-item--${type} ${exiting ? 'toast-item--exit' : ''}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="toast-item__accent" aria-hidden />
      <div className="toast-item__icon" aria-hidden>
        {type === 'success' ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        )}
      </div>
      <p className="toast-item__message">{message}</p>
      <button
        type="button"
        className="toast-item__close"
        aria-label="Dismiss notification"
        onClick={() => onDismiss(id)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  )
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const timersRef = useRef(new Map())

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
    const t = timersRef.current.get(id)
    if (t) {
      clearTimeout(t)
      timersRef.current.delete(id)
    }
  }, [])

  const dismiss = useCallback((id) => {
    const t = timersRef.current.get(id)
    if (t) {
      clearTimeout(t)
      timersRef.current.delete(id)
    }
    setToasts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, exiting: true } : item))
    )
  }, [])

  const showToast = useCallback(
    ({ type = 'success', message, duration = DEFAULT_DURATION_MS }) => {
      const id =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`

      setToasts((prev) => [...prev, { id, type, message, exiting: false }])

      if (duration > 0) {
        const t = setTimeout(() => dismiss(id), duration)
        timersRef.current.set(id, t)
      }

      return id
    },
    [dismiss]
  )

  const value = useMemo(() => ({ showToast }), [showToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toast-region" aria-label="Notifications">
        {toasts.map((t) => (
          <ToastItem
            key={t.id}
            id={t.id}
            type={t.type}
            message={t.message}
            exiting={t.exiting}
            onDismiss={dismiss}
            onExitComplete={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return ctx
}
