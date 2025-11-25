import React from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
      {/* Background Decorations */}
      <motion.div 
        className="absolute top-0 left-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute top-0 right-0 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="inline-block" variants={itemVariants}>
              <motion.span 
                className="bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full inline-block"
                whileHover={{ scale: 1.05 }}
              >
                🚀 Trusted by 10,000+ Community Members
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Financial Support,{' '}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Simplified
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              FundMate connects people for peer-to-peer loans and crowdfunding campaigns. 
              Get funded by your community or help others achieve their goals with complete 
              transparency and automated management.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button 
                className="btn-primary flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(221, 123, 223, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started Free</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.button>
              <motion.button 
                className="btn-secondary flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Play className="h-5 w-5" />
                </motion.div>
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex -space-x-2">
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-primary-400 border-2 border-white"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  ></motion.div>
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-primary-500 border-2 border-white"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  ></motion.div>
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-primary-600 border-2 border-white"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  ></motion.div>
                </div>
                <span className="text-sm text-gray-600 font-medium">4.9/5 Rating</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span 
                  className="text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🔒
                </motion.span>
                <span className="text-sm text-gray-600 font-medium">Bank-Level Security</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative z-10">
              {/* Main Card */}
              <motion.div 
                className="bg-white rounded-2xl shadow-2xl p-8"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900">Active Campaigns</h3>
                    <motion.span 
                      className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Live
                    </motion.span>
                  </div>
                  
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center justify-between p-4 bg-primary-50 rounded-lg"
                      whileHover={{ x: 5, boxShadow: "0 10px 20px rgba(221, 123, 223, 0.2)" }}
                    >
                      <div>
                        <p className="font-semibold text-gray-900">Small Business Loan</p>
                        <p className="text-sm text-gray-600">$15,000 funded</p>
                      </div>
                      <div className="text-right">
                        <motion.p 
                          className="text-2xl font-bold text-primary-600"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          75%
                        </motion.p>
                        <p className="text-xs text-gray-600">of $20,000</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg"
                      whileHover={{ x: 5, boxShadow: "0 10px 20px rgba(179, 191, 255, 0.2)" }}
                    >
                      <div>
                        <p className="font-semibold text-gray-900">Medical Crowdfund</p>
                        <p className="text-sm text-gray-600">$8,500 raised</p>
                      </div>
                      <div className="text-right">
                        <motion.p 
                          className="text-2xl font-bold text-secondary-600"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 }}
                        >
                          85%
                        </motion.p>
                        <p className="text-xs text-gray-600">of $10,000</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4"
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 3 }}
                transition={{ delay: 0.8, type: "spring" }}
                whileHover={{ rotate: 0, scale: 1.1 }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">$2.5M+</p>
                  <p className="text-sm text-gray-600">Funded</p>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4"
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{ rotate: 0, scale: 1.1 }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary-600">500+</p>
                  <p className="text-sm text-gray-600">Success Stories</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
