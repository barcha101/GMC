import React from 'react'
import '../css/feature.css'
import f1 from '../assets/images/features/f1.png';
import f2 from '../assets/images/features/f2.png';
import f3 from '../assets/images/features/f3.png';

function Features() {
  return (
    <div className='feature__container'>
        <h1>Features</h1>
        <div className='feature__block'>
            <div className='feature__box'>
                <img src={f1} alt="Real-Time Glucose Tracking" />
                <p>Real-Time Glucose Tracking": Monitor your levels 24/7.</p>
            </div>
            <div className='feature__box'>
                <img src={f2} alt="Diabetes Testing Machine" />
                <p>Personalized Insights": Understand trends and patterns.</p>
            </div>
            <div className='feature__box'>
                <img src={f3} alt="Sugar Level Sensor" />
                <p>Easy App Integration": Sync seamlessly with our user-friendly app.</p>
            </div>
        </div>

    </div>
  )
}

export default Features