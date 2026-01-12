import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard, 
  FileText, 
  Target, 
  UserCheck, 
  CreditCard, 
  Heart, 
  MessageSquare, 
  Settings, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Users,
  Calendar,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Menu,
  X,
  LogOut,
  Bell,
  Search
} from 'lucide-react'

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  // Dummy user data
  const user = {
    name: 'Mahfuz',
    avatar: '👤',
    role: 'Borrower, Lender & Donor',
    memberSince: 'Jan 2024'
  }
  // Dashboard statistics
  const stats = [
    {
      title: 'Total Loan Requests',
      value: '3',
      change: '+1 this month',
      icon: FileText,
      color: 'primary',
      bgColor: 'bg-primary-100',
      textColor: 'text-primary-600'
    },
    {
      title: 'Active Loans',
      value: '2',
      change: 'As Borrower',
      icon: TrendingUp,
      color: 'primary',
      bgColor: 'bg-primary-100',
      textColor: 'text-primary-600'
    },
    {
      title: 'Loan Offers Received',
      value: '8',
      change: '3 pending review',
      icon: UserCheck,
      color: 'blue',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      title: 'Donations Given',
      value: '৳2,450',
      change: '12 campaigns',
      icon: Heart,
      color: 'pink',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-600'
    },
    {
      title: 'Campaigns Created',
      value: '1',
      change: '85% funded',
      icon: Target,
      color: 'purple',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    },
    {
      title: 'Payments Due',
      value: '৳850',
      change: 'Due in 5 days',
      icon: AlertCircle,
      color: 'orange',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600'
    },
    {
      title: 'Payments To Receive',
      value: '৳1,200',
      change: 'Expected this month',
      icon: DollarSign,
      color: 'primary',
      bgColor: 'bg-primary-100',
      textColor: 'text-primary-600'
    },
    {
      title: 'Total Invested',
      value: '৳5,000',
      change: 'As Lender',
      icon: PieChart,
      color: 'indigo',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-600'
    }
  ]

  // Recent activities
  const recentActivities = [
    {
      id: 1,
      type: 'loan_approved',
      title: 'Loan Request Approved',
      description: 'Your business loan of ৳5,000 has been approved',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'text-primary-600'
    },
    {
      id: 2,
      type: 'offer_received',
      title: 'New Loan Offer',
      description: 'John Doe offered ৳2,000 at 7.5% interest',
      time: '5 hours ago',
      icon: UserCheck,
      color: 'text-blue-600'
    },
    {
      id: 3,
      type: 'donation',
      title: 'Donation Made',
      description: 'You donated ৳100 to Medical Emergency Fund',
      time: '1 day ago',
      icon: Heart,
      color: 'text-pink-600'
    },
    {
      id: 4,
      type: 'payment',
      title: 'Payment Received',
      description: 'Received ৳500 loan repayment from Sarah',
      time: '1 day ago',
      icon: DollarSign,
      color: 'text-primary-600'
    },
  ]

  // Upcoming payments
  const upcomingPayments = [
    {
      id: 1,
      title: 'Business Loan',
      amount: 450,
      dueDate: '2025-12-03',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Education Loan',
      amount: 400,
      dueDate: '2025-12-08',
      status: 'upcoming'
    }
  ]

  // Active campaigns
  const activeCampaigns = [
    {
      id: 1,
      title: 'My Community Project',
      raised: 8500,
      goal: 10000,
      backers: 45,
      daysLeft: 12
    }
  ]

  const sidebarItems = [
    { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
    { id: 'loan-requests', icon: FileText, label: 'My Loan Requests' },
    { id: 'campaigns', icon: Target, label: 'My Campaigns' },
    { id: 'offers', icon: UserCheck, label: 'Offers' },
    { id: 'repayments', icon: CreditCard, label: 'Repayments' },
    { id: 'donations', icon: Heart, label: 'Donations History' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection stats={stats} recentActivities={recentActivities} upcomingPayments={upcomingPayments} activeCampaigns={activeCampaigns} />
      case 'loan-requests':
        return <LoanRequestsSection />
      case 'campaigns':
        return <CampaignsSection />
      case 'offers':
        return <OffersSection />
      case 'repayments':
        return <RepaymentsSection />
      case 'donations':
        return <DonationsSection />
      case 'messages':
        return <MessagesSection />
      case 'settings':
        return <SettingsSection user={user} />
      default:
        return <OverviewSection stats={stats} recentActivities={recentActivities} upcomingPayments={upcomingPayments} activeCampaigns={activeCampaigns} />
    }
  }
}
