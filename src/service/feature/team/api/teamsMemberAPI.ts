import { createAxiosInstance } from '@service/feature/common/axios/axiosInstance';

const axios = createAxiosInstance('team');

export const leaveTeam = async (teamId: string) => {
  const res = await axios.delete(`/teams/${teamId}/members`);
  return res.data;
};

export const kickTeamMember = async (teamId: string, targetId: string) => {
  const res = await axios.delete(`/teams/${teamId}/members/${targetId}`);
  return res.data;
};

export const updateTeamMemberRole = async ({ teamId, targetId, memberRole, }: {
  teamId: string;
  targetId: string;
  memberRole: 'MEMBER' | 'ADMIN' | 'OWNER';
}) => {
  const res = await axios.patch(
    `/teams/${teamId}/members/${targetId}`,
    { memberRole }
  );
  return res.data;
};

export const joinTeam = async (teamId: string) => {
  const res = await axios.post(`/teams/${teamId}/members`);
  return res.data;
};

export const inviteFriendToTeam = async (teamId: string, targetId: string) => {
  const res = await axios.post(`/teams/${teamId}/members/${targetId}`);
  return res.data;
};