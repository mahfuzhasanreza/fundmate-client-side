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
}