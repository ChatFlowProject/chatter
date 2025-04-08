import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, logout as logoutAction } from '../store/authSlice';
import { getProfile } from '../api/authAPI';
import { useQueryClient } from '@tanstack/react-query';
import { AuthContext } from './AuthContext';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  useEffect(() => {
    let isMounted = true;

    getProfile()
      .then((user) => {
        if (isMounted) {
          dispatch(setUser(user));
          setIsAuthenticated(true);
        }
      })
      .catch(() => {
        if (isMounted) {
          setIsAuthenticated(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const logout = () => {
    dispatch(logoutAction());
    setIsAuthenticated(false);
    queryClient.clear();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};