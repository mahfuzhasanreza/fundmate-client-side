import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  DollarSign, 
  Calendar, 
  User, 
  Clock, 
  Target, 
  CheckCircle, 
  Star, 
  MapPin, 
  Briefcase, 
  TrendingUp,
  AlertCircle,
  MessageSquare,
  ArrowLeft,
  Share2,
  Heart,
  Shield,
  Percent
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const LoanDetails = () => {
  const navigate = useNavigate()
  const [showOfferModal, setShowOfferModal] = useState(false)
  const [offerAmount, setOfferAmount] = useState('')
  const [offerInterest, setOfferInterest] = useState('')
  const [offerMessage, setOfferMessage] = useState('')

  // Dummy loan data
  const loanData = {
    id: 'LN-2024-001',
    title: 'Small Business Expansion Loan',
    amount: 15000,
    purpose: 'Business Expansion',
    description: 'Looking to expand my bakery business by purchasing new equipment and hiring additional staff. We have been profitable for 3 years and need funds to meet growing demand.',
    tenure: 24,
    preferredInterest: 8.5,
    repaymentSchedule: 'monthly',
    collateral: 'Business assets and equipment as collateral',
    status: 'active',
    postedDate: '2024-11-15',
    deadline: '2024-12-15',
    currentOffers: 8,
    borrower: {
      name: 'Sarah Johnson',
      avatar: '👩‍💼',
      rating: 4.8,
      totalBorrowed: 45000,
      successfulLoans: 5,
      memberSince: 'Jan 2022',
      location: 'New York, NY',
      occupation: 'Business Owner',
      verified: true
    }
  }

  // Timeline data
  const timeline = [
    {
      id: 1,
      date: '2024-11-15',
      time: '10:30 AM',
      type: 'created',
      title: 'Loan Request Created',
      description: 'Sarah posted this loan request for business expansion',
      icon: Target,
      color: 'text-blue-600'
    },
    {
      id: 2,
      date: '2024-11-16',
      time: '2:15 PM',
      type: 'offer',
      title: 'First Offer Received',
      description: 'John D. offered ৳10,000 at 7.5% interest',
      icon: DollarSign,
      color: 'text-primary-600'
    },
    {
      id: 3,
      date: '2024-11-18',
      time: '9:45 AM',
      type: 'update',
      title: 'Additional Information Added',
      description: 'Borrower uploaded business financial statements',
      icon: CheckCircle,
      color: 'text-primary-600'
    },
    {
      id: 4,
      date: '2024-11-20',
      time: '4:20 PM',
      type: 'offer',
      title: 'New Competitive Offer',
      description: 'Multiple lenders submitted offers',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ]

  // Offers data
  const offers = [
    {
      id: 1,
      lenderName: 'John Martinez',
      lenderAvatar: '👨‍💼',
      lenderRating: 4.9,
      amount: 15000,
      interestRate: 7.5,
      tenure: 24,
      message: 'Great business plan! I\'ve reviewed your financials and I\'m confident in your success.',
      submittedDate: '2024-11-16',
      status: 'pending'
    },
    {
      id: 2,
      lenderName: 'Emily Chen',
      lenderAvatar: '👩‍🎓',
      lenderRating: 4.7,
      amount: 12000,
      interestRate: 8.0,
      tenure: 24,
      message: 'Your bakery has excellent reviews! Happy to support local businesses.',
      submittedDate: '2024-11-18',
      status: 'pending'
    },
    {
      id: 3,
      lenderName: 'Michael Davis',
      lenderAvatar: '👨‍💻',
      lenderRating: 4.8,
      amount: 15000,
      interestRate: 7.8,
      tenure: 20,
      message: 'Shorter tenure with competitive rate. Let\'s discuss terms.',
      submittedDate: '2024-11-20',
      status: 'pending'
    },
    {
      id: 4,
      lenderName: 'Lisa Rodriguez',
      lenderAvatar: '👩‍💼',
      lenderRating: 5.0,
      amount: 10000,
      interestRate: 6.5,
      tenure: 24,
      message: 'Partial funding available at excellent rate. Can combine with other lenders.',
      submittedDate: '2024-11-22',
      status: 'pending'
    }
  ]

  const handleSubmitOffer = (e) => {
    e.preventDefault()
    console.log('Offer submitted:', { offerAmount, offerInterest, offerMessage })
    setShowOfferModal(false)
    setOfferAmount('')
    setOfferInterest('')
    setOfferMessage('')
  }

  const calculateMonthlyPayment = (principal, rate, months) => {
    const monthlyRate = rate / 100 / 12
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    return payment.toFixed(2)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </motion.button>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Share2 className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              <Heart className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Loan Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    ID: {loanData.id}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{loanData.title}</h1>
                  <p className="text-gray-600">{loanData.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  loanData.status === 'active' 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {loanData.status === 'active' ? 'Active' : 'Pending'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-primary-50 rounded-xl">
                  <DollarSign className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">৳{loanData.amount.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Loan Amount</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{loanData.tenure}</p>
                  <p className="text-sm text-gray-600">Months</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <Percent className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{loanData.preferredInterest}%</p>
                  <p className="text-sm text-gray-600">Preferred Rate</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Purpose</p>
                  <p className="text-gray-600">{loanData.purpose}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Repayment</p>
                  <p className="text-gray-600 capitalize">{loanData.repaymentSchedule}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Posted Date</p>
                  <p className="text-gray-600">{new Date(loanData.postedDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Application Deadline</p>
                  <p className="text-gray-600">{new Date(loanData.deadline).toLocaleDateString()}</p>
                </div>
              </div>

              {loanData.collateral && (
                <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Collateral Offered</p>
                      <p className="text-gray-600">{loanData.collateral}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Timeline</h2>
              <div className="space-y-4">
                {timeline.map((event, index) => {
                  const Icon = event.icon
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all"
                    >
                      <div className={`p-2 rounded-lg bg-opacity-10 ${event.color.replace('text-', 'bg-')}`}>
                        <Icon className={`h-5 w-5 ${event.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900">{event.title}</h3>
                          <span className="text-xs text-gray-500">
                            {new Date(event.date).toLocaleDateString()} {event.time}
                          </span>
                        </div>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Offers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Loan Offers ({offers.length})
                </h2>
                <motion.button
                  onClick={() => setShowOfferModal(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all"
                >
                  Submit Loan Offer
                </motion.button>
              </div>

              <div className="space-y-4">
                {offers.map((offer, index) => (
                  <motion.div
                    key={offer.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{offer.lenderAvatar}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{offer.lenderName}</h3>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 mr-1" />
                              <span className="text-sm font-medium text-gray-700">{offer.lenderRating}</span>
                            </div>
                            <span className="text-gray-300">•</span>
                            <span className="text-sm text-gray-500">
                              {new Date(offer.submittedDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        offer.status === 'pending' 
                          ? 'bg-yellow-100 text-yellow-700' 
                          : 'bg-primary-100 text-primary-700'
                      }`}>
                        {offer.status === 'pending' ? 'Pending' : 'Accepted'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Amount</p>
                        <p className="font-bold text-gray-900">৳{offer.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Interest Rate</p>
                        <p className="font-bold text-gray-900">{offer.interestRate}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Tenure</p>
                        <p className="font-bold text-gray-900">{offer.tenure} months</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Monthly Payment</p>
                        <p className="font-bold text-primary-600">
                          ৳{calculateMonthlyPayment(offer.amount, offer.interestRate, offer.tenure)}
                        </p>
                      </div>
                    </div>

                    {offer.message && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start space-x-2">
                          <MessageSquare className="h-4 w-4 text-gray-400 mt-1" />
                          <p className="text-gray-700 text-sm">{offer.message}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>