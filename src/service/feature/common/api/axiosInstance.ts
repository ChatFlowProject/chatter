import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// 요청 인터셉터: 토큰 헤더 설정 (쿠키 기반이면 생략 가능)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터: 401 대응
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized! 로그아웃 및 리다이렉트 필요');

      // TODO: 실제 구현에서는 다음 중 하나 적용
      // - store.dispatch(logout())
      // - window.location.href = '/login'
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;