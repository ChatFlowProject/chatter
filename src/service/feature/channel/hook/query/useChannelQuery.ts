import { useQuery } from '@tanstack/react-query';
import { getChannelList } from '@service/feature/channel/api/channelAPI.ts';

export const useChannelListQuery = (serverId: string) => {
  return useQuery({
    queryKey: ['serverChannels', serverId],
    queryFn: () => getChannelList(serverId),
    enabled: !!serverId,
    staleTime: 1000 * 60 * 5,
  });
};