import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  createDM,
  getChannelList,
  getDMList,
} from '@service/feature/channel/api/channelAPI.ts';
import {
  ChannelResponse,
  DMDetail,
} from '@service/feature/channel/types/channel.ts';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

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

export const useCreateDM = (
  options?: UseMutationOptions<DMDetail, AxiosError, string[]>,
) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<DMDetail, AxiosError, string[]>({
    mutationFn: (memberIds: string[]) => createDM(memberIds),
    onSuccess: (data, variables, context) => {
      console.log('DM 생성 응답 데이터: ', data);
      navigate(`/channels/@me/${data.channel.chatId}`);
      queryClient.invalidateQueries({ queryKey: ['DMList'] });
      toast.success('채팅방을 생성했습니다!');
      console.log('data::::::', data);

      // 외부에서 onSuccess 옵션이 주어졌다면 호출
      options?.onSuccess?.(data, variables, context);

      // TODO: 추후 기존에 생성된 방은 구분
    },
    onError: () => {
      toast.error('문제가 발생했어요. 다시 시도해주세요.');
    },
  });
};
