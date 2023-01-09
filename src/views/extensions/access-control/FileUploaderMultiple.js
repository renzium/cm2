// ** React Imports
import { useState, Fragment } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { ref, uploadBytesResumable, getStorage } from 'firebase/storage'
import '@src/firebase'
// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Button, ListGroup, ListGroupItem, Form, Col, Progress } from 'reactstrap'

// ** Styles
import 'animate.css/animate.css'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'
// ** Third Party Imports
import { useDropzone } from 'react-dropzone'
import { FileText, X, DownloadCloud, ArrowLeft, ArrowRight} from 'react-feather'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const storage = getStorage()


  const handleSuccess = () => {
    return MySwal.fire({
      title: 'Submitted!',
      text: 'Verification in review!',
      icon: 'success',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false
    }).then(function() {
    window.location = '/dashboard/'
})
  }

const FileUploaderMultiple = ({ stepper }) => {
  // ** State
  const [files, setFiles] = useState([])
  const [uploadState, setUploadState] = useState(null)
  const [progress, setProgress] = useState(0)
  const {
    handleSubmit,
    formState: { }
  } = useForm({ })

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      setFiles([...files, ...acceptedFiles.map(file => Object.assign(file))])
    }
  })

   const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
     console.log(data)
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual',
            message: `Please enter a valid ${key}`
          })
        }
      }
    }
  }
  const renderFilePreview = file => {
       const storageRef = ref(storage, file.name, URL.createObjectURL(file))
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    { setProgress((pre) => progress + pre) }
    console.log(`${'Upload is '}`, progress, `${'% done'}`)
     
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused')
        break
      case 'running':
        console.log('Upload is running')
        setUploadState(snapshot.state)
        break
    
    }
    
  },
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL)
    })
  }
  )
    if (file.type.startsWith('image')) {
      return <img className='rounded' alt={file.name} src={URL.createObjectURL(file)} height='28' width='28' />
     
    } else {
      return <FileText size='28' />
    }
  }

  const handleRemoveFile = file => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter(i => i.name !== file.name)
    setFiles([...filtered])
  }

  const renderFileSize = size => {
    if (Math.round(size / 100) / 10 > 1000) {
      return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`
    } else {
      return `${(Math.round(size / 100) / 10).toFixed(1)} kb`
    }
  }

  const fileList = files.map((file, index) => (
   <ListGroupItem key={`${file.name}-${index}`} className=''>
      <div className="d-flex align-items-center justify-content-between">
        <div className='file-details d-flex align-items-center'>
          <div className='file-preview me-1'>{renderFilePreview(file)}</div>
          <div>
            <p className='file-name mb-0'>{file.name}</p>
            <p className='file-size mb-0'>{renderFileSize(file.size)}</p>
          </div>
        </div>
      <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile(file)}>
        <X size={14} />
      </Button>
      </div>
      <Progress
          animated
           style={{
            height: '8px'
          }}
          color="success"
          value={progress / 100}
        />
    </ListGroupItem>
  ))


  return (
  <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Upload Document</h5>
        <small>Drivers License or Government ID/Selfie</small>
      </div>
       <Form onSubmit={handleSubmit(onSubmit)}>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} disabled={uploadState === 'uploading'}/>
          <div className='d-flex align-items-center justify-content-center flex-column'>
            <DownloadCloud size={64} />
            <h5>Drop Files here or click to upload</h5>
            <p className='text-secondary'>
              Drop files here or click{' '}
              <a href='/' onClick={e => e.preventDefault()}>
                browse
              </a>{' '}
              thorough your machine
            </p>
          </div>
        </div>
        {files.length ? (
          <Fragment>
            <ListGroup className='my-2'>{fileList}</ListGroup>
            <div className='d-flex justify-content-end'>
             </div>
          </Fragment>
        ) : null}
    
      
    <Fragment>
     <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <div className='btn-submit'>
          <Button color='success' type='submit' onClick={handleSuccess}>
          Submit
          </Button>
        </div>
        </div>
        </Fragment>
  
      </Form>
    </Fragment>
  )
}

export default FileUploaderMultiple
