import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormData } from '../../../../../service/feature/auth/schema/authSchema';
import { useLogin } from '../../../../../service/feature/auth';
import { toast } from 'sonner';
import LoginTextInput from '@pages/auth/components/LoginTextInput.tsx';


const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: login } = useLogin();

  const onSubmit = (data: LoginFormData) => {
    login(data, {
      onError: (err: any) => {
        toast.error(err?.message || '로그인 실패');
      },
    });
  };

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
      <LoginTextInput
        error={errors.email?.message}
        isRequired
        title="이메일"
        type="email"
        {...register('email')}
      />
      <LoginTextInput
        error={errors.password?.message}
        isRequired
        title="비밀번호"
        type="password"
        {...register('password')}
      />
      <p className="text-sm text-left text-[#00a9fb] mt-4 mb-4 hover:underline">
        비밀번호를 잊으셨나요?
      </p>
      <button
        className="w-full py-2 rounded-[8px] bg-[#5865f2] hover:bg-blue-700 text-white"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? '로그인 중...' : '로그인'}
      </button>
    </form>
  );
};

export default LoginForm;