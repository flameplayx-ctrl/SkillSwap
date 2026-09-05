import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Clock } from 'lucide-react'
import { mockUsers } from '../data/mockData'

const ActiveSwaps = () => {
  const { currentUser, activeSwaps, respondToSwapRequest } = useContext(AppContext)

  if (!currentUser) {
    return <div className='text-center py-12'>Please login first</div>
  }

  const userSwaps = activeSwaps.filter(s => s.fromUserId === currentUser.id || s.toUserId === currentUser.id)
  const pendingSwaps = userSwaps.filter(s => s.status === 'pending')
  const activeSkillSwaps = userSwaps.filter(s => s.status === 'active')

  const getOtherUser = (swap) => {
    const otherId = swap.fromUserId === currentUser.id ? swap.toUserId : swap.fromUserId
    return mockUsers.find(u => u.id === otherId)
  }

  const SwapCard = ({ swap, isPending }) => {
    const otherUser = getOtherUser(swap)
    if (!otherUser) return null

    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='card p-6 rounded-lg'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-4'>
            <div className='text-5xl'>{otherUser.avatar}</div>
            <div>
              <h3 className='font-bold text-lg text-dark'>{otherUser.username}</h3>
              <p className='text-sm text-gray-600'>Age {otherUser.age}</p>
            </div>
          </div>
          {swap.status === 'active' && <div className='text-green-600 font-semibold'>🟢 Active</div>}
        </div>

        <div className='bg-light p-4 rounded-lg mb-4'>
          <p className='text-sm text-gray-600'>
            {swap.fromUserId === currentUser.id
              ? `You offered a skill exchange`
              : `${otherUser.username} sent you a swap request`}
          </p>
        </div>

        {isPending && (
          <div className='flex gap-4'>
            <button
              onClick={() => respondToSwapRequest(swap.id, true)}
              className='flex-1 flex items-center justify-center gap-2 btn-primary'
            >
              <CheckCircle size={18} /> Accept
            </button>
            <button
              onClick={() => respondToSwapRequest(swap.id, false)}
              className='flex-1 flex items-center justify-center gap-2 btn-secondary'
            >
              <XCircle size={18} /> Decline
            </button>
          </div>
        )}
      </motion.div>
    )
  }

  return (
    <div className='min-h-screen bg-light py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='mb-12'>
          <h1 className='text-4xl font-bold text-dark mb-2'>Your SkillSwaps</h1>
          <p className='text-gray-600'>Manage your skill exchanges</p>
        </motion.div>

        {/* Pending Requests */}
        {pendingSwaps.length > 0 && (
          <div className='mb-12'>
            <div className='flex items-center gap-2 mb-6'>
              <Clock size={24} className='text-accent' />
              <h2 className='text-2xl font-bold text-dark'>Pending Requests ({pendingSwaps.length})</h2>
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
              {pendingSwaps.map(swap => (
                <SwapCard key={swap.id} swap={swap} isPending={true} />
              ))}
            </div>
          </div>
        )}

        {/* Active Swaps */}
        {activeSkillSwaps.length > 0 && (
          <div>
            <div className='flex items-center gap-2 mb-6'>
              <CheckCircle size={24} className='text-green-600' />
              <h2 className='text-2xl font-bold text-dark'>Active Swaps ({activeSkillSwaps.length})</h2>
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
              {activeSkillSwaps.map(swap => (
                <SwapCard key={swap.id} swap={swap} isPending={false} />
              ))}
            </div>
          </div>
        )}

        {userSwaps.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='text-center py-20'>
            <p className='text-xl text-gray-600 mb-6'>No skill swaps yet</p>
            <a href='/discover' className='btn-primary inline-block'>Start Finding Matches</a>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default ActiveSwaps