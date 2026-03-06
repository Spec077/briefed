import './Dashboard.css'
import './Analytics.css'

const stats = [
  { label: 'Total Meetings', value: '1,284', delta: '+12.5% vs LW', trend: 'up', icon: 'calendar_today' },
  { label: 'Avg. Duration', value: '42m', delta: '-4.2% vs LW', trend: 'down', icon: 'schedule' },
  { label: 'Sentiment Score', value: '8.2/10', delta: '+0.4 pts', trend: 'up', icon: 'mood' },
  { label: 'Action Items', value: '342', delta: 'Stable', trend: 'flat', icon: 'task_alt' },
]

const reports = [
  {
    topic: 'Q3 Product Roadmap Review',
    tag: 'Internal',
    duration: '45m duration',
    sentiment: 85,
    score: '8.5',
    items: 12,
    date: 'Oct 24, 2023',
    participants: ['SC', 'MT', '+4'],
  },
  {
    topic: 'Design System Architecture',
    tag: 'Technical',
    duration: '1h 20m duration',
    sentiment: 65,
    score: '6.8',
    items: 5,
    date: 'Oct 23, 2023',
    participants: ['EK', 'JP'],
  },
]

export default function Analytics() {
  return (
    <div className="analytics-page">
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
            <a href="/meetings" className="dash-nav-item">
              <span className="material-symbols-outlined">videocam</span>
              <span>Meetings</span>
            </a>
            <a href="#" className="dash-nav-item">
              <span className="material-symbols-outlined">folder_open</span>
              <span>Archive</span>
            </a>
            <a href="/analytics" className="dash-nav-item active">
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

      <main className="analytics-main">
        <section className="analytics-head">
          <div>
            <h1>Insights & Trends</h1>
            <p>Deep dive into your team&apos;s communication patterns and behavioral metrics.</p>
          </div>
          <div className="analytics-range">
            <button className="active">Last 7 Days</button>
            <button>30 Days</button>
            <button>Quarterly</button>
            <button className="icon-only" aria-label="Calendar">
              <span className="material-symbols-outlined">calendar_month</span>
            </button>
          </div>
        </section>

        <section className="analytics-stats">
          {stats.map((item) => (
            <article key={item.label} className="analytics-stat-card">
              <div className="analytics-stat-top">
                <p>{item.label}</p>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3>{item.value}</h3>
              <div className={`analytics-delta ${item.trend}`}>
                <span className="material-symbols-outlined">
                  {item.trend === 'up' ? 'trending_up' : item.trend === 'down' ? 'trending_down' : 'horizontal_rule'}
                </span>
                <span>{item.delta}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="analytics-grid">
          <article className="analytics-card">
            <div className="analytics-card-head">
              <h4>Meeting Volume</h4>
              <span className="material-symbols-outlined">more_horiz</span>
            </div>
            <div className="volume-bars">
              <span style={{ height: '30%' }}></span>
              <span style={{ height: '45%' }}></span>
              <span style={{ height: '85%' }}></span>
              <span style={{ height: '60%' }}></span>
              <span style={{ height: '95%' }}></span>
              <span style={{ height: '15%' }}></span>
              <span style={{ height: '10%' }}></span>
            </div>
            <div className="volume-labels">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </article>

          <article className="analytics-card">
            <div className="analytics-card-head">
              <h4>Sentiment Analysis</h4>
              <span className="material-symbols-outlined">info</span>
            </div>
            <div className="sentiment-grid">
              {Array.from({ length: 24 }).map((_, idx) => (
                <span key={idx} className={`tone tone-${(idx % 6) + 1}`}></span>
              ))}
            </div>
            <div className="sentiment-scale">
              <span>Low Focus</span>
              <div></div>
              <span>High Sentiment</span>
            </div>
          </article>

          <article className="analytics-card">
            <div className="analytics-card-head">
              <h4>Talk Time Distribution</h4>
              <span className="material-symbols-outlined">donut_large</span>
            </div>
            <div className="talk-wrap">
              <div className="talk-ring">
                <svg viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" className="track" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" className="manager" />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    className="team"
                  />
                </svg>
                <div className="ring-center">
                  <strong>60%</strong>
                  <span>Leader</span>
                </div>
              </div>
              <div className="talk-legend">
                <div>
                  <span className="dot manager"></span>
                  <label>Manager</label>
                  <strong>60%</strong>
                </div>
                <div>
                  <span className="dot team"></span>
                  <label>Team</label>
                  <strong>25%</strong>
                </div>
                <div>
                  <span className="dot quiet"></span>
                  <label>Quiet</label>
                  <strong>15%</strong>
                </div>
              </div>
            </div>
          </article>

          <article className="analytics-card">
            <div className="analytics-card-head">
              <h4>Most Active Collaborators</h4>
              <a href="#">View All</a>
            </div>
            <div className="collab-list">
              <div className="collab-row">
                <div className="person">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCEzqgL8jLSPMpa7riBStRp7Ao5tbvDevLQyCsvZ2GfamaiDC4BvUVYlmW6lxu7mlxskK6l6LRwgkPt0xBmtJ4Xgy1v2cCnTauWdqza9WHmJ2p2cODTBsGQxRM0gPm4BhAWqisIGVK8Gc0WJd_qo6P9BgItvzPVJDSQW_otjYg3sZNIWlcEeqMlaSz0XnEGHoQks4HUHwi0avKFPrL-6RYDSt2vH7uEl04gcyBjK0ttNvfDOCQo4ckJtX0IzVa5E_cYAq7oV3NyfI"
                    alt="Sarah Chen"
                  />
                  <div>
                    <p>Sarah Chen</p>
                    <small>Design Lead</small>
                  </div>
                </div>
                <div className="hours">
                  <p>12.4h</p>
                  <small>+16%</small>
                </div>
              </div>
              <div className="collab-row">
                <div className="person">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjpD0XcWocPneddffCuVYLSFLDGE5-wyvVoiGarrhyn8sfB81vVD57VXTX___DW1SqUwb3DpP9KFMnj_DiswApWFOvMNYjMzhuO7EbVMySrKdc_5T1RdJV9slvTCodMDrzvyw0igILhYr9hOtw7_kojcHWafBZzMCaIaIhNKwjPGZikTiSB5oCeu_YSlPS1UPNSxNcHdoK1nDx2uDsOZ5s2NloXxAqj_1Krre2Ned_u_eH6pq_0Qk2RSXKbeMQhraM6xs0_c8_v6c"
                    alt="Marcus Thorne"
                  />
                  <div>
                    <p>Marcus Thorne</p>
                    <small>Product Manager</small>
                  </div>
                </div>
                <div className="hours">
                  <p>10.8h</p>
                  <small>+12%</small>
                </div>
              </div>
              <div className="collab-row">
                <div className="person">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPxiZVSBUsHdxwotqcUOxGiKE1n1vX3CIWmTuxtDTgsyEvNK9MBt26WGLabHQ02KFwWAqZGCtQbTEz2jduhArZXjkmXV1Ui3DANssq4l3lJoYWeGOEPwi-WvsC4iwGIfu5bnC0hdOuRNM8SincZbXvyFJzp6SY0PU4yMFvfVFqsWuGTd7dYbpIfouRtWrwxdwqd73-_FJmoeOlU5_hlGOm1gce4Z9FQg_zQz3PxEGs2h8KI3LZPoPvV-RFo748MCwjj3mmWJ6VR-4"
                    alt="Dr Elena Kostic"
                  />
                  <div>
                    <p>Dr. Elena Kostic</p>
                    <small>VP Research</small>
                  </div>
                </div>
                <div className="hours">
                  <p>9.1h</p>
                  <small>On Target</small>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="analytics-table-card">
          <div className="table-head">
            <h4>Recent Meeting Deep-Dives</h4>
            <button>
              <span className="material-symbols-outlined">filter_list</span>
              Filter Reports
            </button>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Meeting Topic</th>
                  <th>Participants</th>
                  <th>Sentiment</th>
                  <th>Action Items</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((row) => (
                  <tr key={row.topic}>
                    <td>
                      <div className="topic">
                        <span>{row.topic}</span>
                        <small>
                          <em>{row.tag}</em> | {row.duration}
                        </small>
                      </div>
                    </td>
                    <td>
                      <div className="chips">
                        {row.participants.map((p) => (
                          <span key={`${row.topic}-${p}`}>{p}</span>
                        ))}
                      </div>
                    </td>
                    <td>
                      <div className="score">
                        <div className="bar">
                          <i style={{ width: `${row.sentiment}%` }}></i>
                        </div>
                        <strong>{row.score}</strong>
                      </div>
                    </td>
                    <td>
                      <b>{row.items}</b>
                    </td>
                    <td>{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
