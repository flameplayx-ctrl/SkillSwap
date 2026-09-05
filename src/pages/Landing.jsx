import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const Landing = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const steps = [
    { icon: '📝', title: 'Create Profile', desc: 'Share your skills and interests' },
    { icon: '🎯', title: 'Get Matched', desc: 'Find compatible learners' },
    { icon: '🤝', title: 'Exchange Skills', desc: 'Learn from each other' },
    { icon: '⭐', title: 'Rate & Review', desc: 'Build your reputation' },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      {/* Hero */}
      <section className='max-w-7xl mx-auto px-4 py-20 md:py-32'>
        <motion.div
          variants={container}
          initial='hidden'
          animate='visible'
          className='text-center'
        >
          <motion.h1 variants={item} className='text-5xl md:text-7xl font-bold text-dark mb-6'>
            🎓 SkillSwap
          </motion.h1>

          <motion.p variants={item} className='text-2xl md:text-3xl text-gray-700 mb-8'>
            <span className='font-bold'>"You have something someone wants to learn."</span>
          </motion.p>

          <motion.p variants={item} className='text-lg text-gray-600 mb-12 max-w-2xl mx-auto'>
            Exchange skills, discover people, and learn without money.
          </motion.p>

          <motion.div variants={item} className='flex flex-col md:flex-row gap-4 justify-center'>
            <Link to='/register' className='btn-primary text-lg flex items-center justify-center gap-2'>
              Find My SkillSwap <ArrowRight size={20} />
            </Link>
            <Link to='/discover' className='btn-secondary text-lg flex items-center justify-center gap-2'>
              Explore Skills
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Process */}
      <section className='bg-white py-20'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-16'>How SkillSwap Works</h2>

          <div className='grid md:grid-cols-4 gap-8'>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className='text-center'
              >
                <div className='text-6xl mb-4'>{step.icon}</div>
                <h3 className='text-xl font-bold mb-2 text-dark'>{step.title}</h3>
                <p className='text-gray-600'>{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className='hidden md:block text-4xl text-primary mt-8'>→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className='max-w-7xl mx-auto px-4 py-20'>
        <h2 className='text-4xl font-bold text-center mb-16'>Why SkillSwap?</h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {[
            { title: 'Free Learning', desc: 'No payments. Pure skill exchange.' },
            { title: 'Smart Matching', desc: 'Find people who need what you teach.' },
            { title: 'Trust & Safety', desc: 'Verification, ratings, and community trust.' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className='card p-8 rounded-xl'
            >
              <div className='flex items-start gap-4'>
                <CheckCircle className='text-primary flex-shrink-0 mt-1' size={24} />
                <div>
                  <h3 className='text-xl font-bold text-dark mb-2'>{feature.title}</h3>
                  <p className='text-gray-600'>{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='bg-primary text-white py-20'>
        <div className='max-w-4xl mx-auto text-center px-4'>
          <h2 className='text-4xl font-bold mb-6'>Ready to Trade Skills?</h2>
          <p className='text-lg mb-8 opacity-90'>Join thousands learning without money.</p>
          <Link to='/register' className='inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100'>
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Landing