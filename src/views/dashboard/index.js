// ** React Imports
import { useState, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

import { ref, onValue } from "firebase/database"
import firebase from "../../firebase"

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Demo Components
import CompanyTable from './CompanyTable'
import CardMedal from './CardMedal'
import StatsCard from './StatsCard'
import CardTransactions from './CardTransactions'
// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const EcommerceDashboard = () => {
  // ** Context
  const [revenue, setRevenue] = useState(null)
  const userData = JSON.parse(localStorage.getItem("userData"))

  const id = userData?.localId
  useEffect(() => {

    const starCountRef = ref(firebase.database, `users/${id}/revenue`)
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      // console.log(userData)
      setRevenue(data)
    })
  }, [])
  // ** vars

  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height'>
        <Col xl='6' md='6' xs='12'>
          <CardMedal revenue={ revenue } />
        </Col>
        <Col xl='6' md='12' xs='12'>
          <StatsCard revenue={ revenue } cols={{ xl: '6', sm: '6' }} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='8' xs='12'>
          <CompanyTable />
        </Col>
       
        <Col lg='4' md='6' xs='12'>
          <CardTransactions />
        </Col>
      </Row>
    </div>
  )
}

export default EcommerceDashboard
