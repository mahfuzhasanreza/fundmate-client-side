import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <LandingPage />
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
