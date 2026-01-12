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