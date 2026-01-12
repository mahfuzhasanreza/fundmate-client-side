import React, { useState } from 'react'
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
  Target
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const AllLoanPost = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('recent')
  const [showFilters, setShowFilters] = useState(false)

  // Dummy loan data
  const loanPosts = [
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

  const filteredLoans = loanPosts.filter(loan => {
    const matchesSearch = loan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         loan.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         loan.borrower.name.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || loan.purpose === selectedCategory
    
    return matchesSearch && matchesCategory
  }).sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.postedDate) - new Date(a.postedDate)
      case 'amount-high':
        return b.amount - a.amount
      case 'amount-low':
        return a.amount - b.amount
      case 'interest-low':
        return a.preferredInterest - b.preferredInterest
      case 'deadline':
        return new Date(a.deadline) - new Date(b.deadline)
      default:
        return 0
    }
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
        </div>
        </div>
    )}


