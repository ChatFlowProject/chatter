import { createAxiosInstance } from '../../common/axios/axiosInstance';

const axios = createAxiosInstance();

export const fetchChannels = async () => {
  const res = await axios.get('/channels');
  return res.data;
};

export const fetchLatestMessages = async (channelId: string | undefined) => {
  const res = await axios.get(`/message/latest?chatId=${channelId}`);
  return Array.isArray(res.data) ? res.data : [];
};

export const deleteMessage = async (messageId: string) => {
  const res = await axios.delete(`/messages/${messageId}`);
  return res.data;
};
