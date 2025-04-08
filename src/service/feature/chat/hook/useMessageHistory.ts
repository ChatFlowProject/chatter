import { useQuery } from '@tanstack/react-query';
import { fetchMessages } from '../api/chatAPI';

export const useMessageHistory = (channelId: string) => {
  return useQuery({
    queryKey: ['messages', channelId],
    queryFn: () => fetchMessages(channelId),
    enabled: !!channelId,
  });
};