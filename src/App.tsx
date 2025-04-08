import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './view/pages/auth/login/Login';
import LoginBackground from './feature/auth/component/LoginBackground';
import SignupPage from './view/pages/auth/signup/SignupPage';
import ChatPage from './view/pages/chat/ChatPage';
import Home from './view/pages/home/HomePage';
import AfterLoginLayout from './components/layout/AfterLoginLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginBackground />}>
          <Route element={<Login />} path='login' />
          <Route element={<SignupPage />} path='signup' />
        </Route>
        <Route element={<AfterLoginLayout />}>
          <Route element={<ChatPage />} path='channels' />
          <Route element={<Home />} path='home' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
