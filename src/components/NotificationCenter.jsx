import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bell, 
  X, 
  DollarSign, 
  MessageSquare, 
  CheckCircle, 
  TrendingUp, 
  Gift, 
  Clock,
  AlertCircle,
  Eye,
  Check,
  Trash2,
  Filter
} from 'lucide-react'

const NotificationCenter = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState([])
  const [filter, setFilter] = useState('all') // all, unread, read
  const [sortBy, setSortBy] = useState('newest') // newest, oldest

  // Dummy notifications data
  const dummyNotifications = [
    {
      id: 1,
      type: 'new_offer',
      title: 'New Loan Offer Received',
      message: 'Michael Chen submitted an offer of ৳15,000 at 8.2% interest for your business expansion loan.',
      timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      read: false,
      data: {
        loanId: 'LN-2024-001',
        offerAmount: 15000,
        interestRate: 8.2,
        lenderName: 'Michael Chen'
      }
    },
    {
      id: 2,
      type: 'offer_accepted',
      title: 'Offer Accepted',
      message: 'Sarah Johnson accepted your loan offer of ৳12,000. Agreement has been created.',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      read: false,
      data: {
        agreementId: 'AGR-2024-002',
        borrowerName: 'Sarah Johnson',
        amount: 12000
      }
    },
    {
      id: 3,
      type: 'payment_update',
      title: 'Payment Received',
      message: 'Emily Rodriguez has made a payment of ৳697.58 for loan agreement AGR-2024-001.',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      read: true,
      data: {
        agreementId: 'AGR-2024-001',
        amount: 697.58,
        payerName: 'Emily Rodriguez'
      }
    },
    {
      id: 4,
      type: 'message',
      title: 'New Message',
      message: 'David Wilson sent you a message regarding loan agreement AGR-2024-003.',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      read: true,
      data: {
        agreementId: 'AGR-2024-003',
        senderName: 'David Wilson'
      }
    },
    {
      id: 5,
      type: 'campaign_approved',
      title: 'Campaign Approved',
      message: 'Your campaign "Help Build Clean Water Wells" has been approved and is now live!',
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
      read: false,
      data: {
        campaignId: 'CMP-2024-001',
        campaignTitle: 'Help Build Clean Water Wells'
      }
    },
    {
      id: 6,
      type: 'payment_update',
      title: 'Payment Overdue',
      message: 'Payment for loan AGR-2024-004 is now 3 days overdue. Please take action.',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      read: false,
      data: {
        agreementId: 'AGR-2024-004',
        daysOverdue: 3
      }
    },
    {
      id: 7,
      type: 'new_offer',
      title: 'Multiple Offers Received',
      message: 'Your education loan request has received 3 new offers. Review them now.',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      read: true,
      data: {
        loanId: 'LN-2024-005',
        offerCount: 3
      }
    }
  ]

  useEffect(() => {
    setNotifications(dummyNotifications)
  }, [])

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'new_offer':
        return <DollarSign className="h-5 w-5 text-primary-600" />
      case 'offer_accepted':
        return <CheckCircle className="h-5 w-5 text-primary-600" />
      case 'payment_update':
        return <TrendingUp className="h-5 w-5 text-blue-600" />
      case 'message':
        return <MessageSquare className="h-5 w-5 text-purple-600" />
      case 'campaign_approved':
        return <Gift className="h-5 w-5 text-orange-600" />
      default:
        return <Bell className="h-5 w-5 text-gray-600" />
    }
  }

  const getNotificationColor = (type) => {
    switch (type) {
      case 'new_offer':
        return 'bg-primary-50 border-primary-200'
      case 'offer_accepted':
        return 'bg-primary-50 border-primary-200'
      case 'payment_update':
        return 'bg-blue-50 border-blue-200'
      case 'message':
        return 'bg-purple-50 border-purple-200'
      case 'campaign_approved':
        return 'bg-orange-50 border-orange-200'
      default:
        return 'bg-gray-50 border-gray-200'
    }
  }

  const formatTimestamp = (timestamp) => {
    const now = new Date()
    const diff = now - timestamp
    const minutes = Math.floor(diff / (1000 * 60))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (minutes < 60) {
      return `${minutes} minutes ago`
    } else if (hours < 24) {
      return `${hours} hours ago`
    } else {
      return `${days} days ago`
    }
  }

  const markAsRead = (notificationId) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    )
  }

  const deleteNotification = (notificationId) => {
    setNotifications(prev =>
      prev.filter(notification => notification.id !== notificationId)
    )
  }

  const filteredNotifications = notifications
    .filter(notification => {
      if (filter === 'unread') return !notification.read
      if (filter === 'read') return notification.read
      return true
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return b.timestamp - a.timestamp
      } else {
        return a.timestamp - b.timestamp
      }
    })

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />

          {/* Notification Panel */}
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Bell className="h-6 w-6 text-primary-600" />
                  <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
                  {unreadCount > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {unreadCount}
                    </span>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              {/* Filter Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="text-sm border border-gray-200 rounded-lg px-2 py-1 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  >
                    <option value="all">All</option>
                    <option value="unread">Unread ({unreadCount})</option>
                    <option value="read">Read</option>
                  </select>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm border border-gray-200 rounded-lg px-2 py-1 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-sm text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Mark all read
                  </button>
                )}
              </div>
            </div>

            {/* Notifications List */}
            <div className="flex-1 overflow-y-auto">
              {filteredNotifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <Bell className="h-12 w-12 mb-4 opacity-50" />
                  <p className="text-lg font-semibold mb-2">No notifications</p>
                  <p className="text-sm text-center">
                    {filter === 'unread' ? 'No unread notifications' : 'You\'re all caught up!'}
                  </p>
                </div>
              ) : (
                <div className="p-4 space-y-3">
                  {filteredNotifications.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`p-4 rounded-xl border transition-all cursor-pointer hover:shadow-md ${
                        !notification.read 
                          ? getNotificationColor(notification.type) 
                          : 'bg-white border-gray-200'
                      } ${!notification.read ? 'ring-1 ring-opacity-25' : ''}`}
                      onClick={() => !notification.read && markAsRead(notification.id)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className={`font-semibold text-sm ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                              {notification.title}
                            </h3>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed mb-2">
                            {notification.message}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              {formatTimestamp(notification.timestamp)}
                            </span>
                            <div className="flex items-center space-x-1">
                              {!notification.read && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    markAsRead(notification.id)
                                  }}
                                  className="p-1 hover:bg-white hover:bg-opacity-80 rounded transition-colors"
                                  title="Mark as read"
                                >
                                  <Eye className="h-3 w-3 text-gray-500" />
                                </button>
                              )}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  deleteNotification(notification.id)
                                }}
                                className="p-1 hover:bg-white hover:bg-opacity-80 rounded transition-colors"
                                title="Delete notification"
                              >
                                <Trash2 className="h-3 w-3 text-gray-500" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <p className="text-xs text-gray-500 text-center">
                Notifications are updated in real-time
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default NotificationCenter