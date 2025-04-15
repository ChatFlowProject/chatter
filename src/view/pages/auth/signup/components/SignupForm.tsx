import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterFormData } from '../../../../../service/feature/auth/schema/authSchema';
import DatePicker from './DatePicker';
import { useState } from 'react';
import Button from '@components/common/Button';
import Checkbox from '@components/common/Checkbox';
import LoginTextInput from '@pages/auth/components/LoginTextInput';
import LoginLabel from '@pages/auth/components/LoginLabel';
import { useRegister } from '../../../../../service/feature/auth';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const { mutateAsync } = useRegister();

  const [birth, setbirth] = useState<{ year: number | ''; month: number | ''; day: number | '' }>({
    year: '',
    month: '',
    day: '',
  });

  const onSubmit = async (data: RegisterFormData) => {
      await mutateAsync(data);
  };

  const handleBirthChange = (date: typeof birth) => {
    setbirth(date);

    const paddedMonth = String(date.month).padStart(2, '0');
    const paddedDay = String(date.day).padStart(2, '0');

    const formatted = `${date.year}-${paddedMonth}-${paddedDay}`;
    setValue('birth', formatted);
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
      {errors.birth && (
        <p className="text-red-500 text-sm mt-1">{errors.birth.message}</p>
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