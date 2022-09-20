// ** Routes Imports
import PagesRoutes from './Pages'
import DashboardRoutes from './Dashboards'
import ExtensionsRoutes from './Extensions'
import TransactionRoutes from './Transactions'
import investmentPlansRoutes from './investmentPlans'


// ** Document title
const TemplateTitle = '%s - Coin-Mercari'

// ** Default Route
const DefaultRoute = '/dashboard'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...PagesRoutes,
  ...ExtensionsRoutes,
  ...TransactionRoutes,
  ...investmentPlansRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
