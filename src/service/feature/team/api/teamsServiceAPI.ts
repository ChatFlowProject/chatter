import { createAxiosInstance } from '@service/feature/common/axios/axiosInstance.ts';

const axios = createAxiosInstance('teams');

export const createTeam = async ({
  name,
  iconUrl,
}: {
  name: string;
  iconUrl?: string;
}) => {
  const response = await axios.post('/teams', {
    name,
    iconUrl,
  });
  return response.data;
};

export const getTeamList = async () => {
  const response = await axios.get('/teams');
  return response.data;
};

export const getTeamById = async (teamId: string) => {
  const response = await axios.get(`/teams/${teamId}`);
  return response.data;
};

export const deleteTeam = async (teamId: string) => {
  const response = await axios.delete(`/teams/${teamId}`);
  return response.data;
};

export const updateTeam = async ({
  teamId,
  name,
  masterId,
  iconUrl,
}: {
  teamId: string;
  name: string;
  masterId: string;
  iconUrl?: string;
}) => {
  const response = await axios.put(`/teams/${teamId}`, {
    name,
    masterId,
    iconUrl,
  });

  return response.data;
};
