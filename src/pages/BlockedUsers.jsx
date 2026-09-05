import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { BlockSquare } from 'lucide-react'
import { mockUsers } from '../data/mockData'

const BlockedUsers = () => {
  const { currentUser, blockedUsers, unblockUser } = useContext(AppContext)

  if (!currentUser) {
    return <div className='text-center py-12'>Please login first</div>
  }

  const blocked = mockUsers.filter(u => blockedUsers.includes(u.id))

  return (
    <div className='min-h-screen bg-light py-12'>
      <div className='max-w-4xl mx-auto px-4'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <BlockSquare size={32} className='text-red-600' />
            <h1 className='text-4xl font-bold text-dark'>Blocked Users</h1>
          </div>
          <p className='text-gray-600'>Manage your blocked users list</p>
        </motion.div>

        {blocked.length > 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='space-y-4'>
            {blocked.map((user, i) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className='card p-6 rounded-lg flex items-center justify-between'
              >
                <div className='flex items-center gap-4'>
                  <div className='text-5xl opacity-50'>{user.avatar}</div>
                  <div>
                    <h3 className='font-bold text-lg text-dark line-through'>{user.username}</h3>
                    <p className='text-sm text-gray-600'>Blocked</p>
                  </div>
                </div>
                <button
                  onClick={() => unblockUser(user.id)}
                  className='btn-secondary'
                >
                  Unblock
                </button>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='text-center py-20'>
            <BlockSquare size={48} className='mx-auto mb-4 text-gray-300' />
            <p className='text-xl text-gray-600'>No blocked users</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default BlockedUsers