import { useEffect, useMemo, useRef, useState } from 'react'
import './VerifyEmail.css'

const OTP_LENGTH = 6
const RESEND_SECONDS = 30

export default function VerifyEmail() {
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(''))
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [resendTimer, setResendTimer] = useState(RESEND_SECONDS)
  const inputRefs = useRef([])

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  useEffect(() => {
    if (resendTimer <= 0) return undefined
    const timer = setTimeout(() => setResendTimer((prev) => prev - 1), 1000)
    return () => clearTimeout(timer)
  }, [resendTimer])

  const otp = useMemo(() => digits.join(''), [digits])
  const isComplete = otp.length === OTP_LENGTH && !digits.includes('')

  const updateDigit = (index, value) => {
    const clean = value.replace(/\D/g, '').slice(-1)
    setDigits((prev) => {
      const next = [...prev]
      next[index] = clean
      return next
    })
    setError('')
    setSuccess('')
    if (clean && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus()
  }

  const onKeyDown = (index, event) => {
    if (event.key === 'Backspace') {
      if (digits[index]) {
        updateDigit(index, '')
        return
      }
      if (index > 0) {
        inputRefs.current[index - 1]?.focus()
        updateDigit(index - 1, '')
      }
      return
    }
    if (event.key === 'ArrowLeft' && index > 0) inputRefs.current[index - 1]?.focus()
    if (event.key === 'ArrowRight' && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus()
  }

  const onPaste = (event) => {
    event.preventDefault()
    const pasted = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH)
    if (!pasted) return
    const nextDigits = Array(OTP_LENGTH)
      .fill('')
      .map((_, idx) => pasted[idx] || '')
    setDigits(nextDigits)
    setError('')
    setSuccess('')
    const focusIndex = Math.min(pasted.length, OTP_LENGTH - 1)
    inputRefs.current[focusIndex]?.focus()
  }

  const verify = (event) => {
    event.preventDefault()
    if (!isComplete) {
      setError('Enter the full 6-digit code from your email.')
      setSuccess('')
      return
    }
    setError('')
    setSuccess('Verification successful. Redirecting to your workspace...')
  }

  const resendCode = () => {
    if (resendTimer > 0) return
    setDigits(Array(OTP_LENGTH).fill(''))
    setError('')
    setSuccess('A new security code has been sent.')
    setResendTimer(RESEND_SECONDS)
    inputRefs.current[0]?.focus()
  }

  return (
    <div className="verify-page">
      <header className="verify-header">
        <a className="verify-brand-link" href="/" aria-label="Briefed home">
          <div className="nav-logo">
            Brief<span>ed</span>
          </div>
        </a>
        <a className="verify-back-link" href="/login">
          Back to login
        </a>
      </header>

      <main className="verify-main">
        <section className="verify-panel">
          <div className="verify-icon-wrap">
            <div className="verify-icon-ring">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="verify-icon-mail">
                <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                <path d="M22 8l-10 6L2 8" />
              </svg>
            </div>
          </div>

          <div className="verify-copy">
            <h1>Check your inbox</h1>
            <p>We sent a six-digit verification code to your email. Enter it below to complete account setup.</p>
          </div>

          <form className="verify-form" onSubmit={verify}>
            <fieldset className="verify-otp" onPaste={onPaste}>
              <legend className="sr-only">One-time verification code</legend>
              {digits.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el
                  }}
                  inputMode="numeric"
                  autoComplete={index === 0 ? 'one-time-code' : 'off'}
                  maxLength={1}
                  value={digit}
                  onChange={(event) => updateDigit(index, event.target.value)}
                  onKeyDown={(event) => onKeyDown(index, event)}
                  aria-label={`Digit ${index + 1}`}
                />
              ))}
            </fieldset>

            {error && <div className="verify-error">{error}</div>}
            {success && <div className="verify-success">{success}</div>}

            <button className="verify-submit" type="submit">
              Verify account
            </button>
          </form>

          <div className="verify-resend">
            <p>Did not receive the email?</p>
            <button type="button" onClick={resendCode} disabled={resendTimer > 0}>
              {resendTimer > 0 ? `Resend code in ${resendTimer}s` : 'Resend security code'}
            </button>
          </div>
        </section>
      </main>

      <footer className="verify-footer">
        <div className="verify-footer-line"></div>
        <p>Editorial Verification v2.4</p>
      </footer>
    </div>
  )
}
