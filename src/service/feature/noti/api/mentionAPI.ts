import createAxiosInstance from '@service/feature/common/axios/axiosInstance';
import { MyAlarm, PageMetaData } from '../types/noti';
import { SSEMentionResponse } from '@service/feature/chat/type/alert';

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
  // const res = await axios.get(
  //   `/notification?size=6&notificationId=${pageParam.notificationId}&dateTime=${pageParam.dateTime}`,
  // );
  const { notificationId, dateTime } = pageParam;
  const res = await axios.get('/notification', {
    params: {
      size: 6,
      ...(notificationId !== 0 ? { dateTime } : {}),
      ...(notificationId !== 0 ? { notificationId } : {}),
    },
  });

  // const res = await axios.get('/mention', {
  //   params: {
  //     size: 6,
  //     includeEveryone,
  //     includeAllTeams,
  //     ...(teamId ? { teamId } : {}),
  //     ...(nextCursorId !== 0
  //       ? {
  //           nextCursorId,
  //           nextCursorCreatedAt,
  //         }
  //       : {}),
  //   },
  // });
  return res.data;
};

export const deletMyNoti = async (notificationId: number) => {
  const res = await axios.delete(`/notification/${notificationId}`);
  return res.data;
};

export const deleteAllMyNoti = async () => {
  const res = await axios.delete('/notification/all');
  return res.data;
};

/**TODO
 * 추후 다시 확인
 */
export const getMentionList = async ({
  pageParam,
  teamId,
  includeEveryone,
  includeAllTeams,
}: {
  pageParam: {
    nextCursorId: number;
    nextCursorCreatedAt: string;
  };
  teamId?: string;
  includeEveryone?: boolean;
  includeAllTeams?: boolean;
}): Promise<PageMetaData<SSEMentionResponse>> => {
  const { nextCursorId, nextCursorCreatedAt } = pageParam;

  const res = await axios.get('/mention', {
    params: {
      size: 6,
      includeEveryone,
      includeAllTeams,
      ...(teamId ? { teamId } : {}),
      ...(nextCursorId !== 0
        ? {
            nextCursorId,
            nextCursorCreatedAt,
          }
        : {}),
    },
  });
  return res.data;
};
