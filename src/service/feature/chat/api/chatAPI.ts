import axiosInstance from "../../common/axios/axiosInstance";

export const fetchChannels = async () => {
  const res = await axiosInstance.get('/channels');
  return res.data;
};

export const fetchMessages = async (channelId: string) => {
  const res = await axiosInstance.get(`/channels/${channelId}/messages`);
  return res.data;
};

export const deleteMessage = async (messageId: string) => {
  const res = await axiosInstance.delete(`/messages/${messageId}`);
  return res.data;
};