import {useState} from 'react'
// import RegisterSuccess from '../RegisterSuccess/index'
import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const eventHandler = e => {
    console.log(e.target.value)
  }

  const firstNameTyping = e => {
    console.log(e.target.value)
    setFirstName(e.target.value)
  }

  const lastNameTyping = e => {
    console.log(e.target.value)
    setLastName(e.target.value)
  }

  const submitBtnClicked = () => {
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
            onBlur={eventHandler}
            onChange={firstNameTyping}
          />
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
            onBlur={eventHandler}
            onChange={lastNameTyping}
          />
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
