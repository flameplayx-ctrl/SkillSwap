import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import { Users, Target, BookOpen, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import UserCard from '../components/UserCard'

const Dashboard = () => {
  const { currentUser, getMatches, activeSwaps } = useContext(AppContext)

  if (!currentUser) {
    return <div className='text-center py-12'>Please login first</div>
  }

  const matches = getMatches()
  const topMatch = matches[0]
  const recommendedMatches = matches.slice(0, 6)
  const teachingCount = currentUser.teaches?.length || 0
  const learningCount = currentUser.wants?.length || 0

  const stats = [
    { icon: Users, label: 'Active Swaps', value: activeSwaps.filter(s => s.status === 'active').length },
    { icon: Target, label: 'Potential Matches', value: matches.length },
    { icon: BookOpen, label: 'Skills Learning', value: learningCount },
    { icon: Star, label: 'Skills Teaching', value: teachingCount },
  ]

  return (
    <div className='min-h-screen bg-light py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Greeting */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='mb-12'>
          <h1 className='text-4xl font-bold text-dark mb-2'>
            Good evening, {currentUser.username} {currentUser.avatar}
          </h1>
          <p className='text-gray-600'>Here's your SkillSwap overview</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='grid md:grid-cols-4 gap-6 mb-12'
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className='card p-6 rounded-lg text-center'
              >
                <Icon className='text-primary mx-auto mb-2' size={24} />
                <div className='text-3xl font-bold text-dark mb-1'>{stat.value}</div>
                <div className='text-sm text-gray-600'>{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Top Match */}
        {topMatch && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='mb-12'>
            <h2 className='text-2xl font-bold text-dark mb-6'>Your Best Match</h2>
            <div className='md:w-1/3'>
              <UserCard user={topMatch} matchPercentage={topMatch.matchPercentage} />
            </div>
          </motion.div>
        )}

        {/* Recommended Matches */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className='text-2xl font-bold text-dark mb-6'>Recommended Matches</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {recommendedMatches.map((user, i) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <UserCard user={user} matchPercentage={user.matchPercentage} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard