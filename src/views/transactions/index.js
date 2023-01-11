// ** React Imports
import { Fragment, useState } from 'react'

// ** Third Party Components
//import axios from 'axios'

// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from 'reactstrap'

// ** Demo Components
import Tabs from './Tabs'
import BillingTabContent from './BillingTabContent'
import WithdrawMethods from './WithdrawMethods'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'
import swal from '@sweetalert/with-react'
import '@src/firebase'
import { getDatabase, ref, set } from "firebase/database"

const AccountSettings = () => {
  // ** States

  const userData = JSON.parse(localStorage.getItem("userData"))
  const userId = userData.localId
  function writeUserData(value) {
    const db = getDatabase()
    set(ref(db, `users/${userId}/revenue/capital`), value)
  }
  const [activeTab, setActiveTab] = useState('1')
  //const [data, setData] = useState(null)

  const toggleTab = tab => {
    setActiveTab(tab)
  }


  swal({
    title: "Withdraw Amount",
    text: "Fill in the amount you want to withdraw in the form bellow",
    content: "input",
    buttons: {
      cancel: true,
      confirm: "Submit"
    }
  })
    .then(val => {
      if (val) {
        writeUserData(val)
        swal({
          title: "Request sent",
          text: `$${val} will be added to your account!`,
          icon: "success"
      })
    }
  })


  return (
    <Fragment>
        <Row>
          <Col xs={12}>
            <Tabs className='mb-2' activeTab={activeTab} toggleTab={toggleTab} />

            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <BillingTabContent />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='2'>
                <WithdrawMethods />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
    
    </Fragment>
  )
}

export default AccountSettings
