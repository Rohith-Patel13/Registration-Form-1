import {useState} from 'react'
// import RegisterSuccess from '../RegisterSuccess/index'
import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isRequiredFirstName, setIsRequiredFirstName] = useState(false)
  const [isRequiredLastName, setIsRequiredLastName] = useState(false)

  const firstNameTyping = e => {
    setFirstName(e.target.value)
  }

  const lastNameTyping = e => {
    setLastName(e.target.value)
  }

  const eventHandlerFirstName = e => {
    if (e.target.value === '') {
      setIsRequiredFirstName(true)
      console.log('blur event on first name executed')
      return
    }
    setIsRequiredFirstName(false)
  }
  const eventHandlerLastName = e => {
    if (e.target.value === '') {
      setIsRequiredLastName(true)
      console.log('blur event on last name executed')
      return
    }
    setIsRequiredLastName(false)
  }

  const submitBtnClicked = () => {
    if (firstName === '') {
      setIsRequiredFirstName(true)
    } else {
      setIsRequiredFirstName(false)
    }

    if (lastName === '') {
      setIsRequiredLastName(true)
    } else {
      setIsRequiredLastName(false)
    }

    if (!isRequiredFirstName && !isRequiredLastName) {
      console.log('render RegisterSuccess component')
    }

    console.log('submit button clicked')
  }

  return (
    <div className="bg">
      <h1 className="headText">Registration Form</h1>
      <form className="FormBg">
        <div className="formGroup">
          <label htmlFor="nameId" className="textHead">
            First Name
          </label>
          <input
            id="nameId"
            type="text"
            className="form-control"
            value={firstName}
            onBlur={eventHandlerFirstName}
            onChange={firstNameTyping}
          />
          {isRequiredFirstName ? <p className="errorText">Required</p> : ''}
        </div>
        <div className="formGroup">
          <label htmlFor="lastNameId" className="textHead">
            Last Name
          </label>
          <input
            id="lastNameId"
            type="text"
            className="form-control"
            value={lastName}
            onBlur={eventHandlerLastName}
            onChange={lastNameTyping}
          />
          {isRequiredLastName ? <p className="errorText">Required</p> : ''}
        </div>
        <button
          className="btn btn-danger"
          type="button"
          onClick={submitBtnClicked}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm
