import React, { useState } from 'react'
import LoginInput from './LoginInput'
import SubmitButton from './SubmitButton'
import { LoginFormData } from '../../../types/login'

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('LoginFormData:', formData)
  }

  return (
    <form className='w-96 max-w-lg' onSubmit={handleSubmit}>
      <div className='text-center mb-6'>
        <h1 className='text-white text-2xl font-bold mb-2'>
          돌아오신 것을 환영해요!
        </h1>
        <p className='text-gray-400'>다시 만나다니 너무 반가워요!</p>
      </div>

      <LoginInput
        id='email'
        label='이메일'
        type='text'
        value={formData.email}
        onChange={handleChange}
      />
      <LoginInput
        id='password'
        label='비밀번호'
        type='password'
        value={formData.password}
        onChange={handleChange}
      />

      <a
        href='#'
        className='block text-left text-blue-500 text-sm mb-4 hover:underline'
      >
        비밀번호를 잊으셨나요?
      </a>

      <SubmitButton text='로그인' />

      <p className='text-left text-gray-400 mt-4'>
        계정이 필요하신가요?{' '}
        <a href='#' className='text-blue-500 hover:underline'>
          가입하기
        </a>
      </p>
    </form>
  )
}

export default LoginForm
