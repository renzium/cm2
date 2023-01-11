// ** Reactstrap Imports
import { Card, CardBody, CardText, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'

// ** Images
import medal from '@src/assets/images/illustration/badge.svg'

const CardMedal = ({revenue}) => {
  const userData = JSON.parse(localStorage.getItem("userData"))
  const history = useHistory()
  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h5>Congratulations 🎉 { userData?.displayName || userData?.email.split("@")[0] || userData?.username }!</h5>
        <CardText className='font-small-3'>Your balance:</CardText>
        <h3 className='mb-75 mt-2 pt-50'>
          <a>
            ${ revenue ? new Intl.NumberFormat('en-US').format(revenue?.profit + revenue?.capital)  : "0" }
          </a>
        </h3>
        [<Button onClick={ () => history.push("/transactions")} color='primary'>Withdraw or Add Capital</Button>]

        <img className='congratulation-medal' src={medal} alt='Medal Pic' />
      </CardBody>
    </Card>
  )
}

export default CardMedal
