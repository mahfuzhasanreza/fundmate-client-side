import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  DollarSign, 
  MessageSquare, 
  CheckCircle, 
  TrendingUp, 
  Gift,
  AlertCircle
} from 'lucide-react'
import { NotificationTypes } from '../hooks/useNotifications'

const ToastNotification = ({ notification, onClose, onClick }) => {
  const getIcon = (type) => {
    switch (type) {
      case NotificationTypes.NEW_OFFER:
        return <DollarSign className="h-5 w-5 text-primary-600" />
      case NotificationTypes.OFFER_ACCEPTED:
        return <CheckCircle className="h-5 w-5 text-primary-600" />
      case NotificationTypes.PAYMENT_UPDATE:
        return <TrendingUp className="h-5 w-5 text-blue-600" />
      case NotificationTypes.MESSAGE:
        return <MessageSquare className="h-5 w-5 text-purple-600" />
      case NotificationTypes.CAMPAIGN_APPROVED:
        return <Gift className="h-5 w-5 text-orange-600" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />
    }
  }

  const getBackgroundColor = (type) => {
    switch (type) {
      case NotificationTypes.NEW_OFFER:
        return 'bg-primary-50 border-primary-200'
      case NotificationTypes.OFFER_ACCEPTED:
        return 'bg-primary-50 border-primary-200'
      case NotificationTypes.PAYMENT_UPDATE:
        return 'bg-blue-50 border-blue-200'
      case NotificationTypes.MESSAGE:
        return 'bg-purple-50 border-purple-200'
      case NotificationTypes.CAMPAIGN_APPROVED:
        return 'bg-orange-50 border-orange-200'
      default:
        return 'bg-gray-50 border-gray-200'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className={`relative p-4 rounded-xl border shadow-lg cursor-pointer max-w-sm ${getBackgroundColor(notification.type)}`}
      onClick={onClick}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-0.5">
          {getIcon(notification.type)}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-gray-900 mb-1">
            {notification.title}
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            {notification.message}
          </p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className="flex-shrink-0 p-1 hover:bg-white hover:bg-opacity-80 rounded-full transition-colors"
        >
          <X className="h-4 w-4 text-gray-500" />
        </button>
      </div>
      
      {/* Auto-dismiss progress bar */}
      {!notification.persistent && (
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: 10, ease: 'linear' }}
          className="absolute bottom-0 left-0 h-1 bg-gray-400 bg-opacity-30 rounded-full"
        />
      )}
    </motion.div>
  )
}

const ToastContainer = ({ notifications, onClose, onToastClick }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 pointer-events-none">
      <AnimatePresence>
        {notifications.slice(0, 5).map((notification) => (
          <div key={notification.id} className="pointer-events-auto">
            <ToastNotification
              notification={notification}
              onClose={() => onClose(notification.id)}
              onClick={() => onToastClick(notification)}
            />
          </div>
        ))}
      </AnimatePresence>
      
      {notifications.length > 5 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center p-2 bg-gray-800 text-white text-sm rounded-lg pointer-events-auto"
        >
          +{notifications.length - 5} more notifications
        </motion.div>
      )}
    </div>
  )
}

export default ToastContainer