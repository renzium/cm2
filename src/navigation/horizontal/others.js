// ** Icons Import
import { Briefcase, Menu, LifeBuoy, Shield } from 'react-feather'

export default [
 {
    header: ''
  },
  
  {
    id: 'menuLevels',
    title: 'Investment Plans',
    icon: <Menu size={180} />,
    action: 'read',
    navLink: '/investmentPlans'
  },

   {
    header: ''
  },

  {
    id: 'documentation',
    title: 'Transactions',
    icon: <Briefcase size={180} />,
    action: 'read',
    navLink: '/transactions'
  },

   {
    header: ''
  },

  {
    id: 'access-control',
    title: 'Verification',
    icon: <Shield size={160} />,
    action: 'read',
    resource: 'ACL',
    navLink: '/access-control',
    badge: 'light-danger',
    badgeText: '!'
  },

   {
    header: ''
  },
  
  {
    id: 'contactSupport',
    title: 'Contact Support',
    icon: <LifeBuoy size={180} />,
    externalLink: true,
    newTab: true,
    navLink: 'https://coinmercari.com/index.html#contact'
  }
]

