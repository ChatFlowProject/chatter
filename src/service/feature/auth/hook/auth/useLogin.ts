import { useMutation } from '@tanstack/react-query';
import { login } from '../../api/authAPI.ts';
import { useDispatch } from 'react-redux';
import { setUser } from '@service/feature/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { loginSchema } from '../../schema/authSchema.ts';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (formValues: unknown) => {
      const result = loginSchema.safeParse(formValues);
      console.log('formValue: ', formValues, 'result: ', result);
      if (!result.success) {
        const message =
          result.error.errors[0]?.message || '입력값이 올바르지 않습니다';
        throw new Error(message);
      }
      return login(result.data);
    },
    onSuccess: (data) => {
      if (!data.id || !data.token) {
        toast.error('로그인에 성공했지만 사용자 정보가 올바르지 않습니다.');
        return;
      }

      document.cookie = `accessToken=${data.token}; path=/;`;

      dispatch(
        setUser({
          userId: data.id,
          nickname: data.name,
          email: '',
        }),
      );

      toast.success('로그인 성공!');
      navigate('/channels/@me');
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || '회원가입에 실패했습니다.';
      toast.error(message);
    },
  });
};
