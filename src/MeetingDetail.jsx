import './Home.css'
import './MeetingDetail.css'

export default function MeetingDetail() {
  return (
    <div className="meeting-detail-page">
      <div className="app-window">
        <div className="window-bar">
          <div className="nav-logo">
            Brief<span>ed</span>
          </div>
          <a className="meeting-back-btn" href="/dashboard">
            Back to Dashboard
          </a>
        </div>

        <div className="app-layout">
          <div className="sidebar">
            <div className="sidebar-section">Workspace</div>
            <div className="sidebar-item active">
              <span className="icon">
                <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v3m0 12v3M3 12h3m12 0h3M12 7a5 5 0 100 10 5 5 0 000-10zm0 3a2 2 0 110 4 2 2 0 010-4z"></path>
                </svg>
              </span>
              Action Items <span className="badge">7</span>
            </div>
            <div className="sidebar-item">
              <span className="icon">
                <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 19a8 8 0 100-16 8 8 0 000 16zm10 2l-4.3-4.3"></path>
                </svg>
              </span>
              Search
            </div>
            <div className="sidebar-item">
              <span className="icon">
                <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20V10m6 10V4m6 16v-7m4 7H2"></path>
                </svg>
              </span>
              Analytics
            </div>

            <div className="sidebar-section">Recent Meetings</div>
            <div className="meeting-list no-pad">
              <div className="meeting-card active">
                <div className="meeting-dot meeting-green"></div>
                <div className="meeting-info">
                  <div className="meeting-name">Q4 Planning</div>
                  <div className="meeting-time">Today, 2:00 PM</div>
                </div>
              </div>
              <div className="meeting-card">
                <div className="meeting-dot meeting-blue"></div>
                <div className="meeting-info">
                  <div className="meeting-name">Design Review</div>
                  <div className="meeting-time">Yesterday</div>
                </div>
              </div>
              <div className="meeting-card">
                <div className="meeting-dot meeting-accent"></div>
                <div className="meeting-info">
                  <div className="meeting-name">Investor Call</div>
                  <div className="meeting-time">Feb 18</div>
                </div>
              </div>
              <div className="meeting-card">
                <div className="meeting-dot meeting-dim"></div>
                <div className="meeting-info">
                  <div className="meeting-name">1:1 Sarah / Mike</div>
                  <div className="meeting-time">Feb 17</div>
                </div>
              </div>
              <div className="meeting-card">
                <div className="meeting-dot meeting-dim"></div>
                <div className="meeting-info">
                  <div className="meeting-name">Sprint Retro</div>
                  <div className="meeting-time">Feb 14</div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-content">
            <div className="meeting-header">
              <div>
                <div className="meeting-title">Q4 Planning Session</div>
                <div className="meeting-meta">
                  <span className="meta-item">
                    <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22a10 10 0 100-20 10 10 0 000 20zm0-14v5l3 2"></path>
                    </svg>{' '}
                    58 min
                  </span>
                  <span className="meta-item">
                    <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2m16 0v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M12 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>{' '}
                    5 participants
                  </span>
                  <span className="meta-item">
                    <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 2v4m10-4v4M3 10h18M5 6h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"></path>
                    </svg>{' '}
                    Feb 21, 2026
                  </span>
                </div>
              </div>
              <div className="status-pill">Processed</div>
            </div>

            <div className="section-label">AI Summary</div>
            <div className="summary-box">
              The team aligned on <strong>Q4 revenue targets of $2.1M</strong>, a 40% increase over Q3. Key decisions: launch enterprise
              tier by Nov 1, hire 2 engineers in October, and sunset the legacy API by Dec 31. <strong>Sarah</strong> will own the
              go-to-market plan, <strong>Marcus</strong> leads technical migration. Budget allocation for marketing raised to $180K
              following strong conversion data from Q3 experiments.
            </div>

            <div className="section-label">Action Items</div>
            <div className="action-items">
              <div className="action-item">
                <div className="checkbox"></div>
                <span className="action-text">Draft enterprise pricing page copy</span>
                <span className="action-owner">Sarah</span>
                <span className="action-due urgent">Feb 23</span>
              </div>
              <div className="action-item done">
                <div className="checkbox">?</div>
                <span className="action-text">Set up staging environment for v2 API</span>
                <span className="action-owner">Marcus</span>
                <span className="action-due">Feb 25</span>
              </div>
              <div className="action-item">
                <div className="checkbox"></div>
                <span className="action-text">Send updated OKRs to leadership by EOD</span>
                <span className="action-owner">Jamie</span>
                <span className="action-due urgent">Today</span>
              </div>
              <div className="action-item">
                <div className="checkbox"></div>
                <span className="action-text">Post job descriptions for 2 engineering roles</span>
                <span className="action-owner">HR</span>
                <span className="action-due">Mar 1</span>
              </div>
              <div className="action-item">
                <div className="checkbox"></div>
                <span className="action-text">Finalize legacy API deprecation notice</span>
                <span className="action-owner">Marcus</span>
                <span className="action-due">Feb 28</span>
              </div>
            </div>

            <div className="section-label">Transcript Excerpt</div>
            <div className="transcript-section">
              <span className="timestamp">02:14</span>
              <span className="speaker">Sarah:</span> If we&apos;re going enterprise, we need the pricing page live by end of month, no
              exceptions.
              <br />
              <span className="timestamp">02:31</span>
              <span className="speaker">Marcus:</span> The API migration is blocking that. I can have staging ready by the 25th.
              <br />
              <span className="timestamp">03:15</span>
              <span className="speaker">Jamie:</span> What&apos;s the conversion rate target we&apos;re optimizing for at enterprise tier?
              <br />
              <span className="timestamp">03:22</span>
              <span className="speaker">Sarah:</span> We&apos;re aiming for 8%, based on the Q3 cohort data. That drives the $2.1M number.
              <br />
              <span className="timestamp">04:01</span>
              <span className="speaker">You:</span> Let&apos;s lock in the OKRs today so everyone can align their sprints. Jamie, can you
              own that?
            </div>
          </div>

          <div className="right-panel">
            <div className="panel-section">
              <div className="section-label">Participants</div>
              <div className="participants">
                <div className="participant">
                  <div className="avatar avatar-accent">S</div>
                  <div>
                    <div className="participant-name">Sarah K.</div>
                    <div className="participant-role">Head of Marketing</div>
                  </div>
                </div>
                <div className="participant">
                  <div className="avatar avatar-blue">M</div>
                  <div>
                    <div className="participant-name">Marcus T.</div>
                    <div className="participant-role">Lead Engineer</div>
                  </div>
                </div>
                <div className="participant">
                  <div className="avatar avatar-green">J</div>
                  <div>
                    <div className="participant-name">Jamie L.</div>
                    <div className="participant-role">Product Manager</div>
                  </div>
                </div>
                <div className="participant">
                  <div className="avatar avatar-red">R</div>
                  <div>
                    <div className="participant-name">Riley P.</div>
                    <div className="participant-role">Sales Lead</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-section">
              <div className="section-label">Meeting Sentiment</div>
              <div className="sentiment-bar-wrap">
                <div className="sentiment-label">
                  <span>Alignment</span>
                  <span>87%</span>
                </div>
                <div className="sentiment-bar">
                  <div className="sentiment-fill sentiment-green w87"></div>
                </div>
              </div>
              <div className="sentiment-bar-wrap">
                <div className="sentiment-label">
                  <span>Engagement</span>
                  <span>92%</span>
                </div>
                <div className="sentiment-bar">
                  <div className="sentiment-fill sentiment-blue w92"></div>
                </div>
              </div>
              <div className="sentiment-bar-wrap">
                <div className="sentiment-label">
                  <span>Positivity</span>
                  <span>74%</span>
                </div>
                <div className="sentiment-bar">
                  <div className="sentiment-fill sentiment-accent w74"></div>
                </div>
              </div>
            </div>

            <div className="panel-section">
              <div className="section-label">Key Insights</div>
              <div className="insight-card">
                <div className="insight-label">Decision</div>
                <div className="insight-value">Enterprise launch set for Nov 1, 2026</div>
              </div>
              <div className="insight-card">
                <div className="insight-label">Risk Flagged</div>
                <div className="insight-value insight-risk">API migration may delay pricing page</div>
              </div>
              <div className="insight-card">
                <div className="insight-label">Next Meeting</div>
                <div className="insight-value">Feb 28 - Migration review</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
