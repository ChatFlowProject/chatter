import createAxiosInstance from '@service/feature/common/axios/axiosInstance.ts';
import {MemberState, UserProfile} from '@service/feature/auth/types/profile.ts';
import { ApiResponse } from '@service/feature/common/axios/apiType.ts';
import {UpdateProfileRequest} from "@service/feature/auth/schema/profileSchema.ts";

const axios = createAxiosInstance();

export const getProfile = async (): Promise<UserProfile> => {
  const response = await axios.get<ApiResponse<UserProfile>>('/members');
  return response.data.data;
};

export const updateStatus = async (memberState: MemberState): Promise<void> => {
  await axios.patch('/members/status', {memberState});
};

export const updateProfile = async (profileData: UpdateProfileRequest): Promise<void> => {
  await axios.put('/members', profileData);
};