import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header, Slogan, About, OurPartner, Products, Feature, Form, Footer} from './components/index'

function App() {

  return (
    <>
      <Header />
      <Slogan />
      <About />
      <OurPartner />
      <Products />
      <Feature />
      <Form />
      <Footer />
    
    </>
  )
}

export default App
