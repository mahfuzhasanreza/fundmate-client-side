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
}
