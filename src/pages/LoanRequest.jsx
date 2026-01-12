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

                      {formData.tenure === 'custom' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Custom Tenure (Months) *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="number"
                              name="customTenure"
                              value={formData.customTenure}
                              onChange={handleChange}
                              placeholder="Enter months"
                              min="1"
                              max="60"
                              className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl outline-none transition-all ${
                                errors.customTenure ? 'border-red-500' : 'border-gray-200 focus:border-primary-500'
                              }`}
                            />
                          </div>
                          {errors.customTenure && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.customTenure}
                            </p>
                          )}
                        </motion.div>
                      )}
                    </motion.div>
                  )}

                  {/* Step 3: Interest & Repayment */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Interest Preference *
                        </label>
                        <div className="space-y-3">
                          <motion.label
                            whileHover={{ scale: 1.01 }}
                            className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                              formData.interestType === '0'
                                ? 'border-primary-600 bg-primary-50'
                                : 'border-gray-200 hover:border-primary-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="interestType"
                              value="0"
                              checked={formData.interestType === '0'}
                              onChange={handleChange}
                              className="h-4 w-4 text-primary-600"
                            />
                            <div className="ml-3 flex-1">
                              <span className="font-semibold text-gray-900">0% Interest (Interest-Free)</span>
                              <p className="text-sm text-gray-600">No interest charged on the loan</p>
                            </div>
                          </motion.label>

                          <motion.label
                            whileHover={{ scale: 1.01 }}
                            className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                              formData.interestType === 'custom'
                                ? 'border-primary-600 bg-primary-50'
                                : 'border-gray-200 hover:border-primary-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="interestType"
                              value="custom"
                              checked={formData.interestType === 'custom'}
                              onChange={handleChange}
                              className="h-4 w-4 text-primary-600"
                            />
                            <div className="ml-3 flex-1">
                              <span className="font-semibold text-gray-900">Custom Interest Rate</span>
                              <p className="text-sm text-gray-600">Specify your preferred rate</p>
                            </div>
                          </motion.label>
                        </div>
                      </div>

                      {formData.interestType === 'custom' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Interest Rate (%) *
                          </label>
                          <div className="relative">
                            <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="number"
                              name="customInterest"
                              value={formData.customInterest}
                              onChange={handleChange}
                              placeholder="7.5"
                              step="0.1"
                              min="0"
                              max="30"
                              className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl outline-none transition-all ${
                                errors.customInterest ? 'border-red-500' : 'border-gray-200 focus:border-primary-500'
                              }`}
                            />
                          </div>
                          {errors.customInterest && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.customInterest}
                            </p>
                          )}
                          <p className="text-xs text-gray-500 mt-1">Interest rate between 0% - 30%</p>
                        </motion.div>
                      )}

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Repayment Schedule
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {repaymentOptions.map((option) => (
                            <motion.label
                              key={option.value}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                formData.repaymentSchedule === option.value
                                  ? 'border-primary-600 bg-primary-50'
                                  : 'border-gray-200 hover:border-primary-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="repaymentSchedule"
                                value={option.value}
                                checked={formData.repaymentSchedule === option.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <CreditCard className="h-5 w-5 mr-2 text-gray-600" />
                              <span className="font-semibold text-gray-700">{option.label}</span>
                              {formData.repaymentSchedule === option.value && (
                                <CheckCircle className="absolute top-2 right-2 h-5 w-5 text-primary-600" />
                              )}
                            </motion.label>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Additional Details */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Collateral Notes (Optional)
                        </label>
                        <textarea
                          name="collateralNotes"
                          value={formData.collateralNotes}
                          onChange={handleChange}
                          placeholder="Describe any collateral you can offer (e.g., property, vehicle, equipment)..."
                          rows="5"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-primary-500 transition-all resize-none"
                        />
                        <p className="text-xs text-gray-500 mt-1">This helps increase trust and may improve loan approval chances</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Attachments (Optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary-400 transition-all">
                          <input
                            type="file"
                            id="file-upload"
                            multiple
                            accept="image/*,.pdf"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                          <label
                            htmlFor="file-upload"
                            className="cursor-pointer"
                          >
                            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                            <p className="text-sm font-semibold text-gray-700 mb-1">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">
                              Images or PDF (Max 5MB per file)
                            </p>
                          </label>
                        </div>

                        {formData.attachments.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {formData.attachments.map((file, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                              >
                                <div className="flex items-center space-x-3">
                                  <Paperclip className="h-5 w-5 text-gray-400" />
                                  <div>
                                    <p className="text-sm font-medium text-gray-900">{file.name}</p>
                                    <p className="text-xs text-gray-500">
                                      {(file.size / 1024).toFixed(2)} KB
                                    </p>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeAttachment(index)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <X className="h-5 w-5" />
                                </button>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  {currentStep > 1 ? (
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                    >
                      <ArrowLeft className="h-5 w-5" />
                      <span>Previous</span>
                    </motion.button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => navigate('/dashboard')}
                      className="text-gray-600 hover:text-gray-900 font-semibold"
                    >
                      Cancel
                    </button>
                  )}

                  {currentStep < totalSteps ? (
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="h-5 w-5" />
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(22, 163, 74, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all"
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span>Submit Request</span>
                    </motion.button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-primary-600" />
                  Loan Preview
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Title</p>
                    <p className="font-semibold text-gray-900">
                      {formData.loanTitle || 'Not specified'}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Amount</p>
                      <p className="font-semibold text-gray-900">
                        ৳{formData.amount || '0'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Tenure</p>
                      <p className="font-semibold text-gray-900">
                        {formData.tenure === 'custom' 
                          ? `${formData.customTenure || '0'} months`
                          : formData.tenure 
                            ? `${formData.tenure} months`
                            : 'Not set'
                        }
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">Purpose</p>
                    <p className="font-semibold text-gray-900">
                      {formData.purpose || 'Not specified'}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">Interest Rate</p>
                    <p className="font-semibold text-gray-900">
                      {formData.interestType === '0' 
                        ? '0% (Interest-Free)'
                        : formData.customInterest 
                          ? `${formData.customInterest}%`
                          : 'Not set'
                      }
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">Repayment</p>
                    <p className="font-semibold text-gray-900 capitalize">
                      {formData.repaymentSchedule.replace('-', ' ')}
                    </p>
                  </div>

                  {formData.repaymentSchedule === 'monthly' && (
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">Estimated Monthly Payment</p>
                      <p className="text-2xl font-bold text-primary-600">
                        ৳{calculateMonthlyPayment()}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formData.interestType === '0' ? 'No interest' : 'Including interest'}
                      </p>
                    </div>
                  )}

                  {formData.attachments.length > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">Attachments</p>
                      <p className="font-semibold text-gray-900">
                        {formData.attachments.length} file(s)
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoanRequest