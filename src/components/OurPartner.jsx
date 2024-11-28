import React from 'react'
import border from '../assets/images/partners/border.png'
import colab from '../assets/images/partners/colab.png'
import minty from '../assets/images/partners/minty.png'
import penta from '../assets/images/partners/penta.png'
import '../css/ourPartner.css'

function OurPartner() {
  return (
    <div className='partner__container'>
        <h1>Our Partner</h1>
        <div className='partner__block'>
            <img src={border} alt="border-logo" />
            <img src={colab} alt="colab-logo" />
            <img src={minty} alt="minty-logo" />
            <img src={penta} alt="penta-logo" />
        </div>
    </div>
  )
}

export default OurPartner