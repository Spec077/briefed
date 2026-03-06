import './Settings.css'
import './SettingsSecurity.css'

export default function SettingsSecurity() {
  return (
    <div className="settings-page">
      <aside className="settings-sidebar">
        <div className="settings-sidebar-top">
          <div className="settings-logo-row">
            <div className="settings-logo-copy">
              <div className="nav-logo">
                Brief<span>ed</span>
              </div>
            </div>
          </div>

          <nav className="settings-nav">
            <a href="/dashboard">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </a>
            <div className="settings-divider"></div>
             <a href="/settings">
              <span className="material-symbols-outlined">person</span>
              Account Profile
            </a>
            <a className="active" href="/settings/security">
              <span className="material-symbols-outlined">lock</span>
              Security
            </a>
            <a href="/settings/notification">
              <span className="material-symbols-outlined">notifications</span>
              Notifications
            </a>
            <a href="/settings/billing">
              <span className="material-symbols-outlined">payments</span>
              Billing
            </a>
          </nav>
        </div>

        <div className="settings-sidebar-bottom">
          <a href="#">
            <span className="material-symbols-outlined">code</span>
            Developer Support
          </a>
          <button type="button">
            <span className="material-symbols-outlined">logout</span>
            Sign Out
          </button>
        </div>
      </aside>

      <main className="settings-main">
        <div className="settings-shell">
          <header className="settings-header">
            <h1>Security Settings</h1>
            <p>Control account protection, access policies, and session security.</p>
          </header>

          <section className="settings-section">
            <h2>
              <span></span>Authentication
            </h2>
            <div className="sec-card">
              <div className="sec-row">
                <div>
                  <h3>Two-Factor Authentication</h3>
                  <p>Require a verification code when signing in.</p>
                </div>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span></span>
                </label>
              </div>
              <div className="sec-row">
                <div>
                  <h3>Biometric Login</h3>
                  <p>Allow Face ID / fingerprint on supported devices.</p>
                </div>
                <label className="toggle">
                  <input type="checkbox" />
                  <span></span>
                </label>
              </div>
            </div>
          </section>

          <section className="settings-section with-top">
            <h2>
              <span></span>Password & Recovery
            </h2>
            <div className="settings-form-grid">
              <label>
                <span>Current Password</span>
                <input type="password" placeholder="••••••••" />
              </label>
              <label>
                <span>New Password</span>
                <input type="password" placeholder="••••••••" />
              </label>
              <label className="full">
                <span>Recovery Email</span>
                <input type="email" defaultValue="alexander.vance@briefed.com" />
              </label>
            </div>
          </section>

          <section className="settings-section with-top">
            <h2>
              <span></span>Active Sessions
            </h2>
            <div className="sec-card">
              <div className="session-row">
                <div>
                  <strong>MacBook Pro · Lagos</strong>
                  <p>Current session · Chrome · Last active now</p>
                </div>
                <span className="pill">Current</span>
              </div>
              <div className="session-row">
                <div>
                  <strong>iPhone 15 · London</strong>
                  <p>Safari · Last active 2 hours ago</p>
                </div>
                <button className="danger-btn" type="button">
                  Revoke
                </button>
              </div>
            </div>
          </section>

          <div className="settings-actions">
            <button className="ghost" type="button">
              Cancel
            </button>
            <button className="primary" type="button">
              Save Security Settings
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
