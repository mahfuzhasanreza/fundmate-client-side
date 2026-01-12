import { useState, useEffect, useCallback } from 'react'

// Custom hook for managing notifications
export const useNotifications = () => {
  const [notifications, setNotifications] = useState([])

  // Add new notification
  const addNotification = useCallback((notification) => {
    const newNotification = {
      id: Date.now() + Math.random(),
      timestamp: new Date(),
      read: false,
      ...notification
    }
    
    setNotifications(prev => [newNotification, ...prev])
    
    // Auto-remove notification after 10 seconds for non-critical ones
    if (!notification.persistent) {
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id))
      }, 10000)
    }
  }, [])

  // Mark notification as read
  const markAsRead = useCallback((notificationId) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    )
  }, [])

  // Mark all as read
  const markAllAsRead = useCallback(() => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    )
  }, [])

  // Delete notification
  const deleteNotification = useCallback((notificationId) => {
    setNotifications(prev =>
      prev.filter(notification => notification.id !== notificationId)
    )
  }, [])

  // Clear all notifications
  const clearAll = useCallback(() => {
    setNotifications([])
  }, [])

  // Get unread count
  const unreadCount = notifications.filter(n => !n.read).length

  return {
    notifications,
    addNotification,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    clearAll,
    unreadCount
  }
}

// Notification types and templates
export const NotificationTypes = {
  NEW_OFFER: 'new_offer',
  OFFER_ACCEPTED: 'offer_accepted',
  PAYMENT_UPDATE: 'payment_update',
  MESSAGE: 'message',
  CAMPAIGN_APPROVED: 'campaign_approved'
}

// Helper functions to create specific notification types
export const createNotification = {
  newOffer: (lenderName, amount, interestRate, loanId) => ({
    type: NotificationTypes.NEW_OFFER,
    title: 'New Loan Offer Received',
    message: `${lenderName} submitted an offer of ৳${amount.toLocaleString()} at ${interestRate}% interest for your loan request.`,
    data: { lenderName, amount, interestRate, loanId },
    persistent: true
  }),

  offerAccepted: (borrowerName, amount, agreementId) => ({
    type: NotificationTypes.OFFER_ACCEPTED,
    title: 'Offer Accepted',
    message: `${borrowerName} accepted your loan offer of ৳${amount.toLocaleString()}. Agreement has been created.`,
    data: { borrowerName, amount, agreementId },
    persistent: true
  }),

  paymentReceived: (payerName, amount, agreementId) => ({
    type: NotificationTypes.PAYMENT_UPDATE,
    title: 'Payment Received',
    message: `${payerName} has made a payment of $${amount} for loan agreement ${agreementId}.`,
    data: { payerName, amount, agreementId },
    persistent: false
  }),

  paymentOverdue: (agreementId, daysOverdue) => ({
    type: NotificationTypes.PAYMENT_UPDATE,
    title: 'Payment Overdue',
    message: `Payment for loan agreement ${agreementId} is now ${daysOverdue} days overdue. Please take action.`,
    data: { agreementId, daysOverdue },
    persistent: true
  }),

  newMessage: (senderName, agreementId) => ({
    type: NotificationTypes.MESSAGE,
    title: 'New Message',
    message: `${senderName} sent you a message regarding loan agreement ${agreementId}.`,
    data: { senderName, agreementId },
    persistent: false
  }),

  campaignApproved: (campaignTitle, campaignId) => ({
    type: NotificationTypes.CAMPAIGN_APPROVED,
    title: 'Campaign Approved',
    message: `Your campaign "${campaignTitle}" has been approved and is now live!`,
    data: { campaignTitle, campaignId },
    persistent: true
  }),

  campaignRejected: (campaignTitle, reason) => ({
    type: NotificationTypes.CAMPAIGN_APPROVED,
    title: 'Campaign Needs Review',
    message: `Your campaign "${campaignTitle}" needs revision. Reason: ${reason}`,
    data: { campaignTitle, reason },
    persistent: true
  }),

  donationReceived: (donorName, amount, campaignId) => ({
    type: NotificationTypes.CAMPAIGN_APPROVED,
    title: 'New Donation Received',
    message: `${donorName} donated $${amount} to your campaign!`,
    data: { donorName, amount, campaignId },
    persistent: false
  })
}

// Demo function to simulate notifications (for testing)
export const simulateNotifications = (addNotification) => {
  const notifications = [
    createNotification.newOffer('Michael Chen', 15000, 8.2, 'LN-2024-001'),
    createNotification.offerAccepted('Sarah Johnson', 12000, 'AGR-2024-002'),
    createNotification.paymentReceived('Emily Rodriguez', 697.58, 'AGR-2024-001'),
    createNotification.newMessage('David Wilson', 'AGR-2024-003'),
    createNotification.campaignApproved('Help Build Clean Water Wells', 'CMP-2024-001')
  ]

  notifications.forEach((notification, index) => {
    setTimeout(() => {
      addNotification(notification)
    }, index * 2000) // Add notification every 2 seconds
  })
}