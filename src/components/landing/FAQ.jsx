import React, { useState } from 'react'
import { ChevronDown, ChevronUp, MessageCircle, Send, User, Mail, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const faqs = [
    {
      question: "How does FundMate's peer-to-peer lending work?",
      answer: "FundMate connects borrowers directly with lenders. Borrowers post loan requests with their requirements, and lenders can review these requests and make offers with competitive interest rates. Once a borrower accepts an offer, a loan agreement is created and funds are transferred securely."
    },
    {
      question: "What are the interest rates and fees?",
      answer: "Interest rates are determined by competitive offers from lenders, typically ranging from 5% to 15% annually. FundMate charges a small service fee of 2% on successfully funded loans and campaigns. No upfront fees or hidden charges - you only pay when you successfully receive funding."
    },
    {
      question: "How secure is my personal and financial information?",
      answer: "We use bank-grade encryption and security measures to protect all user data. We comply with financial data protection regulations and never share personal information with third parties without consent. Your privacy and security are our top priorities."
    },
    {
      question: "How long does it take to get funding?",
      answer: "Loan approval time depends on lender interest - some loans receive offers within hours, while others may take a few days. For campaigns, funding is continuous until the target is reached. Once you accept a loan offer, funds are typically transferred within 24-48 hours."
    }
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section id="faq" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary-100 text-primary-600 mb-6 mx-auto"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <MessageCircle className="h-8 w-8" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Get answers to common questions about FundMate's services and how we can help you achieve your financial goals.
          </p>
        </motion.div>
        
        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              >
                <motion.button
                  className="w-full px-8 py-6 text-left focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all duration-200"
                  onClick={() => toggleAccordion(index)}
                  whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.02)" }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <ChevronDown className="h-5 w-5 text-primary-600" />
                      </div>
                    </motion.div>
                  </div>
                </motion.button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 border-t border-gray-100">
                    <motion.p 
                      className="text-gray-700 leading-relaxed pt-4"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ 
                        y: openIndex === index ? 0 : -10, 
                        opacity: openIndex === index ? 1 : 0 
                      }}
                      transition={{ duration: 0.3, delay: openIndex === index ? 0.1 : 0 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Contact Support Form */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl transform rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-3xl transform -rotate-1"></div>
            
            {/* Main content card */}
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
              {/* Header with enhanced styling */}
              <motion.div 
                className="text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-600 mb-6 mx-auto"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <MessageCircle className="h-10 w-10" />
                </motion.div>
                
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
                  Still have questions?
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Our dedicated support team is here to help you succeed. Send us a message and we'll get back to you within 24 hours.
                </p>
              </motion.div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 rounded-2xl p-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <Send className="h-8 w-8 text-white" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-primary-800 mb-3">Message Sent Successfully!</h4>
                    <p className="text-primary-700 text-lg">Thank you for reaching out. Our team will respond within 24 hours.</p>
                    <motion.div
                      className="mt-4 flex items-center justify-center space-x-2 text-primary-600"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-8 text-left max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                            <User className="h-3 w-3 text-primary-600" />
                          </div>
                          <span>Full Name *</span>
                        </div>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all duration-300 text-lg bg-gray-50 focus:bg-white"
                        placeholder="Enter your full name"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center">
                            <Mail className="h-3 w-3 text-secondary-600" />
                          </div>
                          <span>Email Address *</span>
                        </div>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-secondary-100 focus:border-secondary-500 transition-all duration-300 text-lg bg-gray-50 focus:bg-white"
                        placeholder="Enter your email"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-800 mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-3 w-3 text-primary-600" />
                        </div>
                        <span>What can we help you with? *</span>
                      </div>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all duration-300 text-lg bg-gray-50 focus:bg-white"
                    >
                      <option value="">Choose your topic...</option>
                      <option value="loan">💰 Questions about Loans</option>
                      <option value="campaign">🎯 Questions about Campaigns</option>
                      <option value="account">👤 Account & Registration</option>
                      <option value="security">🔒 Security & Privacy</option>
                      <option value="technical">⚙️ Technical Support</option>
                      <option value="other">💬 Other</option>
                    </select>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center">
                          <MessageCircle className="h-3 w-3 text-secondary-600" />
                        </div>
                        <span>Your Message *</span>
                      </div>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-secondary-100 focus:border-secondary-500 transition-all duration-300 text-lg resize-none bg-gray-50 focus:bg-white"
                      placeholder="Tell us more about your question or how we can help you..."
                    />
                  </motion.div>

                  <motion.div
                    className="flex justify-center pt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-12 py-5 rounded-2xl text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center space-x-3 min-w-[200px] justify-center"
                    >
                      {/* Button background animation */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 hover:opacity-20"
                        initial={false}
                        animate={isSubmitting ? { x: ["0%", "100%"] } : {}}
                        transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
                      />
                      
                      {isSubmitting ? (
                        <>
                          <motion.div 
                            className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Sending your message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-6 w-6" />
                          <span>Send Message</span>
                          <motion.div
                            className="ml-1"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.div>
                        </>
                      )}
                    </button>
                  </motion.div>
                </motion.form>
              )}

              {/* Trust indicators */}
              <motion.div 
                className="flex items-center justify-center space-x-8 mt-10 pt-8 border-t border-gray-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Quick Response</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Expert Team</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ