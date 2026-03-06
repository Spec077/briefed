import './NotFound.css'

export default function NotFound() {
  return (
    <div className="nf-page">
      <header className="nf-topbar">
        <div className="nf-brand">
          <div class="nav-logo">Brief<span>ed</span></div>
        </div>
        <div className="nf-top-actions">
          <nav className="nf-top-nav">
            {/* <a href="#">Intelligence</a> */}
            {/* <a href="/meetings">Archive</a> */}
            {/* <a href="/dashboard">Workspace</a> */}
          </nav>
          <button type="button" className="nf-user-btn" aria-label="User profile">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </header>

      <main className="nf-main">
        <div className="nf-glow"></div>
        <div className="nf-center">
          <div className="nf-hero-code">404</div>
          <div className="nf-hero-copy">
            <h1>
              Lost in the <em>Archive</em>
            </h1>
            <p>The briefing you are looking for has been moved or does not exist. Let&apos;s get you back to your workspace.</p>
            {/* <div className="nf-cta-row">
              <a className="nf-btn nf-btn-primary" href="/meetings">
                Search Archive
              </a>
            </div> */}
          </div>
        </div>

        <div className="nf-artifact-wrap">
          <div className="nf-line"></div>
          <div className="nf-artifact-card">
            <div className="nf-artifact">
              <span className="material-symbols-outlined">inventory_2</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="nf-footer">
        <div>© 2026 Briefed AI</div>
        <div className="nf-footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Security</a>
          <a href="#">Support</a>
        </div>
      </footer>
    </div>
  )
}
