import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const CallToAction = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-600 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8">
            <Sparkles className="h-10 w-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Financial Journey?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of users who trust FundMate for their lending and crowdfunding needs. 
            Start your journey today with complete transparency and security.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white hover:bg-gray-100 text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center space-x-2 group">
              <span>Create Free Account</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-all duration-200">
              Schedule a Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8 justify-center items-center text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
