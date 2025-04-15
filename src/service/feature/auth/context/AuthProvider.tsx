import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, logout as logoutAction } from '../store/authSlice';
import { getProfile } from '../api/authAPI';
import { useQueryClient } from '@tanstack/react-query';
import { AuthContext } from './AuthContext';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  useEffect(() => {
    getProfile()
      .then((user) => {
        dispatch(setUser({
          userId: user.userId,
          email: user.email,
          nickname: user.nickname,
        }));
        setIsAuthenticated(true);
      })
      .catch(() => {
        setIsAuthenticated(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const logout = () => {
    dispatch(logoutAction());
    setIsAuthenticated(false);
    queryClient.clear();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};