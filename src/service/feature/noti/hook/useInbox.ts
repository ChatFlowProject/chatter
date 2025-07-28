import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { deleteAllMyNoti, getAllMyAlarm, getMention } from '../api/mentionAPI';
import { toast } from 'sonner';

export const useMentionQuery = () => {
  return useQuery({
    queryKey: ['inbox', 'mention'],
    queryFn: () => getMention(),
  });
};

export const useGetAllMyNoti = () => {
  return useInfiniteQuery({
    queryKey: ['inbox', 'myAlarm'],
    queryFn: ({
      pageParam = { notificationId: 0, dateTime: new Date().toISOString() },
    }) => getAllMyAlarm(pageParam),

    getNextPageParam: (lastPage) => {
      if (!lastPage.hasNext) return undefined;
      return {
        notificationId: lastPage.nextCursorId,
        dateTime: lastPage.nextCursorCreatedAt,
      };
    },

    initialPageParam: {
      notificationId: 0,
      dateTime: new Date().toISOString(),
    },
  });
};

export const useDeleteMyNoti = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAllMyNoti,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inbox', 'myAlarm'] });
      toast.success('알림을 삭제했습니다.');
    },
    onError: () => {},
  });
};
