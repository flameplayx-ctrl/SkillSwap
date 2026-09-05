import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { ShieldAlert, CheckCircle, AlertCircle } from 'lucide-react'
import { VERIFICATION_STATES } from '../data/mockData'

const TrustCenter = () => {
  const { currentUser, updateUserProfile } = useContext(AppContext)
  const [verificationStep, setVerificationStep] = useState(1)

  if (!currentUser) {
    return <div className='text-center py-12'>Please login first</div>
  }

  const handleVerifyAge = () => {
    const updatedUser = { ...currentUser, verified: true }
    updateUserProfile(updatedUser)
    alert('Age verification submitted for review')
  }

  return (
    <div className='min-h-screen bg-light py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='mb-12'>
          <h1 className='text-4xl font-bold text-dark mb-4'>🛡️ Trust Center</h1>
          <p className='text-gray-600'>Manage your verification and trust settings</p>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8'>
          {/* Main Content */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className='md:col-span-2 space-y-8'>
            {/* Verification Status */}
            <motion.div className='card p-8 rounded-lg'>
              <div className='flex items-center gap-4 mb-6'>
                <ShieldAlert size={32} className={currentUser.verified ? 'text-green-600' : 'text-yellow-600'} />
                <div>
                  <h2 className='text-2xl font-bold text-dark'>Age Verification</h2>
                  <p className='text-gray-600'>{currentUser.verified ? '✅ Verified' : '🟡 Unverified'}</p>
                </div>
              </div>

              {!currentUser.verified ? (
                <div className='bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6'>
                  <h3 className='font-bold text-yellow-900 mb-3'>Verify Your Age</h3>
                  <p className='text-yellow-800 mb-4'>
                    Age verification helps us ensure a safe community. Your exact date of birth will never be public.
                  </p>
                  <button onClick={handleVerifyAge} className='btn-primary'>
                    Start Verification
                  </button>
                </div>
              ) : (
                <div className='bg-green-50 border border-green-200 p-6 rounded-lg'>
                  <div className='flex items-center gap-3'>
                    <CheckCircle className='text-green-600' />
                    <div>
                      <h4 className='font-bold text-green-900'>Verified</h4>
                      <p className='text-sm text-green-700'>Your age has been verified</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Safety Guidelines */}
            <motion.div className='card p-8 rounded-lg'>
              <h2 className='text-2xl font-bold text-dark mb-6'>📋 Safety Guidelines</h2>
              <div className='space-y-4'>
                {[
                  { title: 'For Everyone', desc: 'Meet in public spaces, tell someone where you are, use platform messaging first' },
                  { title: 'For Minors', desc: 'Prioritize online exchanges, supervised meetings are recommended, avoid private 1-on-1 meetings with unknown adults' },
                  { title: 'For Adults', desc: 'Respect age-appropriate interactions, follow local laws, report suspicious behavior' },
                  { title: 'General', desc: 'Never share sensitive personal info, block users who make you uncomfortable, report inappropriate content' },
                ].map((guideline, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className='border-l-4 border-primary pl-4 py-2'
                  >
                    <h3 className='font-bold text-dark'>{guideline.title}</h3>
                    <p className='text-gray-600 text-sm'>{guideline.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className='space-y-6'>
            {/* Trust Score */}
            <motion.div className='card p-6 rounded-lg'>
              <h3 className='font-bold text-dark mb-4'>Trust Score</h3>
              <div className='text-5xl font-bold text-primary mb-4'>{Math.round((currentUser.ratings / 5) * 100)}%</div>
              <div className='space-y-2 text-sm text-gray-600'>
                <div className='flex justify-between'>
                  <span>✅ Profile Complete</span>
                  <span className='text-green-600 font-bold'>+20%</span>
                </div>
                <div className='flex justify-between'>
                  <span>{currentUser.verified ? '✅' : '❌'} Age Verified</span>
                  <span className={currentUser.verified ? 'text-green-600 font-bold' : 'text-gray-400'}>+30%</span>
                </div>
                <div className='flex justify-between'>
                  <span>✅ Reviews & Ratings</span>
                  <span className='text-green-600 font-bold'>+30%</span>
                </div>
                <div className='flex justify-between'>
                  <span>✅ No Reports</span>
                  <span className='text-green-600 font-bold'>+20%</span>
                </div>
              </div>
            </motion.div>

            {/* Verification Status */}
            <motion.div className='card p-6 rounded-lg'>
              <h3 className='font-bold text-dark mb-4'>Verification Status</h3>
              <div className='space-y-3'>
                {[
                  { icon: currentUser.verified ? '✅' : '❌', label: 'Age Verified' },
                  { icon: '✅', label: 'Email Verified' },
                  { icon: currentUser.teaches.some(t => t.verified) ? '✅' : '⭕', label: 'Skill Verified' },
                ].map((item, i) => (
                  <div key={i} className='flex items-center gap-3'>
                    <span className='text-2xl'>{item.icon}</span>
                    <span className='text-sm text-dark'>{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Tips */}
            <motion.div className='card p-6 rounded-lg bg-blue-50'>
              <h3 className='font-bold text-dark mb-4'>💡 Trust Tips</h3>
              <ul className='text-sm text-gray-700 space-y-2'>
                <li>• Complete your profile</li>
                <li>• Verify your age</li>
                <li>• Get positive reviews</li>
                <li>• Maintain reliability</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TrustCenter