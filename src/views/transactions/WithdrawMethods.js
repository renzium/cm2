// ** React Imports
import { Fragment, useState, useEffect } from 'react'

import '@src/firebase'
import { getDatabase, ref, set, onValue } from "firebase/database"

import firebase from '../../firebase'
import swal from '@sweetalert/with-react'

import Select from 'react-select'

import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Form,
  Modal,
  Badge,
  Label,
  Input,
  Button,
  CardBody,
  CardTitle,
  ModalBody,
  CardHeader,
  InputGroup,
  ModalHeader,
  FormFeedback,
  Alert,
  InputGroupText
} from 'reactstrap'

// ** Third Party Components
import classnames from 'classnames'
import Cleave from 'cleave.js/react'
import { Check, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Card Images
import jcbCC from '@src/assets/images/icons/payments/jcb-cc.png'
import amexCC from '@src/assets/images/icons/payments/amex-cc.png'
import uatpCC from '@src/assets/images/icons/payments/uatp-cc.png'
import visaCC from '@src/assets/images/icons/payments/visa-cc.png'
import dinersCC from '@src/assets/images/icons/payments/diners-cc.png'
import maestroCC from '@src/assets/images/icons/payments/maestro-cc.png'
import discoverCC from '@src/assets/images/icons/payments/discover-cc.png'
import mastercardCC from '@src/assets/images/icons/payments/mastercard-cc.png'

const cardsObj = {
  jcb: jcbCC,
  uatp: uatpCC,
  visa: visaCC,
  amex: amexCC,
  diners: dinersCC,
  maestro: maestroCC,
  discover: discoverCC,
  mastercard: mastercardCC
}

const walletOptions = [
  { value: 'Bitcoin', label: 'Bitcoin' },
  { value: 'Ethereum', label: 'Ethereum' }
]

const data = []

const WithdrawMethods = () => {
  const userData = JSON.parse(localStorage.getItem("userData"))
  
  const [revenue, setRevenue] = useState(null)

  const id = userData?.localId
  useEffect(() => {

    const starCountRef = ref(firebase.database, `users/${id}/revenue`)
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      // console.log(userData)
      setRevenue(data)
    })
  }, [])

  const bankDefault = {
    routingNumber: userData?.bankWithdraw?.routingNumber || "",
    accountNumber: userData?.bankWithdraw?.accountNumber || "",
    accountName: userData?.bankWithdraw?.accountName || "",
    accountType: userData?.bankWithdraw?.accountType || ""
  }

  const cryptocurrency = {
    walletAddress: userData?.walletDetails?.walletAddress || "",
    walletType: userData?.walletDetails?.walletType || ""
  }
  // ** States
  const [show, setShow] = useState(false)
  const [cardType, setCardType] = useState('')
  const [selected, setSelected] = useState(null)
  const [modalCardType, setModalCardType] = useState('')
  const [WithdrawMethod, setWithdrawMethod] = useState('cryptocurrency')

  const defaultValues = WithdrawMethod === "bank" ? bankDefault : WithdrawMethod === "cryptocurrency"  ? cryptocurrency : null
  // ** Hooks

  const userId = userData.localId
  function writeUserData(data, account) {
    const db = getDatabase()
    set(ref(db, `users/${userId}/${account}`), data)
      .then(
        localStorage.setItem("userData", JSON.stringify({ ...userData, [account]: data }))
      )
  }
  function withdraw(left) {
    const db = getDatabase()
    set(ref(db, `users/${userId}/revenue/profit`), left)
  }


  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    const path = WithdrawMethod === "bank" ? "bankWithdraw" : WithdrawMethod === "cryptocurrency" ? "cryptocurrencyWithdraw" : null
    console.log(data)
    /*

  swal({
    title: "Withdraw Amount",
    text: "Fill amount to withdraw or add.",
    content: "input",
    buttons: {
      cancel: true,
      confirm: "Submit"
    }
  })
    .then(val => {
      localStorage.setItem("amount", JSON.stringify(val))
      if (val) {
        swal({
          title: "Saved",
          icon: "success"
      })
    }
  })
    */

    swal({
      title: "Withdraw Amount",
      text: "Fill amount to withdraw!",
      content: "input",
      buttons: {
        cancel: true,
        confirm: "Submit"
      }
    }).then(amount => {
      if (amount > revenue?.profit) {
        console.log(revenue?.profit)
        console.log(amount)
          swal({
            title: "Failed to withdraw",
            text: "You do not have sufficient amount of money in your account",
            icon: "error"
          })
      } else {
        withdraw(revenue?.profit - amount)
        writeUserData(data, path)
        swal({
          title: "Sent",
          text: "Money will arrive in minutes",
          icon: "success"
        })
      }
     })
    
    
    if (data?.routingInput?.length <= 9) {
      setError('routingInput', {
        type: 'manual',
        message: 'Please Enter Valid Routing Number'
      })
    }
  }

  const selectedCondition = selected !== null

  const openEditModal = card => {
    setSelected(card)
    setShow(true)
  }

  return (
    <Fragment>
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>External Transfer</CardTitle>
        </CardHeader>
        <Alert color='warning'>
        <h4 className='alert-heading'>Notice</h4>
        <div className='alert-body'>
          To avoid charge backs and delay in external transfers, Please send external transfers to your external wallet.
        </div>
      </Alert>
        <CardBody className='my-1 py-25'>
          <Row className='gx-4'>
            <Col lg='6'>
              <Row tag={Form} className='gx-2 gy-1' onSubmit={handleSubmit(onSubmit)}>
                <Col xs={12}>
                 <div className='form-check mb-1'>
                    <Input
                      type='radio'
                      value='Crytocurrency'
                      id='cryptocurrency-radio'
                      name='payment-method-radio'
                      checked={WithdrawMethod === 'cryptocurrency'}
                      onChange={() => setWithdrawMethod('cryptocurrency')}
                    />
                    <Label className='form-check-label' for='cryptocurrency-radio'>
                      Crytocurrency
                    </Label>
                  </div>
                  
                  <div className='form-check mb-1'>
                    <Input
                      type='radio'
                      value='bank'
                      id='bank-radio'
                      name='payment-method-radio'
                      checked={WithdrawMethod === 'bank'}
                      onChange={() => setWithdrawMethod('bank')}
                    />
                    <Label className='form-check-label' for='bank-radio'>
                      Bank account
                    </Label>
                  </div>
                </Col>
                 {WithdrawMethod === 'cryptocurrency' && (
                  <Fragment>
                   <Col className='mb-1' md='4' sm='12'>
            <Label className='form-label'>Wallet Type</Label>
                      <Controller
                        id='walletType'
                        name='walletType'
                        control={ control }
                        defaultValue={ walletOptions[0] }
                        render={ ({ field }) => (
                          <Select
                            { ...field }
                            className='react-select'
                            classNamePrefix='select'
                            name='walletType'
                            id='walletType'
                            theme={ selectThemeColors }
                            options={ walletOptions }
                            // onChange={val => field.onChange(val)}
                            className={ classnames('form-control', { 'is-invalid': errors?.walletType }) }
                          />
                        ) }
                      />
            {/* <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={walletOptions[0]}
              options={walletOptions}
              isClearable={false}
                /> */}
                  </Col>
                   
                          <Col md={8}>
                      <Label className='form-label' for='card-name'>
                        Wallet Address
                      </Label>
                      <Controller
                        id='walletAddress'
                        name='walletAddress'
                        control={ control }
                        render={ ({ field }) => (
                          <Input
                            { ...field }
                            name='walletAddress'
                            id='walletAddress'
                            className={ classnames('form-control', { 'is-invalid': errors?.accountType }) }
                          />
                        ) }
                      />
                    </Col>
                   
                    <Col className='mt-2 pt-1' xs={12}>
                      <Button type='submit' className='me-1' color='primary'>
                        Send
                      </Button>
                      
                    </Col>
                   
                  </Fragment>
                )}
                {WithdrawMethod === 'card' && (
                  <Fragment>
                    <Col xs={12}>
                      <Label className='form-label' for='credit-card'>
                        Card Number
                      </Label>
                      <InputGroup>
                        <Controller
                          id='credit-card'
                          name='cardInput'
                          control={control}
                          placeholder='1356 3215 6548 7898'
                          render={({ field }) => (
                            <Cleave
                              {...field}
                              name='cardInput'
                              className={classnames('form-control', { 'is-invalid': errors.cardInput })}
                              options={{ creditCard: true, onCreditCardTypeChanged: type => setCardType(type) }}
                            />
                          )}
                        />
                        {cardType !== '' && cardType !== 'unknown' ? (
                          <InputGroupText>
                            <img height='24' alt='card-type' src={cardsObj[cardType]} />
                          </InputGroupText>
                        ) : null}
                      </InputGroup>
                      {errors.cardInput ? (
                        <FormFeedback className='d-block'>{errors.cardInput.message}</FormFeedback>
                      ) : null}
                    </Col>
                    <Col md={6}>
                      <Label className='form-label' for='card-name'>
                        Name On Card
                      </Label>
                      <Input id='card-name' placeholder='John Doe' />
                    </Col>
                    <Col xs={6} md={3}>
                      <Label className='form-label' for='exp-date'>
                        Exp. Date
                      </Label>
                      <Cleave
                        id='exp-date'
                        placeholder='MM/YY'
                        className='form-control'
                        options={{ delimiter: '/', blocks: [2, 2] }}
                      />
                    </Col>
                    <Col xs={6} md={3}>
                      <Label className='form-label' for='cvv'>
                        CVV
                      </Label>
                      <Cleave id='cvv' placeholder='654' className='form-control' options={{ blocks: [3] }} />
                    </Col>
                    <Col xs={12}>
                      <div className='d-flex align-items-center'>
                        <div className='form-switch w-100'>
                          <Input defaultChecked type='switch' name='save-card' id='save-card' />
                          <Label className='form-check-label' for='save-card'>
                            <span className='switch-icon-left'>
                              <Check size={14} />
                            </span>
                            <span className='switch-icon-right'>
                              <X size={14} />
                            </span>
                          </Label>
                          <Label className='form-check-label' className='fw-bolder ms-1' for='save-card'>
                            Save Card for future billing?
                          </Label>
                        </div>
                      </div>
                    </Col>
                    <Col className='mt-2 pt-1' xs={12}>
                      <Button type='submit' className='me-1' color='primary'>
                        Submit
                      </Button>
                      <Button color='secondary' outline>
                        Cancel
                      </Button>
                    </Col>
                  </Fragment>
                )}
                 {WithdrawMethod === 'bank' && (
                  <Fragment>
                    <Col xs={6}>
                      <Label className='form-label' for='bank'>
                        Routing Number
                      </Label>
                      <InputGroup>
                        <Controller
                          id='routingNumber'
                          name='routingNumber'
                          control={control}
                          placeholder='021000021'
                          render={({ field }) => (
                            <Cleave
                              {...field}
                              name='routingNumber'
                              type="number"
                              className={ classnames('form-control', { 'is-invalid': errors.routingNumber })}
                            />
                          )}
                        />
                       
                      </InputGroup>
                      { errors?.routingNumber ? (
                        <FormFeedback className='d-block'>{ errors?.routingNumber?.message}</FormFeedback>
                      ) : null}
                    </Col>
                     <Col md={6}>
                      <Label className='form-label' for='card-name'>
                        Account Number
                      </Label>
                      <Controller
                        id='accountNumber'
                        name='accountNumber'
                        control={ control }
                        placeholder='021000021'
                        render={ ({ field }) => (
                          <Input
                            { ...field }
                            name='accountNumber'
                            type='number'
                            className={ classnames('form-control', { 'is-invalid': errors.accountNumber }) }
                          />
                        ) }
                      />
                    </Col>
                    <Col md={6}>
                      <Label className='form-label' for='card-name'>
                        Account Name
                      </Label>
                        <Controller
                          id='accountName'
                          name='accountName'
                          control={ control }
                          placeholder='021000021'
                          render={ ({ field }) => (
                            <Input
                              { ...field }
                              name='accountName'
                              className={ classnames('form-control', { 'is-invalid': errors.accountName }) }
                            />
                          ) }
                        />
                    </Col>
                    <Col className='mb-1' md='6' sm='12'>
            <Label className='form-label'>Account Type</Label>
                      <Controller
                        id='accountType'
                        name='accountType'
                        control={ control }
                        placeholder='021000021'
                        render={ ({ field }) => (
                          <Input
                            { ...field }
                            name='accountType'
                            placeholder="Business / Personal"
                            className={ classnames('form-control', { 'is-invalid': errors?.accountType }) }
                          />
                        ) }
                      />
                  </Col>
                    <Col className='mt-2 pt-1' xs={12}>
                      <Button type='submit' className='me-1' color='primary'>
                        Verify
                      </Button>
                      
                    </Col>
                  </Fragment>
                )}
              </Row>
            </Col>
            <Col lg='6' className='mt-2 mt-lg-0'>
              <h6 className='fw-bolder mb-2'>My Cards</h6>
              <div className='added-cards'>
                {data.map((card, index) => {
                  const isLastCard = index === data[data.length - 1]
                  return (
                    <div
                      key={index}
                      className={classnames('cardMaster rounded border p-2', {
                        'mb-1': !isLastCard
                      })}
                    >
                      <div className='d-flex justify-content-between flex-sm-row flex-column'>
                        <div className='card-information'>
                          <img src={card.imgSrc} alt={card.imgAlt} className='mb-1 img-fluid' />
                          <div className='d-flex align-items-center mb-50'>
                            <h6 className='mb-0'>{card.name}</h6>
                            {index === 0 && (
                              <Badge color='light-primary' className='ms-50'>
                                Primary
                              </Badge>
                            )}
                          </div>
                          <span className='card-number '>
                            **** **** **** {card.cardNumber.substring(card.cardNumber.length - 4)}
                          </span>
                        </div>
                        <div className='d-flex flex-column text-start text-lg-end'>
                          <div className='d-flex order-sm-0 order-1 mt-1 mt-sm-0'>
                            <Button outline color='primary' className='me-75' onClick={() => openEditModal(card)}>
                              Edit
                            </Button>
                            <Button outline>Delete</Button>
                          </div>
                          <span className='mt-2'>Card expires at {card.expiryDate}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        className='modal-dialog-centered'
        onClosed={() => setModalCardType('')}
      >
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-5'>
          <h1 className='text-center mb-1'>{selectedCondition ? 'Edit' : 'Add New'} Card</h1>
          <p className='text-center'>
            {selectedCondition ? 'Edit your saved card details' : 'Add card for future billing'}
          </p>
          <Form tag={Row} className='gy-1 gx-2 mt-75'>
            <Col xs={12}>
              <Label className='form-label' for='credit-card'>
                Card Number
              </Label>
              <InputGroup>
                <Cleave
                  id='credit-card'
                  className='form-control'
                  value={selectedCondition ? selected.cardNumber : ''}
                  placeholder='1356 3215 6548 7898'
                  options={{
                    creditCard: true,
                    onCreditCardTypeChanged: type => {
                      setModalCardType(type)
                    }
                  }}
                />
                {cardType !== '' && cardType !== 'unknown' ? (
                  <InputGroupText>
                    <img height='24' alt='card-type' src={cardsObj[modalCardType]} />
                  </InputGroupText>
                ) : null}
              </InputGroup>
            </Col>
            <Col md={6}>
              <Label className='form-label' for='card-name'>
                Name On Card
              </Label>
              <Input id='card-name' placeholder='John Doe' defaultValue={selectedCondition ? selected.name : ''} />
            </Col>
            <Col xs={6} md={3}>
              <Label className='form-label' for='exp-date'>
                Exp. Date
              </Label>
              <Cleave
                id='exp-date'
                placeholder='MM/YY'
                className='form-control'
                options={{ delimiter: '/', blocks: [2, 2] }}
                value={selectedCondition ? selected.expiryDate : ''}
              />
            </Col>
            <Col xs={6} md={3}>
              <Label className='form-label' for='cvv'>
                CVV
              </Label>
              <Cleave
                id='cvv'
                placeholder='654'
                className='form-control'
                options={{ blocks: [3] }}
                value={selectedCondition ? selected.cardCvc : ''}
              />
            </Col>
            <Col xs={12}>
              <div className='d-flex align-items-center'>
                <div className='form-switch w-100'>
                  <Input defaultChecked type='switch' name='save-card' id='save-card' />
                  <Label className='form-check-label' for='save-card'>
                    <span className='switch-icon-left'>
                      <Check size={14} />
                    </span>
                    <span className='switch-icon-right'>
                      <X size={14} />
                    </span>
                  </Label>
                  <Label className='form-check-label fw-bolder ms-1' for='save-card'>
                    Save Card for future billing?
                  </Label>
                </div>
              </div>
            </Col>
            <Col className='text-center mt-1' xs={12}>
              <Button className='me-1' color='primary' onClick={() => setShow(!show)}>
                Submit
              </Button>
              <Button color='secondary' outline onClick={() => setShow(!show)}>
                Cancel
              </Button>
            </Col>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default WithdrawMethods
