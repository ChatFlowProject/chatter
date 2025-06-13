import createAxiosInstance from '@service/feature/common/axios/axiosInstance.ts';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '@service/feature/auth/types/auth.ts';

const axios = createAxiosInstance('members');

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post('/sign-in', data);
  return response.data.data;
};

export const register = async (
  data: RegisterRequest,
): Promise<RegisterResponse> => {
  const response = await axios.post('/sign-up', data);
  return response.data;
};
