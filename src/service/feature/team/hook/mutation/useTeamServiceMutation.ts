import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTeam, updateTeam, deleteTeam } from '@service/feature/team/api/teamsServiceAPI';
import { toast } from 'sonner';

export const useCreateTeamMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTeam,
    onSuccess: () => {
      toast.success('팀 생성 성공!');
      queryClient.invalidateQueries({ queryKey: ['teamList'] });
    },
    onError: () => {
      toast.error('팀 생성 실패');
    },
  });
};

export const useUpdateTeamMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTeam,
    onSuccess: () => {
      toast.success('팀 수정 성공!');
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