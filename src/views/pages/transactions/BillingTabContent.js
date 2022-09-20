// ** React Imports
import { Fragment } from 'react'

// ** Demo Components
import PaymentMethods from './PaymentMethods'
import BillingAddress from './BillingAddress'
import BillingHistory from './BillingHistory'

const BillingTabContent = () => {
  return (
    <Fragment>
      <PaymentMethods />
      <BillingAddress />
      <BillingHistory />
    </Fragment>
  )
}

export default BillingTabContent
