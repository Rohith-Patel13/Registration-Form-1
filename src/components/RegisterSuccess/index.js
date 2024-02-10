import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const RegisterSuccess = () => {
  console.log('RegisterSuccess')
  return (
    <div className="successBg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button className="btn btn-danger" type="button">
        Submit Another Response
      </button>
    </div>
  )
}

export default RegisterSuccess
