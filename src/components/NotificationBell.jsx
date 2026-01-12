import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell } from 'lucide-react'
import NotificationCenter from './NotificationCenter'

const NotificationBell = () => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  // Simulate real-time notification updates
  useEffect(() => {
    // This would typically come from your notification service/API
    const updateUnreadCount = () => {
      // Dummy logic - in real app, this would be from your state management
      const notifications = [
        { read: false, type: 'new_offer' },
        { read: false, type: 'campaign_approved' },
        { read: true, type: 'payment_update' },
        { read: false, type: 'message' },
        { read: true, type: 'offer_accepted' }
      ]
      const unread = notifications.filter(n => !n.read).length
      setUnreadCount(unread)
    }

    updateUnreadCount()
    
    // Simulate periodic updates (in real app, use WebSocket or polling)
    const interval = setInterval(updateUnreadCount, 30000) // Update every 30 seconds
    
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowNotifications(true)}
        className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
      >
        <Bell className="h-6 w-6" />
        <AnimatePresence>
          {unreadCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center"
            >
              {unreadCount > 9 ? '9+' : unreadCount}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse animation for new notifications */}
        {unreadCount > 0 && (
          <motion.div
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 1.4, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 bg-red-500 rounded-full w-[18px] h-[18px]"
          />
        )}
      </motion.button>

      <NotificationCenter
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
      />
    </>
  )
}

export default NotificationBell