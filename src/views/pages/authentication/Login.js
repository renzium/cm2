// ** React Imports
import { useContext, Fragment, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// import useJwt from '@src/auth/jwt/useJwt'
import image from '@src/assets/images/logo/favicon.png'
// ** Third Party Components
import { useDispatch } from 'react-redux'
import { toast, Slide } from 'react-toastify'
import { useForm, Controller } from 'react-hook-form'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee } from 'react-feather'

// ** Actions
import { handleLogin } from '@store/authentication'

// ** Context
import { AbilityContext } from '@src/utility/context/Can'

// ** Custom Components
import Avatar from '@components/avatar'
import InputPasswordToggle from '@components/input-password-toggle'

// ** Utils
import { getHomeRouteForLoggedInUser } from '@utils'

import firebase from '../../../firebase'

import { onValue, ref } from '@firebase/database'

// ** Reactstrap Imports
import { Row, Col, Form, Input, Label, Alert, Button, CardText, CardTitle, UncontrolledTooltip } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'
import axios from 'axios'

// function onChange(value) {
//   console.log("Captcha value:", value)
// }

const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={ <Coffee size={ 12 } /> } />
        <h6 className='toast-title fw-bold'>Welcome, { name }</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>You have successfully logged in as an { role } user to Vuexy. Now you can start to explore. Enjoy!</span>
    </div>
  </Fragment>
)

const defaultValues = {
  password: 'admin',
  loginEmail: 'admin@demo.com'
}

const Login = () => {
  const [recaptcha, setRecaptcha] = useState("")
  const [userExtraData, setUserExtraData] = useState(null)
  function onChange(value) {
    setRecaptcha(value)
  }
  // ** Hooks
  const { skin } = useSkin()
  const handleOnChange = onChange
  const dispatch = useDispatch()
  const history = useHistory()
  const ability = useContext(AbilityContext)

  function getUserExtrData(id, data) {
  const starCountRef = ref(firebase.database, `users/${id}`)
    console.log(onValue(starCountRef, (snapshot) => {
      const extra = snapshot.val()
      setUserExtraData({ ...extra })
      data = {...data, ...extra}
      dispatch(handleLogin(data))
      ability.update([{ action: "manage", subject: "all" }])
      history.push(getHomeRouteForLoggedInUser(data.role))
      toast.success(
        <ToastContent name={ data.displayName || data.username || ' ' } role={ data.role || 'admin' } />,
        { icon: false, transition: Slide, hideProgressBar: true, autoClose: 2000 }
      )
    }))
  }


  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })
  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default
if (false) console.log("The stuff", recaptcha)
  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      console.log(data.loginEmail, data.password)
      axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAqNbdDw4nNXar2iKG2iujBLOKNcgqozbE",
        {
          email: data.loginEmail, password: data.password, returnSecureToken: true
        })
        .then(res => {
          console.log("The extra", userExtraData)
          const data = { ...res.data, role: "admin", ability: [{ action: "manage", subject: "all" }], username: res.data.displayName /**accessToken: res.data.accessToken, refreshToken: res.data.refreshToken */ }
          getUserExtrData(res.data.localId, data)
        })
        .catch(err => console.log(err))
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  return (
    <div className='auth-wrapper auth-cover'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={ e => e.preventDefault() }>
          <img src={ image } alt='logo' />
          <h2 className='brand-text text-primary ms-1'>Coin Mercari</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={ source } alt='Login Cover' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='fw-bold mb-1'>
              Welcome to Coin Mercari! 👋
            </CardTitle>
            <CardText className='mb-2'>Please sign-in to your account and Investing</CardText>
            <Form className='auth-login-form mt-2' onSubmit={ handleSubmit(onSubmit) }>
              <div className='mb-1'>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <Controller
                  id='loginEmail'
                  name='loginEmail'
                  control={ control }
                  render={ ({ field }) => (
                    <Input
                      autoFocus
                      type='email'
                      placeholder='john@example.com'
                      invalid={ errors.loginEmail && true }
                      { ...field }
                    />
                  ) }
                />
              </div>
              <div className='mb-1'>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/forgot-password'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <Controller
                  id='password'
                  name='password'
                  control={ control }
                  render={ ({ field }) => (
                    <InputPasswordToggle className='input-group-merge' invalid={ errors.password && true } { ...field } />
                  ) }
                />
              </div>
              <div className='form-check mb-1'>
                <Input type='checkbox' id='remember-me' />
                <Label className='form-check-label' for='remember-me'>
                  Remember Me
                </Label>
              </div>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={ handleOnChange }
              />
              <div>
                <br></br>
              </div>
              <Button type='submit' color='primary' block>
                Sign in
              </Button>
            </Form>
            <p className='text-center mt-2'>
              <span className='me-25'>New on our platform?</span>
              <Link to='/register'>
                <span>Create an account</span>
              </Link>
            </p>
            <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              <Button color='facebook'>
                <Facebook size={ 14 } />
              </Button>
              <Button color='twitter'>
                <Twitter size={ 14 } />
              </Button>
              <Button color='google'>
                <Mail size={ 14 } />
              </Button>
              <Button className='me-0' color='github'>
                <GitHub size={ 14 } />
              </Button>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
