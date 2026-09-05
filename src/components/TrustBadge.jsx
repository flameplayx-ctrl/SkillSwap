import React from 'react'

const TrustBadge = ({ user }) => {
  const getTrustLabel = (level) => {
    if (level >= 3) return '🟢 Trusted'
    if (level >= 2) return '🔵 Established'
    return '🟡 New'
  }

  return (
    <div className='card p-4 rounded-lg border border-gray-100'>
      <div className='text-sm font-semibold mb-3'>{getTrustLabel(user.trustLevel)}</div>
      <div className='space-y-2 text-xs text-gray-600'>
        <div className='flex items-center gap-2'>
          {user.verified ? '✅' : '❌'} Age {user.verified ? 'Verified' : 'Unverified'}
        </div>
        <div className='flex items-center gap-2'>
          ✓ {user.swapsCompleted} Swaps Completed
        </div>
        <div className='flex items-center gap-2'>
          ⭐ {user.ratings}/5.0 ({user.reviewCount} reviews)
        </div>
      </div>
    </div>
  )
}

export default TrustBadge