import React from 'react'
import LoginForm from './components/LoginForm'

const Login: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen rounded-md bg-gray-700 p-4'>
      <LoginForm />
    </div>
  )
}

export default Login
