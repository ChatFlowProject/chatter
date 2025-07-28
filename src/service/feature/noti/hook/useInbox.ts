import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getAllMyAlarm, getMention } from '../api/mentionAPI';

export const useMentionQuery = () => {
  return useQuery({
    queryKey: ['inbox', 'mention'],
    queryFn: () => getMention(),
  });
};

export const useGetAllMyNoti = () => {
  return useInfiniteQuery({
    queryKey: ['inbox', 'myAlarm'],
    queryFn: ({ pageParam = 0 }) => getAllMyAlarm(pageParam),
    getNextPageParam: (lastPage) => {
      console.log('hook에서 출력!! -> lastPage: ', lastPage);
      return lastPage.hasNext ? lastPage.nextCursorId : undefined;
    },
    initialPageParam: 0,
  });
};
