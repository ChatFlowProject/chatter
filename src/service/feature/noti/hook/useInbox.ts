import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  deleteAllMyNoti,
  deletMyNoti,
  getAllMyAlarm,
  getMention,
  getMentionList,
} from '../api/mentionAPI';
import { toast } from 'sonner';

export const useMentionQuery = () => {
  return useQuery({
    queryKey: ['inbox', 'mention'],
    queryFn: () => getMention(),
  });
};

export const useGetAllMyNoti = ({ enabled = true }: { enabled: boolean }) => {
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
    enabled,
  });
};

export const useDeleteMyNoti = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletMyNoti,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inbox', 'myAlarm'] });
      toast.success('알림을 삭제했습니다.');
    },
    onError: () => {},
  });
};

export const useDeleteAllMyNoti = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAllMyNoti,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inbox', 'myAlarm'] });
      toast.success('모든 알림을 삭제했습니다.');
    },
    onError: () => {},
  });
};

export const useGetMention = ({
  teamId,
  includeAllTeams,
  includeEveryone,
  enabled = true,
}: {
  teamId?: string;
  includeEveryone?: boolean;
  includeAllTeams?: boolean;
  enabled: boolean;
}) => {
  return useInfiniteQuery({
    queryKey: ['inbox', 'mention'],
    queryFn: ({
      pageParam = {
        nextCursorId: 0,
        nextCursorCreatedAt: new Date().toISOString(),
      },
    }) =>
      getMentionList({ pageParam, teamId, includeEveryone, includeAllTeams }),
    getNextPageParam: (lastPage) => {
      if (!lastPage.hasNext) return undefined;
      return {
        nextCursorId: lastPage.nextCursorId,
        nextCursorCreatedAt: lastPage.nextCursorCreatedAt,
      };
    },

    initialPageParam: {
      nextCursorId: 0,
      nextCursorCreatedAt: new Date().toISOString(),
    },
    enabled,
  });
};
