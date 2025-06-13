import createAxiosInstance from '@service/feature/common/axios/axiosInstance.ts';
import { UserProfile } from '@service/feature/auth/types/profile.ts';
import { ApiResponse } from '@service/feature/common/axios/apiType.ts';

const axios = createAxiosInstance('members');

export const getProfile = async (): Promise<UserProfile> => {
  const response = await axios.get<ApiResponse<UserProfile>>('/members');
  return response.data.data;
};
