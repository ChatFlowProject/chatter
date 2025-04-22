import axios from 'axios';
import { toast } from 'sonner';
import { ERROR_MESSAGES } from '../../../lib/const/toast/errorMessage.ts';
import { getCookie } from '../../auth/lib/getCookie.ts';

const baseDomain = 'http://flowchat.shop';
const memberPort = '30002';

const axiosInstance = axios.create({
  baseURL: `${baseDomain}:${memberPort}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (!response) {
      toast.error('네트워크 오류 또는 서버 응답 없음');
      return Promise.reject(error);
    }

    const status = response.status;

    switch (status) {
      case 401:
        toast.error(ERROR_MESSAGES.UNAUTHORIZED);
        // TODO: logout 처리 또는 /login 리디렉션
        break;
      case 403:
        toast.error(ERROR_MESSAGES.FORBIDDEN);
        break;
      case 500:
        toast.error(ERROR_MESSAGES.SERVER_ERROR);
        break;
      default:
        toast.error(response.data?.message || ERROR_MESSAGES.DEFAULT_ERROR);
        break;
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
