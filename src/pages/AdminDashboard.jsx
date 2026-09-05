import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { AlertTriangle, Flag } from 'lucide-react'

const AdminDashboard = () => {
  const { reports } = useContext(AppContext)

  const getReportCount = (status) => reports.filter(r => r.status === status).length

  const stats = [
    { label: 'Total Reports', value: reports.length, color: 'bg-red-100 text-red-700' },
    { label: 'Pending', value: getReportCount('pending'), color: 'bg-yellow-100 text-yellow-700' },
    { label: 'Resolved', value: getReportCount('resolved'), color: 'bg-green-100 text-green-700' },
  ]

  return (
    <div className='min-h-screen bg-light py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='mb-12'>
          <h1 className='text-4xl font-bold text-dark mb-2'>🛡️ Admin Dashboard</h1>
          <p className='text-gray-600'>Moderation & Trust & Safety</p>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='grid md:grid-cols-3 gap-6 mb-12'>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`card p-6 rounded-lg text-center ${stat.color}`}
            >
              <div className='text-3xl font-bold mb-2'>{stat.value}</div>
              <div className='font-semibold'>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reports Table */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='card p-8 rounded-lg'>
          <div className='flex items-center gap-2 mb-6'>
            <Flag size={24} className='text-red-600' />
            <h2 className='text-2xl font-bold text-dark'>Reports</h2>
          </div>

          {reports.length > 0 ? (
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead>
                  <tr className='border-b-2 border-gray-200'>
                    <th className='text-left py-3 px-4 font-bold text-dark'>Category</th>
                    <th className='text-left py-3 px-4 font-bold text-dark'>Reported User</th>
                    <th className='text-left py-3 px-4 font-bold text-dark'>Reporter</th>
                    <th className='text-left py-3 px-4 font-bold text-dark'>Severity</th>
                    <th className='text-left py-3 px-4 font-bold text-dark'>Status</th>
                    <th className='text-left py-3 px-4 font-bold text-dark'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map(report => (
                    <motion.tr
                      key={report.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className='border-b border-gray-100 hover:bg-gray-50'
                    >
                      <td className='py-3 px-4 text-dark'>{report.category}</td>
                      <td className='py-3 px-4 text-dark'>User #{report.reportedUserId}</td>
                      <td className='py-3 px-4 text-dark'>User #{report.reporterUserId}</td>
                      <td className='py-3 px-4'>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${report.severity === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {report.severity.toUpperCase()}
                        </span>
                      </td>
                      <td className='py-3 px-4'>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${report.status === 'pending' ? 'bg-gray-100 text-gray-700' : 'bg-green-100 text-green-700'}`}>
                          {report.status.toUpperCase()}
                        </span>
                      </td>
                      <td className='py-3 px-4'>
                        <button className='text-primary font-semibold hover:underline'>Review</button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className='text-gray-600 text-center py-8'>No reports yet</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default AdminDashboard