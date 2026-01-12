import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  ArrowLeft, 
  DollarSign, 
  FileText, 
  Target, 
  Calendar, 
  Percent, 
  CreditCard, 
  Paperclip, 
  Upload, 
  X, 
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const LoanRequest = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    loanTitle: '',
    amount: '',
    purpose: '',
    tenure: '',
    customTenure: '',
    interestType: '0',
    customInterest: '',
    repaymentSchedule: 'monthly',
    collateralNotes: '',
    attachments: []
  })

  const [errors, setErrors] = useState({})
  const totalSteps = 4

  const purposeOptions = [
    'Business Expansion',
    'Education',
    'Medical Emergency',
    'Home Improvement',
    'Debt Consolidation',
    'Vehicle Purchase',
    'Wedding',
    'Other'
  ]

  const tenureOptions = [
    { label: '3 Months', value: '3' },
    { label: '6 Months', value: '6' },
    { label: '12 Months', value: '12' },
    { label: '24 Months', value: '24' },
    { label: '36 Months', value: '36' },
    { label: 'Custom', value: 'custom' }
  ]

  const repaymentOptions = [
    { label: 'Monthly', value: 'monthly' },
    { label: 'Bi-Monthly', value: 'bi-monthly' },
    { label: 'Quarterly', value: 'quarterly' },
    { label: 'Lump Sum', value: 'lump-sum' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    const validFiles = files.filter(file => {
      const isValidType = file.type.includes('image') || file.type.includes('pdf')
      const isValidSize = file.size <= 5 * 1024 * 1024 // 5MB
      return isValidType && isValidSize
    })

    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...validFiles]
    }))
  }

  const removeAttachment = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }))
  }