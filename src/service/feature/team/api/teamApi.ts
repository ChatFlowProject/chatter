import axiosInstance from '../../common/axios/axiosInstance';
import { Team } from '../types/team';

export const getTeams = async (): Promise<Team[]> => {
  const res = await axiosInstance.get('/teams', {
    withCredentials: true,
  });
  return res.data.data;
};

export const postTeam = async (
  name: string,
  iconUrl: string,
): Promise<{ teamId: string }> => {
  const res = await axiosInstance.post(
    '/teams',
    {
      name,
      iconUrl,
    },
    { withCredentials: true },
  );
  return res.data.data;
};
