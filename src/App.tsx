import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/Login/Login';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginBackground from '@pages/LoginBackground';
import Welcome from '@pages/Welcome';
import ChatPage from '@pages/ChatPage/ChatPage';
import Home from '@pages/Home/Home';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Welcome />} path="" />
        <Route element={<LoginBackground />}>
          <Route element={<Login />} path="login" />
          <Route element={<SignupPage />} path="signup" />
          <Route element={<ChatPage />} path="channels" />
          <Route element={<Home />} path="home" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
