import createAxiosInstance from '@service/feature/common/axios/axiosInstance';
import { InfinityResponse, MyAlarm, PageMetaData } from '../types/noti';

const axios = createAxiosInstance();

export const getMention = async () => {
  const res = await axios.get(
    '/mention?page=0&pageSize=30&includeEveryone=true&includeAllTeams=true',
  );
  return res.data;
};

export const getAllMyAlarm = async (pageParam: {
  notificationId: number;
  dateTime: string;
}): Promise<PageMetaData<MyAlarm>> => {
  const res = await axios.get(
    `/notification?size=6&notificationId=${pageParam.notificationId}&dateTime=${pageParam.dateTime}`,
  );
  return res.data;
};

export const deleteAllMyNoti = async (notificationId: number) => {
  const res = await axios.delete(`/notification/${notificationId}`);
  return res.data;
};
