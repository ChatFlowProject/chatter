import { useQuery } from '@tanstack/react-query';
import { getTeamList, getTeamById } from '@service/feature/team/api/teamsServiceAPI';
import { Team } from '@service/feature/team/types/team';

export const useTeamListQuery = () => {
  return useQuery<Team[]>({
    queryKey: ['teamList'],
    queryFn: async () => {
      const res = await getTeamList();
      return res.data;
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useTeamDetailQuery = (teamId: string) => {
  return useQuery<Team>({
    queryKey: ['teamDetail', teamId],
    queryFn: () => getTeamById(teamId),
    enabled: !!teamId,
  });
};