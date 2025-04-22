import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getTeams, postTeam } from '../api/teamApi';

// 쿼리키
const teamKeys = {
  all: ['teams'] as const,
  lists: () => [...teamKeys.all, 'list'] as const,
};

export const useGetTeam = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: teamKeys.lists(),
    queryFn: getTeams,
    staleTime: 10 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });

  return { data, isLoading, error };
};

export const useCreateTeam = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ name, iconUrl }: { name: string; iconUrl: string }) =>
      postTeam(name, iconUrl),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: teamKeys.lists() });
    },
    onError: () => {},
  });
};
