import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  // Background slider images - using placeholder images for now
  const backgroundImages = [
    // {
    //   url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80',
    //   title: 'Peer-to-Peer Lending',
    //   description: 'Connect with lenders and borrowers in your community'
    // },
    {
      url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
      title: 'Crowdfunding Campaigns',
      description: 'Support meaningful projects and causes'
    },
    // {
    //   url: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80',
    //   title: 'Financial Growth',
    //   description: 'Build financial security through community support'
    // }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length)
  }
  
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Interactive Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImages[currentSlide].url})` }}
            />
            {/* Gradient overlays for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {backgroundImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white shadow-lg scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Enhanced Animated Elements */}
      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 8 + i * 1.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border-2 border-white/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-primary-400/30 to-secondary-400/30 rounded-lg"
        animate={{ 
          rotate: [0, 45, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center min-h-screen py-20">
          {/* Centered Content */}
          <motion.div 
            className="text-center max-w-4xl mx-auto space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Dynamic Background Title */}
            <motion.div 
              className="mb-6"
              variants={itemVariants}
            >
              <AnimatePresence mode="wait">
                <motion.h3
                  key={currentSlide}
                  className="text-lg md:text-xl text-white/80 font-medium mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {backgroundImages[currentSlide].description}
                </motion.h3>
              </AnimatePresence>
            </motion.div>

            <motion.div className="inline-block" variants={itemVariants}>
              <motion.span 
                className="bg-white/10 backdrop-blur-md text-white text-sm font-semibold px-6 py-3 rounded-full inline-block border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                🚀 Trusted by 10,000+ Community Members
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
              variants={itemVariants}
            >
              Financial Support,{' '}
              <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-300 bg-clip-text text-transparent">
                Simplified
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              FundMate connects people for peer-to-peer loans and crowdfunding campaigns.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={itemVariants}
            >
              <motion.button 
                onClick={() => navigate('/loan-request')}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 group shadow-2xl"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px rgba(22, 163, 74, 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Request Loan</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-6 w-6" />
                </motion.div>
              </motion.button>
              <motion.button 
                onClick={() => navigate('/campaigns')}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 group shadow-2xl"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255,255,255,0.2)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Campaign</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                >
                  <ArrowRight className="h-6 w-6" />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div 
              className="flex flex-wrap gap-8 justify-center pt-12"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <div className="flex -space-x-2">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 border-3 border-white"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  ></motion.div>
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 border-3 border-white"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  ></motion.div>
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-secondary-500 border-3 border-white"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  ></motion.div>
                </div>
                <span className="text-white font-bold text-lg">4.9/5 Rating</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <motion.span 
                  className="text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🔒
                </motion.span>
                <span className="text-white font-bold text-lg">Bank-Level Security</span>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <motion.span 
                  className="text-3xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  💰
                </motion.span>
                <div className="text-white">
                  <p className="font-bold text-lg">৳2.5M+</p>
                  <p className="text-sm opacity-80">Funded</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
