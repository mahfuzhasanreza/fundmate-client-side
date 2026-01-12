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

}
