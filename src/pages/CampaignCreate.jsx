import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Upload, 
  X, 
  DollarSign, 
  Calendar, 
  MapPin, 
  Target, 
  FileText, 
  Image as ImageIcon,
  Plus,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Users,
  Clock,
  Heart,
  Gift
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const CampaignCreate = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    targetAmount: '',
    duration: '',
    location: '',
    shortDescription: '',
    fullStory: '',
    images: [],
    tags: [],
    urgency: 'medium'
  })
  const [imageFiles, setImageFiles] = useState([])
  const [dragOver, setDragOver] = useState(false)
  const [errors, setErrors] = useState({})

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
    { value: 'urgent', label: 'Urgent', description: 'Immediate action required', color: 'red' },
    { value: 'high', label: 'High Priority', description: 'Time-sensitive campaign', color: 'orange' },
    { value: 'medium', label: 'Medium Priority', description: 'Standard timeline', color: 'yellow' },
    { value: 'low', label: 'Standard', description: 'Flexible timeline', color: 'green' }
  ]

  const popularTags = [
    'community', 'education', 'health', 'emergency', 'children', 'elderly',
    'environment', 'sustainability', 'technology', 'innovation', 'local',
    'international', 'volunteer', 'nonprofit', 'charity', 'fundraising'
  ]

  const steps = [
    { id: 1, title: 'Basic Info', description: 'Campaign details' },
    { id: 2, title: 'Story & Media', description: 'Tell your story' },
    { id: 3, title: 'Settings', description: 'Final details' },
    { id: 4, title: 'Preview', description: 'Review & publish' }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }))
    }
  }

  const handleImageUpload = (files) => {
    const newFiles = Array.from(files).slice(0, 5 - imageFiles.length) // Max 5 images
    const newImageFiles = [...imageFiles, ...newFiles]
    setImageFiles(newImageFiles)
    
    // Create preview URLs
    const newImages = newFiles.map(file => ({
      id: Date.now() + Math.random(),
      file,
      url: URL.createObjectURL(file),
      name: file.name
    }))
    
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }))
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    const files = e.dataTransfer.files
    handleImageUpload(files)
  }

  const removeImage = (imageId) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter(img => img.id !== imageId)
    }))
    setImageFiles(prev => prev.filter((_, index) => 
      prev[index].name !== formData.images.find(img => img.id === imageId)?.name
    ))
  }

  const addTag = (tag) => {
    if (!formData.tags.includes(tag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tag]
      }))
    }
  }

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const validateStep = (step) => {
    const newErrors = {}
    
    switch (step) {
      case 1:
        if (!formData.title.trim()) newErrors.title = 'Title is required'
        if (!formData.category) newErrors.category = 'Category is required'
        if (!formData.targetAmount || formData.targetAmount <= 0) newErrors.targetAmount = 'Valid target amount is required'
        if (!formData.duration || formData.duration <= 0) newErrors.duration = 'Campaign duration is required'
        if (!formData.location.trim()) newErrors.location = 'Location is required'
        if (!formData.shortDescription.trim()) newErrors.shortDescription = 'Short description is required'
        break
      case 2:
        if (!formData.fullStory.trim()) newErrors.fullStory = 'Campaign story is required'
        if (formData.images.length === 0) newErrors.images = 'At least one image is required'
        break
      case 3:
        // Optional validations for settings
        break
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      // Handle campaign creation
      console.log('Creating campaign:', formData)
      // Redirect to campaigns page or success page
      navigate('/campaigns')
    }
  }

  const calculateEndDate = () => {
    if (formData.duration) {
      const endDate = new Date()
      endDate.setDate(endDate.getDate() + parseInt(formData.duration))
      return endDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    return ''
  }

    return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Create New Campaign</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your cause with the world and raise funds to make a positive impact
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8"
        >
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                  currentStep >= step.id 
                    ? 'bg-primary-600 border-primary-600 text-white' 
                    : 'border-gray-300 text-gray-500'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <span className="font-semibold">{step.id}</span>
                  )}
                </div>
                <div className="ml-3 hidden sm:block">
                  <p className={`font-semibold ${currentStep >= step.id ? 'text-primary-600' : 'text-gray-500'}`}>
                    {step.title}
                  </p>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-20 h-1 mx-4 rounded-full ${
                    currentStep > step.id ? 'bg-primary-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="p-8">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Campaign Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Campaign Title *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="Enter a compelling campaign title"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all ${
                        errors.title ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-primary-500'
                      }`}
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.title}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all ${
                        errors.category ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-primary-500'
                      }`}
                    >
                      <option value="">Select a category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.category}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Target Amount (৳) *
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        value={formData.targetAmount}
                        onChange={(e) => handleInputChange('targetAmount', e.target.value)}
                        placeholder="10000"
                        min="100"
                        className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all ${
                          errors.targetAmount ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-primary-500'
                        }`}
                      />
                    </div>
                    {errors.targetAmount && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.targetAmount}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Campaign Duration (days) *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        value={formData.duration}
                        onChange={(e) => handleInputChange('duration', e.target.value)}
                        placeholder="30"
                        min="1"
                        max="365"
                        className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all ${
                          errors.duration ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-primary-500'
                        }`}
                      />
                    </div>
                    {formData.duration && (
                      <p className="text-sm text-gray-600 mt-1">
                        Campaign ends on: {calculateEndDate()}
                      </p>
                    )}
                    {errors.duration && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.duration}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="City, Country"
                        className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all ${
                          errors.location ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-primary-500'
                        }`}
                      />
                    </div>
                    {errors.location && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.location}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Short Description *
                    </label>
                    <textarea
                      value={formData.shortDescription}
                      onChange={(e) => handleInputChange('shortDescription', e.target.value)}
                      placeholder="Write a brief description of your campaign (max 200 characters)"
                      maxLength="200"
                      rows="3"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none ${
                        errors.shortDescription ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-primary-500'
                      }`}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.shortDescription && (
                        <p className="text-red-500 text-sm flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.shortDescription}
                        </p>
                      )}
                      <p className="text-sm text-gray-500 ml-auto">
                        {formData.shortDescription.length}/200
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
  