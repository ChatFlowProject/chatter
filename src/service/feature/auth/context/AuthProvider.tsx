import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import { AuthContext } from './AuthContext';
import { clearProfile, setProfile } from '@service/feature/auth/store/profile/userSlice.ts';
import { getProfile } from '@service/feature/auth/api/profileAPI.ts';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  useEffect(() => {
    getProfile()
      .then((res) => {
        dispatch(setProfile(res));
        setIsAuthenticated(true);
      })
      .catch(() => {
        dispatch(clearProfile());
        setIsAuthenticated(false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const logout = () => {
    dispatch(clearProfile());
    queryClient.clear();
    document.cookie = 'accessToken=; Max-Age=0; path=/';
  };

  return (
    <AuthContext.Provider value={{ isLoading, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
