import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Channel {
  id: string;
  name: string;
  type: 'text' | 'voice' | 'event';
  category: string;
}

export const useChannelList = (serverId: string) => {
  return useQuery<Channel[]>({
    queryKey: ['serverChannels', serverId],
    queryFn: async () => {
      const { data } = await axios.get(
          `http://flowchat.shop:30003/api/servers/${serverId}/channels`
      );
      return data;
    },
    enabled: !!serverId,
    staleTime: 1000 * 60 * 5,
  });
};