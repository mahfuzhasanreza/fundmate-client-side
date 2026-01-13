import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  User, 
  Shield, 
  DollarSign, 
  Calendar, 
  FileText, 
  Download, 
  MessageSquare, 
  Upload, 
  Eye, 
  Send,
  Paperclip,
  Star,
  MapPin,
  Target,
  TrendingUp,
  Receipt,
  CheckCheck,
  AlertTriangle,
  Home
} from 'lucide-react'
import { useParams, useNavigate } from 'react-router-dom'

const LoanAgreement = () => {
  const { agreementId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [newMessage, setNewMessage] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  // Dummy agreement data
  const agreement = {
    id: agreementId || 'AGR-2024-001',
    status: 'active', // active, pending, completed, overdue
    createdDate: '2024-11-20',
    loan: {
      originalAmount: 15000,
      acceptedAmount: 15000,
      interestRate: 8.5,
      purpose: 'Business Expansion',
      tenure: 24,
      monthlyPayment: 697.58
    },
    borrower: {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      avatar: '👩‍💼',
      rating: 4.8,
      verified: true,
      location: 'New York, NY',
      phone: '+1 (555) 123-4567'
    },
    lender: {
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      avatar: '👨‍💼',
      rating: 4.9,
      verified: true,
      location: 'Los Angeles, CA',
      phone: '+1 (555) 987-6543'
    },
    repaymentPlan: [
      { id: 1, amount: 697.58, dueDate: '2024-12-20', status: 'paid', paidDate: '2024-12-19' },
      { id: 2, amount: 697.58, dueDate: '2025-01-20', status: 'paid', paidDate: '2025-01-18' },
      { id: 3, amount: 697.58, dueDate: '2025-02-20', status: 'pending', paidDate: null },
      { id: 4, amount: 697.58, dueDate: '2025-03-20', status: 'pending', paidDate: null },
      { id: 5, amount: 697.58, dueDate: '2025-04-20', status: 'pending', paidDate: null },
      { id: 6, amount: 697.58, dueDate: '2025-05-20', status: 'pending', paidDate: null }
    ],
    attachments: [
      { id: 1, name: 'Business_Plan.pdf', type: 'document', uploadedBy: 'borrower', date: '2024-11-20' },
      { id: 2, name: 'Financial_Statements.pdf', type: 'document', uploadedBy: 'borrower', date: '2024-11-20' },
      { id: 3, name: 'Collateral_Photos.jpg', type: 'image', uploadedBy: 'borrower', date: '2024-11-20' },
      { id: 4, name: 'Loan_Terms.pdf', type: 'document', uploadedBy: 'lender', date: '2024-11-21' }
    ],
    messages: [
      {
        id: 1,
        sender: 'lender',
        message: 'Agreement has been finalized. Looking forward to working with you!',
        timestamp: '2024-11-21T10:30:00Z',
        attachments: []
      },
      {
        id: 2,
        sender: 'borrower',
        message: 'Thank you for the loan. First payment will be made on time.',
        timestamp: '2024-11-21T14:15:00Z',
        attachments: []
      },
      {
        id: 3,
        sender: 'borrower',
        message: 'First payment completed. Please find the receipt attached.',
        timestamp: '2024-12-19T16:45:00Z',
        attachments: [{ name: 'Payment_Receipt_Dec.pdf', type: 'document' }]
      }
    ]
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-primary-100 text-primary-700'
      case 'pending': return 'bg-yellow-100 text-yellow-700'
      case 'completed': return 'bg-blue-100 text-blue-700'
      case 'overdue': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-5 w-5" />
      case 'pending': return <Clock className="h-5 w-5" />
      case 'completed': return <CheckCheck className="h-5 w-5" />
      case 'overdue': return <AlertTriangle className="h-5 w-5" />
      default: return <Clock className="h-5 w-5" />
    }
  }

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-primary-100 text-primary-700'
      case 'pending': return 'bg-yellow-100 text-yellow-700'
      case 'overdue': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handleSendMessage = () => {
    if (newMessage.trim() || selectedFile) {
      // Handle message sending logic here
      console.log('Sending message:', newMessage)
      setNewMessage('')
      setSelectedFile(null)
    }
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Home className="h-5 w-5 mr-2" />
                  Back to Dashboard
                </button>
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Loan Agreement</h1>
              <p className="text-lg text-gray-600">Agreement ID: {agreement.id}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${getStatusColor(agreement.status)}`}>
                {getStatusIcon(agreement.status)}
                <span className="font-semibold capitalize">{agreement.status}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8"
        >
          <div className="flex space-x-8 border-b border-gray-200">
            {[
              { id: 'overview', label: 'Overview', icon: Eye },
              { id: 'payments', label: 'Payments', icon: DollarSign },
              { id: 'documents', label: 'Documents', icon: FileText },
              { id: 'chat', label: 'Communication', icon: MessageSquare }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 pb-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span className="font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Parties Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Borrower Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2 text-primary-600" />
                  Borrower
                </h3>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{agreement.borrower.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-lg">{agreement.borrower.name}</h4>
                      {agreement.borrower.verified && (
                        <CheckCircle className="h-5 w-5 text-primary-500" />
                      )}
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>{agreement.borrower.rating} Rating</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{agreement.borrower.location}</span>
                      </div>
                      <div>{agreement.borrower.email}</div>
                      <div>{agreement.borrower.phone}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lender Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary-600" />
                  Lender
                </h3>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{agreement.lender.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-lg">{agreement.lender.name}</h4>
                      {agreement.lender.verified && (
                        <CheckCircle className="h-5 w-5 text-primary-500" />
                      )}
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>{agreement.lender.rating} Rating</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{agreement.lender.location}</span>
                      </div>
                      <div>{agreement.lender.email}</div>
                      <div>{agreement.lender.phone}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Loan Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-primary-600" />
                Loan Details
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Original Amount</p>
                  <p className="text-2xl font-bold text-gray-900">৳{agreement.loan.originalAmount.toLocaleString()}</p>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Accepted Amount</p>
                  <p className="text-2xl font-bold text-primary-600">৳{agreement.loan.acceptedAmount.toLocaleString()}</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Interest Rate</p>
                  <p className="text-2xl font-bold text-blue-600">{agreement.loan.interestRate}%</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Monthly Payment</p>
                  <p className="text-2xl font-bold text-orange-600">${agreement.loan.monthlyPayment}</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Purpose:</span>
                  <span className="font-semibold flex items-center">
                    <Target className="h-4 w-4 mr-1 text-primary-600" />
                    {agreement.loan.purpose}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tenure:</span>
                  <span className="font-semibold">{agreement.loan.tenure} months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Agreement Date:</span>
                  <span className="font-semibold">{formatDate(agreement.createdDate)}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary-600" />
                Repayment Schedule
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Installment #</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Due Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Paid Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {agreement.repaymentPlan.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">#{payment.id}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">${payment.amount}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{formatDate(payment.dueDate)}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getPaymentStatusColor(payment.status)}`}>
                          {payment.status === 'paid' && <CheckCircle className="h-3 w-3 mr-1" />}
                          {payment.status === 'pending' && <Clock className="h-3 w-3 mr-1" />}
                          {payment.status === 'overdue' && <AlertCircle className="h-3 w-3 mr-1" />}
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {payment.paidDate ? formatDate(payment.paidDate) : '-'}
                      </td>
                      <td className="px-6 py-4">
                        {payment.status === 'pending' && (
                          <div className="flex space-x-2">
                            <button className="px-3 py-1 bg-primary-600 text-white text-xs rounded-lg hover:bg-primary-700 transition-colors">
                              Mark Paid
                            </button>
                            <button className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg hover:bg-gray-200 transition-colors">
                              Upload Receipt
                            </button>
                          </div>
                        )}
                        {payment.status === 'paid' && (
                          <button className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-lg">
                            ✓ Confirmed
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary-600" />
                  Agreement Documents
                </h3>
                <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  <Upload className="h-4 w-4" />
                  <span>Upload Document</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {agreement.attachments.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${doc.type === 'document' ? 'bg-blue-100' : 'bg-primary-100'}`}>
                        <FileText className={`h-5 w-5 ${doc.type === 'document' ? 'text-blue-600' : 'text-primary-600'}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{doc.name}</p>
                        <p className="text-sm text-gray-600">
                          Uploaded by {doc.uploadedBy} • {formatDate(doc.date)}
                        </p>
                      </div>
                    </div>
                    <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Chat Tab */}
        {activeTab === 'chat' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 h-[700px] flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="p-6 border-b border-gray-200 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <MessageSquare className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Agreement Communication</h3>
                    <p className="text-sm text-gray-600">Real-time messaging between borrower and lender</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Online</span>
                </div>
              </div>
            </div>
            
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50 to-white">
              {agreement.messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${message.sender === 'borrower' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-2xl ${message.sender === 'borrower' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                        message.sender === 'borrower' 
                          ? 'bg-primary-100 text-primary-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {message.sender === 'borrower' ? agreement.borrower.avatar : agreement.lender.avatar}
                      </div>
                    </div>
                    
                    {/* Message Content */}
                    <div className={`flex flex-col ${message.sender === 'borrower' ? 'items-end' : 'items-start'}`}>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-semibold text-gray-600">
                          {message.sender === 'borrower' ? agreement.borrower.name : agreement.lender.name}
                        </span>
                        <span className="text-xs text-gray-400">
                          {formatDateTime(message.timestamp)}
                        </span>
                      </div>
                      
                      <div className={`px-4 py-3 rounded-2xl shadow-sm max-w-md ${
                        message.sender === 'borrower' 
                          ? 'bg-primary-600 text-white rounded-br-md' 
                          : 'bg-white text-gray-900 border border-gray-200 rounded-bl-md'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.message}</p>
                        
                        {/* Attachments */}
                        {message.attachments.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-opacity-20 border-white">
                            {message.attachments.map((attachment, index) => (
                              <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
                                  message.sender === 'borrower' 
                                    ? 'bg-primary-700 hover:bg-primary-800' 
                                    : 'bg-gray-50 hover:bg-gray-100'
                                }`}
                              >
                                <Paperclip className="h-4 w-4" />
                                <span className="text-xs font-medium">{attachment.name}</span>
                                <Download className="h-3 w-3 ml-auto opacity-70" />
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              <div className="flex justify-start">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  </div>
                  <div className="bg-gray-200 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Message Input */}
            <div className="p-6 bg-white border-t border-gray-200">
              {selectedFile && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Paperclip className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700">{selectedFile.name}</span>
                    </div>
                    <button
                      onClick={() => setSelectedFile(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                </motion.div>
              )}
              
              <div className="flex items-end space-x-4">
                <div className="flex-1">
                  <textarea
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                    rows={2}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileUpload}
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  />
                  
                  <motion.label
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    htmlFor="file-upload"
                    className="p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition-all flex items-center"
                  >
                    <Paperclip className="h-5 w-5 text-gray-600" />
                  </motion.label>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim() && !selectedFile}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center space-x-2 ${
                      newMessage.trim() || selectedFile
                        ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <Send className="h-4 w-4" />
                    <span>Send</span>
                  </motion.button>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mt-2 flex items-center space-x-1">
                <span>Press Enter to send, Shift+Enter for new line</span>
                <span>•</span>
                <span>Supports PDF, images, and documents</span>
              </p>
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <button className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg">
            <Download className="h-5 w-5" />
            <span>Download PDF</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg">
            <TrendingUp className="h-5 w-5" />
            <span>Transaction History</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg">
            <Receipt className="h-5 w-5" />
            <span>Mark Payment Done</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-all shadow-lg">
            <CheckCheck className="h-5 w-5" />
            <span>Acknowledge Payment</span>
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default LoanAgreement