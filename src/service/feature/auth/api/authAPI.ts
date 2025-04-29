import createAxiosInstance from '@service/feature/common/axios/axiosInstance.ts';
import {
  LoginRequest,
  LoginResponse,
  ProfileResponse,
  RegisterRequest,
  RegisterResponse,
} from '@service/feature/auth/types/auth.ts';

const axios = createAxiosInstance('member');

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post('/sign-in', data);
  return response.data.data;
};

export const register = async (data: RegisterRequest): Promise<RegisterResponse> => {
  const response = await axios.post('/sign-up', data);
  return response.data;
};

export const getProfile = async (): Promise<ProfileResponse> => {
  const response = await axios.get('/members');
  return response.data;
};