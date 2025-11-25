import React from 'react'
import { FileText, UserCheck, CreditCard, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="h-10 w-10" />,
      title: 'Create Request',
      description: 'Post your loan request or create a crowdfunding campaign with your target amount and purpose.',
      number: '01'
    },
    {
      icon: <UserCheck className="h-10 w-10" />,
      title: 'Receive Offers',
      description: 'Community members review your request and send loan offers with their interest terms, or contribute to your campaign.',
      number: '02'
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: 'Accept & Fund',
      description: 'Choose the best offer, sign the digital agreement, and receive your funds instantly through secure transfer.',
      number: '03'
    },
    {
      icon: <CheckCircle className="h-10 w-10" />,
      title: 'Automated Management',
      description: 'Let our system handle repayment tracking, interest calculations, notifications, and complete transparency.',
      number: '04'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Getting started with FundMate is simple. Follow these four easy steps to access financial support or help others.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 mx-auto" style={{ width: '80%', left: '10%' }}></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step Number */}
                <div className="relative inline-block mb-6">
                  <motion.div 
                    className="w-20 h-20 bg-white border-4 border-primary-200 rounded-full flex items-center justify-center text-2xl font-bold text-primary-600 relative z-10"
                    whileHover={{ scale: 1.1, borderColor: '#DD7BDF' }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {step.number}
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 bg-primary-100 rounded-full blur-xl opacity-0"
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>

                {/* Icon */}
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary-100 text-primary-600 mb-6"
                  whileHover={{ backgroundColor: '#DD7BDF', color: '#fff', rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button 
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(221, 123, 223, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
