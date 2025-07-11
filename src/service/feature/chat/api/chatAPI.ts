import { createAxiosInstance } from '../../common/axios/axiosInstance';
import { Chat } from '../type/messages.ts'

const axios = createAxiosInstance();

export const fetchChannels = async () => {
  const res = await axios.get('/channels');
  return res.data;
};

export const fetchLatestMessages = async (channelId: string | undefined): Promise<Chat[]> => {
  const res = await axios.get(`/message/latest?chatId=${channelId}`);
  console.log(res.data.data);
  return Array.isArray(res.data.data) ? res.data.data : [];
};

export const deleteMessage = async (messageId: string) => {
  const res = await axios.delete(`/messages/${messageId}`);
  return res.data;
};
