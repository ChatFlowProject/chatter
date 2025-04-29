import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { createChannel, deleteChannel } from '@service/feature/channel/api/channelAPI.ts';

export const useCreateChannelMutation = (serverId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createChannel,
    onSuccess: () => {
      toast.success('채널 생성 완료!');
      queryClient.invalidateQueries({ queryKey: ['serverChannels', serverId] });
    },
  });
};

export const useDeleteChannelMutation = (serverId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteChannel,
    onSuccess: () => {
      toast.success('채널 삭제 완료!');
      queryClient.invalidateQueries({ queryKey: ['serverChannels', serverId] });
    },
  });
};