// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import Address from './Address'
import PersonalInfo from './PersonalInfo'
import AccountDetails from './AccountDetails'
import FileUploaderMultiple from './FileUploaderMultiple'

// ** Icons Imports
import { FileText, User, MapPin, Link } from 'react-feather'

const WizardModernVertical = () => {
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'account-details',
      title: 'Your Information',
      subtitle: 'Enter Your Information.',
      icon: <User size={18} />,
      content: <AccountDetails stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'step-address',
      title: 'Address',
      subtitle: 'Add Address',
      icon: <MapPin size={18} />,
      content: <Address stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'personal-info',
      title: 'Document Upload',
      subtitle: 'Upload your document',
      icon: <FileText size={18} />,
      content: <FileUploaderMultiple stepper={stepper} type='modern-vertical' />
    }
    
  ]

  return (
    <div className='modern-vertical-wizard'>
      <Wizard
        type='modern-vertical'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default WizardModernVertical
