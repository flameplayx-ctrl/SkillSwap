import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { mockUsers } from '../data/mockData'
import { motion } from 'framer-motion'

const Login = () => {
  const [selectedUserId, setSelectedUserId] = useState(null)
  const { login } = useContext(AppContext)
  const navigate = useNavigate()

  const handleLogin = (userId) => {
    const user = mockUsers.find(u => u.id === userId)
    if (user) {
      login(user)
      navigate('/dashboard')
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12'>
      <div className='max-w-4xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'
        >
          <h1 className='text-4xl font-bold text-dark mb-4'>Welcome Back</h1>
          <p className='text-gray-600 text-lg'>Demo: Select a user to login</p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {mockUsers.map((user, i) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => handleLogin(user.id)}
              className='card p-6 rounded-lg cursor-pointer hover:shadow-lg transition-all transform hover:scale-105'
            >
              <div className='text-center'>
                <div className='text-6xl mb-4'>{user.avatar}</div>
                <h3 className='font-bold text-lg text-dark mb-1'>{user.username}</h3>
                <p className='text-sm text-gray-600 mb-3'>Age {user.age}</p>
                <button className='w-full btn-primary text-sm'>
                  Login as {user.username}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Login