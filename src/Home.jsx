import { useEffect, useMemo, useRef, useState } from 'react'
import './Home.css'

const initialActions = [
  { id: 1, text: 'Draft enterprise pricing page copy', owner: 'Sarah', due: 'Feb 23', urgent: true, done: false },
  { id: 2, text: 'Set up staging environment for v2 API', owner: 'Marcus', due: 'Feb 25', urgent: false, done: true },
  { id: 3, text: 'Send updated OKRs to leadership by EOD', owner: 'Jamie', due: 'Today', urgent: true, done: false },
  { id: 4, text: 'Post job descriptions for 2 engineering roles', owner: 'HR', due: 'Mar 1', urgent: false, done: false },
  { id: 5, text: 'Finalize legacy API deprecation notice', owner: 'Marcus', due: 'Feb 28', urgent: false, done: false },
]

const statsMeta = [
  { val: 4.2, suffix: 'K', label: 'Teams using Briefed' },
  { val: 98, suffix: '%', label: 'Transcription accuracy' },
  { val: 3.2, suffix: 'h', label: 'Saved per person/week' },
  { val: 0, suffix: '', label: 'To get started' },
]

const features = [
  {
    icon: 'mic',
    title: 'Live Transcription',
    text: 'Real-time, speaker-identified transcription across Zoom, Google Meet, Teams, and phone calls. 98% accurate, 40+ languages.',
  },
  {
    icon: 'bolt',
    title: 'Instant Summaries',
    text: "AI-generated summaries in seconds - not paragraphs of noise. Just what was decided, what matters, and what's next.",
  },
  {
    icon: 'check-square',
    title: 'Action Item Extraction',
    text: `Every "I'll handle that" automatically becomes a tracked action item, assigned to the right person with a due date.`,
  },
  {
    icon: 'plug',
    title: 'Deep Integrations',
    text: 'Push action items to Linear, Jira, Notion, Asana, or Slack - automatically, without copy-pasting.',
  },
  {
    icon: 'chart',
    title: 'Meeting Analytics',
    text: 'See who talks most, meeting sentiment trends, how aligned your team actually is, and where time gets wasted.',
  },
  {
    icon: 'shield',
    title: 'Enterprise Security',
    text: 'SOC 2 Type II, GDPR compliant, zero retention option, SSO, and full audit logs. Your conversations stay yours.',
  },
]

const socialProofLogos = [
  { name: 'Vercel', slug: 'vercel' },
  { name: 'Linear', slug: 'linear' },
  { name: 'Stripe', slug: 'stripe' },
  { name: 'Notion', slug: 'notion' },
  { name: 'Shopify', slug: 'shopify' },
  { name: 'Figma', slug: 'figma' },
]

const testimonials = [
  {
    quote: 'Briefed saves me at least 3 hours every week. I walk out of calls with decisions and owners already documented.',
    name: 'Amina Yusuf',
    role: 'Product Lead, Northstar Labs',
    photo: 'AY',
  },
  {
    quote:
      'We stopped losing action items between Slack threads and meeting docs. Follow-through improved in the first two weeks.',
    name: 'Daniel Reeves',
    role: 'Engineering Manager, Stately',
    photo: 'DR',
  },
  {
    quote:
      'The summary quality is shockingly good. I send one recap instead of writing a separate status update for every stakeholder.',
    name: 'Priya Nair',
    role: 'Operations Director, Beacon Health',
    photo: 'PN',
  },
]

const faqs = [
  {
    question: 'Does Briefed record without consent?',
    answer:
      'No. Briefed only joins meetings when explicitly invited and provides a visible participant label. Admins can enforce consent notices by default.',
  },
  {
    question: 'What happens to my audio data?',
    answer:
      'Audio is encrypted in transit and at rest. You can configure retention windows, and enterprise workspaces can enable zero-retention processing.',
  },
  {
    question: 'Does it work with phone calls?',
    answer:
      'Yes. Briefed supports dial-in meetings and phone calls through supported conferencing bridges, with the same summary and action-item workflow.',
  },
  {
    question: 'Which meeting platforms are supported?',
    answer: 'Zoom, Google Meet, and Microsoft Teams are supported out of the box, with calendar-based auto-join options.',
  },
  {
    question: 'Can we push action items to our existing tools?',
    answer: 'Yes. You can sync to Linear, Jira, Notion, Asana, and Slack so tasks flow into your current systems automatically.',
  },
  {
    question: 'How accurate are transcripts and summaries?',
    answer:
      'Transcription quality depends on audio quality and accents, but most teams see high accuracy. Summaries are editable before sharing.',
  },
  {
    question: 'Is there an admin view for compliance?',
    answer:
      'Yes. Admins get workspace controls, audit logs, access policies, and export options for security and compliance workflows.',
  },
  {
    question: 'Can we try it before committing?',
    answer: 'Yes. Start on the free plan, then run a 14-day Pro trial when your team is ready.',
  },
]

function Icon({ name, className = '' }) {
  const icons = {
    target: (
      <path d="M12 3v3m0 12v3M3 12h3m12 0h3M12 7a5 5 0 100 10 5 5 0 000-10zm0 3a2 2 0 110 4 2 2 0 010-4z" />
    ),
    calendar: <path d="M7 3v3m10-3v3M4 9h16M5 6h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1z" />,
    search: <path d="M11 19a8 8 0 100-16 8 8 0 000 16zm10 2l-4.3-4.3" />,
    chart: <path d="M4 20V10m6 10V4m6 16v-7m4 7H2" />,
    clock: <path d="M12 22a10 10 0 100-20 10 10 0 000 20zm0-14v5l3 2" />,
    users: <path d="M16 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2m16 0v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M12 7a4 4 0 11-8 0 4 4 0 018 0z" />,
    date: <path d="M7 2v4m10-4v4M3 10h18M5 6h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />,
    mic: <path d="M12 3a3 3 0 00-3 3v5a3 3 0 006 0V6a3 3 0 00-3-3zm-7 8a7 7 0 0014 0m-7 7v3m-4 0h8" />,
    bolt: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
    'check-square': <path d="M9 11l2 2 4-4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />,
    plug: <path d="M9 7V3m6 4V3m-7 4h8v4a4 4 0 01-4 4v6m0 0h4m-4 0H8" />,
    shield: <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />,
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  )
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)
  const [commandQuery, setCommandQuery] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)
  const [cookieConsent, setCookieConsent] = useState('')
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const [actions, setActions] = useState(initialActions)
  const [statsValues, setStatsValues] = useState(['4.2K', '98%', '3.2h', '$0'])
  const [statsStarted, setStatsStarted] = useState(false)
  const statsRef = useRef(null)
  const commandInputRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen || commandPaletteOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen, commandPaletteOpen])

  useEffect(() => {
    const storedConsent = localStorage.getItem('briefed_cookie_consent')
    if (storedConsent === 'accepted' || storedConsent === 'rejected') {
      setCookieConsent(storedConsent)
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      const targetTag = String(event.target?.tagName || '').toLowerCase()
      const isEditable = targetTag === 'input' || targetTag === 'textarea' || event.target?.isContentEditable
      if ((event.key === 'k' || event.key === 'K') && !event.metaKey && !event.ctrlKey && !event.altKey && !isEditable) {
        event.preventDefault()
        setCommandPaletteOpen(true)
      }
      if (event.key === 'Escape') {
        setCommandPaletteOpen(false)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!commandPaletteOpen) return
    setCommandQuery('')
    requestAnimationFrame(() => commandInputRef.current?.focus())
  }, [commandPaletteOpen])

  useEffect(() => {
    if (!statsRef.current || statsStarted) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          setStatsStarted(true)
          const duration = 1500
          const startTime = performance.now()

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - (1 - progress) ** 3
            const next = statsMeta.map((item, idx) => {
              const number = Number((eased * item.val).toFixed(item.val % 1 === 0 ? 0 : 1))
              if (idx === 3) return `$${Math.floor(number)}`
              return `${number}${item.suffix}`
            })
            setStatsValues(next)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [statsStarted])
  const toggleAction = (id) => {
    setActions((prev) => prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))
  }

  const statsLabels = useMemo(() => statsMeta.map((item) => item.label), [])
  const closeMobileMenu = () => setMobileMenuOpen(false)
  const commandItems = useMemo(
    () => [
      { id: 'features', label: 'Go to Features', description: 'Jump to product feature breakdown', selector: '#features' },
      { id: 'pricing', label: 'Go to Pricing', description: 'View plans and pricing details', selector: '#pricing' },
      { id: 'demo', label: 'Go to Demo', description: 'Open the product demo preview', selector: '#demo' },
      { id: 'testimonials', label: 'Go to Testimonials', description: 'Read customer outcomes and quotes', selector: '#testimonials' },
      { id: 'faq', label: 'Go to FAQ', description: 'Review security and rollout questions', selector: '#faq' },
      { id: 'trial', label: 'Start Free Trial', description: 'Jump to CTA and start onboarding', selector: '.cta-section' },
    ],
    [],
  )
  const filteredCommands = useMemo(() => {
    const query = commandQuery.trim().toLowerCase()
    if (!query) return commandItems
    return commandItems.filter((item) => `${item.label} ${item.description}`.toLowerCase().includes(query))
  }, [commandItems, commandQuery])
  const runCommand = (item) => {
    const target = document.querySelector(item.selector)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setCommandPaletteOpen(false)
    setMobileMenuOpen(false)
  }
  const onNewsletterSubmit = (event) => {
    event.preventDefault()
    if (!newsletterEmail.trim()) return
    setNewsletterSubmitted(true)
    setNewsletterEmail('')
  }
  const setConsent = (value) => {
    setCookieConsent(value)
    localStorage.setItem('briefed_cookie_consent', value)
  }
  return (
    <>
      <nav id="navbar" className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          Brief<span>ed</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#demo">Demo</a>
          <a href="#">Integrations</a>
          <button className="command-shortcut" onClick={() => setCommandPaletteOpen(true)}>
            Press K
          </button>
          <button className="btn-primary">Start Free Trial</button>
        </div>
        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          type="button"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {commandPaletteOpen && (
        <div className="command-palette-backdrop" onClick={() => setCommandPaletteOpen(false)}>
          <div className="command-palette" onClick={(event) => event.stopPropagation()}>
            <div className="command-palette-head">
              <span>Command Palette</span>
              <kbd>ESC</kbd>
            </div>
            <input
              ref={commandInputRef}
              value={commandQuery}
              onChange={(event) => setCommandQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && filteredCommands[0]) {
                  event.preventDefault()
                  runCommand(filteredCommands[0])
                }
              }}
              className="command-input"
              placeholder="Search commands..."
            />
            <div className="command-list">
              {filteredCommands.map((item) => (
                <button key={item.id} className="command-item" onClick={() => runCommand(item)}>
                  <span>{item.label}</span>
                  <small>{item.description}</small>
                </button>
              ))}
              {filteredCommands.length === 0 && <div className="command-empty">No commands found</div>}
            </div>
          </div>
        </div>
      )}

      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#features" onClick={closeMobileMenu}>
          Features
        </a>
        <a href="#pricing" onClick={closeMobileMenu}>
          Pricing
        </a>
        <a href="#demo" onClick={closeMobileMenu}>
          Demo
        </a>
        <a href="#" onClick={closeMobileMenu}>
          Integrations
        </a>
        <button className="btn-primary mobile-nav-cta" onClick={closeMobileMenu}>
          Start Free Trial
        </button>
      </div>

      <section className="hero">
        <div>
          <div className="hero-badge">Now in public beta</div>
          <h1>
            Every meeting.
            <br />
            <em>Perfectly captured.</em>
          </h1>
          <p className="hero-sub">
            Briefed turns your meetings into structured summaries, action items, and insights - automatically. So you can focus on the
            conversation, not the notes.
          </p>
          <div className="hero-cta">
            <button className="btn-large">Start for free</button>
            <button className="btn-ghost">Watch demo →</button>
          </div>
          <p className="hero-social">
            Trusted by <strong>4,200+</strong> teams at companies like Linear, Vercel, and Notion
          </p>
        </div>
      </section>

      <section className="social-proof" aria-label="Trusted by teams at">
        <p className="social-proof-label">Trusted by teams at</p>
        <div className="social-proof-row">
          {socialProofLogos.map((logo) => (
            <div key={logo.name} className="social-proof-logo">
              <img
                src={`https://cdn.simpleicons.org/${logo.slug}/8a8880`}
                alt={`${logo.name} logo`}
                className="social-proof-logo-icon"
                loading="lazy"
                decoding="async"
              />
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="app-preview" id="demo">
        <div className="app-window">
          <div className="window-bar">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
            <div className="window-title">briefed.app - Q4 Planning</div>
          </div>
          <div className="app-layout">
            <div className="sidebar">
              <div className="sidebar-section">Workspace</div>
              <div className="sidebar-item active">
                <span className="icon">
                  <Icon name="target" className="icon-svg" />
                </span>
                Action Items <span className="badge">7</span>
              </div>
              <div className="sidebar-item">
                <span className="icon">
                  <Icon name="calendar" className="icon-svg" />
                </span>
                Meetings
              </div>
              <div className="sidebar-item">
                <span className="icon">
                  <Icon name="search" className="icon-svg" />
                </span>
                Search
              </div>
              <div className="sidebar-item">
                <span className="icon">
                  <Icon name="chart" className="icon-svg" />
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
                      <Icon name="clock" className="meta-icon" /> 58 min
                    </span>
                    <span className="meta-item">
                      <Icon name="users" className="meta-icon" /> 5 participants
                    </span>
                    <span className="meta-item">
                      <Icon name="date" className="meta-icon" /> Feb 21, 2026
                    </span>
                  </div>
                </div>
                <div className="status-pill">✓ Processed</div>
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
                {actions.map((item) => (
                  <div key={item.id} className={`action-item ${item.done ? 'done' : ''}`} onClick={() => toggleAction(item.id)}>
                    <div className="checkbox">{item.done ? '✓' : ''}</div>
                    <span className="action-text">{item.text}</span>
                    <span className="action-owner">{item.owner}</span>
                    <span className={`action-due ${item.urgent ? 'urgent' : ''}`}>{item.due}</span>
                  </div>
                ))}
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
                <span className="speaker">Sarah:</span> We&apos;re aiming for 8%, based on the Q3 cohort data. That drives the $2.1M
                number.
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

      <div className="stats-wrap">
        <div className="stats-row" ref={statsRef}>
          {statsValues.map((value, i) => (
            <div key={statsLabels[i]} className="stat">
              <div className="stat-num">{value}</div>
              <div className="stat-label">{statsLabels[i]}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="section" id="features">
        <div className="section-header">
          <div className="section-eyebrow">What Briefed does</div>
          <h2>
            Built for how teams
            <br />
            <em>actually</em> work
          </h2>
          <p className="section-sub">Not just transcription. Full meeting intelligence that plugs into your workflow.</p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">
                <Icon name={feature.icon} className="feature-icon-svg" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="section-header">
          <div className="section-eyebrow">Pricing</div>
          <h2>Simple, honest pricing</h2>
          <p className="section-sub">No per-seat gotchas. No feature paywalls. Just one number.</p>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="plan-name">Starter</div>
            <div className="plan-price">
              <sup>$</sup>0<span>/mo</span>
            </div>
            <p className="plan-desc">For individuals and small teams just getting started.</p>
            <ul className="plan-features">
              <li>5 meetings/month</li>
              <li>AI summaries & action items</li>
              <li>30-day transcript storage</li>
              <li>Slack integration</li>
            </ul>
            <button className="btn-plan">Get started free</button>
          </div>
          <div className="pricing-card featured">
            <div className="featured-label">Most Popular</div>
            <div className="plan-name">Pro</div>
            <div className="plan-price">
              <sup>$</sup>29<span>/mo</span>
            </div>
            <p className="plan-desc">For teams who run on meetings and need every detail captured.</p>
            <ul className="plan-features">
              <li>Unlimited meetings</li>
              <li>All AI features + analytics</li>
              <li>Unlimited storage</li>
              <li>All integrations (Linear, Jira, Notion)</li>
              <li>Priority support</li>
            </ul>
            <button className="btn-plan">Start 14-day trial</button>
          </div>
          <div className="pricing-card">
            <div className="plan-name">Enterprise</div>
            <div className="plan-price custom-price">Custom</div>
            <p className="plan-desc">For organizations with security, compliance, and scale requirements.</p>
            <ul className="plan-features">
              <li>Everything in Pro</li>
              <li>SSO & SCIM provisioning</li>
              <li>SOC 2 / GDPR controls</li>
              <li>Zero-retention option</li>
              <li>Dedicated success manager</li>
            </ul>
            <button className="btn-plan">Talk to sales</button>
          </div>
        </div>
      </section>

      <section className="section testimonials-section" id="testimonials">
        <div className="section-header">
          <div className="section-eyebrow">Customer stories</div>
          <h2>Teams ship faster with better meeting follow-through</h2>
          <p className="section-sub">Specific outcomes from people using Briefed every week.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <p className="testimonial-quote">“{item.quote}”</p>
              <div className="testimonial-person">
                <div className="testimonial-avatar">{item.photo}</div>
                <div>
                  <div className="testimonial-name">{item.name}</div>
                  <div className="testimonial-role">{item.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-header">
          <div className="section-eyebrow">FAQ</div>
          <h2>Questions teams ask before buying</h2>
          <p className="section-sub">Straight answers on security, data handling, and rollout.</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <article className={`faq-item ${openFaqIndex === index ? 'open' : ''}`} key={item.question}>
              <button
                type="button"
                className="faq-trigger"
                aria-expanded={openFaqIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenFaqIndex((prev) => (prev === index ? -1 : index))}
              >
                <h3>{item.question}</h3>
                <span className="faq-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="faq-chevron">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div id={`faq-answer-${index}`} className="faq-answer" aria-hidden={openFaqIndex !== index}>
                <p>{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="cta-section">
        <div className="section-eyebrow">Stop taking notes</div>
        <h2>
          Your next meeting is
          <br />
          <em>already waiting.</em>
        </h2>
        <p>Join 4,200+ teams who&apos;ve reclaimed their Fridays. Setup takes 2 minutes.</p>
        <button className="btn-large">Start free - no card required</button>
      </div>

      <footer>
        <div className="footer-top">
          <div className="footer-newsletter">
            <h3>Get meeting productivity tips weekly</h3>
            <p>Short, practical tactics to run better meetings and ship decisions faster.</p>
            <form className="newsletter-form" onSubmit={onNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(event) => setNewsletterEmail(event.target.value)}
                placeholder="you@company.com"
                aria-label="Email address"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            {newsletterSubmitted && <div className="newsletter-success">Thanks. You are on the list.</div>}
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
            <a href="#">Status</a>
            <a href="#">Twitter</a>
          </div>
        </div>
        <div className="footer-copy">© 2026 Briefed. All rights reserved.</div>
      </footer>

      {!cookieConsent && (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent banner">
          <p>
            We use essential cookies and optional analytics cookies. For EU visitors, we ask for consent before non-essential tracking.
          </p>
          <div className="cookie-actions">
            <button className="cookie-btn cookie-btn-ghost" onClick={() => setConsent('rejected')}>
              Reject non-essential
            </button>
            <button className="cookie-btn cookie-btn-primary" onClick={() => setConsent('accepted')}>
              Accept all
            </button>
          </div>
        </div>
      )}
    </>
  )
}
