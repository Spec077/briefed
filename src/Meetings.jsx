import './Dashboard.css'
import './Meetings.css'

const meetingRows = [
  {
    title: 'Q4 Architecture Alignment',
    date: '2023-10-24',
    duration: '60m',
    participants: 'Alex, Sarah, and 2 others',
    avatars: ['A', 'S', '+2'],
    tone: 'slate',
  },
  {
    title: 'Editorial Design Sync',
    date: '2023-10-25',
    duration: '45m',
    participants: 'David, Elena',
    avatars: ['D', 'E'],
    tone: 'gold',
  },
  {
    title: 'Market Expansion Strategy',
    date: '2023-10-26',
    duration: '30m',
    participants: 'Executive Team (8)',
    avatars: [],
    tone: 'tag',
  },
  {
    title: 'New Client: Vanguard Group',
    date: '2023-10-26',
    duration: '90m',
    participants: 'Michael, Sofia',
    avatars: ['M', 'S'],
    tone: 'dark',
  },
]

export default function Meetings() {
  return (
    <div className="meetings-page">
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
            <a href="/dashboard" className="dash-nav-item">
              <span className="material-symbols-outlined">dashboard</span>
              <span>Dashboard</span>
            </a>
            <a href="#" className="dash-nav-item">
              <span className="material-symbols-outlined">calendar_today</span>
              <span>Schedule</span>
            </a>
            <a href="/meetings" className="dash-nav-item active">
              <span className="material-symbols-outlined">videocam</span>
              <span>Meetings</span>
            </a>
            <a href="#" className="dash-nav-item">
              <span className="material-symbols-outlined">folder_open</span>
              <span>Archive</span>
            </a>
            <a href="/analytics" className="dash-nav-item">
              <span className="material-symbols-outlined">insights</span>
              <span>Analytics</span>
            </a>
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

      <div className="meetings-content">
        <main className="meetings-main">
          <section className="meetings-hero">
            <div>
              <h1>Your Meetings</h1>
              <p>Archive of strategic discussions and historical records.</p>
            </div>
            <button className="meetings-cta">
              <span className="material-symbols-outlined">add</span>
              <span>Schedule Meeting</span>
            </button>
          </section>

          <section className="meetings-filters">
            <div className="meetings-filter-left">
              <span className="meetings-label">Filter by:</span>
              <button className="meetings-filter-btn">
                Date Range <span className="material-symbols-outlined">keyboard_arrow_down</span>
              </button>
              <button className="meetings-filter-btn">
                Participant <span className="material-symbols-outlined">keyboard_arrow_down</span>
              </button>
              <button className="meetings-filter-btn">
                Category <span className="material-symbols-outlined">keyboard_arrow_down</span>
              </button>
            </div>
            <div className="meetings-filter-right">
              <span className="meetings-label">Sort by:</span>
              <button className="meetings-filter-btn">
                Most Recent <span className="material-symbols-outlined">sort</span>
              </button>
            </div>
          </section>

          <section className="meetings-table-wrap">
            <table className="meetings-table">
              <thead>
                <tr>
                  <th>Meeting Title</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>Participants</th>
                  <th aria-label="Actions"></th>
                </tr>
              </thead>
              <tbody>
                {meetingRows.map((row) => (
                  <tr key={`${row.title}-${row.date}`}>
                    <td className="meeting-title-cell">{row.title}</td>
                    <td className="meeting-date-cell">{row.date}</td>
                    <td>
                      <span className="meeting-duration">{row.duration}</span>
                    </td>
                    <td>
                      {row.tone === 'tag' ? (
                        <span className="meeting-team-tag">{row.participants}</span>
                      ) : (
                        <div className="meeting-participants">
                          <div className={`meeting-avatars ${row.tone}`}>
                            {row.avatars.map((avatar) => (
                              <span key={`${row.title}-${avatar}`} className="meeting-avatar">
                                {avatar}
                              </span>
                            ))}
                          </div>
                          <span className="meeting-participants-text">{row.participants}</span>
                        </div>
                      )}
                    </td>
                    <td className="meeting-arrow-cell">
                      <a href="/meeting-details" aria-label={`Open ${row.title}`}>
                        <span className="material-symbols-outlined">chevron_right</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="meetings-pagination">
            <span>Displaying 1-4 of 24 archived sessions</span>
            <div className="meetings-pages">
              <button aria-label="Previous page">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <span className="ellipsis">...</span>
              <button>6</button>
              <button aria-label="Next page">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </section>
        </main>

        <footer className="meetings-footer">
          <div className="meetings-footer-brand">
            <span className="material-symbols-outlined">auto_stories</span>
            <span>Briefed</span>
          </div>
          <div className="meetings-footer-links">
            <a href="#">Documentation</a>
            <a href="#">System Status</a>
            <a href="#">Privacy & Terms</a>
          </div>
          <div className="meetings-footer-copy">© 2026 v0</div>
        </footer>
      </div>
    </div>
  )
}
