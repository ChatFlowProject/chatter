import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterFormData } from '../../../../service/feature/auth/schema/authSchema';
import { useRegister } from '../../../../service/feature/auth'
import DatePicker from './DatePicker';
// import Button from '@/components/shared/Button';
// import Checkbox from '@/components/shared/Checkbox';
import { useState } from 'react';
import { toast } from 'sonner';
import Button from '@components/common/Button';
import Checkbox from '@components/common/Checkbox';
import LoginTextInput from '@pages/auth/components/LoginTextInput.tsx';
import LoginLabel from '@pages/auth/components/LoginLabel.tsx';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const [birthdate, setBirthdate] = useState<{ year: number | ''; month: number | ''; day: number | '' }>({
    year: '',
    month: '',
    day: '',
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await useRegister(data);
      toast.success('회원가입 성공! 로그인 해주세요.');
      // navigate('/login');
    } catch (error: any) {
      toast.error(error.response?.data?.message || '회원가입에 실패했습니다.');
    }
  };

  // 생년월일 조합
  const handleBirthChange = (date: typeof birthdate) => {
    setBirthdate(date);
    const formatted = `${date.year}-${date.month}-${date.day}`;
    setValue('birthdate', formatted); // react-hook-form에 넣어줌
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoginTextInput
        title="이메일"
        type="email"
        error={errors.email?.message}
        isRequired
        {...register('email')}
      />
      <LoginTextInput
        title="이름"
        type="text"
        error={errors.name?.message}
        isRequired
        {...register('name')}
      />
      <LoginTextInput
        title="닉네임"
        type="text"
        error={errors.nickname?.message}
        isRequired
        {...register('nickname')}
      />
      <LoginTextInput
        title="비밀번호"
        type="password"
        error={errors.password?.message}
        isRequired
        {...register('password')}
      />

      <LoginLabel title="생년월일">
        <DatePicker onChange={handleBirthChange} />
      </LoginLabel>
      {errors.birthdate && (
        <p className="text-red-500 text-sm mt-1">{errors.birthdate.message}</p>
      )}

      <label className="mt-3 flex items-center">
        <Checkbox style="flex w-6 h-6 p-[3px] rounded-[6px] border-[1px] bg-transparent border-gray-400 hover:outline-none" />
        <div className="w-[364px] pl-2 text-[#949BA4] text-sm text-left">
          (선택사항) Discord 소식, 도움말, 특별 할인을 이메일로 보내주세요.
          언제든지 취소하실 수 있어요.
        </div>
      </label>

      <Button
        disabled={isSubmitting}
        style="mt-5 p-[10px] w-full h-11 justify-center items-center rounded-[3px] bg-indigo-500"
        type="submit"
      >
        {isSubmitting ? '가입 중...' : '계속하기'}
      </Button>
    </form>
  );
}