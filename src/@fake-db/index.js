import mock from './mock'

import './jwt'
import './pages/pricing-data'
import './pages/account-settings'

mock.onAny().passThrough()
