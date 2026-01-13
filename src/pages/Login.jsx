import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, ArrowRight, Github, Chrome } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your login logic here
    console.log('Login submitted:', formData)
    // Navigate to dashboard after login
    navigate('/dashboard')
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">`
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-primary-300 to-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-secondary-300 to-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -40, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Login Card */}
      <motion.div 
        className="max-w-md w-full space-y-8 bg-white p-8 md:p-10 rounded-3xl shadow-2xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl mb-4 shadow-lg">
              <span className="text-4xl">🔐</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome Back!
          </motion.h2>
          
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Log in to continue to FundMate
          </motion.p>
        </div>

        {/* Social Login Buttons */}
        <motion.div 
          className="grid grid-cols-1 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center space-x-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all"
          >
            <Chrome className="h-5 w-5 text-red-500" />
            <span className="text-sm font-semibold text-gray-700">Google</span>
          </motion.button>
          
          {/* <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center space-x-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-800 hover:bg-gray-50 transition-all"
          >
            <Github className="h-5 w-5 text-gray-800" />
            <span className="text-sm font-semibold text-gray-700">GitHub</span>
          </motion.button> */}
        </motion.div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500 font-medium">Or continue with email</span>
          </div>
        </div>

        {/* Login Form */}
        <motion.form 
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-end">
            {/* <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                Remember me
              </label>
            </div> */}

            <Link to="/forgot-password" className="text-sm font-semibold text-primary-600 hover:text-primary-700">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(22, 163, 74, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            <span>Sign In</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.form>

        {/* Sign Up Link */}
        <motion.div 
          className="text-center pt-4 border-t border-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-primary-600 hover:text-primary-700">
              Sign up for free
            </Link>
          </p>
        </motion.div>

        {/* Back to Home */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            ← Back to Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default Login
