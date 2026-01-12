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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12 px-4 sm:px-6 lg:px-8 pt-20">`
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Request a Loan</h1>
          <p className="text-gray-600">Complete the form to submit your loan request</p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step <= currentStep
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {step < currentStep ? <CheckCircle className="h-6 w-6" /> : step}
                </motion.div>
                {step < 4 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    step < currentStep ? 'bg-primary-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-700">
              Step {currentStep} of {totalSteps}: {getStepTitle(currentStep)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Basic Information */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Loan Title *
                        </label>
                        <div className="relative">
                          <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            name="loanTitle"
                            value={formData.loanTitle}
                            onChange={handleChange}
                            placeholder="e.g., Business Expansion Loan"
                            className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl outline-none transition-all ${
                              errors.loanTitle ? 'border-red-500' : 'border-gray-200 focus:border-primary-500'
                            }`}
                          />
                        </div>
                        {errors.loanTitle && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.loanTitle}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Loan Amount (৳) *
                        </label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            placeholder="5000"
                            min="100"
                            max="100000"
                            className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl outline-none transition-all ${
                              errors.amount ? 'border-red-500' : 'border-gray-200 focus:border-primary-500'
                            }`}
                          />
                        </div>
                        {errors.amount && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.amount}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">Amount between ৳100 - ৳100,000</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Purpose *
                        </label>
                        <div className="relative">
                          <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <select
                            name="purpose"
                            value={formData.purpose}
                            onChange={handleChange}
                            className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl outline-none transition-all appearance-none cursor-pointer ${
                              errors.purpose ? 'border-red-500' : 'border-gray-200 focus:border-primary-500'
                            }`}
                          >
                            <option value="">Select purpose</option>
                            {purposeOptions.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                        {errors.purpose && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.purpose}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Loan Terms */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Preferred Tenure *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {tenureOptions.map((option) => (
                            <motion.label
                              key={option.value}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                formData.tenure === option.value
                                  ? 'border-primary-600 bg-primary-50'
                                  : 'border-gray-200 hover:border-primary-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="tenure"
                                value={option.value}
                                checked={formData.tenure === option.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <span className="font-semibold text-gray-700">{option.label}</span>
                              {formData.tenure === option.value && (
                                <CheckCircle className="absolute top-2 right-2 h-5 w-5 text-primary-600" />
                              )}
                            </motion.label>
                          ))}
                        </div>
                        {errors.tenure && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.tenure}
                          </p>
                        )}
                      </div>