import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { toast } from 'sonner';
import { ERROR_MESSAGES } from '../../../lib/const/toast/errorMessage';
import { getCookie } from '../../auth/lib/getCookie';

export type ServiceType = 'members' | 'teams' | 'dialog';

const API_CONFIG = {
  BASE_DOMAIN: 'http://flowchat.shop',
  PORTS: {
    members: '30002',
    teams: '30003',
  },
  HEADERS: {
    JSON: 'application/json',
  },
} as const;

interface ErrorResponse {
  message: string;
}

const handleAxiosError = (error: AxiosError<ErrorResponse>) => {
  const { response } = error;
  if (!response) {
    toast.error('네트워크 오류 또는 서버 응답 없음');
    return Promise.reject(error);
  }

  const errorMessages: Record<number, string> = {
    401: ERROR_MESSAGES.UNAUTHORIZED,
    403: ERROR_MESSAGES.FORBIDDEN,
    500: ERROR_MESSAGES.SERVER_ERROR,
  };

  toast.error(
    errorMessages[response.status] ||
      (response.data && response.data.message) ||
      ERROR_MESSAGES.DEFAULT_ERROR,
  );

  if (response.status === 401) {
    // TODO: logout 처리 또는 /login 리디렉션
  }

  return Promise.reject(error);
};

export const createAxiosInstance = (
  serviceType: ServiceType,
): AxiosInstance => {
  const instance = axios.create({
    baseURL: `${API_CONFIG.BASE_DOMAIN}:${API_CONFIG.PORTS[serviceType]}`,
    // baseURL: `${API_CONFIG.BASE_DOMAIN}:30100`,
    headers: {
      'Content-Type': API_CONFIG.HEADERS.JSON,
    },
    withCredentials: true,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = getCookie('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    handleAxiosError,
  );

  return instance;
};

export default createAxiosInstance;
