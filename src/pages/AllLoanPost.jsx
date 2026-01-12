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
}