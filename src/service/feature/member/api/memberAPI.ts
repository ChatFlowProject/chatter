import createAxiosInstance from '@service/feature/common/axios/axiosInstance.ts';
import {
  MemberInfo,
  SearchMemberResult,
  SearchMembersRequest,
  UpdateMemberInfoRequest,
  UpdateMemberStatusRequest,
} from '@service/feature/member/types/memberAPI.ts';

const axios = createAxiosInstance();

export const getMemberById = async (memberId: string): Promise<MemberInfo> => {
  const res = await axios.get(`/members/${memberId}`);
  return res.data;
};

export const updateMemberStatus = async (
  data: UpdateMemberStatusRequest,
): Promise<void> => {
  await axios.patch('/members/status', data);
};

export const updateMemberInfo = async (
  data: UpdateMemberInfoRequest,
): Promise<void> => {
  await axios.put('/members', data);
};

export const searchMembers = async (
  data: SearchMembersRequest,
): Promise<SearchMemberResult[]> => {
  const res = await axios.post('/members/search', data);
  return res.data;
};
