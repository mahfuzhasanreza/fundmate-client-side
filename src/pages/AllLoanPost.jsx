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
    },]
}  