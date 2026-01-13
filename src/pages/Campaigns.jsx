import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Heart, 
  Users, 
  Target, 
  Calendar, 
  MapPin, 
  TrendingUp,
  Eye,
  Share2,
  DollarSign,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  X,
  CreditCard,
  Gift,
  Award,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Campaigns = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('recent')
  const [selectedCampaign, setSelectedCampaign] = useState(null)
  const [showDonationModal, setShowDonationModal] = useState(false)
  const [donationAmount, setDonationAmount] = useState('')
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Dummy campaigns data
  const campaigns = [
    {
      id: 'CMP-2024-001',
      title: 'Help Build Clean Water Wells in Rural Africa',
      description: 'Providing clean drinking water to communities in need across rural villages in Kenya and Tanzania.',
      story: 'Access to clean water is a basic human right, yet millions of people in rural Africa still lack this essential resource. Our mission is to build sustainable water wells that will serve communities for decades to come. Each well can serve up to 500 people and dramatically reduces waterborne diseases. The project includes training local technicians for maintenance and establishing water committees for long-term sustainability.',
      category: 'Healthcare',
      targetAmount: 50000,
      raisedAmount: 32500,
      progress: 65,
      daysLeft: 45,
      location: 'Kenya, Tanzania',
      organizer: {
        name: 'Water For Life Foundation',
        avatar: '🌊',
        verified: true,
        rating: 4.9
      },
      images: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
        'https://images.unsplash.com/photo-1594736797933-d0c9a8451cf8?w=800',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
      ],
      donorsCount: 234,
      topDonors: [
        { name: 'Anonymous', amount: 1000, avatar: '🤝' },
        { name: 'Sarah Johnson', amount: 750, avatar: '👩‍💼' },
        { name: 'Michael Chen', amount: 500, avatar: '👨‍💼' },
        { name: 'Emily Rodriguez', amount: 500, avatar: '👩‍🎓' }
      ],
      recentDonors: [
        { name: 'David Wilson', amount: 25, time: '2 hours ago', avatar: '👨‍🔧' },
        { name: 'Lisa Martinez', amount: 50, time: '5 hours ago', avatar: '👩‍💻' },
        { name: 'Robert Davis', amount: 100, time: '1 day ago', avatar: '👨‍💼' }
      ],
      createdDate: '2024-10-15',
      urgency: 'high'
    },
    {
      id: 'CMP-2024-002', 
      title: 'Emergency Relief for Natural Disaster Victims',
      description: 'Providing immediate aid including food, shelter, and medical supplies to families affected by recent flooding.',
      story: 'The recent floods have devastated entire communities, leaving thousands of families without homes, clean water, or basic necessities. Our emergency relief fund provides immediate assistance including emergency shelter materials, clean water, food packages, medical supplies, and clothing. We work directly with local emergency response teams to ensure aid reaches those who need it most quickly and efficiently.',
      category: 'Emergency Relief',
      targetAmount: 75000,
      raisedAmount: 58200,
      progress: 78,
      daysLeft: 30,
      location: 'Philippines',
      organizer: {
        name: 'Global Emergency Response',
        avatar: '🚨',
        verified: true,
        rating: 4.8
      },
      images: [
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800'
      ],
      donorsCount: 456,
      topDonors: [
        { name: 'Anonymous', amount: 2000, avatar: '🤝' },
        { name: 'Community Fund', amount: 1500, avatar: '🏢' },
        { name: 'Maria Santos', amount: 1000, avatar: '👩‍⚕️' }
      ],
      recentDonors: [
        { name: 'Carlos Rodriguez', amount: 200, time: '30 minutes ago', avatar: '👨‍🎓' },
        { name: 'Anna Kim', amount: 150, time: '1 hour ago', avatar: '👩‍🔬' }
      ],
      createdDate: '2024-11-01',
      urgency: 'urgent'
    },
    {
      id: 'CMP-2024-003',
      title: 'Education Fund for Underprivileged Children',
      description: 'Providing scholarships, school supplies, and educational resources to children in underserved communities.',
      story: 'Education is the key to breaking the cycle of poverty. This fund supports children who would otherwise be unable to attend school due to financial constraints. We provide full scholarships covering tuition, books, uniforms, and school supplies. Additionally, we support after-school tutoring programs and computer literacy classes to ensure students have the tools they need to succeed in the modern world.',
      category: 'Education',
      targetAmount: 30000,
      raisedAmount: 18750,
      progress: 63,
      daysLeft: 60,
      location: 'India',
      organizer: {
        name: 'Bright Future Education',
        avatar: '📚',
        verified: true,
        rating: 4.7
      },
      images: [
        'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
        'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800'
      ],
      donorsCount: 189,
      topDonors: [
        { name: 'Education Trust', amount: 2500, avatar: '🎓' },
        { name: 'John Smith', amount: 1000, avatar: '👨‍🏫' },
        { name: 'Linda Chang', amount: 800, avatar: '👩‍🏫' }
      ],
      recentDonors: [
        { name: 'Peter Johnson', amount: 50, time: '3 hours ago', avatar: '👨‍💻' },
        { name: 'Amy Wilson', amount: 75, time: '6 hours ago', avatar: '👩‍⚖️' }
      ],
      createdDate: '2024-09-20',
      urgency: 'medium'
    },
    {
      id: 'CMP-2024-004',
      title: 'Wildlife Conservation Project',
      description: 'Protecting endangered species and their habitats through conservation efforts and community education.',
      story: 'Our planet\'s biodiversity is under threat, with species disappearing at an unprecedented rate. This conservation project focuses on protecting critical habitats, supporting anti-poaching efforts, and educating local communities about the importance of wildlife conservation. We work with park rangers, local governments, and communities to create sustainable conservation strategies that benefit both wildlife and people.',
      category: 'Environment',
      targetAmount: 40000,
      raisedAmount: 25600,
      progress: 64,
      daysLeft: 75,
      location: 'Costa Rica',
      organizer: {
        name: 'Wildlife Protection Alliance',
        avatar: '🦎',
        verified: true,
        rating: 4.9
      },
      images: [
        'https://images.unsplash.com/photo-1441154834314-0f592ac4f4f6?w=800',
        'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800'
      ],
      donorsCount: 312,
      topDonors: [
        { name: 'Green Earth Foundation', amount: 3000, avatar: '🌍' },
        { name: 'Alex Turner', amount: 1200, avatar: '👨‍🔬' },
        { name: 'Nature Lovers Club', amount: 1000, avatar: '🌱' }
      ],
      recentDonors: [
        { name: 'Sophie Brown', amount: 40, time: '4 hours ago', avatar: '👩‍🌾' },
        { name: 'Mark Davis', amount: 80, time: '8 hours ago', avatar: '👨‍🎨' }
      ],
      createdDate: '2024-08-10',
      urgency: 'low'
    }
  ]

  const categories = ['all', 'Healthcare', 'Emergency Relief', 'Education', 'Environment', 'Community Development']

  const urgencyColors = {
    urgent: 'bg-red-100 text-red-700',
    high: 'bg-orange-100 text-orange-700', 
    medium: 'bg-yellow-100 text-yellow-700',
    low: 'bg-primary-100 text-primary-700'
  }

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.organizer.name.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || campaign.category === selectedCategory
    
    return matchesSearch && matchesCategory
  }).sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.createdDate) - new Date(a.createdDate)
      case 'amount-high':
        return b.targetAmount - a.targetAmount
      case 'amount-low':
        return a.targetAmount - b.targetAmount
      case 'progress':
        return b.progress - a.progress
      case 'ending-soon':
        return a.daysLeft - b.daysLeft
      default:
        return 0
    }
  })

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const handleDonate = () => {
    setShowDonationModal(true)
  }

  const handleDonationSubmit = (e) => {
    e.preventDefault()
    // Handle donation logic here
    console.log('Donation submitted:', donationAmount)
    setShowDonationModal(false)
    setDonationAmount('')
  }

  const nextImage = () => {
    if (selectedCampaign) {
      setSelectedImageIndex((prev) => 
        prev === selectedCampaign.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedCampaign) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedCampaign.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Meaningful Causes</h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Make a difference in the world by supporting campaigns that create positive impact in communities
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/create-campaign')}
              className="flex items-center space-x-3 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg"
            >
              <Gift className="h-5 w-5" />
              <span>Create Campaign</span>
            </motion.button>
          </div>
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
                  placeholder="Search campaigns by title, category, or organizer..."
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
                <option value="amount-high">Highest Target</option>
                <option value="amount-low">Lowest Target</option>
                <option value="progress">Most Progress</option>
                <option value="ending-soon">Ending Soon</option>
              </select>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredCampaigns.length}</span> campaigns
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span>Urgent</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span>High Priority</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                <span>Standard</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer group"
              onClick={() => setSelectedCampaign(campaign)}
            >
              {/* Campaign Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={campaign.images[0]}
                  alt={campaign.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${urgencyColors[campaign.urgency]}`}>
                    {campaign.urgency === 'urgent' ? 'Urgent' : campaign.urgency === 'high' ? 'High Priority' : campaign.urgency === 'medium' ? 'Medium' : 'Standard'}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all">
                    <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
              </div>

              {/* Campaign Content */}
              <div className="p-6">
                {/* Organizer */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="text-2xl">{campaign.organizer.avatar}</div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <h4 className="font-semibold text-sm text-gray-900">{campaign.organizer.name}</h4>
                      {campaign.organizer.verified && (
                        <CheckCircle className="h-4 w-4 text-primary-500" />
                      )}
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Star className="h-3 w-3 text-yellow-400 mr-1" />
                      <span>{campaign.organizer.rating}</span>
                      <span className="mx-1">•</span>
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{campaign.location}</span>
                    </div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {campaign.description}
                </p>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-semibold text-primary-600">{campaign.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${campaign.progress}%` }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                    />
                  </div>
                </div>

                {/* Funding Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-600">Raised</p>
                    <p className="text-lg font-bold text-primary-600">৳{campaign.raisedAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Goal</p>
                    <p className="text-lg font-bold text-gray-900">৳{campaign.targetAmount.toLocaleString()}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{campaign.donorsCount} donors</span>
                  </div>
                  <div className="flex items-center text-orange-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{campaign.daysLeft} days left</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-secondary-100 text-secondary-700">
                    <Target className="h-3 w-3 mr-1" />
                    {campaign.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatDate(campaign.createdDate)}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedCampaign(campaign)
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-all group-hover:shadow-lg"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCampaigns.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No campaigns found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}
      </div>

      {/* Campaign Details Modal */}
      <AnimatePresence>
        {selectedCampaign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCampaign(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-full">
                {/* Left Side - Images and Details */}
                <div className="flex-1 overflow-y-auto">
                  {/* Image Gallery */}
                  <div className="relative h-64 bg-gray-200">
                    <img
                      src={selectedCampaign.images[selectedImageIndex]}
                      alt={selectedCampaign.title}
                      className="w-full h-full object-cover"
                    />
                    {selectedCampaign.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {selectedCampaign.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedImageIndex(index)}
                              className={`w-2 h-2 rounded-full ${
                                index === selectedImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    <button
                      onClick={() => setSelectedCampaign(null)}
                      className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Campaign Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${urgencyColors[selectedCampaign.urgency]}`}>
                        {selectedCampaign.urgency === 'urgent' ? 'Urgent' : selectedCampaign.urgency === 'high' ? 'High Priority' : selectedCampaign.urgency === 'medium' ? 'Medium' : 'Standard'}
                      </span>
                      <span className="text-xs text-gray-500">{formatDate(selectedCampaign.createdDate)}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{selectedCampaign.title}</h2>

                    {/* Organizer Info */}
                    <div className="flex items-center space-x-3 mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-3xl">{selectedCampaign.organizer.avatar}</div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-gray-900">{selectedCampaign.organizer.name}</h4>
                          {selectedCampaign.organizer.verified && (
                            <CheckCircle className="h-5 w-5 text-primary-500" />
                          )}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>{selectedCampaign.organizer.rating}</span>
                          <span className="mx-2">•</span>
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{selectedCampaign.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Story */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Story</h3>
                      <p className="text-gray-700 leading-relaxed">{selectedCampaign.story}</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Donation Panel */}
                <div className="w-80 bg-gray-50 border-l border-gray-200 overflow-y-auto">
                  <div className="p-6">
                    {/* Progress Section */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold text-primary-600">
                          ৳{selectedCampaign.raisedAmount.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-600">
                          {selectedCampaign.progress}%
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        raised of ৳{selectedCampaign.targetAmount.toLocaleString()} goal
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full"
                          style={{ width: `${selectedCampaign.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mt-3">
                        <span>{selectedCampaign.donorsCount} donors</span>
                        <span>{selectedCampaign.daysLeft} days left</span>
                      </div>
                    </div>

                    {/* Donation Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleDonate}
                      className="w-full bg-primary-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg mb-6"
                    >
                      Donate Now
                    </motion.button>

                    {/* Top Donors */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-yellow-500" />
                        Top Donors
                      </h4>
                      <div className="space-y-3">
                        {selectedCampaign.topDonors.map((donor, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-white rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="text-lg">{donor.avatar}</div>
                              <span className="font-medium text-gray-900">{donor.name}</span>
                            </div>
                            <span className="font-semibold text-primary-600">৳{donor.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Donors */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Users className="h-5 w-5 mr-2 text-blue-500" />
                        Recent Donors
                      </h4>
                      <div className="space-y-2">
                        {selectedCampaign.recentDonors.map((donor, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-white rounded-lg">
                            <div className="flex items-center space-x-2">
                              <div className="text-sm">{donor.avatar}</div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{donor.name}</p>
                                <p className="text-xs text-gray-600">{donor.time}</p>
                              </div>
                            </div>
                            <span className="text-sm font-semibold text-primary-600">৳{donor.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Donation Modal */}
      <AnimatePresence>
        {showDonationModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowDonationModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Gift className="h-6 w-6 mr-2 text-primary-600" />
                Make a Donation
              </h3>
              
              <form onSubmit={handleDonationSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Donation Amount (৳)
                  </label>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="Enter amount"
                    min="1"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 outline-none transition-all text-lg font-semibold"
                  />
                </div>

                {/* Quick Amount Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  {[25, 50, 100].map(amount => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setDonationAmount(amount.toString())}
                      className="py-2 px-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all text-sm font-semibold"
                    >
                      ৳{amount}
                    </button>
                  ))}
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowDonationModal(false)}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all flex items-center justify-center space-x-2"
                  >
                    <CreditCard className="h-4 w-4" />
                    <span>Donate</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Campaigns