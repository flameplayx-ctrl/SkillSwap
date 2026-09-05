import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { REPORT_CATEGORIES } from '../data/mockData'
import { Flag, AlertTriangle } from 'lucide-react'
import { mockUsers } from '../data/mockData'

const ReportUser = () => {
  const navigate = useNavigate()
  const { currentUser, reportUser } = useContext(AppContext)
  const [selectedUserId, setSelectedUserId] = useState('')
  const [category, setCategory] = useState('')
  const [reason, setReason] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (!currentUser) {
    return <div className='text-center py-12'>Please login first</div>
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedUserId && category && reason) {
      reportUser(parseInt(selectedUserId), category, reason)
      setSubmitted(true)
      setTimeout(() => navigate('/discover'), 2000)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='min-h-screen bg-light flex items-center justify-center py-12'
      >
        <div className='card p-12 text-center rounded-lg max-w-md'>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
            className='text-6xl mb-4'
          >
            ✅
          </motion.div>
          <h2 className='text-2xl font-bold text-dark mb-2'>Report Submitted</h2>
          <p className='text-gray-600 mb-6'>Thank you! Our moderation team will review this shortly.</p>
          <a href='/discover' className='btn-primary'>Back to Discover</a>
        </div>
      </motion.div>
    )
  }

  return (
    <div className='min-h-screen bg-light py-12'>
      <div className='max-w-2xl mx-auto px-4'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='mb-8'>
          <div className='flex items-center gap-3 mb-4'>
            <Flag size={32} className='text-red-600' />
            <h1 className='text-4xl font-bold text-dark'>Report User</h1>
          </div>
          <p className='text-gray-600'>Help us keep SkillSwap safe by reporting concerns</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='card p-8 rounded-lg'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Warning */}
            <div className='bg-red-50 border border-red-200 p-4 rounded-lg flex gap-4'>
              <AlertTriangle size={24} className='text-red-600 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-red-900'>False Reports</h3>
                <p className='text-sm text-red-700'>Filing false reports may result in account restrictions. Only report genuine concerns.</p>
              </div>
            </div>

            {/* User Selection */}
            <div>
              <label className='block text-sm font-semibold text-dark mb-2'>Who are you reporting?</label>
              <select
                value={selectedUserId}
                onChange={(e) => setSelectedUserId(e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                required
              >
                <option value=''>Select a user...</option>
                {mockUsers.filter(u => u.id !== currentUser.id).map(u => (
                  <option key={u.id} value={u.id}>
                    {u.username}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div>
              <label className='block text-sm font-semibold text-dark mb-2'>What's the issue?</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                required
              >
                <option value=''>Select a category...</option>
                {REPORT_CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Reason */}
            <div>
              <label className='block text-sm font-semibold text-dark mb-2'>Describe the issue</label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder='Please provide details...'
                rows='6'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                required
              />
            </div>

            {/* Confirmation */}
            <div className='flex items-start gap-3'>
              <input
                type='checkbox'
                id='confirm'
                required
                className='mt-1'
              />
              <label htmlFor='confirm' className='text-sm text-gray-600'>
                I confirm this report is accurate and I'm not filing it for personal disputes
              </label>
            </div>

            {/* Buttons */}
            <div className='flex gap-4'>
              <button
                type='button'
                onClick={() => navigate(-1)}
                className='flex-1 btn-secondary'
              >
                Cancel
              </button>
              <button type='submit' className='flex-1 btn-primary'>
                Submit Report
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default ReportUser