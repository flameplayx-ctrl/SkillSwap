import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, MessageCircle } from 'lucide-react'
import { AppContext } from '../context/AppContext'

const UserCard = ({ user, matchPercentage }) => {
  const navigate = useNavigate()
  const { toggleFavorite, favorites } = useContext(AppContext)
  const isFavorited = favorites.includes(user.id)

  const getTrustColor = (level) => {
    if (level >= 3) return '🟢 Trusted'
    if (level >= 2) return '🔵 Established'
    return '🟡 New'
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className='card p-6 rounded-xl border border-gray-100 cursor-pointer'
      onClick={() => navigate(`/profile/${user.id}`)}
    >
      <div className='flex justify-between items-start mb-4'>
        <div className='flex items-center gap-3'>
          <span className='text-5xl'>{user.avatar}</span>
          <div>
            <h3 className='font-bold text-lg text-dark'>{user.username}</h3>
            <p className='text-sm text-gray-500'>Age {user.age} • {user.location}</p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            toggleFavorite(user.id)
          }}
          className='p-2 hover:bg-pink-100 rounded-lg transition'
        >
          <Heart size={20} fill={isFavorited ? '#ec4899' : 'none'} color={isFavorited ? '#ec4899' : '#ccc'} />
        </button>
      </div>

      <div className='mb-4'>
        <h4 className='text-xs font-semibold text-gray-600 uppercase mb-2'>Can Teach</h4>
        <div className='flex flex-wrap gap-2'>
          {user.teaches.slice(0, 2).map((t, i) => (
            <span key={i} className='text-xs badge bg-blue-100 text-blue-700'>
              {t.skill}
            </span>
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <h4 className='text-xs font-semibold text-gray-600 uppercase mb-2'>Wants to Learn</h4>
        <div className='flex flex-wrap gap-2'>
          {user.wants.slice(0, 2).map((w, i) => (
            <span key={i} className='text-xs badge bg-purple-100 text-purple-700'>
              {w.skill}
            </span>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-center pt-4 border-t border-gray-100'>
        <div>
          <div className='text-2xl font-bold text-primary'>{matchPercentage}%</div>
          <div className='text-xs text-gray-500'>Match</div>
        </div>
        <div className='text-right'>
          <div className='text-sm font-semibold text-gray-700'>{getTrustColor(user.trustLevel)}</div>
          <div className='text-xs text-gray-500'>⭐ {user.ratings}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default UserCard