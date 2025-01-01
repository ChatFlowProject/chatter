import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Login from './pages/Login/Login'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginBackground from '@pages/LoginBackground'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={''} element={<LoginBackground />}>
          <Route path={'login'} element={<Login />} />
          <Route path={'signup'} element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
