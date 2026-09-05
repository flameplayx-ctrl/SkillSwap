import React, { createContext, useState, useCallback, useMemo } from 'react'
import { mockUsers } from '../data/mockData'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [users] = useState(mockUsers)
  const [favorites, setFavorites] = useState([])
  const [blockedUsers, setBlockedUsers] = useState([])
  const [activeSwaps, setActiveSwaps] = useState([
    { id: 1, fromUserId: 1, toUserId: 2, status: 'pending' },
    { id: 2, fromUserId: 3, toUserId: 2, status: 'active' },
  ])
  const [reports, setReports] = useState([])

  const login = useCallback((user) => {
    setCurrentUser(user)
  }, [])

  const logout = useCallback(() => {
    setCurrentUser(null)
    setFavorites([])
    setBlockedUsers([])
  }, [])

  const updateUserProfile = useCallback((updatedUser) => {
    setCurrentUser(updatedUser)
  }, [])

  const toggleFavorite = useCallback((userId) => {
    setFavorites(prev =>
      prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
    )
  }, [])

  const blockUser = useCallback((userId) => {
    setBlockedUsers(prev =>
      prev.includes(userId) ? prev : [...prev, userId]
    )
  }, [])

  const unblockUser = useCallback((userId) => {
    setBlockedUsers(prev => prev.filter(id => id !== userId))
  }, [])

  const reportUser = useCallback((userId, category, reason) => {
    const newReport = {
      id: Math.random(),
      reportedUserId: userId,
      reporterUserId: currentUser?.id,
      category,
      reason,
      severity: 'medium',
      status: 'pending',
      createdAt: new Date(),
    }
    setReports(prev => [...prev, newReport])
  }, [currentUser])

  const sendSwapRequest = useCallback((toUserId) => {
    const newSwap = {
      id: Math.random(),
      fromUserId: currentUser?.id,
      toUserId,
      status: 'pending',
      createdAt: new Date(),
    }
    setActiveSwaps(prev => [...prev, newSwap])
  }, [currentUser])

  const respondToSwapRequest = useCallback((swapId, accepted) => {
    setActiveSwaps(prev =>
      prev.map(swap =>
        swap.id === swapId
          ? { ...swap, status: accepted ? 'active' : 'declined' }
          : swap
      )
    )
  }, [])

  const getMatches = useCallback(() => {
    if (!currentUser) return []

    const calculateMatch = (user) => {
      if (user.id === currentUser.id || blockedUsers.includes(user.id)) return -1

      let score = 0

      // Skill compatibility (40%)
      const commonTeach = currentUser.wants?.filter(w =>
        user.teaches?.some(t => t.skill.toLowerCase() === w.skill.toLowerCase())
      ).length || 0
      const commonLearn = currentUser.teaches?.filter(t =>
        user.wants?.some(w => w.skill.toLowerCase() === t.skill.toLowerCase())
      ).length || 0
      score += (commonTeach + commonLearn) * 10

      // Age similarity (30%)
      const ageDiff = Math.abs(currentUser.age - user.age)
      if (ageDiff <= 2) score += 30
      else if (ageDiff <= 5) score += 20
      else if (ageDiff <= 10) score += 10

      // Trust level (20%)
      score += user.trustLevel * 6

      // Rating (10%)
      score += (user.ratings / 5) * 10

      return Math.min(100, score)
    }

    return users
      .map(user => ({
        ...user,
        matchPercentage: calculateMatch(user),
      }))
      .filter(u => u.matchPercentage > 0)
      .sort((a, b) => b.matchPercentage - a.matchPercentage)
  }, [currentUser, users, blockedUsers])

  const value = useMemo(
    () => ({
      currentUser,
      users,
      favorites,
      blockedUsers,
      activeSwaps,
      reports,
      login,
      logout,
      updateUserProfile,
      toggleFavorite,
      blockUser,
      unblockUser,
      reportUser,
      sendSwapRequest,
      respondToSwapRequest,
      getMatches,
    }),
    [
      currentUser,
      users,
      favorites,
      blockedUsers,
      activeSwaps,
      reports,
      login,
      logout,
      updateUserProfile,
      toggleFavorite,
      blockUser,
      unblockUser,
      reportUser,
      sendSwapRequest,
      respondToSwapRequest,
      getMatches,
    ]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContext