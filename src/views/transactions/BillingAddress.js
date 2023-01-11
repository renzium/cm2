// ** Reactstrap Imports
import { Row, Col, Form, Input, Label, Button, Card, CardHeader, CardTitle, CardBody, FormFeedback } from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'
import { useForm, Controller } from 'react-hook-form'
import '@src/firebase'
import { getDatabase, ref, set } from "firebase/database"
// ** Utils
// import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

// const countryOptions = [
//   { value: 'uk', label: 'UK' },
//   { value: 'usa', label: 'USA' },
//   { value: 'france', label: 'France' },
//   { value: 'russia', label: 'Russia' },
//   { value: 'canada', label: 'Canada' }
// ]

const defaultValues = {
  companyName: '',
  billingEmail: '',
  taxID: "",
  vatNumber: "",
  billingAddress: "",
  billingState: "",
  zipCodeAddress: "",
  mobileNumber: "",
  country: ""
}

const BillingAddress = () => {
  const userData = JSON.parse(localStorage.getItem("userData"))
  const userId = userData.localId
  function writeUserData(data) {
    const db = getDatabase()
    set(ref(db, `users/${userId}/billingAddress`), data)
      .then(
        localStorage.setItem("userData", JSON.stringify({ ...userData, billingAddress: data }))
      )
  }
  // ** Hooks

  defaultValues.companyName = userData?.billingAddress?.companyName || ""
  defaultValues.billingEmail = userData?.billingAddress?.billingEmail || ""
  defaultValues.taxID = userData?.billingAddress?.taxID || ""
  defaultValues.vatNumber = userData?.billingAddress?.vatNumber || ""
  defaultValues.billingAddress = userData?.billingAddress?.billingAddress || ""
  defaultValues.billingState = userData?.billingAddress?.billingState || ""
  defaultValues.zipCodeAddress = userData?.billingAddress?.zipCodeAddress || ""
  defaultValues.mobileNumber = userData?.billingAddress?.mobileNumber || ""
  defaultValues.country = userData?.billingAddress?.country || ""
  
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      console.log(data)
      writeUserData(data)
      return null
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
    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle tag='h4'>Billing Address</CardTitle>
      </CardHeader>
      <CardBody className='my-2 py-50'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md='6' className='mb-1'>
              <Label className='form-label' for='companyName'>
                Company Name
              </Label>
              <Controller
                id='companyName'
                control={control}
                name='companyName'
                render={({ field }) => (
                  <Input invalid={errors.companyName && true} {...field} />
                )}
              />
              {errors.companyName && <FormFeedback>Please enter a valid Company Name</FormFeedback>}
            </Col>
            <Col md='6' className='mb-1'>
              <Label className='form-label' for='billingEmail'>
                Billing Email
              </Label>
              <Controller
                id='billingEmail'
                control={control}
                name='billingEmail'
                render={({ field }) => (
                  <Input
                    type='email'
                    invalid={errors.billingEmail && true}
                    {...field}
                  />
                )}
              />
              {errors.billingEmail && <FormFeedback>Please enter a valid Billing Email</FormFeedback>}
            </Col>
            <Col md='6' className='mb-1'>
              <Label className='form-label' for='taxID'>
                Tax ID
              </Label>
              <Controller
                id='taxID'
                control={ control }
                name='taxID'
                render={ ({ field }) => (
                  <Input
                    type='text'
                    invalid={ errors.taxID && true }
                    { ...field }
                  />
                ) }
              />
              { errors.taxID && <FormFeedback>Please enter a valid Billing taxID</FormFeedback> }
              {/* <Input id='taxID' name='taxID' /> */}
            </Col>
            <Col md='6' className='mb-1'>
              <Label className='form-label' for='vatNumber'>
                VAT Number
              </Label>
              <Controller
                id='vatNumber'
                control={ control }
                name='vatNumber'
                render={ ({ field }) => (
                  <Input
                    type='text'
                    invalid={ errors.vatNumber && true }
                    { ...field }
                  />
                ) }
              />
              { errors.vatNumber && <FormFeedback>Please enter a valid Billing vatNumber</FormFeedback> }
              {/* <Input id='vatNumber' name='vatNumber' /> */}
            </Col>
            <Col md='6' className='mb-1'>
              <Label className='form-label' for='mobileNumber'>
                Mobile
              </Label>
              <Controller
                id='mobileNumber'
                control={ control }
                name='mobileNumber'
                render={ ({ field }) => (
                  <Input
                    type='number'
                    invalid={ errors.mobileNumber && true }
                    { ...field }
                  />
              // <Cleave
              //   id='mobileNumber'
              //   className='form-control'
              //       options={ { phone: true, phoneRegionCode: 'US' } }
              //       invalid={ errors.mobileNumber && true }
              //       { ...field }
              // />
                ) }
              />
                  {/* <Input
                    type='text'
                    invalid={ errors.vatNumber && true }
                    { ...field }
                  /> */}
              { errors.mobileNumber && <FormFeedback>Please enter a valid Billing mobileNumber</FormFeedback> }
            </Col>
            <Col md='6' className='mb-1'>
              <Label className='form-label' for='country'>
                Country
              </Label>
              <Controller
                id='country'
                control={ control }
                name='country'
                render={ ({ field }) => (
                  <Input
                    type='text'
                    invalid={ errors.country && true }
                    { ...field }
                  />
                ) }
              />
              { errors.country && <FormFeedback>Please enter a valid Billing Country</FormFeedback> }
            </Col>
            <Col xs='12' className='mb-1'>
              <Label className='form-label' for='billingAddress'>
                Billing Address
              </Label>
              <Controller
                id='billingAddress'
                control={ control }
                name='billingAddress'
                render={ ({ field }) => (
                  <Input
                    type='text'
                    invalid={ errors.billingAddress && true }
                    { ...field }
                  />
                ) }
              />
              { errors.billingAddress && <FormFeedback>Please enter a valid Billing Address</FormFeedback> }
            </Col>
            <Col md='6' className='mb-1'>
              <Label className='form-label' for='billingState'>
                State
              </Label>
              <Controller
                id='billingState'
                control={ control }
                name='billingState'
                render={ ({ field }) => (
                  <Input
                    type='text'
                    invalid={ errors.billingState && true }
                    { ...field }
                  />
                ) }
              />
              { errors.billingState && <FormFeedback>Please enter a valid State</FormFeedback> }
              {/* <Input id='billingState' name='state' /> */}
            </Col>
            <Col md='6' className='mb-2'>
              <Label className='form-label' for='zipCodeAddress'>
                Zip Code
              </Label>
              <Controller
                id='zipCodeAddress'
                control={ control }
                name='zipCodeAddress'
                render={ ({ field }) => (
                  <Input
                    type='number'
                    invalid={ errors.zipCodeAddress && true }
                    { ...field }
                  />
                ) }
              />
              { errors.zipCodeAddress && <FormFeedback>Please enter a valid Zip Code</FormFeedback> }
              {/* <Input type='number' id='zipCodeAddress' name='zipCodeAddress' maxLength='6' /> */}
            </Col>
            <Col xs='12'>
              <Button type='submit' className='me-1' color='primary'>
                Submit
              </Button>
              <Button type='reset' color='secondary' outline>
                Discard
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}

export default BillingAddress
