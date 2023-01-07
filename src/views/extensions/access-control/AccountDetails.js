// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Utils
import { isObjEmpty, isUserLoggedIn } from '@utils'

import classnames from 'classnames'
import InputPasswordToggle from '@components/input-password-toggle'
import Flatpickr from 'react-flatpickr'

import '@styles/react/libs/flatpickr/flatpickr.scss'
import { getAuth } from "firebase/auth"
// ** Third Party Components
import '@src/firebase'
import { getDatabase, ref, set/*, push*/} from "firebase/database"
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Reactstrap Imports
import { Form, Label, Input, Row, Col, Button, FormFeedback } from 'reactstrap'

const defaultValues = {
  fullName: '',
  email: '',
  SSN: '',
  confirmSSN: '',
  DOB: null
}

const AccountDetails = ({ stepper }) => {
  const SignupSchema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email(),
    SSN: yup.string().required(),
    confirmSSN: yup
      .string()
      .required()
      .oneOf([yup.ref(`SSN`), null], 'SSN must match')
  })


  // ** Hooks
  const [data, setData] = useState(null)
  const [userData, setUserData] = useState(null)
  const auth = getAuth()
  const userId = auth?.currentUser?.uid 
//    function writeUserData(fullName, email, SSN, confirmSSN, DOB) {
//   const db = getDatabase()
//   push(ref(db, userId, `${'users/'}`), {
//     fullName,
//     email,
//     SSN,
//     confirmSSN,
//     DOB
//   })
// }

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    resolver: yupResolver(SignupSchema)
  })

   useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  const onSubmit = (data) => {
    console.log(data, userId)
      const db = getDatabase()
    function writeUserData() {
      set(ref(db, `users/${userData?.email.split("@")[0]}/verification`), { accountDetails: data  })
        .then(
          () => {
            console.log("done")
          }
        )
        .catch((error) => {
        console.log(error)
      })
    }
    writeUserData()


      setData(data)
    if (isObjEmpty(errors)) {
      stepper.next()
  // const {fullName, SSN, confirmSSN, DOB} = data
      // writeUserData(fullName, userData && userData["email"], SSN, confirmSSN, String(new Date(data.DOB)))
    }
  }


  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Account Details</h5>
        <small className='text-muted'>Enter Your Account Details.</small>
      </div>
      <Form onSubmit={handleSubmit(data => onSubmit(data))}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='fullName'>
              Full Name
            </Label>
            <Controller
              id='fullName'
              name='fullName'
              control={control}
              render={({ field }) => <Input invalid={errors.fullName && true} {...field}/>}
            />
            {errors.fullName && <FormFeedback>{errors.fullName.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`email`}>
              Email
            </Label>
            <Controller
              control={control}
              id='email'
              name='email'
              render={() => (
                <Input type='email' readOnly value={(userData && userData['email']) } />
              )}
            />
            {errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
          </Col>
        </Row>
        <Row>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label' for='SSN'>
              Social Security
            </Label>
            <Controller
              id='SSN'
              name='SSN'
              control={control}
              render={({ field }) => <InputPasswordToggle onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault()
        }
      }} maxLength='9' invalid={errors.SSN && true} {...field} />}
            />
            {errors.SSN && <FormFeedback>{errors.SSN.message}</FormFeedback>}
          </div>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label' for='confirmSSN'>
              Confirm Social Security
            </Label>
            <Controller
              control={control}
              id='confirmSSN'
              name='confirmSSN'
              render={({ field }) => <InputPasswordToggle onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault()
        }
      }} maxLength='9' invalid={errors.confirmSSN && true} {...field} />}
            />
            {errors.confirmSSN && <FormFeedback>{errors.confirmSSN.message}</FormFeedback>}
          </div>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='DOB'>
        DOB
      </Label>
     <Controller
              control={control}
              id='DOB'
              name='DOB'
              render={({ field }) => (
                <Flatpickr
                  {...field}
                  className={classnames('form-control', {
                    'is-invalid': data !== null && data.DOB === null
                  })}
                />
              )}
            />
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next' >
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>

      </Form>
    </Fragment>
  )
}

export default AccountDetails
