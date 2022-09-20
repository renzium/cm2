// ** Reactstrap Imports
import { Button, Form, Input, Row, Col } from 'reactstrap'

import image from '@src/assets/images/logo/favicon.png'
// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** Styles
import '@styles/base/pages/page-misc.scss'

const ComingSoon = () => {
  // ** Hooks
  const { skin } = useSkin()

  const illustration = skin === 'dark' ? 'coming-soon-dark.svg' : 'coming-soon.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  return (
    <div className='misc-wrapper'>
       <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
        <img src={image} alt='logo'/>
          <h2 className='brand-text text-primary ms-1'>Coin Mercari</h2>
        </Link>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <h2 className='mb-1'>We are launching soon 🚀</h2>
          <p className='mb-3'>We're creating something awesome. Please subscribe to get notified when it's ready!</p>
          <Form
            tag={Row}
            onSubmit={e => e.preventDefault()}
            className='row-cols-md-auto justify-content-center align-items-center m-0 mb-2 gx-3'
          >
            <Col sm='12' className='m-0 mb-1'>
              <Input placeholder='john@example.com' />
            </Col>
            <Col sm='12' className='d-md-block d-grid ps-md-0 ps-auto'>
              <Button className='mb-1 btn-sm-block' color='primary'>
                Notify
              </Button>
            </Col>
          </Form>
          <img className='img-fluid' src={source} alt='Coming soon page' />
        </div>
      </div>
    </div>
  )
}
export default ComingSoon
