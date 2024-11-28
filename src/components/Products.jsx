import React from 'react'
import '../css/products.css'
import bd from '../assets/images/product/bd.png';
import bg from '../assets/images/product/bg.png';
import cgm from '../assets/images/product/cgm.png';
import ds from '../assets/images/product/ds.png';
function Products() {
  return (
    <div className='products__container'>
        <h1>Our Products</h1>
        <div className='products__block'>
            <div className='products__box'>
                <img src={cgm} alt="Continuous Glucose Monitor" />
                <div className='products-info'>
                    <h3>Continuous Glucose Monitor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus nunc at tristique pellentesque.</p>
                    <a href="#">BUY NOW</a>
                </div>
            </div>
            <div className='products__box'>
                <img src={bg} alt="Blood Glucose Monitor" />
                <div className='products-info'>
                    <h3>Blood Glucose Monitor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus nunc at tristique pellentesque.</p>
                    <a href="#">BUY NOW</a>
                </div>
            </div>
            <div className='products__box'>
                <img src={bd} alt="Diabetic Shoes" />
                <div className='products-info'>
                    <h3>Diabetic Shoes</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus nunc at tristique pellentesque.</p>
                    <a href="#">BUY NOW</a>
                </div>
            </div>
            <div className='products__box'>
                <img src={ds} alt="Diabetic Socks" />
                <div className='products-info'>
                    <h3>Diabetic Socks</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus nunc at tristique pellentesque.</p>
                    <a href="#">BUY NOW</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products