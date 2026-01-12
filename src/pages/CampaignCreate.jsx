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
}