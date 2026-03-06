import './Settings.css'
import './SettingsBilling.css'

const invoices = [
  { date: 'Sep 12, 2023', description: 'Professional Plan (Annual)', amount: '$1,068.00' },
  { date: 'Aug 12, 2023', description: 'Extra Storage Add-on', amount: '$15.00' },
  { date: 'Jul 12, 2023', description: 'Professional Plan (Annual)', amount: '$1,068.00' },
]

export default function SettingsBilling() {
  return (
    <div className="settings-page">
      <aside className="settings-sidebar">
        <div className="settings-sidebar-top">
          <div className="settings-logo-row">
            <div className="settings-logo-copy">
              <div className="nav-logo">
                Brief<span>ed</span>
              </div>
              <p>Executive Edition</p>
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
            <a href="/settings/notification">
              <span className="material-symbols-outlined">notifications</span>
              Notifications
            </a>
            <a className="active" href="/settings/billing">
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
        <div className="settings-shell billing-shell">
          <header className="settings-header">
            <h1>Account Billing</h1>
            <p>Manage your premium subscription, monitor AI computational usage, and access your editorial invoice history.</p>
          </header>

          <div className="billing-grid">
            <div className="billing-main-col">
              <section className="bill-card">
                <div className="bill-plan">
                  <div className="bill-plan-media">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT13kJD5fv1_Tc-Z272PvzeHqleRnwdCN0YLacNlScbPJQrmjVbZ51C3cZ1W03y78gTdJgalE8LSEboPkargiNuzlNkodrfd__lHNd5K6BV4_nNzMlr83gn8OZL0gHono8YaG17wVbBsh5brXQ7jmpIV3WAymthqiCHeofhr4PSnSHHOqdVqOeS53nZqwMF5q3fZWlP0FJFefkPq3vgwXXw4tVLIbqVUJDHx25LimfwYDR17nxUnr3FNIDIuSYFaQ3oHelM8G6oo0"
                      alt="Premium tier"
                    />
                    <span>Active</span>
                  </div>
                  <div className="bill-plan-copy">
                    <p>Current Membership</p>
                    <h3>Editorial Professional</h3>
                    <div className="bill-price">
                      <strong>$89</strong>
                      <span>/ month, billed annually</span>
                    </div>
                    <div className="bill-plan-actions">
                      <button className="primary" type="button">
                        Upgrade Plan
                      </button>
                      <button className="ghost" type="button">
                        Manage Payment
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bill-card-foot">
                  <span>
                    Next renewal: <strong>October 12, 2024</strong>
                  </span>
                  <a href="#">Cancel subscription</a>
                </div>
              </section>

              <section className="bill-card">
                <h3>Usage & Resource Allocation</h3>
                <div className="usage-group">
                  <div className="usage-head">
                    <div>
                      <p>AI Manuscript Summaries</p>
                      <small>Deep linguistic analysis credits</small>
                    </div>
                    <div>
                      <strong>1,842</strong> <span>/ 2,500</span>
                    </div>
                  </div>
                  <div className="usage-track">
                    <i style={{ width: '73.6%' }}></i>
                  </div>
                </div>

                <div className="usage-group">
                  <div className="usage-head">
                    <div>
                      <p>Monthly Research Storage</p>
                      <small>High-fidelity archival space</small>
                    </div>
                    <div>
                      <strong>14.2 GB</strong> <span>/ 25 GB</span>
                    </div>
                  </div>
                  <div className="usage-track">
                    <i style={{ width: '56.8%' }} className="soft"></i>
                  </div>
                </div>
              </section>

              <section className="bill-card invoice-card">
                <div className="invoice-head">
                  <h3>Invoice History</h3>
                </div>
                <div className="invoice-table-wrap">
                  <table className="invoice-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Receipt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((item) => (
                        <tr key={`${item.date}-${item.description}`}>
                          <td>{item.date}</td>
                          <td>{item.description}</td>
                          <td>{item.amount}</td>
                          <td>
                            <button type="button" aria-label={`Download ${item.date} invoice`}>
                              <span className="material-symbols-outlined">download</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            <aside className="billing-side-col">
              <section className="bill-card accent">
                <span className="material-symbols-outlined">diamond</span>
                <h4>Enterprise Solutions</h4>
                <p>
                  Need dedicated API nodes, white-label summaries, or team-wide licensing? Our bespoke plans are tailored for major
                  publications.
                </p>
                <button type="button">Contact Relations</button>
              </section>

              <section className="bill-card">
                <h4>Support & Consultation</h4>
                <div className="support-links">
                  <a href="#">
                    <span className="material-symbols-outlined">help</span>
                    Billing FAQ
                  </a>
                  <a href="#">
                    <span className="material-symbols-outlined">mail</span>
                    Email Concierge
                  </a>
                  <a href="#">
                    <span className="material-symbols-outlined">history_edu</span>
                    Subscription Terms
                  </a>
                </div>
              </section>

              <section className="bill-card member-since">
                <p>Member Since</p>
                <strong>February 2021</strong>
              </section>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}
