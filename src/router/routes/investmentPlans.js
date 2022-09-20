import { lazy } from 'react'

const investmentPlansRoutes = [
  // Transactions
  
  {
    path: '/investmentPlans',
    component: lazy(() => import('../../views/investmentPlans')),
    exact: true
  }
]

export default investmentPlansRoutes
