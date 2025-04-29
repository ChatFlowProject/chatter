import { useQuery } from '@tanstack/react-query';
import { getChannelList } from '@service/feature/channel/api/channelAPI.ts';
import { Channel } from '@service/feature/channel/types/channel.ts';

export const useChannelListQuery = (serverId: string) => {
  return useQuery<Channel[]>({
    queryKey: ['serverChannels', serverId],
    queryFn: () => getChannelList(serverId),
    enabled: !!serverId,
    staleTime: 1000 * 60 * 5,
  });
};