import { LoginInputProps } from '../../../types/login'
import React from 'react'

const LoginInput: React.FC<LoginInputProps> = ({
  id,
  label,
  type,
  value,
  onChange,
}) => (
  <div className='mb-6'>
    <label className='block text-left text-gray-400 mb-2' htmlFor={id}>
      {label} <span className='text-red-600'>*</span>
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className='w-full px-4 py-2 rounded bg-gray-800 text-white'
    />
  </div>
)

export default LoginInput
