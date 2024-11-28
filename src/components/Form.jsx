import React from 'react'
import '../css/form.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


function Form() {
  return (
    <div className='form__container'>
        <div className='form__box-info'>
            <h1>Contact Us</h1>
            <p>
            We believe everyone deserves access to tools that empower better health. That’s why we’re offering you a Continuous Glucose Monitor (CGM) for FREE—no hidden fees, no strings attached.
            </p>
        </div>
        <div className='form__box-form'>
            <form>
                <div className='form-box'>
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                </div>
                {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                <input type="email" placeholder='your email' />
                <input type="text" placeholder='Post code' />
                <input type="textarea" placeholder='How can we help?' />
                <button className='form-button'>Submit</button>
                <p className='form-terms'>By contacting us, you agree to our <span>Terms of service</span> and <span>Privacy Policy</span></p>
            </form>
        </div>
    </div>
  )
}

export default Form