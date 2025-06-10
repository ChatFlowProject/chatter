import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  deleteCancelFriend,
  deleteRefuseFriend,
  deleteRemoveFriend,
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
import { toast } from 'sonner';

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

      if (ADD_FRIEND_RESULT_TYPE[data]) {
        toast.error(ADD_FRIEND_MESSAGE[data]);
      } else {
        toast.success('친구 요청에 성공했습니다.');
      }
    },
    onError: () => {
      toast.error('친구 요청에 실패했습니다.');
    },
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
      toast.success('친구 요청을 취소하였습니다.');
    },
    onError: () => {
      toast.error('친구 요청 취소에 실패했습니다.');
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
      queryClient.refetchQueries({ queryKey: ['friends', 'All'] });
      toast.success('친구 요청을 수락하였습니다.');
    },
    onError: () => {
      console.log('친구 요청 수락 에러');
      toast.error('친구 요청 수락에 실패했습니다.');
    },
  });
};

// 친구 요청 거절
export const useRefuseFriend = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteRefuseFriend,
    onSuccess: (data) => {
      console.log('친구 요청 거절 완료', data);
      queryClient.invalidateQueries({ queryKey: ['friends', 'received'] });
      toast.success('친구 요청을 거절하였습니다.');
    },
    onError: () => {
      console.log('친구 요청 거절 에러');
      toast.error('친구 요청 거절에 실패했습니다.');
    },
  });
};

// 친구 삭제 하기
export const useRemoveFriend = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteRemoveFriend,
    onSuccess: (data) => {
      console.log('친구 삭제 완료', data);
      queryClient.invalidateQueries({ queryKey: ['friends', 'Online'] });
      queryClient.invalidateQueries({ queryKey: ['friends', 'All'] });
      toast.success('친구를 삭제했습니다.');
    },
    onError: () => {
      console.log('친구 삭제 에러');
      toast.error('친구 삭제에 실패했습니다.');
    },
  });
};

// 모든 친구 확인
export const useGetAllFriends = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['friends', 'All'],
    queryFn: getAllFriend,
    staleTime: 3 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  return { data, isLoading, error };
};

export default {
  useGetFriends,
  useAddFriend,
  useCancelFriend,
  useAcceptFriend,
  useRefuseFriend,
  useRemoveFriend,
  useGetAllFriends,
};
