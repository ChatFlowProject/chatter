import { createAxiosInstance } from '@service/feature/common/axios/axiosInstance';

const axios = createAxiosInstance();

export const getChannelList = async (teamId: string) => {
  const res = await axios.get(`/teams/${teamId}`);
  return res.data.data;
};

export const createChannel = async ({
  teamId, categoryId, name, channelType,
}: {
  teamId: string;
  categoryId: number;
  name: string;
  channelType: 'TEXT' | 'VOICE';
}) => {
  const res = await axios.post(
    `/teams/${teamId}/categories/${categoryId}/channels`,
    { name, channelType },
  );
  return res.data;
};

export const deleteChannel = async ({
  teamId,
  categoryId,
  channelId,
}: {
  teamId: string;
  categoryId: number;
  channelId: number;
}) => {
  const res = await axios.delete(
    `/teams/${teamId}/categories/${categoryId}/channels/${channelId}`,
  );
  return res.data;
};

export const moveChannel = async (teamId: string, categoryId: number, channelId: number, body: {
  destCategoryId: number;
  prevChannelId: number;
  nextChannelId: number;
}) => {
  const res = await axios.patch(
    `/teams/${teamId}/categories/${categoryId}/channels/${channelId}`,
    body
  );
  return res.data;
};

export const editChannel = async ({
  teamId,
  categoryId,
  channelId,
}: {
  teamId: string;
  categoryId: number;
  channelId: number;
}) => {
  const res = await axios.patch(
    `/teams/${teamId}/categories/${categoryId}/channels/${channelId}`,
  );
  return res.data;
};
