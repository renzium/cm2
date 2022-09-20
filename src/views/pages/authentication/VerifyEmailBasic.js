// ** React Imports
import { Link } from 'react-router-dom'
import image from '@src/assets/images/logo/favicon.png'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

const VerifyEmailBasic = () => {
  return (
    <div className='auth-wrapper auth-basic px-2'>
      <div className='auth-inner my-2'>
        <Card className='mb-0'>
          <CardBody>
            <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
        <img src={image} alt='logo'/>
          <h2 className='brand-text text-primary ms-1'>Coin Mercari</h2>
        </Link>
            <CardTitle tag='h2' className='fw-bolder mb-1'>
              Verify your email ✉️
            </CardTitle>
            <CardText className='mb-2'>
              We've sent a link to your email address: <span className='fw-bolder'>hello@pixinvent.com</span> Please
              follow the link inside to continue.
            </CardText>
            <Button block tag={Link} to='/' color='primary'>
              Skip for now
            </Button>
            <p className='text-center mt-2'>
              <span>Didn't receive an email? </span>
              <a href='/' onClick={e => e.preventDefault()}>
                <span>Resend</span>
              </a>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default VerifyEmailBasic
