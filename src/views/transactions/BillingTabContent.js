// ** React Imports
import { Fragment } from 'react'

// ** Demo Components
import PaymentMethods from './PaymentMethods'
import BillingAddress from './BillingAddress'

const BillingTabContent = () => {
  return (
    <Fragment>
      <PaymentMethods />
      <BillingAddress />
    </Fragment>
  )
}

export default BillingTabContent
