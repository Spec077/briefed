import './MeetingDetails.css'
import './Dashboard.css'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: '/dashboard' },
  { id: 'schedule', label: 'Schedule', icon: 'calendar_today', href: '#' },
  { id: 'meetings', label: 'Meetings', icon: 'videocam', href: '/meetings', active: true },
  { id: 'archive', label: 'Archive', icon: 'folder_open', href: '#' },
  { id: 'analytics', label: 'Analytics', icon: 'insights', href: '/analytics' },
]

export default function MeetingDetails() {
  return (
    <div className="md-page">
      <div className="md-shell">
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

        <main className="md-main">
          <section className="md-center">
            <header className="md-header">
              <div className="md-breadcrumb">
                <a href="/dashboard">Meetings</a>
                <span className="material-symbols-outlined">chevron_right</span>
                <span>Strategy Sync</span>
              </div>
              <h1>
                Q4 Global Retail <br />
                <em>Expansion Strategy</em>
              </h1>
              <div className="md-meta">
                <div>
                  <span className="material-symbols-outlined">schedule</span>
                  Oct 24, 2023 | 10:00 AM
                </div>
                <div>
                  <span className="material-symbols-outlined">group</span>8 Participants
                </div>
              </div>
            </header>

            <div className="md-tabs">
              <button className="active">Summary</button>
              <button>Transcript</button>
              <button>Notes</button>
            </div>

            <article className="md-overview">
              <h3>Executive Overview</h3>
              <p>
                The meeting centered on finalizing the luxury retail footprint in Southeast Asia for Q4. Discussion moved from
                logistical challenges in Singapore to the emerging high-net-worth demographic in Vietnam.
              </p>
            </article>

            <section className="md-grid">
              <div className="md-key">
                <h4>
                  <span className="material-symbols-outlined">radio_button_checked</span>
                  Key Talking Points
                </h4>
                <ul>
                  <li>
                    <span>01</span>
                    <p>
                      <strong>Supply Chain Optimization:</strong> Shifting the regional hub from Hong Kong to Singapore to reduce tariffs
                      by 12%.
                    </p>
                  </li>
                  <li>
                    <span>02</span>
                    <p>
                      <strong>Bespoke Experiences:</strong> Implementing VIP-only salons in the Hanoi flagship location.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="md-sentiment">
                <h4>
                  <span className="material-symbols-outlined">trending_up</span>
                  Market Sentiment
                </h4>
                <div className="md-bars">
                  <span style={{ height: '40%' }}></span>
                  <span style={{ height: '60%' }}></span>
                  <span style={{ height: '85%' }}></span>
                  <span style={{ height: '75%' }}></span>
                  <span style={{ height: '90%' }}></span>
                </div>
              </div>
            </section>

            <section className="md-transcript">
              <h3>Transcript</h3>
              <div className="md-line">
                <span className="time">04:12</span>
                <div>
                  <span className="speaker accent">Alexandra Vance</span>
                  <p>
                    &quot;The data from the previous quarter suggests a 22% increase in appetite for limited-edition horology pieces in
                    the Thai market. We need to ensure the allocations reflect this trend before the official Q4 launch.&quot;
                  </p>
                </div>
              </div>
              <div className="md-line">
                <span className="time">05:45</span>
                <div>
                  <span className="speaker">Marcus Chen</span>
                  <p>
                    &quot;Agreed. Logistics has already cleared the additional insurance bonds for high-value transshipments through
                    Changi. We are ready on the operational front.&quot;
                  </p>
                </div>
              </div>
              <div className="md-line">
                <span className="time">07:22</span>
                <div>
                  <span className="speaker accent">Alexandra Vance</span>
                  <p>
                    &quot;Excellent. Let&apos;s pivot to the customer journey mapping for the new &apos;Briefed&apos; private concierge app
                    module.&quot;
                  </p>
                </div>
              </div>
            </section>
          </section>

          <section className="md-right">
            <div className="md-panel">
              <div className="md-panel-head">
                <h3>Action Items</h3>
                <span>4</span>
              </div>
              <div className="md-task">
                <span className="material-symbols-outlined">radio_button_unchecked</span>
                <div>
                  <p>Confirm Changi Warehouse</p>
                  <small>Marcus Chen</small>
                </div>
              </div>
              <div className="md-task done">
                <span className="material-symbols-outlined">check_circle</span>
                <div>
                  <p>Finalize Hanoi Floorplans</p>
                  <small>Sarah Jenkins</small>
                </div>
              </div>
              <button className="md-task-add">+ New Task</button>
            </div>

            <div className="md-panel">
              <h3>AI Intelligence</h3>
              <div className="md-intel">
                <div>
                  <p>Key Insight</p>
                  <small>&quot;Hyper-Personalization&quot; mentioned 14x - potential core Q4 pillar.</small>
                </div>
                <div>
                  <p>Risk Level: Medium</p>
                  <small>Logistics timing for Hanoi remains the highest risk factor. Recommend buffer.</small>
                </div>
              </div>
            </div>

            <div className="md-panel">
              <div className="md-panel-head">
                <h3>Artifacts</h3>
                <button>View all</button>
              </div>
              <div className="md-file">
                <span className="material-symbols-outlined red">picture_as_pdf</span>
                <div>
                  <p>SEA_Strategy_v3.pdf</p>
                  <small>2.4MB | Oct 24</small>
                </div>
              </div>
              <div className="md-file">
                <span className="material-symbols-outlined green">description</span>
                <div>
                  <p>Regional_KPIs.xlsx</p>
                  <small>1.1MB | Oct 24</small>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
