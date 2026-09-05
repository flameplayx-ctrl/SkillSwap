import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { AGE_RANGES, SKILLS_CATEGORIES, SKILL_LEVELS } from '../data/mockData'
import { motion } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const Register = () => {
  const navigate = useNavigate()
  const { login } = useContext(AppContext)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    ageRange: '',
    location: '',
    bio: '',
    teaches: [],
    wants: [],
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      id: Math.random(),
      ...formData,
      avatar: '👤',
      verified: false,
      trustLevel: 1,
      ratings: 5.0,
      reviewCount: 0,
      swapsCompleted: 0,
      availability: 'Flexible',
    }
    login(newUser)
    navigate('/dashboard')
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12'>
      <div className='max-w-2xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='card p-8 rounded-xl'
        >
          <div className='mb-8'>
            <div className='flex justify-between mb-4'>
              {[1, 2, 3].map(s => (
                <div key={s} className={`h-2 flex-1 mx-1 rounded-full ${s <= step ? 'bg-primary' : 'bg-gray-200'}`} />
              ))}
            </div>
            <h2 className='text-2xl font-bold text-dark'>Create Your Profile</h2>
            <p className='text-gray-600'>Step {step} of 3</p>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='space-y-6'>
                <div>
                  <label className='block text-sm font-semibold mb-2 text-dark'>Username</label>
                  <input
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder='Choose your username'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                    required
                  />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-semibold mb-2 text-dark'>Age</label>
                    <input
                      type='number'
                      name='age'
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder='Your age'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                      min='13'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-semibold mb-2 text-dark'>Age Range</label>
                    <select
                      name='ageRange'
                      value={formData.ageRange}
                      onChange={handleInputChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                      required
                    >
                      <option value=''>Select range</option>
                      {AGE_RANGES.map(r => (
                        <option key={r.id} value={r.id}>{r.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-semibold mb-2 text-dark'>Location</label>
                  <input
                    type='text'
                    name='location'
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder='City, Country'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold mb-2 text-dark'>Bio</label>
                  <textarea
                    name='bio'
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder='Tell us about yourself...'
                    rows='4'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='space-y-6'>
                <div>
                  <h3 className='text-lg font-bold text-dark mb-4'>What skills can you teach?</h3>
                  <div className='space-y-4'>
                    {Object.entries(SKILLS_CATEGORIES).map(([emoji, category]) => (
                      <div key={emoji}>
                        <h4 className='font-semibold text-dark mb-2'>{emoji} {category.name}</h4>
                        <div className='grid grid-cols-2 gap-2'>
                          {category.skills.map(skill => (
                            <label key={skill} className='flex items-center gap-2'>
                              <input
                                type='checkbox'
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setFormData(prev => ({
                                      ...prev,
                                      teaches: [...prev.teaches, { skill, level: 'Intermediate', verified: false }],
                                    }))
                                  }
                                }}
                                className='rounded'
                              />
                              <span className='text-sm'>{skill}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='space-y-6'>
                <div>
                  <h3 className='text-lg font-bold text-dark mb-4'>What do you want to learn?</h3>
                  <div className='space-y-4'>
                    {Object.entries(SKILLS_CATEGORIES).map(([emoji, category]) => (
                      <div key={emoji}>
                        <h4 className='font-semibold text-dark mb-2'>{emoji} {category.name}</h4>
                        <div className='grid grid-cols-2 gap-2'>
                          {category.skills.map(skill => (
                            <label key={skill} className='flex items-center gap-2'>
                              <input
                                type='checkbox'
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setFormData(prev => ({
                                      ...prev,
                                      wants: [...prev.wants, { skill, level: 'Beginner' }],
                                    }))
                                  }
                                }}
                                className='rounded'
                              />
                              <span className='text-sm'>{skill}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            <div className='flex justify-between mt-8'>
              <button
                type='button'
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className='flex items-center gap-2 btn-secondary disabled:opacity-50'
              >
                <ChevronLeft size={20} /> Back
              </button>

              {step < 3 ? (
                <button
                  type='button'
                  onClick={() => setStep(step + 1)}
                  className='flex items-center gap-2 btn-primary'
                >
                  Next <ChevronRight size={20} />
                </button>
              ) : (
                <button type='submit' className='btn-primary'>
                  Create Account
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Register