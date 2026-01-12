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
}