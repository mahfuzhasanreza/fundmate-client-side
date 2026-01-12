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