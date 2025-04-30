import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@service/feature/auth';
import { ProfileResponse } from '@service/feature/auth/types/auth.ts';

export const useUserProfile = () => {
  return useQuery<ProfileResponse>({
    queryKey: ['userProfile'],
    queryFn: getProfile,
    staleTime: 5 * 60 * 1000,
  });
};