import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from '@service/feature/auth/store/auth/authSlice';
import teamReducer from '@service/feature/team/store/teamSlice';

const profileTransform = createTransform(
    (inboundState) => {
      console.log('Transform (serialize):', inboundState);
      return inboundState ? JSON.stringify(inboundState) : null;
    },
    (outboundState) => {
      console.log('Transform (deserialize):', outboundState);
      try {
        return outboundState ? JSON.parse(outboundState) : null;
      } catch (error) {
        console.error('프로필 역직렬화 실패:', error);
        return null;
      }
    },
    { whitelist: ['profile'] }
);

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'isAuthenticated', 'profile'],
  transforms: [profileTransform],
  debug: true,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    teams: teamReducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);