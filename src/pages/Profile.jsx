import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import { Star, MessageCircle, ArrowLeft } from 'lucide-react'
import { mockUsers } from '../data/mockData'

const UserProfile = () => {
  const { userId } = useParams()
  const navigate = useNavigate()
  const { currentUser } = useContext(AppContext)
  const user = mockUsers.find(u => u.id === parseInt(userId)) || currentUser

  if (!user) return <div>User not found</div>

  return (
    <div className='min-h-screen bg-light py-12'>
      <div className='max-w-4xl mx-auto px-4'>
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => navigate(-1)}
          className='flex items-center gap-2 text-primary font-semibold mb-8'
        >
          <ArrowLeft size={20} /> Back
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='card p-12 rounded-xl'>
          <div className='flex items-start gap-8 mb-8'>
            <div className='text-9xl'>{user.avatar}</div>
            <div className='flex-1'>
              <h1 className='text-4xl font-bold text-dark mb-2'>{user.username}</h1>
              <p className='text-gray-600 text-lg mb-4'>Age {user.age} • {user.location}</p>
              <p className='text-gray-700 text-lg mb-6'>{user.bio}</p>

              <div className='flex gap-4 mb-8'>
                <div className='flex items-center gap-2'>
                  <Star size={20} className='text-amber-400' />
                  <div>
                    <div className='font-bold text-dark'>{user.ratings}/5.0</div>
                    <div className='text-sm text-gray-600'>{user.reviewCount} reviews</div>
                  </div>
                </div>
                <div>
                  <div className='font-bold text-dark'>{user.swapsCompleted}</div>
                  <div className='text-sm text-gray-600'>Completed</div>
                </div>
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h2 className='text-2xl font-bold text-dark mb-6'>Can Teach</h2>
              <div className='space-y-3'>
                {user.teaches.map((t, i) => (
                  <div key={i} className='flex items-center gap-3 p-3 bg-light rounded-lg'>
                    <div className='text-lg'>{t.verified ? '✅' : '🔵'}</div>
                    <div>
                      <div className='font-semibold text-dark'>{t.skill}</div>
                      <div className='text-sm text-gray-600'>{t.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className='text-2xl font-bold text-dark mb-6'>Wants to Learn</h2>
              <div className='space-y-3'>
                {user.wants.map((w, i) => (
                  <div key={i} className='flex items-center gap-3 p-3 bg-light rounded-lg'>
                    <div className='text-lg'>📚</div>
                    <div>
                      <div className='font-semibold text-dark'>{w.skill}</div>
                      <div className='text-sm text-gray-600'>{w.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default UserProfile