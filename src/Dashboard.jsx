import './Dashboard.css'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: '/dashboard', active: true },
  { id: 'schedule', label: 'Schedule', icon: 'calendar_today', href: '#' },
  { id: 'meetings', label: 'Meetings', icon: 'videocam', href: '/meetings' },
  { id: 'archive', label: 'Archive', icon: 'folder_open', href: '#' },
  { id: 'analytics', label: 'Analytics', icon: 'insights', href: '/analytics' },
]

const stats = [
  { label: 'Hours Saved', value: '24.5', delta: '+12%', tone: 'positive', accent: true },
  { label: 'Meetings Held', value: '12', delta: '+5%', tone: 'positive' },
  { label: 'Actions Completed', value: '48', delta: '-2%', tone: 'negative' },
]

const meetings = [
  {
    id: 'm1',
    title: 'Executive Board Sync',
    meta: '10:00 AM | 45m | 8 attendees',
    status: 'Ready',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBKStGGLBysRb0bAoGYqSAvfksWAtdZbZkBDLzhzVEwIuGGk2SReH7FbYIoNTpV5IbWAM1YKBg2nB3eWz4Kw9T5vyuVhl_bEmbtRY9IQxkn1smtGjzCEgtnSvnrQ40Q6_ZavqzCYFZskhBOqoIGaF3YFw7EvWg2oERVAji72MMCCl5wylFsqsJulHzn7TQbjpW2TBVRS5feQMePHFDm4iBe2RgNvSi_LsFfsVooHA7JGWSxZxKEj7HjBdInGTjTvbEn3MIuC_WO1jY',
  },
  {
    id: 'm2',
    title: 'Q4 Product Strategy',
    meta: 'Yesterday | 1h | 12 attendees',
    status: 'Processing',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA4Mpt-R1sLf4tzsHx0WLaU33JsRiR48jHjJI83dYfxBnAYuSh6JDkd1ikQNwdDjigD8n5ALRnXBmEIQu239ptZYC3vvsFSZ-eYMbBURfsd4qhDCUNP5oMTwvPmv0HUUTPbKAnlT7mDb4hlD8RCjLY-b_2NjuE4vYGePhoDSH-elOQHlColUvhmrgiR2QbZdlUi62hzyJrJw7fmb0wA9_KN0qtCUK_LqN9ojl2E3rV7wao21XJbALdKRhoUl7pP50ar-sOE0IfQCQQ',
  },
]

const actions = [
  { id: 'a1', text: 'Approve budget allocation for the London expansion', priority: 'High', due: '2h remaining', tone: 'high' },
  { id: 'a2', text: 'Review Q3 revenue summaries for board meeting', priority: 'Medium', due: 'Tomorrow', tone: 'medium' },
  { id: 'a3', text: 'Send follow-up email to design agency', priority: 'Low', due: 'Oct 28', tone: 'low' },
]

export default function Dashboard() {
  return (
    <div className="dash-page">
      <aside className="dash-sidebar">
        <div className="dash-sidebar-top">
          <a className="dash-brand-block" href="/" aria-label="Briefed home">
            <div>
              <div className="nav-logo">
                Brief<span>ed</span>
              </div>
              <p className="dash-brand-sub">AI Concierge</p>
            </div>
          </a>

          <nav className="dash-nav">
            {navItems.map((item) => (
              <a key={item.id} href={item.href} className={`dash-nav-item ${item.active ? 'active' : ''}`}>
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="dash-sidebar-bottom">
          <button className="dash-new-btn">New Meeting</button>
          <div className="dash-user">
            <div className="dash-avatar">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6ndaGeTU0YwVOxR4a_nG6iTKMKFiIVOuMT5eaa4MSsGxS05q33_-T6h6BF3FuPrYAzcVVZoJa1W9WNHtsAZknM9XKV0V5IlVRKuP7NtdL8xaLoxnpv5L8soUhgdPKkWtwEBDrs661mbZ_-oY7X972PEwlolIB3_EZeNbeqPr1Ng1j1HSYqqt07VRw4C0ut-RgLiXaFSK0lYtY_PHEVbhZx3VIJm9Axo1MoWmZuaESoggZFX7FFchOPypFhg9iKYcKE5hkwqx5baY"
                alt="Julianne"
              />
            </div>
            <div>
              <p>Julianne S.</p>
              <small>Pro Plan</small>
            </div>
            <span aria-label="Open settings" className="material-symbols-outlined">
              settings
            </span>
          </div>
        </div>
      </aside>

      <main className="dash-main">
        <header className="dash-header">
          <p>Wednesday, October 25th</p>
          <h1>Good Morning, Julianne</h1>
        </header>

        <section className="dash-stats">
          {stats.map((stat) => (
            <article key={stat.label} className="dash-stat-card">
              <p>{stat.label}</p>
              <div>
                <strong className={stat.accent ? 'accent' : ''}>{stat.value}</strong>
                <span className={stat.tone}>{stat.delta}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="dash-recent">
          <div className="dash-section-head">
            <h2>Recent Meetings</h2>
            <a href="#">View Library</a>
          </div>
          <div className="dash-meeting-grid">
            {meetings.map((meeting) => (
              <a key={meeting.id} className="dash-meeting-link" href="/meeting-details">
                <article className="dash-meeting-card">
                  <div className="dash-meeting-preview">
                    <img src={meeting.image} alt={meeting.title} />
                    <span className={`dash-badge ${meeting.status === 'Ready' ? 'ready' : ''}`}>{meeting.status}</span>
                  </div>
                  <div className="dash-meeting-body">
                    <h3>{meeting.title}</h3>
                    <p>
                      <span className="material-symbols-outlined">{meeting.status === 'Ready' ? 'schedule' : 'history'}</span>
                      {meeting.meta}
                    </p>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>
      </main>

      <aside className="dash-right">
        <h2>Outstanding Actions</h2>
        <div className="dash-actions">
          {actions.map((item) => (
            <article key={item.id} className={`dash-action ${item.tone}`}>
              <div className="dash-check" aria-hidden="true">
                <span className="material-symbols-outlined">check</span>
              </div>
              <div>
                <p>{item.text}</p>
                <small>
                  <span className={`dot ${item.tone}`}></span>
                  {item.priority} | {item.due}
                </small>
              </div>
            </article>
          ))}
        </div>

        <article className="dash-insight">
          <h3>Performance Insights</h3>
          <p>
            You have saved <strong>3.5 hours</strong> this week by automating meeting summaries. Focus time is up 14%.
          </p>
          <div className="dash-progress">
            <div className="dash-progress-head">
              <span>Efficiency Goal</span>
              <span>75%</span>
            </div>
            <div className="dash-track">
              <div className="dash-fill"></div>
            </div>
          </div>
        </article>
      </aside>
    </div>
  )
}
