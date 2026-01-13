import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import LoanRequest from './pages/LoanRequest'
import LoanDetails from './pages/LoanDetails'
import AllLoanPost from './pages/AllLoanPost'
import LoanAgreement from './pages/LoanAgreement'
import Campaigns from './pages/Campaigns'
import CampaignCreate from './pages/CampaignCreate'

function AppContent() {
  const location = useLocation()
  const hideNavAndFooter = location.pathname === '/login' || location.pathname === '/register'

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavAndFooter && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loan-request" element={<LoanRequest />} />
          <Route path="/loan/:id" element={<LoanDetails />} />
          <Route path="/all-loans" element={<AllLoanPost />} />
          <Route path="/agreement/:agreementId" element={<LoanAgreement />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/create-campaign" element={<CampaignCreate />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
      {!hideNavAndFooter && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
