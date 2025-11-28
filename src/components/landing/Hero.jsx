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
    <section id="home" className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
      {/* Advanced Background Design */}
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-secondary-100"></div>
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200/40 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary-200/40 via-transparent to-transparent"></div>
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-primary-300 to-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-secondary-300 to-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -80, 0],
          y: [0, -60, 0],
          rotate: [0, -90, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>

      <motion.div 
        className="absolute top-1/2 left-0 w-80 h-80 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ 
          scale: [1, 1.15, 1],
          x: [0, 60, 0],
          y: [0, -40, 0],
          rotate: [0, 180, 0]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-primary-600"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>


      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        ></motion.div>
      ))}

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
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(22, 163, 74, 0.3)" }}
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
                      whileHover={{ x: 5, boxShadow: "0 10px 20px rgba(22, 163, 74, 0.2)" }}
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
