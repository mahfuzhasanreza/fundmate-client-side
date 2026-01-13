import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Percent, Calendar, CheckCircle, TrendingUp } from 'lucide-react'

const FeaturedLoans = () => {
  const loans = [
    {
      id: 1,
      title: 'Small Business Expansion',
      borrower: 'Tech Solutions Inc.',
      amount: 50000,
      funded: 37500,
      interestRate: 8.5,
      term: 36,
      riskLevel: 'Low',
      purpose: 'Business',
      description: 'Expanding operations and hiring new team members.',
      verified: true,
      creditScore: 'A+',
      lenders: 45
    },
    {
      id: 2,
      title: 'Home Improvement Loan',
      borrower: 'John Martinez',
      amount: 25000,
      funded: 20000,
      interestRate: 7.2,
      term: 24,
      riskLevel: 'Low',
      purpose: 'Home',
      description: 'Kitchen renovation and energy-efficient upgrades.',
      verified: true,
      creditScore: 'A',
      lenders: 32
    },
    {
      id: 3,
      title: 'Education Financing',
      borrower: 'Emily Chen',
      amount: 15000,
      funded: 12000,
      interestRate: 6.5,
      term: 48,
      riskLevel: 'Very Low',
      purpose: 'Education',
      description: 'Master\'s degree program in Data Science.',
      verified: true,
      creditScore: 'A+',
      lenders: 28
    },
    {
      id: 4,
      title: 'Vehicle Purchase',
      borrower: 'David Wilson',
      amount: 20000,
      funded: 15000,
      interestRate: 9.0,
      term: 30,
      riskLevel: 'Medium',
      purpose: 'Auto',
      description: 'Purchasing a reliable vehicle for work commute.',
      verified: true,
      creditScore: 'B+',
      lenders: 24
    }
  ]

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Very Low':
        return 'bg-primary-100 text-primary-700'
      case 'Low':
        return 'bg-blue-100 text-blue-700'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

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
    <section className="py-16 md:py-24 bg-white">
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
            className="inline-block bg-secondary-100 text-secondary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            💰 Featured Loan Requests
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Invest in <span className="text-primary-600">Opportunities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fund peer-to-peer loans and earn competitive returns while helping others achieve their goals
          </p>
        </motion.div>

        {/* Loans Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {loans.map((loan) => {
            const progress = (loan.funded / loan.amount) * 100

            return (
              <motion.div
                key={loan.id}
                variants={cardVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-gray-100"
              >
                {/* Loan Header */}
                <div className="bg-gradient-to-br from-secondary-100 to-primary-100 p-6 relative">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRiskColor(loan.riskLevel)}`}>
                      {loan.riskLevel} Risk
                    </span>
                    {loan.verified && (
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle className="h-5 w-5 text-primary-600" />
                      </motion.div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
                    {loan.title}
                  </h3>
                  <p className="text-sm text-gray-600">{loan.borrower}</p>
                </div>

                {/* Loan Details */}
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {loan.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-gray-900">
                        ৳{loan.funded.toLocaleString()}
                      </span>
                      <span className="text-gray-600">
                        of ৳{loan.amount.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-secondary-600 to-secondary-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>

                  {/* Loan Stats */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Percent className="h-4 w-4" />
                        <span>Interest Rate</span>
                      </div>
                      <span className="font-semibold text-gray-900">{loan.interestRate}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Term</span>
                      </div>
                      <span className="font-semibold text-gray-900">{loan.term} months</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <TrendingUp className="h-4 w-4" />
                        <span>Credit Score</span>
                      </div>
                      <span className="font-semibold text-primary-600">{loan.creditScore}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{loan.lenders} lenders</span>
                    <span className="text-xs font-semibold text-secondary-600">{loan.purpose}</span>
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
            View All Loan Requests
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedLoans
