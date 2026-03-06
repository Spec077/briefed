import { useMemo, useState } from 'react'
import './Signup.css'

const initialForm = {
  firstName: '',
  lastName: '',
  workEmail: '',
  password: '',
  confirmPassword: '',
  company: '',
  jobTitle: '',
  teamSize: '',
  phone: '',
  country: '',
  marketingOptIn: true,
  termsAccepted: false,
}

const teamSizes = ['1-10', '11-50', '51-200', '201-1000', '1000+']
const countries = ['United States', 'United Kingdom', 'Canada', 'Germany', 'Nigeria', 'India', 'Australia', 'Other']

export default function Signup() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const passwordChecks = useMemo(
    () => ({
      hasLength: form.password.length >= 8,
      hasUpper: /[A-Z]/.test(form.password),
      hasLower: /[a-z]/.test(form.password),
      hasNumber: /[0-9]/.test(form.password),
    }),
    [form.password],
  )

  const validate = () => {
    const nextErrors = {}
    if (!form.firstName.trim()) nextErrors.firstName = 'First name is required.'
    if (!form.lastName.trim()) nextErrors.lastName = 'Last name is required.'
    if (!form.workEmail.trim()) nextErrors.workEmail = 'Work email is required.'
    if (form.workEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) nextErrors.workEmail = 'Enter a valid email.'
    if (!form.company.trim()) nextErrors.company = 'Company name is required.'
    if (!form.jobTitle.trim()) nextErrors.jobTitle = 'Job title is required.'
    if (!form.teamSize) nextErrors.teamSize = 'Select your team size.'
    if (!form.country) nextErrors.country = 'Select your country.'
    if (!passwordChecks.hasLength || !passwordChecks.hasUpper || !passwordChecks.hasLower || !passwordChecks.hasNumber) {
      nextErrors.password = 'Password must be at least 8 characters and include upper/lowercase letters and a number.'
    }
    if (form.password !== form.confirmPassword) nextErrors.confirmPassword = 'Passwords do not match.'
    if (!form.termsAccepted) nextErrors.termsAccepted = 'You must accept Terms and Privacy Policy.'
    return nextErrors
  }

  const onChange = (event) => {
    const { name, type, checked, value } = event.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    setSubmitted(false)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSubmitted(true)
  }

  return (
    <div className="signup-page">
      <header className="signup-header">
        <a className="signup-brand-link" href="/" aria-label="Briefed home">
          <div className="nav-logo">
            Brief<span>ed</span>
          </div>
        </a>
        <div className="signup-header-right">
          <span>Already have an account?</span>
          <a className="signup-login-link" href="/login">
            Log in
          </a>
        </div>
      </header>

      <main className="signup-main">
        <section className="signup-panel">
          <div className="signup-intro">
            <h1>Create your account</h1>
            <p>Set up your workspace and start turning meetings into summaries, decisions, and trackable action items.</p>
          </div>

          <button className="signup-google-btn" type="button">
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#FFC107" d="M43.61 20.08H42V20H24v8h11.3C33.66 32.66 29.24 36 24 36c-6.63 0-12-5.37-12-12s5.37-12 12-12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.12 6.05 29.33 4 24 4 12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20c0-1.34-.14-2.65-.39-3.92z" />
              <path fill="#FF3D00" d="M6.31 14.69l6.57 4.82C14.66 15.1 18.96 12 24 12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.12 6.05 29.33 4 24 4 16.32 4 9.66 8.34 6.31 14.69z" />
              <path fill="#4CAF50" d="M24 44c5.2 0 9.89-1.99 13.45-5.23l-6.21-5.26C29.19 35.08 26.72 36 24 36c-5.22 0-9.63-3.32-11.29-7.94l-6.53 5.03C9.49 39.56 16.21 44 24 44z" />
              <path fill="#1976D2" d="M43.61 20.08H42V20H24v8h11.3c-.78 2.2-2.19 4.12-4.06 5.51l.01-.01 6.21 5.26C37.02 39.15 44 34 44 24c0-1.34-.14-2.65-.39-3.92z" />
            </svg>
            Continue with Google
          </button>

          <div className="signup-divider">
            <span></span>
            <small>OR SIGN UP WITH EMAIL</small>
            <span></span>
          </div>

          <form className="signup-form" onSubmit={onSubmit} noValidate>
            <div className="signup-grid two">
              <label className="signup-field">
                <span>First name</span>
                <input name="firstName" value={form.firstName} onChange={onChange} placeholder="Julia" />
                {errors.firstName && <small className="signup-error">{errors.firstName}</small>}
              </label>
              <label className="signup-field">
                <span>Last name</span>
                <input name="lastName" value={form.lastName} onChange={onChange} placeholder="Moore" />
                {errors.lastName && <small className="signup-error">{errors.lastName}</small>}
              </label>
            </div>

            <label className="signup-field">
              <span>Work email</span>
              <input name="workEmail" type="email" value={form.workEmail} onChange={onChange} placeholder="name@company.com" />
              {errors.workEmail && <small className="signup-error">{errors.workEmail}</small>}
            </label>

            <div className="signup-grid two">
              <label className="signup-field">
                <span>Password</span>
                <div className="signup-password-wrap">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={onChange}
                    placeholder="Create password"
                  />
                  <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.password && <small className="signup-error">{errors.password}</small>}
              </label>
              <label className="signup-field">
                <span>Confirm password</span>
                <div className="signup-password-wrap">
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={form.confirmPassword}
                    onChange={onChange}
                    placeholder="Confirm password"
                  />
                  <button type="button" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                    {showConfirmPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.confirmPassword && <small className="signup-error">{errors.confirmPassword}</small>}
              </label>
            </div>

            <div className="signup-password-rules">
              <span className={passwordChecks.hasLength ? 'ok' : ''}>8+ chars</span>
              <span className={passwordChecks.hasUpper ? 'ok' : ''}>Uppercase</span>
              <span className={passwordChecks.hasLower ? 'ok' : ''}>Lowercase</span>
              <span className={passwordChecks.hasNumber ? 'ok' : ''}>Number</span>
            </div>

            <div className="signup-grid two">
              <label className="signup-field">
                <span>Company</span>
                <input name="company" value={form.company} onChange={onChange} placeholder="Acme Inc." />
                {errors.company && <small className="signup-error">{errors.company}</small>}
              </label>
              <label className="signup-field">
                <span>Job title</span>
                <input name="jobTitle" value={form.jobTitle} onChange={onChange} placeholder="Product Manager" />
                {errors.jobTitle && <small className="signup-error">{errors.jobTitle}</small>}
              </label>
            </div>

            <div className="signup-grid two">
              <label className="signup-field">
                <span>Team size</span>
                <select name="teamSize" value={form.teamSize} onChange={onChange}>
                  <option value="">Select team size</option>
                  {teamSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                {errors.teamSize && <small className="signup-error">{errors.teamSize}</small>}
              </label>
              <label className="signup-field">
                <span>Country</span>
                <select name="country" value={form.country} onChange={onChange}>
                  <option value="">Select country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.country && <small className="signup-error">{errors.country}</small>}
              </label>
            </div>

            <label className="signup-field">
              <span>Phone number (optional)</span>
              <input name="phone" value={form.phone} onChange={onChange} placeholder="+1 555 000 1234" />
            </label>

            <label className="signup-check">
              <input name="marketingOptIn" type="checkbox" checked={form.marketingOptIn} onChange={onChange} />
              <span>Send me product updates and meeting productivity tips.</span>
            </label>

            <label className="signup-check">
              <input name="termsAccepted" type="checkbox" checked={form.termsAccepted} onChange={onChange} />
              <span>
                I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
              </span>
            </label>
            {errors.termsAccepted && <small className="signup-error">{errors.termsAccepted}</small>}

            <button className="signup-submit" type="submit">
              Create account
            </button>
            <p className="signup-legal">Protected by enterprise-grade encryption. You can request account deletion anytime.</p>
            {submitted && (
              <div className="signup-success">
                Account details look good. Next step: verify your email to activate the workspace.
                <a href="/verify-email"> Continue to verification</a>
              </div>
            )}
          </form>
        </section>
      </main>
    </div>
  )
}
