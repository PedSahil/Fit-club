import React from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Reason from './components/Reasons/Reason'
import Plans from './components/plans/Plans'
import Testimonial from './components/testimonials/Testimonial'
import Join from './components/join/Join'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div className='App'>
      < Hero/>
      <Programs/>
      <Reason/>
      <Plans/>
      <Testimonial/>
      <br /><br />
      <Join/>
      <br /><br />
      <Footer/>
      <h1> </h1>
    </div>
  )
}

export default App
