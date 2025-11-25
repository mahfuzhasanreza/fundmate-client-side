import React from 'react'
import { Wallet, TrendingUp, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      icon: <Wallet className="h-12 w-12" />,
      title: 'Peer-to-Peer Loans',
      description: 'Access personal loans from your trusted community with competitive interest rates.',
      features: [
        'Flexible loan amounts',
        'Competitive interest rates',
        'Digital loan agreements',
        'Automated repayment tracking',
        'Multiple offer selection'
      ],
      gradient: 'from-primary-500 to-primary-600',
      image: '💰'
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Crowdfunding Campaigns',
      description: 'Raise funds for your goals through community-supported crowdfunding campaigns.',
      features: [
        'Easy campaign creation',
        'Real-time progress tracking',
        'Multiple payment options',
        'Campaign transparency',
        'Admin approval for trust'
      ],
      gradient: 'from-secondary-500 to-secondary-600',
      image: '📊'
    }
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Choose the service that fits your needs. Whether you need a loan or want to raise funds for a cause.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)" }}
            >
              {/* Header */}
              <motion.div 
                className={`bg-gradient-to-r ${service.gradient} p-8 text-white`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.image}
                </motion.div>
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-white/90 text-lg">
                  {service.description}
                </p>
              </motion.div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                        <ArrowRight className="h-4 w-4 text-primary-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button 
                  className="w-full btn-outline"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
