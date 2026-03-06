import { useMemo, useState } from 'react'
import './Onboarding.css'

const steps = [
  'Connect Calendar',
  'Connect Meeting Platform',
  'Invite Teammates',
  'Set Up Integrations',
  'Complete',
]

const calendarOptions = [
  {
    id: 'google',
    title: 'Google Calendar',
    detail: 'Sync meetings, auto-join enabled',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg',
  },
  {
    id: 'outlook',
    title: 'Outlook Calendar',
    detail: 'Microsoft 365 and Exchange support',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Microsoft_Outlook_new_logo.svg',
  },
]

const platformOptions = [
  {
    id: 'zoom',
    title: 'Zoom',
    detail: 'Cloud recordings, live capture, transcripts',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg',
  },
  {
    id: 'meet',
    title: 'Google Meet',
    detail: 'Native Meet participant and timeline capture',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg',
  },
  {
    id: 'teams',
    title: 'Microsoft Teams',
    detail: 'Enterprise-ready support for Teams calls',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
  },
]

const integrationOptions = [
  {
    id: 'slack',
    title: 'Slack',
    detail: 'Share summaries and reminders in channels',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
  },
  {
    id: 'linear',
    title: 'Linear',
    detail: 'Create issues from meeting action items',
    icon: 'https://cdn.simpleicons.org/linear',
  },
  {
    id: 'jira',
    title: 'Jira',
    detail: 'Push tasks to existing sprint workflows',
    icon: 'https://cdn.simpleicons.org/jira',
  },
  {
    id: 'notion',
    title: 'Notion',
    detail: 'Sync notes and AI summaries to team wiki',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
  },
]

export default function Onboarding() {
  const [step, setStep] = useState(0)
  const [calendar, setCalendar] = useState('')
  const [platform, setPlatform] = useState('')
  const [teammateInput, setTeammateInput] = useState('')
  const [teammates, setTeammates] = useState([])
  const [integrations, setIntegrations] = useState({
    slack: true,
    linear: false,
    jira: false,
    notion: true,
  })
  const [errors, setErrors] = useState({})

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step])

  const addTeammate = () => {
    const email = teammateInput.trim().toLowerCase()
    if (!email) return
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors((prev) => ({ ...prev, teammates: 'Enter a valid teammate email.' }))
      return
    }
    if (teammates.includes(email)) {
      setErrors((prev) => ({ ...prev, teammates: 'That teammate is already added.' }))
      return
    }
    setTeammates((prev) => [...prev, email])
    setTeammateInput('')
    setErrors((prev) => ({ ...prev, teammates: '' }))
  }

  const removeTeammate = (email) => {
    setTeammates((prev) => prev.filter((item) => item !== email))
  }

  const toggleIntegration = (id) => {
    setIntegrations((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const validateStep = () => {
    const nextErrors = {}
    if (step === 0 && !calendar) nextErrors.calendar = 'Select one calendar option to continue.'
    if (step === 1 && !platform) nextErrors.platform = 'Select one meeting platform to continue.'
    if (step === 2 && teammates.length === 0) nextErrors.teammates = 'Invite at least one teammate or skip this step.'
    if (step === 3 && !Object.values(integrations).some(Boolean)) {
      nextErrors.integrations = 'Turn on at least one integration or skip this step.'
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const next = () => {
    if (step >= steps.length - 1) return
    if (!validateStep()) return
    setStep((prev) => prev + 1)
  }

  const back = () => {
    if (step === 0) return
    setStep((prev) => prev - 1)
    setErrors({})
  }

  const skipCurrent = () => {
    setErrors({})
    if (step >= steps.length - 1) return
    setStep((prev) => prev + 1)
  }

  return (
    <div className="onboarding-page">
      <header className="onboarding-header">
        <a className="onboarding-brand-link" href="/" aria-label="Briefed home">
          <div className="nav-logo">
            Brief<span>ed</span>
          </div>
        </a>
        <a className="onboarding-exit" href="/">
          Exit setup
        </a>
      </header>

      <main className="onboarding-main">
        <section className="onboarding-panel">
          <div className="onboarding-meta">
            <span>
              Step {step + 1} of {steps.length}
            </span>
            <strong>{steps[step]}</strong>
          </div>
          <div className="onboarding-progress-track">
            <div className="onboarding-progress-fill" style={{ width: `${progress}%` }}></div>
          </div>

          {step === 0 && (
            <div className="onboarding-step">
              <h1>Connect your calendar</h1>
              <p>Choose where Briefed should read upcoming meetings and post attendance summaries.</p>
              <div className="onboarding-options two">
                {calendarOptions.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className={`onboarding-option ${calendar === item.id ? 'active' : ''}`}
                    onClick={() => {
                      setCalendar(item.id)
                      setErrors((prev) => ({ ...prev, calendar: '' }))
                    }}
                  >
                    <div className="onboarding-option-head">
                      <img src={item.icon} alt={`${item.title} logo`} className="onboarding-option-icon" loading="lazy" decoding="async" />
                      <h3>{item.title}</h3>
                    </div>
                    <span>{item.detail}</span>
                  </button>
                ))}
              </div>
              {errors.calendar && <div className="onboarding-error">{errors.calendar}</div>}
            </div>
          )}

          {step === 1 && (
            <div className="onboarding-step">
              <h1>Connect meeting platform</h1>
              <p>Pick the platform where your team runs calls most often.</p>
              <div className="onboarding-options three">
                {platformOptions.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className={`onboarding-option ${platform === item.id ? 'active' : ''}`}
                    onClick={() => {
                      setPlatform(item.id)
                      setErrors((prev) => ({ ...prev, platform: '' }))
                    }}
                  >
                    <div className="onboarding-option-head">
                      <img src={item.icon} alt={`${item.title} logo`} className="onboarding-option-icon" loading="lazy" decoding="async" />
                      <h3>{item.title}</h3>
                    </div>
                    <span>{item.detail}</span>
                  </button>
                ))}
              </div>
              {errors.platform && <div className="onboarding-error">{errors.platform}</div>}
            </div>
          )}

          {step === 2 && (
            <div className="onboarding-step">
              <h1>Invite teammates</h1>
              <p>Add colleagues now so they receive meeting recaps and assigned action items.</p>
              <div className="onboarding-invite-row">
                <input
                  type="email"
                  placeholder="teammate@company.com"
                  value={teammateInput}
                  onChange={(event) => setTeammateInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault()
                      addTeammate()
                    }
                  }}
                />
                <button type="button" onClick={addTeammate}>
                  Add
                </button>
              </div>
              <div className="onboarding-chip-list">
                {teammates.map((email) => (
                  <div key={email} className="onboarding-chip">
                    <span>{email}</span>
                    <button type="button" onClick={() => removeTeammate(email)} aria-label={`Remove ${email}`}>
                      X
                    </button>
                  </div>
                ))}
              </div>
              {errors.teammates && <div className="onboarding-error">{errors.teammates}</div>}
            </div>
          )}

          {step === 3 && (
            <div className="onboarding-step">
              <h1>Set up integrations</h1>
              <p>Pick where meeting outputs should be delivered automatically.</p>
              <div className="onboarding-toggle-list">
                {integrationOptions.map((item) => (
                  <label key={item.id} className="onboarding-toggle">
                    <div>
                      <div className="onboarding-toggle-head">
                        <img src={item.icon} alt={`${item.title} logo`} className="onboarding-toggle-icon" loading="lazy" decoding="async" />
                        <h3>{item.title}</h3>
                      </div>
                      <span>{item.detail}</span>
                    </div>
                    <input type="checkbox" checked={integrations[item.id]} onChange={() => toggleIntegration(item.id)} />
                  </label>
                ))}
              </div>
              {errors.integrations && <div className="onboarding-error">{errors.integrations}</div>}
            </div>
          )}

          {step === 4 && (
            <div className="onboarding-step complete">
              <div className="onboarding-complete-icon">Done</div>
              <h1>Onboarding complete</h1>
              <p>Your workspace is configured. You can now open your dashboard and start capturing meetings immediately.</p>
              <div className="onboarding-summary">
                <div>
                  <span>Calendar</span>
                  <strong>{calendar || 'Skipped'}</strong>
                </div>
                <div>
                  <span>Platform</span>
                  <strong>{platform || 'Skipped'}</strong>
                </div>
                <div>
                  <span>Teammates</span>
                  <strong>{teammates.length}</strong>
                </div>
                <div>
                  <span>Integrations</span>
                  <strong>{Object.values(integrations).filter(Boolean).length}</strong>
                </div>
              </div>
              <a className="onboarding-dashboard-btn" href="/">
                Open dashboard intro
              </a>
            </div>
          )}

          {step < 4 && (
            <div className="onboarding-actions">
              <button type="button" className="onboarding-btn ghost" onClick={back} disabled={step === 0}>
                Back
              </button>
              <div className="onboarding-actions-right">
                <button type="button" className="onboarding-btn ghost" onClick={skipCurrent}>
                  Skip
                </button>
                <button type="button" className="onboarding-btn primary" onClick={next}>
                  Continue
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
