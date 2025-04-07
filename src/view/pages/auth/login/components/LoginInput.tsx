import { LoginInputProps } from '../../../../../lib/types/auth/Login';

const LoginInput = ({ id, label, type, value, onChange }: LoginInputProps) => {
  return (
    <div>
      <label
        className='block text-left text-[11.2px] text-[#b5b9c0] mt-3 mb-2'
        htmlFor={id}
      >
        {label} <span className='text-red-600'>*</span>
      </label>
      <input
        className='w-full px-4 py-2 rounded bg-[#1e1e21] text-white'
        id={id}
        onChange={onChange}
        type={type}
        value={value}
      />
    </div>
  );
};

export default LoginInput;
