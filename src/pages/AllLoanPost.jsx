import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  DollarSign, 
  Calendar, 
  User, 
  MapPin, 
  Star, 
  Clock, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Eye,
  Heart,
  MessageSquare,
  Shield,
  Target,
  Loader
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { getAllLoanRequests, getLoanRequestsByStatus } from '../services/loanService'

const AllLoanPost = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('recent')
  const [showFilters, setShowFilters] = useState(false)
  const [loanPosts, setLoanPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Fetch loan requests from API
  useEffect(() => {
    fetchLoanRequests()
    
    // Direct API test
    const testDirectFetch = async () => {
      try {
        console.log('🧪 Direct API test...')
        const response = await fetch('http://localhost:5000/api/loan-requests')
        const data = await response.json()
        console.log('🧪 Direct fetch result:', {
          status: response.status,
          statusText: response.statusText,
          data
        })
      } catch (error) {
        console.log('🧪 Direct fetch error:', error)
      }
    }
    
    testDirectFetch()
  }, [selectedCategory])

  const fetchLoanRequests = async () => {
    try {
      setLoading(true)
      setError('')
      
      console.log('🔄 Starting fetch with category:', selectedCategory)
      
      let data
      if (selectedCategory === 'all') {
        console.log('📡 Fetching all loan requests...')
        data = await getAllLoanRequests()
      } else {
        console.log('🏷️ Filtering by category:', selectedCategory)
        // Filter by status if needed
        data = await getLoanRequestsByStatus(selectedCategory)
      }

      console.log('📥 API Response received:', {
        type: typeof data,
        isArray: Array.isArray(data),
        length: data?.length,
        firstItem: data?.[0]
      })
      
      // Ensure data is an array
      const loansArray = Array.isArray(data) ? data : []
      console.log('💾 Setting loan posts:', loansArray.length, 'items')
      setLoanPosts(loansArray)
    } catch (err) {
      console.error('❌ Failed to fetch loan requests:', err)
      setError('Failed to load loan requests. Please try again.')
      setLoanPosts([])
    } finally {
      setLoading(false)
    }
  }

  // Dummy loan data (fallback - remove this after API integration is confirmed)
  const dummyLoanPosts = [
    {
      id: 'LN-2024-001',
      title: 'Small Business Expansion Loan',
      amount: 15000,
      purpose: 'Business Expansion',
      description: 'Looking to expand my bakery business by purchasing new equipment and hiring additional staff...',
      tenure: 24,
      preferredInterest: 8.5,
      postedDate: '2024-11-15',
      deadline: '2024-12-15',
      status: 'active',
      offersCount: 8,
      viewsCount: 142,
      borrower: {
        name: 'Sarah Johnson',
        avatar: '👩‍💼',
        rating: 4.8,
        verified: true,
        location: 'New York, NY',
        successfulLoans: 5
      },
      hasCollateral: true,
      urgency: 'medium'
    },
    {
      id: 'LN-2024-002',
      title: 'Medical Emergency Fund',
      amount: 8000,
      purpose: 'Medical Emergency',
      description: 'Urgent medical treatment required. Looking for quick funding with flexible repayment terms...',
      tenure: 18,
      preferredInterest: 6.0,
      postedDate: '2024-11-20',
      deadline: '2024-12-05',
      status: 'urgent',
      offersCount: 12,
      viewsCount: 89,
      borrower: {
        name: 'Michael Chen',
        avatar: '👨‍⚕️',
        rating: 4.9,
        verified: true,
        location: 'Los Angeles, CA',
        successfulLoans: 3
      },
      hasCollateral: false,
      urgency: 'high'
    },
    {
      id: 'LN-2024-003',
      title: 'Education Loan for Master\'s Degree',
      amount: 25000,
      purpose: 'Education',
      description: 'Pursuing MBA from top university. Excellent academic record and job prospects...',
      tenure: 48,
      preferredInterest: 7.2,
      postedDate: '2024-11-18',
      deadline: '2024-12-20',
      status: 'active',
      offersCount: 6,
      viewsCount: 67,
      borrower: {
        name: 'Emily Rodriguez',
        avatar: '👩‍🎓',
        rating: 4.6,
        verified: true,
        location: 'Boston, MA',
        successfulLoans: 2
      },
      hasCollateral: false,
      urgency: 'low'
    },
    {
      id: 'LN-2024-004',
      title: 'Home Improvement Project',
      amount: 12000,
      purpose: 'Home Improvement',
      description: 'Kitchen renovation and energy-efficient upgrades. Property value increase guaranteed...',
      tenure: 36,
      preferredInterest: 8.8,
      postedDate: '2024-11-22',
      deadline: '2024-12-18',
      status: 'active',
      offersCount: 4,
      viewsCount: 34,
      borrower: {
        name: 'David Wilson',
        avatar: '👨‍🔧',
        rating: 4.7,
        verified: true,
        location: 'Chicago, IL',
        successfulLoans: 7
      },
      hasCollateral: true,
      urgency: 'medium'
    },
    {
      id: 'LN-2024-005',
      title: 'Vehicle Purchase Loan',
      amount: 18000,
      purpose: 'Vehicle Purchase',
      description: 'Need reliable transportation for work. Steady income and excellent credit history...',
      tenure: 30,
      preferredInterest: 9.1,
      postedDate: '2024-11-19',
      deadline: '2024-12-10',
      status: 'active',
      offersCount: 9,
      viewsCount: 78,
      borrower: {
        name: 'Lisa Martinez',
        avatar: '👩‍💻',
        rating: 4.9,
        verified: true,
        location: 'Miami, FL',
        successfulLoans: 4
      },
      hasCollateral: true,
      urgency: 'medium'
    },
    {
      id: 'LN-2024-006',
      title: 'Debt Consolidation Loan',
      amount: 20000,
      purpose: 'Debt Consolidation',
      description: 'Consolidating multiple debts into single payment. Improved cash flow expected...',
      tenure: 42,
      preferredInterest: 7.8,
      postedDate: '2024-11-21',
      deadline: '2024-12-25',
      status: 'active',
      offersCount: 7,
      viewsCount: 95,
      borrower: {
        name: 'Robert Davis',
        avatar: '👨‍💼',
        rating: 4.5,
        verified: false,
        location: 'Dallas, TX',
        successfulLoans: 1
      },
      hasCollateral: false,
      urgency: 'low'
    }
  ]

  const categories = [
    'all',
    'Business Expansion',
    'Medical Emergency', 
    'Education',
    'Home Improvement',
    'Vehicle Purchase',
    'Debt Consolidation'
  ]

  const urgencyColors = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-yellow-100 text-yellow-700',
    low: 'bg-primary-100 text-primary-700'
  }

  // Ensure loanPosts is always an array before filtering
  const safeLoansArray = Array.isArray(loanPosts) ? loanPosts : []
  console.log('🔄 Processing loans:', {
    originalType: typeof loanPosts,
    originalLength: loanPosts?.length,
    safeArrayLength: safeLoansArray.length,
    sampleLoan: safeLoansArray[0]
  })

  const filteredLoans = safeLoansArray.filter(loan => {
    // Add safety checks for loan properties
    const title = loan?.loanTitle || loan?.title || ''
    const purpose = loan?.purpose || ''
    const borrowerName = loan?.userEmail || loan?.borrower?.name || ''
    
    const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         borrowerName.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || purpose === selectedCategory
    
    return matchesSearch && matchesCategory
  }).sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.createdAt || b.postedDate) - new Date(a.createdAt || a.postedDate)
      case 'amount-high':
        return (b.loanAmount || b.amount) - (a.loanAmount || a.amount)
      case 'amount-low':
        return (a.loanAmount || a.amount) - (b.loanAmount || b.amount)
      case 'interest-low':
        return (a.interestRate || a.preferredInterest || 0) - (b.interestRate || b.preferredInterest || 0)
      case 'deadline':
        return new Date(a.deadline || a.createdAt) - new Date(b.deadline || b.createdAt)
      default:
        return 0
    }
  })

  console.log('🎯 Filtered results:', {
    totalLoans: safeLoansArray.length,
    filteredCount: filteredLoans.length,
    searchTerm,
    selectedCategory,
    filteredLoans: filteredLoans.slice(0, 3) // Show first 3 for debugging
  })

  const calculateMonthlyPayment = (principal, rate, months) => {
    const monthlyRate = rate / 100 / 12
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    return payment.toFixed(2)
  }

  const getDaysLeft = (deadline) => {
    const days = Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24))
    return days > 0 ? days : 0
  }

  const handleLoanClick = (loanId) => {
    navigate(`/loan/${loanId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Loan Requests</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Discover investment opportunities and help others achieve their financial goals
          </p>
          
          {/* Request Loan Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/loan-request')}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            <DollarSign className="h-5 w-5" />
            <span>Request a Loan</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search loans by title, purpose, or borrower..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all cursor-pointer"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all cursor-pointer"
              >
                <option value="recent">Most Recent</option>
                <option value="amount-high">Highest Amount</option>
                <option value="amount-low">Lowest Amount</option>
                <option value="interest-low">Lowest Interest</option>
                <option value="deadline">Deadline Soon</option>
              </select>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredLoans.length}</span> loan requests
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span>Urgent</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span>Medium</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                <span>Low Priority</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader className="h-12 w-12 text-primary-600 animate-spin mb-4" />
            <p className="text-gray-600 font-semibold">Loading loan requests...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-xl p-6 text-center"
          >
            <p className="text-red-600 font-semibold">{error}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={fetchLoanRequests}
              className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all"
            >
              Try Again
            </motion.button>
          </motion.div>
        )}

        {/* Loan Cards Grid */}
        {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredLoans.map((loan, index) => (
            <motion.div
              key={loan._id || loan.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              onClick={() => handleLoanClick(loan._id || loan.id)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer group"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{loan.borrower?.avatar || '👤'}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 flex items-center">
                        {loan.borrower?.name || loan.userEmail?.split('@')[0] || 'Unknown User'}
                        {loan.borrower?.verified && (
                          <CheckCircle className="h-4 w-4 text-primary-500 ml-2" />
                        )}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 mr-1" />
                          <span className="text-gray-600">{loan.borrower?.rating || '4.5'}</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{loan.borrower?.location || 'Location not specified'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${urgencyColors[loan.urgency || 'low']}`}>
                      {loan.urgency === 'high' ? 'Urgent' : loan.urgency === 'medium' ? 'Medium' : 'Standard'}
                    </span>
                    {(loan.hasCollateral || loan.collateralNotes) && (
                      <div className="flex items-center text-xs text-primary-600">
                        <Shield className="h-3 w-3 mr-1" />
                        <span>Collateral</span>
                      </div>
                    )}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {loan.loanTitle || loan.title || 'Loan Request'}
                </h2>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {loan.description || loan.collateralNotes || 'No description available'}
                </p>

                {/* Loan Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-primary-50 rounded-lg">
                    <DollarSign className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                    <p className="text-lg font-bold text-gray-900">৳{(loan.loanAmount || loan.amount || 0).toLocaleString()}</p>
                    <p className="text-xs text-gray-600">Amount</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                    <p className="text-lg font-bold text-gray-900">
                      {loan.preferredTenure || `${loan.tenure || 0}m`}
                    </p>
                    <p className="text-xs text-gray-600">Tenure</p>
                  </div>
                </div>

                {/* Interest and Monthly Payment */}
                <div className="flex justify-between items-center mb-4 p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">Preferred Rate</p>
                    <p className="font-bold text-gray-900">{loan.interestRate || loan.preferredInterest || 0}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Monthly Payment*</p>
                    <p className="font-bold text-primary-600">
                      ৳{calculateMonthlyPayment(
                        loan.loanAmount || loan.amount || 0, 
                        loan.interestRate || loan.preferredInterest || 0, 
                        loan.tenure || 12
                      )}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{loan.viewsCount || 0}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span>{loan.offersCount || 0} offers</span>
                    </div>
                  </div>
                  <div className="flex items-center text-orange-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{getDaysLeft(loan.deadline || loan.createdAt)} days ago</span>
                  </div>
                </div>

                {/* Purpose Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-secondary-100 text-secondary-700">
                    <Target className="h-3 w-3 mr-1" />
                    {loan.purpose || 'General'}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(loan.createdAt || loan.postedDate || Date.now()).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-all group-hover:shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleLoanClick(loan._id || loan.id)
                  }}
                >
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredLoans.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No loan requests found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}

        {/* Load More Button */}
        {!loading && !error && filteredLoans.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-xl font-semibold hover:bg-primary-600 hover:text-white transition-all"
            >
              Load More Requests
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AllLoanPost