import { Routes, Route } from 'react-router-dom';
import LandingPage from '../view/pages/landing/LandingPage.tsx';
import SignupPage from '@pages/auth/signup/SignupPage.tsx';
import ChatPage from '../view/pages/chat/ChatPage.tsx';
import LoginPage from '@pages/auth/login/LoginPage.tsx';
import LayoutWithSidebar from '../view/components/layout/LayoutWithSidebar.tsx';
import FriendsPage from '../view/pages/Friends/FriendsPage.tsx';
import PrivateRoute from '../service/feature/auth/component/PrivateRoute.tsx';
import { AuthProvider } from '../service/feature/auth';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route
        element={
          <AuthProvider>
            <LayoutWithSidebar />
          </AuthProvider>
        }
      >
        <Route
          path="channels/:channelId"
          element={
            <PrivateRoute>
              <ChatPage />
            </PrivateRoute>
          }
        />
        <Route
          path="friends"
          element={
            <PrivateRoute>
              <FriendsPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;