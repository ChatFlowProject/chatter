import { useMutation } from '@tanstack/react-query';
import { login } from '../../api/authApi';
import { useDispatch } from 'react-redux';
import { logout, setUser } from '@service/feature/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { loginSchema } from '../../schema/authSchema.ts';
import { getProfile } from '@service/feature/auth/api/profileApi.ts';
import { setProfile } from '@service/feature/auth/store/profile/userSlice.ts';

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
    onSuccess: async (data) => {
      if (!data.id || !data.token) {
        toast.error('로그인에 성공했지만 사용자 정보가 올바르지 않습니다.');
        return;
      }
      document.cookie = `accessToken=${data.token}; path=/;`;
      dispatch(
          setUser({
            userId: data.id,
            email: '',
            name: data.name,
          }),
      );

      try {
        const profile = await getProfile();
        console.log('Fetched Profile:', profile);

        if (!profile) {
          throw new Error('프로필 데이터를 가져오지 못했습니다.');
        }

        dispatch(setProfile(profile));
        console.log('Redux State Updated (profile):', profile);
      } catch (error) {
        console.error('프로필 정보를 업데이트하지 못했습니다:', error);
        toast.error('프로필 정보를 업데이트하지 못했습니다.');
      }

      toast.success('로그인 성공!');
      navigate('/channels/@me');
    },
    onError: (error: any) => {
      const message =
          error?.response?.data?.message || '로그인에 실패했습니다.';
      toast.error(message);
    },
  });
};

export const useLogout = () => {
  const dispatch = useDispatch();

  return () => {
    dispatch(logout());
    toast.success('로그아웃 되었습니다!');
    document.cookie = 'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    window.location.href = '/';
  };
};