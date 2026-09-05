import React, { createContext, useState, useCallback } from 'react';
import { mockUsers, calculateMatchPercentage } from '../data/mockData';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(mockUsers);
  const [activeSwaps, setActiveSwaps] = useState([]);
  const [reports, setReports] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const login = useCallback((user) => {
    setCurrentUser(user);
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
  }, []);

  const updateUserProfile = useCallback((updatedUser) => {
    setCurrentUser(updatedUser);
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
  }, [users]);

  const getMatches = useCallback(() => {
    if (!currentUser) return [];
    
    return users
      .filter(u => u.id !== currentUser.id && !blockedUsers.includes(u.id))
      .map(user => ({
        ...user,
        matchPercentage: calculateMatchPercentage(currentUser, user),
      }))
      .sort((a, b) => b.matchPercentage - a.matchPercentage);
  }, [currentUser, users, blockedUsers]);

  const sendSwapRequest = useCallback((targetUserId, status = 'pending') => {
    const swap = {
      id: Math.random(),
      fromUserId: currentUser.id,
      toUserId: targetUserId,
      status,
      createdAt: new Date(),
      scheduledDate: null,
      fromUserSkill: null,
      toUserSkill: null,
    };
    setActiveSwaps([...activeSwaps, swap]);
    return swap;
  }, [currentUser, activeSwaps]);

  const respondToSwapRequest = useCallback((swapId, accepted) => {
    setActiveSwaps(activeSwaps.map(swap =>
      swap.id === swapId
        ? { ...swap, status: accepted ? 'active' : 'declined' }
        : swap
    ));
  }, [activeSwaps]);

  const reportUser = useCallback((reportedUserId, category, reason) => {
    const report = {
      id: Math.random(),
      reportedUserId,
      reporterUserId: currentUser.id,
      category,
      reason,
      status: 'pending',
      createdAt: new Date(),
      severity: category === 'Scam/fraud' ? 'high' : 'medium',
    };
    setReports([...reports, report]);
    return report;
  }, [currentUser, reports]);

  const blockUser = useCallback((userId) => {
    if (!blockedUsers.includes(userId)) {
      setBlockedUsers([...blockedUsers, userId]);
    }
  }, [blockedUsers]);

  const unblockUser = useCallback((userId) => {
    setBlockedUsers(blockedUsers.filter(id => id !== userId));
  }, [blockedUsers]);

  const toggleFavorite = useCallback((userId) => {
    if (favorites.includes(userId)) {
      setFavorites(favorites.filter(id => id !== userId));
    } else {
      setFavorites([...favorites, userId]);
    }
  }, [favorites]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        users,
        login,
        logout,
        updateUserProfile,
        getMatches,
        activeSwaps,
        sendSwapRequest,
        respondToSwapRequest,
        reports,
        reportUser,
        blockedUsers,
        blockUser,
        unblockUser,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
