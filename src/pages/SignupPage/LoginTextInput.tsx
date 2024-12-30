import { InputHTMLAttributes } from 'react'
import LoginLabel from './LoginLabel.tsx'

interface LoginTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  title: string
  error?: string
}

export default function LoginTextInput({
  name,
  title,
  error,
  ...props
}: LoginTextInputProps) {
  return (
    <LoginLabel title={title} error={error}>
      <input id={name} className='h-10 rounded-[3px] bg-[#1E1F22]' {...props} />
    </LoginLabel>
  )
}
