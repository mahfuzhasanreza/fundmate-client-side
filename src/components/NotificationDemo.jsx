import React from 'react'
import { motion } from 'framer-motion'
import { Bell, Play } from 'lucide-react'
import { createNotification } from '../hooks/useNotifications'

const NotificationDemo = ({ addNotification }) => {
  const triggerNotifications = () => {
    const demoNotifications = [
      createNotification.newOffer('Michael Chen', 15000, 8.2, 'LN-2024-001'),
      createNotification.offerAccepted('Sarah Johnson', 12000, 'AGR-2024-002'),
      createNotification.paymentReceived('Emily Rodriguez', 697.58, 'AGR-2024-001'),
      createNotification.newMessage('David Wilson', 'AGR-2024-003'),
      createNotification.campaignApproved('Help Build Clean Water Wells', 'CMP-2024-001'),
      createNotification.paymentOverdue('AGR-2024-004', 3),
      createNotification.donationReceived('Anonymous Donor', 250, 'CMP-2024-001')
    ]

    // Add notifications with delays to simulate real-time
    demoNotifications.forEach((notification, index) => {
      setTimeout(() => {
        addNotification(notification)
      }, index * 1500)
    })
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={triggerNotifications}
      className="fixed bottom-4 right-4 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors z-40 flex items-center space-x-2"
      title="Test Notifications"
    >
      <Bell className="h-5 w-5" />
      <Play className="h-4 w-4" />
    </motion.button>
  )
}

export default NotificationDemo