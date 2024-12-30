import { InputHTMLAttributes } from 'react'
import LoginLabel from './LoginLabel.tsx'

interface LoginTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  title: string
}

export default function LoginTextInput({
  name,
  title,
  ...props
}: LoginTextInputProps) {
  return (
    <LoginLabel title={title}>
      <input id={name} className='h-10 rounded-[3px] bg-[#1E1F22]' {...props} />
    </LoginLabel>
  )
}
