import { InputHTMLAttributes, forwardRef } from 'react';
import LoginLabel from './LoginLabel.tsx';

interface LoginTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  error?: string;
  isRequired?: boolean;
}

const LoginTextInput = forwardRef<HTMLInputElement, LoginTextInputProps>(
  ({ title, error, isRequired = false, ...props }, ref) => {
    return (
      <LoginLabel error={error} isRequired={isRequired} title={title}>
        <input
          className="h-10 p-3 rounded-[3px] bg-[#1E1F22] text-white"
          id={props.name}
          ref={ref}
          required={isRequired}
          {...props}
        />
      </LoginLabel>
    );
  }
);

LoginTextInput.displayName = 'LoginTextInput';

export default LoginTextInput;