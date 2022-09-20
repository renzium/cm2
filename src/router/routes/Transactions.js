import { lazy } from 'react'

const TransactionRoutes = [
  // Transactions
  
  {
    path: '/transactions',
    component: lazy(() => import('../../views/transactions')),
    exact: true
  }
]

export default TransactionRoutes
