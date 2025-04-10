import axiosInstance from '../../common/axios/axiosInstance';
import { FriendData } from '../types/friend';

export const getOnlineFriend = async (): Promise<FriendData[]> => {
  const res = await axiosInstance.get('/friendships/online', {
    withCredentials: true,
  });

  return res.data.data;
};

export const getAllFriend = async (): Promise<FriendData[]> => {
  const res = await axiosInstance.get('/friendships', {
    withCredentials: true,
  });

  return res.data.data;
};

export const getReceivedFriend = async (): Promise<FriendData[]> => {
  const res = await axiosInstance.get('/friendships/received', {
    withCredentials: true,
  });

  return res.data.data;
};

export const getSentFriend = async (): Promise<FriendData[]> => {
  const res = await axiosInstance.get('/friendships/sent', {
    withCredentials: true,
  });

  return res.data.data;
};

export const postAddFriend = async (
  nickName: string,
): Promise<'INVALID_REQUEST / ALREADY_FRIENDS / REQUEST_SUCCESS / FRIENDSHIP_ESTABLISHED'> => {
  const res = await axiosInstance.post(
    '/friendships',
    {
      friendNickname: nickName,
    },
    { withCredentials: true },
  );

  return res.data.data.status;
};

export default {
  getOnlineFriend,
  getAllFriend,
  getSentFriend,
  getReceivedFriend,
  postAddFriend,
};
