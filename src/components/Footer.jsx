import React from 'react'
import '../css/footer.css'
import logo from '../assets/images/footer-logo.png'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import footerBg from '../assets/images/footerBg.png'

 
function Footer() {
  return (
    <div className='footer__container'>
        <div className='footer-block'>
            <div className='footer-box-info'>
                <img src={logo} alt="Logo" className='footer-logo'/>
                <p>Join thousands of satisfied users and experience the difference today.</p>
                <a href="#" className='footer-signup'>Sign Up Now</a>
            </div>
            <div className='footer-box-nav'>
                <nav className='footer-nav'>
                    <a href="#" className='footer-nav-main'>Home</a>
                    <a href="#">About Us</a>
                    <a href="#">About Products</a>
                    <a href="#">Features</a>
                </nav>
                <nav className='footer-nav'>
                    <a href="#" className='footer-nav-main'>Contact</a>
                    <a href="#">info@glucosemonitor.com</a>
                    <a href="#">+44 (0)1662-5469099</a>
                    <div>
                        <a href="#"><FaInstagram style={{"color": "white",fontSize: "30px" }}/></a>
                        <a href="#"><CiLinkedin  style={{"color": "white",fontSize: "30px" }}/></a>
                    </div>
                </nav>
            </div>
        </div>
        <div className='footer-block'>
                <p className='company-rights'>© 2024 Glucose Monitor. All rights reserved.</p>
        </div>
        <img src={footerBg} alt="background-img"  className='footer-img'/>
    </div>
  )
}

export default Footer