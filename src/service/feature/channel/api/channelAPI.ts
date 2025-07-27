import { createAxiosInstance } from '@service/feature/common/axios/axiosInstance';
import { CreateChannelRequest, DMDetail, ChannelResponse } from '../types/channel';
import { MoveChannelRequest } from '@service/feature/channel/types/category';

const axios = createAxiosInstance();

export const endpoints = {
  teams: (teamId: string) => `/teams/${teamId}`,
  categories: (teamId: string, categoryId: number) => `/teams/${teamId}/categories/${categoryId}/channels`,
  channel: (channelId: number) => `/channels/${channelId}`,
  dm: '/channels/me',
};

export const getChannelList = async (teamId: string): Promise<ChannelResponse> => {
  const res = await axios.get(endpoints.teams(teamId));
  return res.data.data;
};

export const createChannel = async (
    teamId: string,
    categoryId: number,
    request: CreateChannelRequest
): Promise<void> => {
  const res = await axios.post(endpoints.categories(teamId, categoryId), request);
  return res.data;
};

export const deleteChannel = async (
    teamId: string,
    categoryId: number,
    channelId: number
): Promise<void> => {
  const res = await axios.delete(`${endpoints.categories(teamId, categoryId)}/${channelId}`);
  return res.data;
};

export const moveChannel = async (
    teamId: string,
    categoryId: number,
    channelId: number,
    body: MoveChannelRequest
): Promise<void> => {
  const res = await axios.patch(`${endpoints.categories(teamId, categoryId)}/${channelId}`, body);
  return res.data;
};

export const editChannel = async (
    teamId: string,
    categoryId: number,
    channelId: number
): Promise<void> => {
  const res = await axios.patch(`${endpoints.categories(teamId, categoryId)}/${channelId}`);
  return res.data;
};

export const getDMDetail = async (channelId: number): Promise<DMDetail> => {
  const res = await axios.get(endpoints.channel(channelId));
  return res.data.data;
};

export const getDMList = async (): Promise<DMDetail[]> => {
  const res = await axios.get(endpoints.dm);
  return res.data.data;
};

export const createDM = async (memberIds: string[]): Promise<DMDetail> => {
  const res = await axios.post('/channels/members', { memberIds });
  return res.data.data;
};