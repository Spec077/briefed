import Home from './Home'
import Dashboard from './Dashboard'
import Login from './Login'
import Analytics from './Analytics'
import MeetingDetail from './MeetingDetail'
import MeetingDetails from './MeetingDetails'
import Meetings from './Meetings'
import NotFound from './NotFound'
import Onboarding from './Onboarding'
import Settings from './Settings.jsx'
import SettingsBilling from './SettingsBilling.jsx'
import SettingsNotification from './SettingsNotification.jsx'
import SettingsSecurity from './SettingsSecurity.jsx'
import Signup from './Signup'
import VerifyEmail from './VerifyEmail'

function App() {
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/'
  const routes = {
    '/': Home,
    '/dashboard': Dashboard,
    '/analytics': Analytics,
    '/meetings': Meetings,
    '/meeting-detail': MeetingDetail,
    '/meeting-details': MeetingDetails,
    '/meetings/details': MeetingDetails,
    '/signup': Signup,
    '/login': Login,
    '/onboarding': Onboarding,
    '/settings': Settings,
    '/settings/billing': SettingsBilling,
    '/settings/notification': SettingsNotification,
    '/settings/security': SettingsSecurity,
    '/verify-email': VerifyEmail,
  }

  const Page = routes[path] || NotFound
  return <Page />
}

export default App
