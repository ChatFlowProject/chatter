import axiosInstance from '../../common/api/axiosInstance.ts';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  userId: string;
  email: string;
  nickname: string;
}

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post('/sign-in', data, {
    withCredentials: true,
  });
  return response.data;
};

export interface RegisterRequest {
  email: string;
  password: string;
  nickname: string;
}

export interface RegisterResponse {
  userId: string;
  email: string;
  nickname: string;
}

export const register = async (
  data: RegisterRequest
): Promise<RegisterResponse> => {
  const response = await axiosInstance.post('/sign-up', data);
  return response.data;
};

export interface ProfileResponse {
  userId: string;
  email: string;
  nickname: string;
}

export const getProfile = async (): Promise<ProfileResponse> => {
  const response = await axiosInstance.get('/me', {
    withCredentials: true,
  });
  return response.data;
};

export const healthCheck = async (): Promise<string> => {
  const response = await axiosInstance.get('/common/health-check');
  return response.data;
};