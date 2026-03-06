import { useState } from 'react'
import './Login.css'

const initialForm = {
  email: '',
  password: '',
  remember: true,
}

export default function Login() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (event) => {
    const { name, type, value, checked } = event.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    setSubmitted(false)
  }

  const validate = () => {
    const next = {}
    if (!form.email.trim()) next.email = 'Email is required.'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (!form.password) next.password = 'Password is required.'
    if (form.password && form.password.length < 8) next.password = 'Password must be at least 8 characters.'
    return next
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSubmitted(true)
  }

  return (
    <div className="login-page">
      <header className="login-header">
        <a className="login-brand-link" href="/" aria-label="Briefed home">
          <div className="nav-logo">
            Brief<span>ed</span>
          </div>
        </a>
        <a className="login-back-link" href="/" aria-label="Back to home">
          <span aria-hidden="true">←</span>
          <span>Back to Home</span>
        </a>
      </header>

      <main className="login-main">
        <section className="login-panel">
          <div className="login-intro">
            <h1>Welcome back</h1>
            <p>Sign in to access your meeting summaries, action items, and workspace analytics.</p>
          </div>

          <form className="login-form" onSubmit={onSubmit} noValidate>
            <label className="login-field">
              <span>Email address</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="name@briefed.com"
                autoComplete="email"
              />
              {errors.email && <small className="login-error">{errors.email}</small>}
            </label>

            <label className="login-field">
              <div className="login-field-row">
                <span>Password</span>
                <a href="#" className="login-forgot">
                  Forgot?
                </a>
              </div>
              <div className="login-password-wrap">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={onChange}
                  placeholder="********"
                  autoComplete="current-password"
                />
                <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password && <small className="login-error">{errors.password}</small>}
            </label>

            <label className="login-check">
              <input name="remember" type="checkbox" checked={form.remember} onChange={onChange} />
              <span>Keep me signed in for 30 days on this device.</span>
            </label>

            <button className="login-submit" type="submit">
              Sign in
            </button>
            {submitted && <div className="login-success">Credentials look good. Continuing to your workspace...</div>}
          </form>

          <div className="login-divider">
            <span></span>
            <small>OR</small>
            <span></span>
          </div>

          <button className="login-google-btn" type="button">
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#FFC107" d="M43.61 20.08H42V20H24v8h11.3C33.66 32.66 29.24 36 24 36c-6.63 0-12-5.37-12-12s5.37-12 12-12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.12 6.05 29.33 4 24 4 12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20c0-1.34-.14-2.65-.39-3.92z" />
              <path fill="#FF3D00" d="M6.31 14.69l6.57 4.82C14.66 15.1 18.96 12 24 12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.12 6.05 29.33 4 24 4 16.32 4 9.66 8.34 6.31 14.69z" />
              <path fill="#4CAF50" d="M24 44c5.2 0 9.89-1.99 13.45-5.23l-6.21-5.26C29.19 35.08 26.72 36 24 36c-5.22 0-9.63-3.32-11.29-7.94l-6.53 5.03C9.49 39.56 16.21 44 24 44z" />
              <path fill="#1976D2" d="M43.61 20.08H42V20H24v8h11.3c-.78 2.2-2.19 4.12-4.06 5.51l.01-.01 6.21 5.26C37.02 39.15 44 34 44 24c0-1.34-.14-2.65-.39-3.92z" />
            </svg>
            Continue with Google
          </button>

          <p className="login-footer-note">
            Don&apos;t have an account?
            <a href="/signup"> Create one</a>
          </p>
        </section>
      </main>
    </div>
  )
}
