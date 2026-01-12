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

  const validateStep = (step) => {
    const newErrors = {}

    if (step === 1) {
      if (!formData.loanTitle.trim()) newErrors.loanTitle = 'Loan title is required'
      if (!formData.amount) newErrors.amount = 'Amount is required'
      if (formData.amount && (parseFloat(formData.amount) < 100 || parseFloat(formData.amount) > 100000)) {
        newErrors.amount = 'Amount must be between ৳100 and ৳100,000'
      }
      if (!formData.purpose) newErrors.purpose = 'Purpose is required'
    }

    if (step === 2) {
      if (!formData.tenure) newErrors.tenure = 'Tenure is required'
      if (formData.tenure === 'custom' && !formData.customTenure) {
        newErrors.customTenure = 'Please specify custom tenure'
      }
    }

    if (step === 3) {
      if (!formData.interestType) newErrors.interestType = 'Interest preference is required'
      if (formData.interestType === 'custom' && !formData.customInterest) {
        newErrors.customInterest = 'Please specify interest rate'
      }
      if (formData.interestType === 'custom' && formData.customInterest && 
          (parseFloat(formData.customInterest) < 0 || parseFloat(formData.customInterest) > 30)) {
        newErrors.customInterest = 'Interest rate must be between 0% and 30%'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep(currentStep)) {
      console.log('Loan Request Submitted:', formData)
      // Navigate to dashboard after submission
      navigate('/dashboard')
    }
  }

  const getStepTitle = (step) => {
    switch (step) {
      case 1: return 'Basic Information'
      case 2: return 'Loan Terms'
      case 3: return 'Interest & Repayment'
      case 4: return 'Additional Details'
      default: return ''
    }
  }

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(formData.amount) || 0
    const months = formData.tenure === 'custom' ? parseInt(formData.customTenure) || 0 : parseInt(formData.tenure) || 0
    const rate = formData.interestType === 'custom' ? parseFloat(formData.customInterest) || 0 : 0

    if (principal > 0 && months > 0) {
      if (rate === 0) {
        return (principal / months).toFixed(2)
      } else {
        const monthlyRate = rate / 100 / 12
        const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
        return payment.toFixed(2)
      }
    }
    return '0.00'
  }