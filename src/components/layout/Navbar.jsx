import React, { useState, useEffect } from 'react'
import { Menu, X, Wallet } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: 'Explore Loans', href: '#loans' },
    { name: 'Explore Campaigns', href: '#campaigns' },
    { name: 'Dashboard', href: '#dashboard' },
  ]

  return (
    <motion.nav 
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg backdrop-blur-lg bg-white/95' : 'shadow-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-primary-600 to-primary-500 p-2 rounded-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Wallet className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </motion.div>
            <span className="text-2xl md:text-3xl font-bold bg-primary-600 bg-clip-text text-transparent">
              FundMate
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button 
              onClick={() => navigate('/login')}
              className="text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
            <motion.button 
              onClick={() => navigate('/register')}
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(22, 163, 74, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Register
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden pb-4 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 pl-4 border-l-2 border-transparent hover:border-primary-500"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <motion.button 
                    onClick={() => {
                      navigate('/login')
                      setIsOpen(false)
                    }}
                    className="text-primary-600 hover:text-primary-700 font-semibold text-left transition-colors duration-200 pl-4"
                    whileTap={{ scale: 0.95 }}
                  >
                    Login
                  </motion.button>
                  <motion.button 
                    onClick={() => {
                      navigate('/register')
                      setIsOpen(false)
                    }}
                    className="btn-primary w-full"
                    whileTap={{ scale: 0.95 }}
                  >
                    Register
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
