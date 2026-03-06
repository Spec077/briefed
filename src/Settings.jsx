import './Settings.css'

export default function Settings() {
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
            <a className="active" href="/settings">
              <span className="material-symbols-outlined">person</span>
              Account Profile
            </a>
            <a href="/settings/security">
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
            <h1>Profile Settings</h1>
            <p>Manage your executive identity and regional interface preferences.</p>
          </header>

          <section className="settings-section">
            <h2>
              <span></span>Identity Details
            </h2>
            <div className="settings-identity">
              <div className="settings-avatar-wrap">
                <div className="settings-avatar-ring">
                  <div
                    className="settings-avatar"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYJKAcsPQCgdNmTTHCMaD9pnL3qw5S4ddt8TpcUtabX_Qc9bswF_B200c_rmJsDhaekG3OlIz78Lx6MyxxbHBD-CTBqudJIfDa66BrToYiiI0UQ5b5I_irZtvwsaZQcETpYl-TKSWatAWoUS79hgZbEX5Yj4t64PuqGqbEF5znFtgIC19msHO-XyO1EtCtowmfSHEz3H9X7c4DjHoIKBerZzs1GG03Ec--eicdWZ5TUc60bWvO_OROH3vn1o5IbqdQWsksnnjvS3Q')",
                    }}
                  ></div>
                </div>
                <button className="settings-avatar-btn" type="button" aria-label="Change profile photo">
                  <span className="material-symbols-outlined">photo_camera</span>
                </button>
              </div>

              <div className="settings-form-grid">
                <label>
                  <span>Given Name</span>
                  <input type="text" defaultValue="Alexander" />
                </label>
                <label>
                  <span>Surname</span>
                  <input type="text" defaultValue="Vance" />
                </label>
                <label className="full">
                  <span>Executive Title</span>
                  <input type="text" defaultValue="Editor-in-Chief & Strategy Director" />
                </label>
              </div>
            </div>
          </section>

          <section className="settings-section with-top">
            <h2>
              <span></span>Regional Preferences
            </h2>
            <div className="settings-form-grid">
              <label>
                <span>System Language</span>
                <div className="select-wrap">
                  <select defaultValue="en-gb">
                    <option value="en-gb">English (United Kingdom)</option>
                    <option value="en-us">English (United States)</option>
                    <option value="fr">French (Luxury Edition)</option>
                    <option value="de">Deutsch</option>
                    <option value="jp">Japanese</option>
                  </select>
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </label>

              <label>
                <span>Timezone</span>
                <div className="select-wrap">
                  <select defaultValue="est">
                    <option value="est">(GMT-05:00) Eastern Time (US & Canada)</option>
                    <option value="london">(GMT+00:00) London / Western Europe</option>
                    <option value="paris">(GMT+01:00) Paris / Berlin / Rome</option>
                    <option value="sg">(GMT+08:00) Hong Kong / Singapore</option>
                    <option value="tokyo">(GMT+09:00) Tokyo / Seoul</option>
                  </select>
                  <span className="material-symbols-outlined">schedule</span>
                </div>
              </label>

              <label>
                <span>Date Format</span>
                <div className="radio-row">
                  <label className="radio-card">
                    <input type="radio" name="date-format" defaultChecked />
                    <span>DD/MM/YYYY</span>
                  </label>
                  <label className="radio-card">
                    <input type="radio" name="date-format" />
                    <span>MM/DD/YYYY</span>
                  </label>
                </div>
              </label>

              <label>
                <span>Currency Interface</span>
                <div className="select-wrap">
                  <select defaultValue="usd">
                    <option value="usd">USD ($)</option>
                    <option value="gbp">GBP (GBP)</option>
                    <option value="eur">EUR (EUR)</option>
                    <option value="chf">CHF (Fr.)</option>
                    <option value="jpy">JPY (JPY)</option>
                  </select>
                  <span className="material-symbols-outlined">payments</span>
                </div>
              </label>
            </div>
          </section>

          <section className="settings-section with-top">
            <div className="settings-sync">
              <div className="settings-sync-left">
                <div className="settings-sync-icon">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3>Newsletter Digest Synchronization</h3>
                  <p>Sync your daily brief delivery with your local office hours.</p>
                </div>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span></span>
              </label>
            </div>
          </section>

          <div className="settings-actions">
            <button className="ghost" type="button">
              Discard Changes
            </button>
            <button className="primary" type="button">
              Save Preferences
            </button>
          </div>

          <footer className="settings-footer">
            <p>Briefed v0 | Secure Link Active</p>
          </footer>
        </div>
      </main>
    </div>
  )
}
