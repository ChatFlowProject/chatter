import { Routes, Route } from 'react-router-dom';
import LandingPage from '../view/pages/landing/LandingPage.tsx';
import SignupPage from '../view/pages/auth/signup/SignupPage.tsx';
import ChatPage from '../view/pages/chat/ChatPage.tsx';
import LoginPage from '../view/pages/auth/login/LoginPage.tsx';
import LayoutWithSidebar from '../view/components/layout/LayoutWithSidebar.tsx';
import FriendsPage from '../view/pages/Friends/FriendsPage.tsx';
import PrivateRoute from '../service/feature/auth/component/PrivateRoute.tsx';



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />

      <Route element={<LayoutWithSidebar />}>
        {/* 로그인 필요! */}
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
        {/* TODO: 다른 보호 페이지도 여기다 추가 */}
      </Route>
    </Routes>
  );
};

export default AppRouter;