import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createDM,
  getChannelList,
  getDMList,
} from '@service/feature/channel/api/channelAPI.ts';
import { ChannelResponse } from '@service/feature/channel/types/channel.ts';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

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

export const useCreateDM = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  return useMutation({
    mutationFn: (memberIds: string[]) => createDM(memberIds),
    onSuccess: (data) => {
      console.log('DM 생성 응답 데이터: ', data);
      navigate(`/channels/@me/${data.channel.chatId}`);
      queryClient.invalidateQueries({ queryKey: ['DMList'] });
      toast.success('채팅방을 생성했습니다!');
      // TODO: 추후 기존에 생성된 방은 구분
    },
    onError: () => {
      toast.error('문제가 발생했어요. 다시 시도해주세요.');
    },
  });
};
