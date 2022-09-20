import { lazy } from 'react'

const ExtensionsRoutes = [
  {
    path: '/access-control',
    component: lazy(() => import('../../views/extensions/access-control')),
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  }
]

export default ExtensionsRoutes
