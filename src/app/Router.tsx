import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '@pages/landing/LandingPage';
import LoginPage from '@pages/auth/login/LoginPage';
import SignupPage from '@pages/auth/signup/SignupPage';
import FriendsPage from '@pages/Friends/FriendsPage';
import { ChatPage } from '@pages/chat/ChatPage';
import { AuthProvider } from '@service/feature/auth';
import PrivateRoute from '@service/feature/auth/component/PrivateRoute.tsx';
import LayoutWithSidebar from '../view/layout/LayoutWithSidebar.tsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route
        path='/channels'
        element={
          <AuthProvider>
            <LayoutWithSidebar />
          </AuthProvider>
        }
      >
        <Route
          path='@me'
          element={
            <PrivateRoute>
              <FriendsPage />
            </PrivateRoute>
          }
        />

        <Route
          path='@me/:channelId'
          element={
            <PrivateRoute>
              <ChatPage />
            </PrivateRoute>
          }
        />

        <Route
          path=':serverId'
          element={
            <PrivateRoute>
              <ChatPage />
            </PrivateRoute>
          }
        />

        <Route
          path=':serverId/:channelId'
          element={
            <PrivateRoute>
              <ChatPage />
            </PrivateRoute>
          }
        />
      </Route>

      <Route path='*' element={<Navigate to='/channels/@me' replace />} />
    </Routes>
  );
};

export default AppRouter;
