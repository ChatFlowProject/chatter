import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import {
  inviteFriendToTeam,
  joinTeam,
  kickTeamMember,
  leaveTeam,
  updateTeamMemberRole,
} from '@service/feature/team/api/teamsMemberAPI.ts';

export const useLeaveTeamMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: leaveTeam,
    onSuccess: () => {
      toast.success('서버에서 나갔습니다.');
      queryClient.invalidateQueries({ queryKey: ['teamList'] });
    },
  });
};

export const useKickTeamMemberMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ teamId, memberId }: { teamId: string; memberId: string }) =>
      kickTeamMember(teamId, memberId),
    onSuccess: () => {
      toast.success('멤버를 추방했습니다.');
      queryClient.invalidateQueries(); // 필요시 queryKey 지정
    },
  });
};

export const useUpdateMemberRoleMutation = () => {
  return useMutation({
    mutationFn: updateTeamMemberRole,
    onSuccess: () => {
      toast.success('권한이 변경되었습니다.');
    },
  });
};

export const useJoinTeamMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: joinTeam,
    onSuccess: () => {
      toast.success('팀에 참여했습니다.');
      queryClient.invalidateQueries({ queryKey: ['teamList'] });
    },
  });
};

export const useInviteFriendMutation = () => {
  return useMutation({
    mutationFn: ({ teamId, memberId }: { teamId: string; memberId: string }) =>
      inviteFriendToTeam(teamId, memberId),
    onSuccess: () => {
      toast.success('친구를 초대했습니다.');
    },
  });
};