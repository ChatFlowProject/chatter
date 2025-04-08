import { useMutation } from '@tanstack/react-query';
import { login, LoginRequest, LoginResponse } from '../api/authAPI';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch(setUser(data));
      toast.success('로그인 성공!');
      navigate('/channels/general');
    },
    onError: (error) => {
      toast.error('로그인 실패: ' + error.message);
    },
  });
};