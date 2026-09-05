import React, { useContext, useMemo } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { mockUsers } from '../data/mockData'

const SkillChain = () => {
  const { getMatches } = useContext(AppContext)
  const matches = useMemo(() => getMatches(), [getMatches])

  // Generate a skill chain visualization
  const generateChain = () => {
    const chain = []
    const selected = new Set()
    let current = mockUsers[0]

    for (let i = 0; i < 5; i++) {
      chain.push(current)
      selected.add(current.id)

      // Find next user based on matching
      const nextMatches = mockUsers.filter(u => !selected.has(u.id))
      const scored = nextMatches.map(u => ({
        user: u,
        score: current.teaches.filter(t =>
          u.wants.some(w => w.skill.toLowerCase() === t.skill.toLowerCase())
        ).length,
      }))

      const best = scored.reduce((a, b) => (a.score > b.score ? a : b), scored[0])
      if (best && best.score > 0) {
        current = best.user
      } else {
        break
      }
    }

    return chain
  }

  const chain = useMemo(generateChain, [])

  return (
    <div className='min-h-screen bg-light py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='mb-12'>
          <h1 className='text-4xl font-bold text-dark mb-4'>⛓️ Skill Chain</h1>
          <p className='text-gray-600 text-lg'>Watch how knowledge flows through our community</p>
        </motion.div>

        {/* Chain Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='card p-12 rounded-xl overflow-auto'
        >
          <div className='flex items-center justify-center gap-4 min-w-max pb-8'>
            {chain.map((user, index) => (
              <React.Fragment key={user.id}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className='text-center flex-shrink-0'
                >
                  <div className='text-8xl mb-4'>{user.avatar}</div>
                  <div className='font-bold text-dark'>{user.username}</div>
                  <div className='text-sm text-gray-600'>{user.location}</div>
                </motion.div>

                {index < chain.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.05 }}
                    className='text-4xl text-primary flex-shrink-0'
                  >
                    ↓
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Chain Details */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='grid md:grid-cols-2 gap-6 mt-12'>
          {chain.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className='card p-6 rounded-lg'
            >
              <div className='flex items-start gap-4 mb-4'>
                <div className='text-6xl'>{user.avatar}</div>
                <div>
                  <h3 className='text-xl font-bold text-dark'>{user.username}</h3>
                  <p className='text-sm text-gray-600'>{user.location}</p>
                </div>
              </div>

              <div className='mb-4'>
                <h4 className='font-semibold text-dark mb-2'>🎓 Teaching</h4>
                <div className='flex flex-wrap gap-2'>
                  {user.teaches.map((t, i) => (
                    <span key={i} className='text-xs badge bg-blue-100 text-blue-700'>
                      {t.skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className='font-semibold text-dark mb-2'>📚 Learning</h4>
                <div className='flex flex-wrap gap-2'>
                  {user.wants.map((w, i) => (
                    <span key={i} className='text-xs badge bg-purple-100 text-purple-700'>
                      {w.skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='mt-12 text-center'>
          <div className='card p-8 rounded-lg'>
            <h3 className='text-2xl font-bold text-dark mb-4'>How Skill Chains Work</h3>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Knowledge flows through our community! When Alex teaches Sam Video Editing, and Sam teaches Maya Guitar,
              and Maya teaches Omar Spanish—the chain continues. This creates a continuous loop where everyone benefits
              from collective knowledge exchange.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SkillChain