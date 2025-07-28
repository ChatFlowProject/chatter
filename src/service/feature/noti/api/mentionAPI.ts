import createAxiosInstance from '@service/feature/common/axios/axiosInstance';
import { InfinityResponse, MyAlarm, PageMetaData } from '../types/noti';

const axios = createAxiosInstance();

export const getMention = async () => {
  const res = await axios.get(
    '/mention?page=0&pageSize=30&includeEveryone=true&includeAllTeams=true',
  );
  return res.data;
};

export const getAllMyAlarm = async (
  pageParam: number,
): Promise<PageMetaData<MyAlarm>> => {
  const res = await axios.get(
    `/notification?size=6&notificationId=${pageParam}`,
  );
  return res.data;
};
