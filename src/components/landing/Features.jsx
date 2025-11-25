import React from 'react'
import { Shield, Zap, TrendingUp, Users, Lock, Bell } from 'lucide-react'
import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Secure & Transparent',
      description: 'Bank-level encryption and complete transparency in all transactions. Your data and funds are always protected.',
      color: 'primary'
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Instant Processing',
      description: 'Fast loan approval and immediate fund transfers. Get the support you need without unnecessary delays.',
      color: 'secondary'
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: 'Smart Interest Rates',
      description: 'Competitive rates negotiated between peers. Choose the best offer that works for both parties.',
      color: 'primary'
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: 'Community Driven',
      description: 'Built on trust within your community. Connect with people you know and trust for financial support.',
      color: 'secondary'
    },
    {
      icon: <Lock className="h-10 w-10" />,
      title: 'Digital Agreements',
      description: 'Legally binding digital contracts with automated enforcement. Everything documented and secure.',
      color: 'primary'
    },
    {
      icon: <Bell className="h-10 w-10" />,
      title: 'Smart Notifications',
      description: 'Never miss a payment with automated reminders and updates for all loan activities and campaigns.',
      color: 'secondary'
    }
  ]

  return (
    <section id="features" className="py-20 md:py-28 bg-gray-50">
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
            Why Choose{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              FundMate
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Experience the future of peer-to-peer lending and crowdfunding with features designed for trust, transparency, and ease.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-${feature.color}-100 text-${feature.color}-600 mb-6`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
