import { Routes, Route } from 'react-router-dom';
import LandingPage from '../view/pages/landing/LandingPage.tsx';
import SignupPage from '../view/pages/auth/signup/SignupPage.tsx';
import ChatPage from '../view/pages/chat/ChatPage.tsx';
import LoginPage from '../view/pages/auth/login/LoginPage.tsx';
import LayoutWithSidebar from '../view/components/layout/LayoutWithSidebar.tsx';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route element={<LayoutWithSidebar />}>
        <Route path="channels/:channelId" element={<ChatPage />} />
        <Route path="friends" element={<FriendsPage />} />
      {/*  TODO 여러 페이지 추가*/}
      </Route>
    </Routes>
  );
};

export default AppRouter;