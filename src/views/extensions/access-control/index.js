// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import WizardModernVertical from './WizardModernVertical'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

const Wizard = () => {
  return (
    <Fragment>
      <Row>
        <Col sm='12'>
          <WizardModernVertical />
        </Col>
       
      </Row>
    </Fragment>
  )
}
export default Wizard
