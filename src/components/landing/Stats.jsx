import React from 'react'
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const Stats = () => {
  const stats = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      value: '$2.5M+',
      label: 'Total Funded',
      color: 'primary'
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: '10,000+',
      label: 'Active Users',
      color: 'secondary'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: '95%',
      label: 'Success Rate',
      color: 'primary'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: '24/7',
      label: 'Support Available',
      color: 'secondary'
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${stat.color}-100 text-${stat.color}-600 mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {stat.icon}
              </motion.div>
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
