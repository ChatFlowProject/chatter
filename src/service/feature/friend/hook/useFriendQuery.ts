import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  deleteCancelFriend,
  getAllFriend,
  getOnlineFriend,
  getReceivedFriend,
  getSentFriend,
  patchAcceptFriend,
  postAddFriend,
} from '../api/friendApi';
import {
  ADD_FRIEND_MESSAGE,
  ADD_FRIEND_RESULT_TYPE,
} from '../constant/constant';

export const useGetFriends = (status: 'Online' | 'All' | 'Pending' | null) => {
  // 모두 무조건 호출
  const {
    data: sentData,
    isLoading: sentLoading,
    error: sentError,
  } = useQuery({
    queryKey: ['friends', 'sent'],
    queryFn: getSentFriend,
    enabled: status === 'Pending',
    staleTime: 3 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  const {
    data: receivedData,
    isLoading: receivedLoading,
    error: receivedError,
  } = useQuery({
    queryKey: ['friends', 'received'],
    queryFn: getReceivedFriend,
    enabled: status === 'Pending',
    staleTime: 3 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  const {
    data: generalData,
    isLoading: generalLoading,
    error: generalError,
  } = useQuery({
    queryKey: ['friends', status],
    queryFn: status === 'Online' ? getOnlineFriend : getAllFriend,
    enabled: status !== 'Pending' && status !== null,
    staleTime: 3 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  const data =
    status === 'Pending'
      ? { sent: sentData, received: receivedData }
      : generalData;

  const isLoading =
    status === 'Pending' ? sentLoading || receivedLoading : generalLoading;

  const error =
    status === 'Pending' ? sentError || receivedError : generalError;

  return { data, isLoading, error };
};

export const useAddFriend = (
  setResultMessage: React.Dispatch<
    React.SetStateAction<{
      type: string;
      message: string;
    } | null>
  >,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postAddFriend,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['friends', 'sent'] });
      setResultMessage({
        type: ADD_FRIEND_RESULT_TYPE[data],
        message: ADD_FRIEND_MESSAGE[data],
      });
    },
    onError: () => {},
  });
};

// 친구 요청 취소
export const useCancelFriend = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCancelFriend,
    onSuccess: (data) => {
      console.log('친구 요청 취소 완료', data);
      queryClient.invalidateQueries({ queryKey: ['friends', 'sent'] });
    },
    onError: () => {
      console.log('친구 요청 취소 에러');
    },
  });
};

// 친구 요청 수락
export const useAcceptFriend = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchAcceptFriend,
    onSuccess: (data) => {
      console.log('친구 요청 수락 완료', data);
      queryClient.invalidateQueries({ queryKey: ['friends', 'received'] });
    },
    onError: () => {
      console.log('친구 요청 수락 에러');
    },
  });
};

export default {
  useGetFriends,
  useAddFriend,
  useCancelFriend,
  useAcceptFriend,
};
