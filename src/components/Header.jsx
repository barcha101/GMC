import React from 'react'
import '../css/header.css'
import frame from '../assets/images/Frame.png'

function Header() {
  return (

    <div className='header__container'>
        <div className='header__block-header'>
            <img src={frame} alt="Logo" />
        </div>
        <nav className='header__block-nav'>
            <a href="#" >About us</a>    
            <a href="#" >Products</a>    
            <a href="#" >Features</a>    
            <a href="#" >Testimonials</a>    
        </nav>
        <div className='header__block-button'>
            <a href="#">Contact Us</a>
        </div>
    </div>

  )
}

export default Header