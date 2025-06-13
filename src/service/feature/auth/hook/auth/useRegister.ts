import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { registerSchema } from '../../schema/authSchema.ts';
import { RegisterRequest, RegisterResponse } from '@service/feature/auth/types/auth.ts';
import { register } from '@service/feature/auth';

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: async (formValues) => {
      const result = registerSchema.safeParse(formValues);
      if (!result.success) throw new Error('회원가입 양식이 올바르지 않습니다');
      return register(result.data);
    },
    onSuccess: () => {
      toast.success('회원가입 성공! 로그인 해주세요');
      navigate('/login');
    },
    onError: (error) => {
      toast.error('회원가입 실패: ' + error.message);
    },
  });
};