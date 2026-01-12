import React from 'react'
import Hero from '../components/landing/Hero'
import FeaturedCampaigns from '../components/landing/FeaturedCampaigns'
import FeaturedLoans from '../components/landing/FeaturedLoans'
import HowItWorks from '../components/landing/HowItWorks'
import Features from '../components/landing/Features'
import Services from '../components/landing/Services'
import Stats from '../components/landing/Stats'
import FAQ from '../components/landing/FAQ'
import CallToAction from '../components/landing/CallToAction'

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Hero />
      <FeaturedCampaigns />
      <FeaturedLoans />
      <HowItWorks />
      <Stats />
      <Features />
      <Services />
      <FAQ />
      <CallToAction />
    </div>
  )
}

export default LandingPage
