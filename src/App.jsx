import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'

// Pages
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Discover from './pages/Discover'
import UserProfile from './pages/UserProfile'
import Profile from './pages/Profile'
import ActiveSwaps from './pages/ActiveSwaps'
import Ratings from './pages/Ratings'
import SkillChain from './pages/SkillChain'
import Search from './pages/Search'
import TrustCenter from './pages/TrustCenter'
import Favorites from './pages/Favorites'
import BlockedUsers from './pages/BlockedUsers'
import ReportUser from './pages/ReportUser'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* Protected Routes */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/:userId' element={<UserProfile />} />
          <Route path='/swaps' element={<ActiveSwaps />} />
          <Route path='/ratings' element={<Ratings />} />
          <Route path='/skill-chain' element={<SkillChain />} />
          <Route path='/search' element={<Search />} />
          <Route path='/trust' element={<TrustCenter />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/blocked' element={<BlockedUsers />} />
          <Route path='/report' element={<ReportUser />} />
          <Route path='/admin' element={<AdminDashboard />} />

          {/* Fallback */}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App