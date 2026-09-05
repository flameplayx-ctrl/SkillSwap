import React from 'react'
import { motion } from 'framer-motion'

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchType, setSearchType] = React.useState('people')
  const [results, setResults] = React.useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    // Mock search results
    if (searchType === 'people') {
      setResults([
        { type: 'person', name: 'Alex', skill: 'Video Editing', match: '94%' },
        { type: 'person', name: 'Sam', skill: 'Guitar', match: '87%' },
      ])
    } else if (searchType === 'skills') {
      setResults([
        { type: 'skill', name: 'Video Editing', teachers: 3, learners: 5 },
        { type: 'skill', name: 'Photography', teachers: 2, learners: 4 },
      ])
    }
  }

  return (
    <div className='min-h-screen bg-light py-12'>
      <div className='max-w-4xl mx-auto px-4'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='mb-12'>
          <h1 className='text-4xl font-bold text-dark mb-4'>🔍 Search</h1>
          <p className='text-gray-600'>Find people, skills, and categories</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='card p-8 rounded-lg mb-8'>
          <form onSubmit={handleSearch}>
            <div className='flex gap-4 mb-6'>
              {['people', 'skills', 'categories'].map(type => (
                <label key={type} className='flex items-center gap-2'>
                  <input
                    type='radio'
                    value={type}
                    checked={searchType === type}
                    onChange={(e) => setSearchType(e.target.value)}
                  />
                  <span className='text-dark font-medium capitalize'>{type}</span>
                </label>
              ))}
            </div>

            <div className='flex gap-4'>
              <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Search ${searchType}...`}
                className='flex-1 px-4 py-3 border border-gray-300 rounded-lg text-lg'
              />
              <button type='submit' className='btn-primary'>
                Search
              </button>
            </div>
          </form>
        </motion.div>

        {/* Results */}
        {results.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='space-y-4'>
            {results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className='card p-6 rounded-lg'
              >
                {result.type === 'person' ? (
                  <div className='flex justify-between items-center'>
                    <div>
                      <h3 className='font-bold text-lg text-dark'>{result.name}</h3>
                      <p className='text-gray-600'>Teaches: {result.skill}</p>
                    </div>
                    <div className='text-right'>
                      <div className='text-2xl font-bold text-primary'>{result.match}</div>
                      <button className='mt-2 btn-primary text-sm'>View Profile</button>
                    </div>
                  </div>
                ) : (
                  <div className='flex justify-between items-center'>
                    <div>
                      <h3 className='font-bold text-lg text-dark'>{result.name}</h3>
                      <p className='text-gray-600'>{result.teachers} teachers • {result.learners} learners</p>
                    </div>
                    <button className='btn-primary'>Explore</button>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Search