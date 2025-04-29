import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTeam } from '@service/feature/team/api/teamsServiceAPI.ts';
import { toast } from 'sonner';

export const useCreateTeamMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTeam,
    onSuccess: () => {
      toast.success('서버 생성 성공!');
      queryClient.invalidateQueries({ queryKey: ['teamList'] });
    },
    onError: () => {
      toast.error('서버 생성 실패');
    },
  });
};