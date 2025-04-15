import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getAllFriend,
  getOnlineFriend,
  getReceivedFriend,
  getSentFriend,
  postAddFriend,
} from '../api/friendApi';

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

export const useAddFriend = () => {
  return useMutation({
    mutationFn: postAddFriend,
    onSuccess: (data) => {
      alert(data);
    },
    onError: () => {},
  });
};

export default { useGetFriends, useAddFriend };
