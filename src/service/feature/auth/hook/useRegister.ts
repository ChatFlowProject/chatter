import { useMutation } from '@tanstack/react-query';
import { register, RegisterRequest, RegisterResponse } from '../api/authAPI';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: register,
    onSuccess: () => {
      toast.success('회원가입 성공! 로그인 해주세요');
      navigate('/login');
    },
    onError: (error) => {
      toast.error('회원가입 실패: ' + error.message);
    },
  });
};