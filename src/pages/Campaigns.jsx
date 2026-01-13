import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  MapPin,
  Target,
  Clock,
  Users,
  AlertCircle,
  Loader,
  Plus
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { getAllCampaigns } from '../services/campaignService'

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([])
  const [filteredCampaigns, setFilteredCampaigns] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedUrgency, setSelectedUrgency] = useState('')

  const categories = [
    'Healthcare',
    'Emergency Relief', 
    'Education',
    'Environment',
    'Community Development',
    'Animal Welfare',
    'Disaster Relief',
    'Human Rights',
    'Arts & Culture',
    'Technology',
    'Sports',
    'Other'
  ]

  const urgencyLevels = [
    { value: 'critical', label: 'Critical', color: 'red' },
    { value: 'high', label: 'High', color: 'orange' },
    { value: 'medium', label: 'Medium', color: 'yellow' },
    { value: 'low', label: 'Low', color: 'green' }
  ]

  useEffect(() => {
    fetchCampaigns()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [campaigns, searchTerm, selectedCategory, selectedUrgency])

  const fetchCampaigns = async () => {
    try {
      setLoading(true)
      setError('')
      
      const fetchedCampaigns = await getAllCampaigns()
      console.log('Fetched campaigns:', fetchedCampaigns)
      
      setCampaigns(fetchedCampaigns)
    } catch (err) {
      console.error('Error fetching campaigns:', err)
      setError(err.message || 'Failed to load campaigns')
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    let filtered = campaigns

    if (searchTerm) {
      filtered = filtered.filter(campaign =>
        campaign.campaignTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        campaign.shortDescription?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        campaign.location?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter(campaign => campaign.category === selectedCategory)
    }

    if (selectedUrgency) {
      filtered = filtered.filter(campaign => campaign.urgencyLevel === selectedUrgency)
    }

    setFilteredCampaigns(filtered)
  }

  const calculateDaysRemaining = (createdAt, duration) => {
    if (!createdAt || !duration) return 0
    
    const startDate = new Date(createdAt)
    const durationDays = parseInt(duration.split(' ')[0])
    const endDate = new Date(startDate.getTime() + (durationDays * 24 * 60 * 60 * 1000))
    const now = new Date()
    const timeDiff = endDate.getTime() - now.getTime()
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
    
    return Math.max(0, daysDiff)
  }

  const calculateProgress = (raised, target) => {
    if (!target || target === 0) return 0
    return Math.min(100, (raised / target) * 100)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="h-8 w-8 animate-spin text-primary-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading campaigns...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Campaigns</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and support campaigns that are making a difference in communities worldwide
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-end mb-6"
        >
          <Link
            to="/create-campaign"
            className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg"
          >
            <Plus className="h-5 w-5" />
            <span>Create Campaign</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8"
        >
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search campaigns..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter by Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category === selectedCategory ? '' : category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter by Urgency
              </label>
              <div className="flex flex-wrap gap-2">
                {urgencyLevels.map((urgency) => (
                  <button
                    key={urgency.value}
                    onClick={() => setSelectedUrgency(urgency.value === selectedUrgency ? '' : urgency.value)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      selectedUrgency === urgency.value
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {urgency.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing {filteredCampaigns.length} of {campaigns.length} campaigns
            </p>
          </div>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8"
          >
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <p className="text-red-700">{error}</p>
            </div>
          </motion.div>
        )}

        {filteredCampaigns.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCampaigns.map((campaign, index) => {
              const progress = calculateProgress(campaign.raisedAmount || 0, campaign.targetAmount)
              const daysRemaining = calculateDaysRemaining(campaign.createdAt, campaign.campaignDuration)
              
              return (
                <motion.div
                  key={campaign._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 bg-gray-200">
                    {campaign.campaignImages && campaign.campaignImages.length > 0 ? (
                      <div className="flex items-center justify-center h-full bg-primary-50">
                        <Target className="h-16 w-16 text-primary-300" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Target className="h-16 w-16 text-gray-400" />
                      </div>
                    )}
                    
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        campaign.urgencyLevel === 'critical' ? 'bg-red-100 text-red-700' :
                        campaign.urgencyLevel === 'high' ? 'bg-orange-100 text-orange-700' :
                        campaign.urgencyLevel === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-primary-100 text-primary-700'
                      }`}>
                        {urgencyLevels.find(u => u.value === campaign.urgencyLevel)?.label || campaign.urgencyLevel}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        {campaign.status || 'Active'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {campaign.campaignTitle}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {campaign.shortDescription}
                    </p>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-700">
                          ৳{(campaign.raisedAmount || 0).toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500">
                          {progress.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Goal: ৳{campaign.targetAmount?.toLocaleString()}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <Users className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                        <p className="text-sm font-semibold text-gray-900">{campaign.donorsCount || 0}</p>
                        <p className="text-xs text-gray-500">Donors</p>
                      </div>
                      <div className="text-center">
                        <Clock className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                        <p className="text-sm font-semibold text-gray-900">{daysRemaining}</p>
                        <p className="text-xs text-gray-500">Days left</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {campaign.location}
                      </span>
                      <span className="flex items-center">
                        <Target className="h-3 w-3 mr-1" />
                        {campaign.category}
                      </span>
                    </div>

                    <Link
                      to={`/campaign/${campaign._id}`}
                      className="w-full bg-primary-600 text-white py-2 rounded-xl font-semibold hover:bg-primary-700 transition-all text-center block"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center py-16"
          >
            <Target className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Campaigns Found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || selectedCategory || selectedUrgency
                ? 'No campaigns match your current filters.'
                : 'No campaigns have been created yet.'}
            </p>
            <Link
              to="/create-campaign"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all"
            >
              <Plus className="h-5 w-5" />
              <span>Create First Campaign</span>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Campaigns
