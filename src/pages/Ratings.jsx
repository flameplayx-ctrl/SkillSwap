import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { Star, MessageCircle } from 'lucide-react'
import { mockUsers } from '../data/mockData'

const RatingModal = ({ swap, onClose, onSubmit }) => {
  const [ratings, setRatings] = React.useState({
    teaching: 5,
    reliability: 5,
    communication: 5,
    knowledge: 5,
  })
  const [feedback, setFeedback] = React.useState('')

  const otherUser = mockUsers.find(u => u.id === (swap.toUserId === useContext(AppContext).currentUser?.id ? swap.fromUserId : swap.toUserId))

  const handleSubmit = () => {
    onSubmit({ ratings, feedback })
  }

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className='card p-8 max-w-2xl mx-4'>
        <h2 className='text-3xl font-bold text-dark mb-2'>Rate Your SkillSwap</h2>
        <p className='text-gray-600 mb-8'>How was your experience?</p>

        <div className='space-y-6 mb-8'>
          {[
            { key: 'teaching', label: '🎓 Teaching Quality' },
            { key: 'reliability', label: '⏰ Reliability' },
            { key: 'communication', label: '💬 Communication' },
            { key: 'knowledge', label: '🧠 Knowledge' },
          ].map(item => (
            <div key={item.key}>
              <label className='block text-sm font-semibold text-dark mb-2'>{item.label}</label>
              <div className='flex gap-2'>
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    onClick={() => setRatings(prev => ({ ...prev, [item.key]: star }))}
                    className='text-2xl hover:scale-110 transition'
                  >
                    <Star size={24} fill={star <= ratings[item.key] ? '#fbbf24' : '#e5e7eb'} color={star <= ratings[item.key] ? '#fbbf24' : '#e5e7eb'} />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='mb-8'>
          <label className='block text-sm font-semibold text-dark mb-2'>Your Feedback</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder='Share your experience...'
            rows='4'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg'
          />
        </div>

        <div className='flex gap-4'>
          <button onClick={onClose} className='flex-1 btn-secondary'>
            Cancel
          </button>
          <button onClick={handleSubmit} className='flex-1 btn-primary'>
            Submit Rating
          </button>
        </div>
      </motion.div>
    </div>
  )
}

const Ratings = () => {
  const { currentUser } = useContext(AppContext)
  const [showRatingModal, setShowRatingModal] = React.useState(false)
  const [selectedSwap, setSelectedSwap] = React.useState(null)

  if (!currentUser) {
    return <div className='text-center py-12'>Please login first</div>
  }

  const handleRateClick = (swap) => {
    setSelectedSwap(swap)
    setShowRatingModal(true)
  }

  const handleRatingSubmit = ({ ratings, feedback }) => {
    console.log('Rating submitted:', { ratings, feedback })
    setShowRatingModal(false)
    alert('Thank you for your feedback!')
  }

  return (
    <div className='min-h-screen bg-light py-12'>
      <div className='max-w-4xl mx-auto px-4'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='mb-12'>
          <h1 className='text-4xl font-bold text-dark mb-2'>Your Ratings & Reviews</h1>
          <p className='text-gray-600'>Build your reputation by rating exchanges</p>
        </motion.div>

        {/* Summary */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='grid md:grid-cols-3 gap-6 mb-12'>
          <div className='card p-6 rounded-lg text-center'>
            <div className='text-5xl font-bold text-primary mb-2'>{currentUser.ratings}</div>
            <div className='text-gray-600'>Average Rating</div>
          </div>
          <div className='card p-6 rounded-lg text-center'>
            <div className='text-5xl font-bold text-primary mb-2'>{currentUser.reviewCount}</div>
            <div className='text-gray-600'>Total Reviews</div>
          </div>
          <div className='card p-6 rounded-lg text-center'>
            <div className='text-5xl font-bold text-primary mb-2'>{currentUser.swapsCompleted}</div>
            <div className='text-gray-600'>Completed Swaps</div>
          </div>
        </motion.div>

        {/* Rating History */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='card p-8 rounded-lg'>
          <h2 className='text-2xl font-bold text-dark mb-6'>Rate Your Swaps</h2>
          <p className='text-gray-600'>Complete a swap to leave a rating</p>
        </motion.div>
      </div>

      {showRatingModal && selectedSwap && (
        <RatingModal
          swap={selectedSwap}
          onClose={() => setShowRatingModal(false)}
          onSubmit={handleRatingSubmit}
        />
      )}
    </div>
  )
}

export default Ratings