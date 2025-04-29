import { createAxiosInstance } from '../../common/axios/axiosInstance';
import { Team } from '../types/team';

const axios = createAxiosInstance('team');

export const getTeams = async (): Promise<Team[]> => {
  const res = await axios.get('/teams', {
    withCredentials: true,
  });
  return res.data.data;
};

export const postTeam = async (
  name: string,
  iconUrl: string,
): Promise<{ teamId: string }> => {
  const res = await axios.post(
    '/teams',
    {
      name,
      iconUrl,
    },
    { withCredentials: true },
  );
  return res.data.data;
};
