// ** Reactstrap Imports
import { Input, Alert } from 'reactstrap'

const PricingHeader = () => {

  return (
    <div className='text-center'>
      <h1 className='mt-5'>Investment Plans</h1>
      <p className='mb-2 pb-75'>
        All investment plans include instant withdrawal and insurance back up. Choose the best plan to fit your needs.
      </p>
     <Alert color='info'>
        <h4 className='alert-heading'>Info</h4>
        <div className='alert-body'>
          Once your balance is up to the minimum deposit of an Investment Plan, 
Your Plan will automatically switch to any of the plans.
        </div>
      </Alert>
    </div>


  )
}

export default PricingHeader
