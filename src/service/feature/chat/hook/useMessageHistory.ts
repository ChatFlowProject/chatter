import { useQuery } from '@tanstack/react-query';
import { fetchLatestMessages } from '../api/chatAPI';

export const useMessageHistory = (channelId: string | undefined) => {
  return useQuery({
    queryKey: ['messages', channelId],
    queryFn: () => fetchLatestMessages(channelId),
    enabled: !!channelId,
  });
};