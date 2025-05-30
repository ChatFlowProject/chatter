import { createAxiosInstance } from '../../common/axios/axiosInstance';

const axios = createAxiosInstance('teams');

export const fetchChannels = async () => {
  const res = await axios.get('/channels');
  return res.data;
};

export const fetchMessages = async (channelId: string) => {
  const res = await axios.get(`/channels/${channelId}/messages`);
  return res.data;
};

export const deleteMessage = async (messageId: string) => {
  const res = await axios.delete(`/messages/${messageId}`);
  return res.data;
};
