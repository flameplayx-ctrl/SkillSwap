import React from 'react'
import { motion } from 'framer-motion'

const SkillCard = ({ skill, level, verified = false }) => {
  const levelColors = {
    'Beginner': 'bg-blue-100 text-blue-700',
    'Intermediate': 'bg-purple-100 text-purple-700',
    'Advanced': 'bg-pink-100 text-pink-700',
    'Expert': 'bg-amber-100 text-amber-700',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className='card p-4 rounded-lg border border-gray-100'
    >
      <div className='flex justify-between items-start mb-2'>
        <h3 className='font-semibold text-dark'>{skill}</h3>
        {verified && <span className='text-lg'>✅</span>}
      </div>
      <span className={`badge text-xs ${levelColors[level] || 'bg-gray-100'}`}>
        {level}
      </span>
    </motion.div>
  )
}

export default SkillCard