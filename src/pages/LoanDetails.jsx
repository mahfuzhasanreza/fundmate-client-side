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