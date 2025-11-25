import React from 'react'
import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'
import HowItWorks from '../components/landing/HowItWorks'
import Services from '../components/landing/Services'
import Stats from '../components/landing/Stats'
import CallToAction from '../components/landing/CallToAction'

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Services />
      <CallToAction />
    </div>
  )
}

export default LandingPage
