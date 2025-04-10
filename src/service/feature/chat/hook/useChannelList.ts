import { useQuery } from '@tanstack/react-query';
import { fetchChannels } from '../api/chatAPI';

export const useChannelList = () => {
  return useQuery({
    queryKey: ['channels'],
    queryFn: fetchChannels,
  });
};