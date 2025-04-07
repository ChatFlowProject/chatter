import { InputHTMLAttributes } from 'react';
import LoginLabel from './LoginLabel.tsx';

interface LoginTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
  error?: string;
  isRequired?: boolean;
}

export default function LoginTextInput({
  name,
  title,
  error,
  isRequired = false,
  ...props
}: LoginTextInputProps) {
  return (
    <LoginLabel error={error} isRequired={isRequired} title={title}>
      <input
        className='h-10 p-3 rounded-[3px] bg-[#1E1F22]'
        id={name}
        required={isRequired}
        {...props}
      />
    </LoginLabel>
  );
}
