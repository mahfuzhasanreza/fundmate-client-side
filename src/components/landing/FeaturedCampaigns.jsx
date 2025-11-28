import React from 'react'
import { motion } from 'framer-motion'
import { Heart, TrendingUp, Users, Clock } from 'lucide-react'

const FeaturedCampaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: 'Medical Emergency Fund for Sarah',
      category: 'Medical',
      description: 'Help Sarah cover unexpected medical expenses for her surgery.',
      raised: 8500,
      goal: 10000,
      backers: 156,
      daysLeft: 12,
      image: '🏥',
      creator: 'Sarah Johnson'
    },
    {
      id: 2,
      title: 'Community Center Renovation',
      category: 'Community',
      description: 'Renovating our local community center to serve more families.',
      raised: 15000,
      goal: 20000,
      backers: 234,
      daysLeft: 18,
      image: '🏘️',
      creator: 'Community Board'
    },
    {
      id: 3,
      title: 'Educational Scholarship Fund',
      category: 'Education',
      description: 'Supporting underprivileged students to pursue higher education.',
      raised: 12000,
      goal: 15000,
      backers: 189,
      daysLeft: 25,
      image: '🎓',
      creator: 'Education Foundation'
    },
    {
      id: 4,
      title: 'Small Business Startup',
      category: 'Business',
      description: 'Launching an eco-friendly coffee shop in our neighborhood.',
      raised: 18000,
      goal: 25000,
      backers: 267,
      daysLeft: 30,
      image: '☕',
      creator: 'Green Bean Co.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            ✨ Featured Campaigns
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Support Amazing <span className="text-primary-600">Causes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help make a difference by backing campaigns that matter to you and your community
          </p>
        </motion.div>

        {/* Campaigns Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {campaigns.map((campaign) => {
            const progress = (campaign.raised / campaign.goal) * 100

            return (
              <motion.div
                key={campaign.id}
                variants={cardVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                {/* Campaign Image */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative overflow-hidden">
                  <motion.span 
                    className="text-6xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {campaign.image}
                  </motion.span>
                  <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {campaign.category}
                  </span>
                </div>

                {/* Campaign Details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {campaign.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {campaign.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-gray-900">
                        ${campaign.raised.toLocaleString()}
                      </span>
                      <span className="text-gray-600">
                        of ${campaign.goal.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary-600 to-primary-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>

                  {/* Campaign Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{campaign.backers} backers</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{campaign.daysLeft} days left</span>
                    </div>
                  </div>

                  {/* Creator */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">by {campaign.creator}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      <Heart className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button 
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Campaigns
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedCampaigns
