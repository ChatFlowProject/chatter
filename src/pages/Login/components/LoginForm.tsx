import React, { useState } from 'react'
import LoginInput from './LoginInput'
import { LoginFormData } from '@types/login'
import Button from '@components/Button'

function LoginForm() {
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
    <form className='w-full max-w-lg' onSubmit={handleSubmit}>
      <div className='text-center mb-6'>
        <h1 className='text-[#f2f2f4] text-[22.5px] font-semibold mb-2'>
          돌아오신 것을 환영해요!
        </h1>
        <p className='text-[#b5b9c0] text-[15px]'>
          다시 만나다니 너무 반가워요!
        </p>
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
        className='block text-left text-[#00a9fb] text-[13.2px] text-sm mb-4 hover:underline'
      >
        비밀번호를 잊으셨나요?
      </a>

      <Button
        style='w-full bg-[#5865f2] hover:bg-blue-700 rounded text-white py-2'
        children='로그인'
      />

      <p className='text-left text-[#949aa3] text-[13.6px] mt-2'>
        계정이 필요하신가요?{' '}
        <a href='#' className='text-[#00a9fb] hover:underline'>
          가입하기
        </a>
      </p>
    </form>
  )
}

export default LoginForm
