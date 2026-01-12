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

return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        {/* <AnimatePresence>
          {(sidebarOpen || typeof window !== 'undefined' && window.innerWidth >= 1024) && (
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="fixed lg:static inset-y-0 left-0 top-16 z-20 w-64 bg-white border-r border-gray-200 overflow-y-auto h-screen pt-4"
            >
            
              <div className="lg:hidden p-4">
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-4 space-y-2">
                {sidebarItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.id
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id)
                        setSidebarOpen(false)
                      }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? 'bg-primary-50 text-primary-600 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </motion.button>
                  )
                })}

                <div className="pt-4 mt-4 border-t border-gray-200">
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </motion.button>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence> */}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-x-hidden">
          {/* Mobile Header */}
          <div className="lg:hidden mb-6 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-600 hover:text-gray-900"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            <div className="text-2xl">{user.avatar}</div>
          </div>

          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

// Overview Section Component
const OverviewSection = ({ stats, recentActivities, upcomingPayments, activeCampaigns }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Mahfuz! 👋</h1>
        <p className="text-gray-600">Here's what's happening with your account today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.bgColor} ${stat.textColor} p-3 rounded-xl`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-gray-600 mb-2">{stat.title}</p>
              <p className="text-xs text-gray-500">{stat.change}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const Icon = activity.icon
              return (
                <motion.div
                  key={activity.id}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all cursor-pointer"
                >
                  <div className={`${activity.color} p-2 rounded-lg bg-opacity-10`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Sidebar Cards */}
        <div className="space-y-6">
          {/* Upcoming Payments */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Payments</h2>
            <div className="space-y-3">
              {upcomingPayments.map((payment) => (
                <div key={payment.id} className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{payment.title}</h3>
                    <span className="text-lg font-bold text-orange-600">৳{payment.amount}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{payment.dueDate}</span>
                  </div>
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Make Payment
            </motion.button>
          </div>

          {/* Active Campaign */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Active Campaign</h2>
            {activeCampaigns.map((campaign) => {
              const progress = (campaign.raised / campaign.goal) * 100
              return (
                <div key={campaign.id}>
                  <h3 className="font-semibold text-gray-900 mb-3">{campaign.title}</h3>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-gray-900">৳{campaign.raised.toLocaleString()}</span>
                      <span className="text-gray-600">of ৳{campaign.goal.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary-600 to-primary-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{campaign.backers} backers</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{campaign.daysLeft} days left</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
