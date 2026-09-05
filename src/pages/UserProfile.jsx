import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { mockUsers } from '../data/mockData'
import { motion } from 'framer-motion'
import { ArrowLeft, Flag, UserX, MessageCircle, Star } from 'lucide-react'
import SkillCard from '../components/SkillCard'
import TrustBadge from '../components/TrustBadge'

const UserProfile = () => {
  const { userId } = useParams()
  const navigate = useNavigate()
  const { currentUser, sendSwapRequest, blockUser, reportUser } = useContext(AppContext)
  const [showReportModal, setShowReportModal] = React.useState(false)
  const [reportReason, setReportReason] = React.useState('')

  const user = mockUsers.find(u => u.id === parseInt(userId))

  if (!user) {
    return <div className='text-center py-12'>User not found</div>
  }

  const handleSwapRequest = () => {
    sendSwapRequest(user.id)
    alert('Swap request sent!')
  }

  const handleReport = () => {
    if (reportReason) {
      reportUser(user.id, 'Other', reportReason)
      setShowReportModal(false)
      alert('Report submitted. Our team will review it.')
    }
  }

  const handleBlock = () => {
    blockUser(user.id)
    alert('User blocked')
    navigate('/discover')
  }

  return (
    <div className='min-h-screen bg-light py-8'>
      <div className='max-w-4xl mx-auto px-4'>
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => navigate(-1)}
          className='flex items-center gap-2 text-primary font-semibold mb-8 hover:gap-3 transition-all'
        >
          <ArrowLeft size={20} /> Back
        </motion.button>

        <div className='grid md:grid-cols-3 gap-8'>
          {/* Main Profile */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='md:col-span-2'>
            <div className='card p-8 rounded-xl mb-8'>
              <div className='flex items-start justify-between mb-6'>
                <div className='flex items-center gap-6'>
                  <div className='text-8xl'>{user.avatar}</div>
                  <div>
                    <h1 className='text-4xl font-bold text-dark'>{user.username}</h1>
                    <p className='text-gray-600'>Age {user.age}</p>
                    <p className='text-gray-500'>📍 {user.location}</p>
                  </div>
                </div>
              </div>

              <p className='text-gray-700 mb-8'>{user.bio}</p>

              <div className='flex gap-4 mb-8'>
                <button onClick={handleSwapRequest} className='btn-primary'>
                  Send Swap Request
                </button>
                <button onClick={() => setShowReportModal(true)} className='flex items-center gap-2 btn-secondary'>
                  <Flag size={16} /> Report
                </button>
                <button onClick={handleBlock} className='flex items-center gap-2 btn-secondary'>
                  <UserX size={16} /> Block
                </button>
              </div>
            </div>

            {/* Skills */}
            <div className='card p-8 rounded-xl'>
              <h2 className='text-2xl font-bold text-dark mb-6'>Can Teach</h2>
              <div className='grid grid-cols-2 gap-4 mb-12'>
                {user.teaches.map((t, i) => (
                  <SkillCard key={i} skill={t.skill} level={t.level} verified={t.verified} />
                ))}
              </div>

              <h2 className='text-2xl font-bold text-dark mb-6'>Wants to Learn</h2>
              <div className='grid grid-cols-2 gap-4'>
                {user.wants.map((w, i) => (
                  <SkillCard key={i} skill={w.skill} level={w.level} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className='space-y-6'>
            <TrustBadge user={user} />

            <div className='card p-6 rounded-lg'>
              <h3 className='font-bold text-dark mb-4'>Rating</h3>
              <div className='flex items-center gap-3 mb-4'>
                <div className='text-4xl font-bold text-primary'>{user.ratings}</div>
                <div>
                  <div className='flex gap-1'>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < Math.round(user.ratings) ? '#fbbf24' : '#e5e7eb'} />
                    ))}
                  </div>
                  <p className='text-sm text-gray-600'>{user.reviewCount} reviews</p>
                </div>
              </div>
            </div>

            <div className='card p-6 rounded-lg'>
              <h3 className='font-bold text-dark mb-4'>Statistics</h3>
              <div className='space-y-3 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Swaps Completed</span>
                  <span className='font-bold'>{user.swapsCompleted}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Availability</span>
                  <span className='font-bold'>{user.availability}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className='card p-8 max-w-md'>
            <h2 className='text-2xl font-bold text-dark mb-4'>Report User</h2>
            <textarea
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              placeholder='Describe the issue...'
              rows='4'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg mb-4'
            />
            <div className='flex gap-4'>
              <button onClick={() => setShowReportModal(false)} className='flex-1 btn-secondary'>
                Cancel
              </button>
              <button onClick={handleReport} className='flex-1 btn-primary'>
                Submit Report
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default UserProfile