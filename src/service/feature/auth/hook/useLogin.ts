import { useMutation } from '@tanstack/react-query';
import { login } from '../api/authAPI';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { loginSchema } from '../schema/authSchema';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (formValues: unknown) => {
      const result = loginSchema.safeParse(formValues);
      if (!result.success) {
        const message = result.error.errors[0]?.message || '입력값이 올바르지 않습니다';
        throw new Error(message);
      }
      return login(result.data);
    },
    onSuccess: (data) => {
      const user = {
        userId: data.user.id.toString(),
        email: data.user.email,
        nickname: data.user.nickname,
      };
      dispatch(setUser(user));
      toast.success('로그인 성공!');
      navigate('/channels/intro');
    },
    onError: (error: any) => {
      toast.error(error.message || '로그인 실패');
    },
  });
};