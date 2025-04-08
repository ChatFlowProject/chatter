import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../service/feature/auth/store/authSlice';
import chatReducer from '../service/feature/channel/store/chatSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    // TODO 추가 리듀서
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;