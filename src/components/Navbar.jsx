import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { Menu, X, LogOut } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const { currentUser, logout } = useContext(AppContext)
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className='bg-white shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        <Link to='/' className='flex items-center gap-2 text-2xl font-bold text-primary'>
          ↔️ SkillSwap
        </Link>

        <div className='hidden md:flex items-center gap-6'>
          {currentUser ? (
            <>
              <Link to='/dashboard' className='text-dark hover:text-primary font-medium'>Dashboard</Link>
              <Link to='/discover' className='text-dark hover:text-primary font-medium'>Discover</Link>
              <Link to='/swaps' className='text-dark hover:text-primary font-medium'>My Swaps</Link>
              <Link to='/profile' className='flex items-center gap-2 text-dark hover:text-primary'>
                {currentUser.avatar} {currentUser.username}
              </Link>
              <button onClick={logout} className='flex items-center gap-2 btn-secondary'>
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to='/login' className='btn-secondary'>Login</Link>
              <Link to='/register' className='btn-primary'>Sign Up</Link>
            </>
          )}
        </div>

        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='md:hidden bg-light p-4'>
          {currentUser ? (
            <div className='flex flex-col gap-4'>
              <Link to='/dashboard' className='text-dark hover:text-primary'>Dashboard</Link>
              <Link to='/discover' className='text-dark hover:text-primary'>Discover</Link>
              <Link to='/swaps' className='text-dark hover:text-primary'>My Swaps</Link>
              <Link to='/profile' className='text-dark hover:text-primary'>{currentUser.username}</Link>
              <button onClick={logout} className='btn-secondary'>Logout</button>
            </div>
          ) : (
            <div className='flex flex-col gap-4'>
              <Link to='/login' className='btn-secondary'>Login</Link>
              <Link to='/register' className='btn-primary'>Sign Up</Link>
            </div>
          )}
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar