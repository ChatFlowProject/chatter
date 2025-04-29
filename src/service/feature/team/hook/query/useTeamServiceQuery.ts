import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';
import { createTeam, deleteTeam, updateTeam } from '@service/feature/team/api/teamsServiceAPI.ts';

export const useCreateTeamMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTeam,
    onSuccess: () => {
      toast.success('팀 생성 성공!');
      queryClient.invalidateQueries({ queryKey: ['teamList'] });
    },
  });
};

export const useDeleteTeamMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTeam,
    onSuccess: () => {
      toast.success('팀 삭제 성공!');
      queryClient.invalidateQueries({ queryKey: ['teamList'] });
    },
  });
};

export const useUpdateTeamMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTeam,
    onSuccess: () => {
      toast.success('팀 정보 수정 완료');
      queryClient.invalidateQueries({ queryKey: ['teamList'] });
    },
  });
};