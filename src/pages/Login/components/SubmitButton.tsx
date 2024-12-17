import React from 'react'

interface ButtonProps {
  text: string
}

const SubmitButton: React.FC<ButtonProps> = ({ text }) => (
  <button
    type='submit'
    className='w-full bg-blue-600 hover:bg-blue-700 rounded text-white py-2'
  >
    {text}
  </button>
)

export default SubmitButton
