import { useQuery } from '@tanstack/react-query';
import { getMemberById } from '@service/feature/member/api/memberAPI.ts';

export const useMemberQuery = (memberId: string) => {
  return useQuery({
    queryKey: ['member', memberId],
    queryFn: () => getMemberById(memberId),
    enabled: !!memberId,
  });
};