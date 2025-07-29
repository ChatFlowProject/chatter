import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile } from '@service/feature/auth/types/profile.ts';

interface User {
  userId: string;
  email: string;
  name: string;
  nickname?: string;
}

interface AuthState {
  user: User | null;
  profile: UserProfile | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  profile: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    setProfile(state, action: PayloadAction<UserProfile>) {
      state.profile = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.profile = null;
      state.isAuthenticated = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

export const { setUser, setProfile, logout } = authSlice.actions;
