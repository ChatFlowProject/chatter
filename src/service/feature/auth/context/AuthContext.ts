import { createContext } from 'react';

export type AuthContextType = {
  isAuthenticated: boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);