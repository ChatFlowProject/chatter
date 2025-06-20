import { useQuery } from '@tanstack/react-query';
import { getChannelList, getDMList } from '@service/feature/channel/api/channelAPI.ts';
import {ChannelResponse} from '@service/feature/channel/types/channel.ts';

export const useChannelListQuery = (serverId: string) => {
  return useQuery<ChannelResponse>({
    queryKey: ['serverChannels', serverId],
    queryFn: () => getChannelList(serverId),
    enabled: !!serverId,
    staleTime: 1000 * 60 * 5,
  });
};

export const useDMListQuery = () => {
  return useQuery({
    queryKey: ['DMList'],
    queryFn: getDMList,
    staleTime: 1000 * 60 * 5,
  });
};
