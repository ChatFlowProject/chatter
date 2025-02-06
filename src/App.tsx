import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Login from './pages/Login/Login'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginBackground from '@pages/LoginBackground'
import Welcome from '@pages/Welcome'
import ChatPage from '@pages/ChatPage/ChatPage'
import Home from '@pages/Home/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={''} element={<Welcome />} />
        <Route element={<LoginBackground />}>
          <Route path={'login'} element={<Login />} />
          <Route path={'signup'} element={<SignupPage />} />
          <Route path={'channels'} element={<ChatPage />} />
          <Route path={'home'} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
