import React, { useState, useEffect } from 'react'
import { Menu, X, Wallet, User, LogOut, Settings, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import NotificationBell from '../NotificationBell'
import { onAuthStateChange, logoutFromFirebase } from '../../services/firebaseAuthService'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [user, setUser] = useState(null)
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChange((currentUser) => {
      setUser(currentUser)
      console.log('Auth state changed:', currentUser?.email || 'No user')
    })
    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    try {
      await logoutFromFirebase()
      setShowProfileDropdown(false)
      navigate('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Dashboard', href: '/dashboard', isRoute: true },
    { name: 'Loans', href: '/all-loans', isRoute: true },
    { name: 'Campaigns', href: '/campaigns', isRoute: true },
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
              link.isRoute ? (
                <motion.button
                  key={link.name}
                  onClick={() => navigate(link.href)}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-500 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ) : (
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
              )
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <NotificationBell /> */}
            
            {user ? (
              /* Profile Dropdown for Logged In User */
              <div className="relative">
                <motion.button
                  onMouseEnter={() => setShowProfileDropdown(true)}
                  onMouseLeave={() => setShowProfileDropdown(false)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="Profile" className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <User className="h-5 w-5" />
                    )}
                  </div>
                  <span className="font-semibold">{user.displayName || 'User'}</span>
                  <ChevronDown className="h-4 w-4" />
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {showProfileDropdown && (
                    <motion.div
                      onMouseEnter={() => setShowProfileDropdown(true)}
                      onMouseLeave={() => setShowProfileDropdown(false)}
                      className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* User Info */}
                      <div className="px-4 py-3 bg-gradient-to-r from-primary-50 to-primary-100 border-b border-primary-200">
                        <p className="text-sm font-semibold text-gray-900">{user.displayName || 'User'}</p>
                        <p className="text-xs text-gray-600 truncate">{user.email}</p>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        <motion.button
                          onClick={() => {
                            navigate('/dashboard')
                            setShowProfileDropdown(false)
                          }}
                          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-primary-50 flex items-center space-x-3 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <User className="h-4 w-4" />
                          <span>Dashboard</span>
                        </motion.button>

                        <motion.button
                          onClick={() => {
                            navigate('/dashboard')
                            setShowProfileDropdown(false)
                          }}
                          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-primary-50 flex items-center space-x-3 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <Settings className="h-4 w-4" />
                          <span>Settings</span>
                        </motion.button>

                        <div className="border-t border-gray-100 my-2"></div>

                        <motion.button
                          onClick={handleLogout}
                          className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center space-x-3 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <LogOut className="h-4 w-4" />
                          <span>Logout</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              /* Login/Register Buttons for Guest Users */
              <>
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
              </>
            )}
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
                  link.isRoute ? (
                    <motion.button
                      key={link.name}
                      onClick={() => {
                        navigate(link.href)
                        setIsOpen(false)
                      }}
                      className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 pl-4 border-l-2 border-transparent hover:border-primary-500 text-left"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.name}
                    </motion.button>
                  ) : (
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
                  )
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  {user ? (
                    /* Mobile Profile Menu for Logged In User */
                    <>
                      <div className="px-4 py-3 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 flex items-center justify-center text-white">
                            {user.photoURL ? (
                              <img src={user.photoURL} alt="Profile" className="w-full h-full rounded-full object-cover" />
                            ) : (
                              <User className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{user.displayName || 'User'}</p>
                            <p className="text-xs text-gray-600 truncate">{user.email}</p>
                          </div>
                        </div>
                      </div>

                      <motion.button 
                        onClick={() => {
                          navigate('/dashboard')
                          setIsOpen(false)
                        }}
                        className="text-gray-700 hover:text-primary-600 font-medium text-left transition-colors duration-200 pl-4 flex items-center space-x-2"
                        whileTap={{ scale: 0.95 }}
                      >
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </motion.button>

                      <motion.button 
                        onClick={() => {
                          handleLogout()
                          setIsOpen(false)
                        }}
                        className="text-red-600 hover:text-red-700 font-semibold text-left transition-colors duration-200 pl-4 flex items-center space-x-2"
                        whileTap={{ scale: 0.95 }}
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </motion.button>
                    </>
                  ) : (
                    /* Mobile Login/Register Buttons for Guest Users */
                    <>
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
                    </>
                  )}
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
