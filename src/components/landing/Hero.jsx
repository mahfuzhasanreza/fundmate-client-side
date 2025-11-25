import React from 'react'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full">
                🚀 Trusted by 10,000+ Community Members
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Financial Support,{' '}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Simplified
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              FundMate connects people for peer-to-peer loans and crowdfunding campaigns. 
              Get funded by your community or help others achieve their goals with complete 
              transparency and automated management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary flex items-center justify-center space-x-2 group">
                <span>Get Started Free</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-primary-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-primary-600 border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600 font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🔒</span>
                <span className="text-sm text-gray-600 font-medium">Bank-Level Security</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900">Active Campaigns</h3>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      Live
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-900">Small Business Loan</p>
                        <p className="text-sm text-gray-600">$15,000 funded</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary-600">75%</p>
                        <p className="text-xs text-gray-600">of $20,000</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-900">Medical Crowdfund</p>
                        <p className="text-sm text-gray-600">$8,500 raised</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-secondary-600">85%</p>
                        <p className="text-xs text-gray-600">of $10,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 transform rotate-3 hover:rotate-0 transition-transform">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">$2.5M+</p>
                  <p className="text-sm text-gray-600">Funded</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary-600">500+</p>
                  <p className="text-sm text-gray-600">Success Stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
