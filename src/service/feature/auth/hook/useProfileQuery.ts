import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@service/feature/auth';

export const useProfileQuery = () => {
  return useQuery({
    queryKey: ['auth', 'profile'],
    queryFn: getProfile,
    staleTime: 1000 * 60 * 5,
  });
};