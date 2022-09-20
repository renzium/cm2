// ** Reactstrap Imports
import {Button} from 'reactstrap'

// ** Third Party Components
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const SweetAlertTypes = () => {
  const handleSuccess = () => {
    return MySwal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false
    })
  }

 
  return (
        <div className='demo-inline-spacing'>
          <Button color='success' onClick={handleSuccess} outline>
            Success
          </Button>
        </div>
  )
}

export default SweetAlertTypes
