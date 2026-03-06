import './Settings.css'
import './SettingsNotification.css'

export default function SettingsNotification() {
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
            <a href="/settings/security">
              <span className="material-symbols-outlined">lock</span>
              Security
            </a>
            <a className="active" href="/settings/notification">
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
            <h1>Notification Settings</h1>
            <p>Curate your informational intake and delivery methods.</p>
          </header>

          <section className="settings-section">
            <h2>
              <span></span>Primary Channels
            </h2>
            <div className="notif-channel-list">
              <article className="notif-channel-card">
                <div className="notif-channel-info">
                  <div className="notif-icon-box">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h3>Email Digests</h3>
                    <p>A curated daily briefing sent directly to your inbox at 7:00 AM.</p>
                  </div>
                </div>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span></span>
                </label>
              </article>

              <article className="notif-channel-card">
                <div className="notif-channel-info">
                  <div className="notif-icon-box">
                    <span className="material-symbols-outlined">forum</span>
                  </div>
                  <div>
                    <h3>Slack Alerts</h3>
                    <p>Real-time breaking news notifications in your connected workspace.</p>
                  </div>
                </div>
                <label className="toggle">
                  <input type="checkbox" />
                  <span></span>
                </label>
              </article>

              <article className="notif-channel-card">
                <div className="notif-channel-info">
                  <div className="notif-icon-box">
                    <span className="material-symbols-outlined">auto_awesome</span>
                  </div>
                  <div>
                    <h3>Weekly Summary</h3>
                    <p>Comprehensive retrospective of market trends and global insights.</p>
                  </div>
                </div>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span></span>
                </label>
              </article>
            </div>
          </section>

          <section className="settings-section with-top">
            <h2>
              <span></span>Editorial Content
            </h2>
            <div className="notif-topic-grid">
              <label className="notif-topic-card">
                <div>
                  <span className="material-symbols-outlined">analytics</span>
                  <h4>Market Analysis</h4>
                  <p>Deep dives into quarterly reports and fiscal trends.</p>
                </div>
                <input type="checkbox" defaultChecked />
              </label>

              <label className="notif-topic-card">
                <div>
                  <span className="material-symbols-outlined">public</span>
                  <h4>Geopolitics</h4>
                  <p>Global affairs and international policy updates.</p>
                </div>
                <input type="checkbox" defaultChecked />
              </label>

              <label className="notif-topic-card">
                <div>
                  <span className="material-symbols-outlined">biotech</span>
                  <h4>Tech Frontiers</h4>
                  <p>Innovations in AI, biotech, and silicon.</p>
                </div>
                <input type="checkbox" />
              </label>

              <label className="notif-topic-card">
                <div>
                  <span className="material-symbols-outlined">theater_comedy</span>
                  <h4>Arts &amp; Culture</h4>
                  <p>Executive lifestyle and cultural curation.</p>
                </div>
                <input type="checkbox" />
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
        </div>
      </main>
    </div>
  )
}
