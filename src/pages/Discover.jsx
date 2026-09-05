import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import UserCard from '../components/UserCard'
import { Filter } from 'lucide-react'
import { AGE_RANGES } from '../data/mockData'

const Discover = () => {
  const { getMatches } = useContext(AppContext)
  const [selectedAgeRange, setSelectedAgeRange] = useState('all')
  const [minMatchPercentage, setMinMatchPercentage] = useState(0)

  const matches = getMatches()
  let filteredMatches = matches

  if (selectedAgeRange !== 'all') {
    filteredMatches = filteredMatches.filter(u => u.ageRange === selectedAgeRange)
  }

  filteredMatches = filteredMatches.filter(u => u.matchPercentage >= minMatchPercentage)

  return (
    <div className='min-h-screen bg-light py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='mb-12'>
          <h1 className='text-4xl font-bold text-dark mb-4'>Discover Matches</h1>
          <p className='text-gray-600 text-lg'>Find people who can teach you what you want to learn</p>
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='card p-6 rounded-lg mb-8'>
          <div className='flex items-center gap-2 mb-6'>
            <Filter size={20} className='text-primary' />
            <h2 className='text-lg font-bold text-dark'>Filters</h2>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            <div>
              <label className='block text-sm font-semibold text-dark mb-2'>Age Range</label>
              <select
                value={selectedAgeRange}
                onChange={(e) => setSelectedAgeRange(e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg'
              >
                <option value='all'>All Ages</option>
                {AGE_RANGES.map(r => (
                  <option key={r.id} value={r.id}>{r.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className='block text-sm font-semibold text-dark mb-2'>
                Min Match: {minMatchPercentage}%
              </label>
              <input
                type='range'
                min='0'
                max='100'
                value={minMatchPercentage}
                onChange={(e) => setMinMatchPercentage(parseInt(e.target.value))}
                className='w-full'
              />
            </div>
          </div>
        </motion.div>

        {/* Results */}
        {filteredMatches.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {filteredMatches.map((user, i) => (
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
            <p className='text-xl text-gray-600'>No matches found with current filters</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Discover