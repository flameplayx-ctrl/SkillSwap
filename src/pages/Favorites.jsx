import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { Heart } from 'lucide-react'
import UserCard from '../components/UserCard'

const Favorites = () => {
  const { currentUser, users, favorites, getMatches } = useContext(AppContext)

  if (!currentUser) {
    return <div className='text-center py-12'>Please login first</div>
  }

  const matches = getMatches()
  const favoriteUsers = users.filter(u => favorites.includes(u.id)).map(u => ({
    ...u,
    matchPercentage: matches.find(m => m.id === u.id)?.matchPercentage || 0,
  }))

  return (
    <div className='min-h-screen bg-light py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <Heart size={32} fill='#ec4899' color='#ec4899' />
            <h1 className='text-4xl font-bold text-dark'>Favorites</h1>
          </div>
          <p className='text-gray-600'>Your saved skill swap matches</p>
        </motion.div>

        {favoriteUsers.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {favoriteUsers.map((user, i) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <UserCard user={user} matchPercentage={user.matchPercentage} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='text-center py-20'>
            <Heart size={48} className='mx-auto mb-4 text-gray-300' />
            <p className='text-xl text-gray-600 mb-6'>No favorites yet</p>
            <a href='/discover' className='btn-primary inline-block'>Discover Matches</a>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Favorites