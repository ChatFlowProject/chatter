import axiosInstance from './axiosInstance';

interface FriendshipProps {
  friendshipId: number;
}

const token = localStorage.getItem('token');

export const deleteFriend = async ({ friendshipId }: FriendshipProps) => {
  try {
    const response = await axiosInstance.delete(
      `/friendships/${friendshipId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    console.error('친구 삭제 실패', error.response?.data || error.message);
    throw error;
  }
};

export const refuseFriend = async ({ friendshipId }: FriendshipProps) => {
  try {
    const response = await axiosInstance.delete(
      `/friendships/${friendshipId}/refuse`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    console.error('친구 요청 거절 실패', error.response?.data || error.message);
    throw error;
  }
};

export const cancelFriend = async ({ friendshipId }: FriendshipProps) => {
  try {
    const response = await axiosInstance.delete(
      `/friendships/${friendshipId}/cancel`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    console.error('친구 요청 취소 실패', error.response?.data || error.message);
    throw error;
  }
};

export const getFriend = async () => {
  try {
    const response = await axiosInstance.get(`/friendships`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error(
      '친구 전체 목록 조회 실패',
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getFriendSent = async () => {
  try {
    const response = await axiosInstance.get(`/friendships/sent`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error(
      '보낸 친구 요청 목록 조회 실패',
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getFriendReceived = async () => {
  try {
    const response = await axiosInstance.get(`/friendships/received`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error(
      '받은 친구 요청 목록 조회 실패',
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getFriendOnline = async () => {
  try {
    const response = await axiosInstance.get(`/friendships/online`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error(
      '온라인 친구 목록 조회 실패',
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const patchFriend = async ({ friendshipId }: FriendshipProps) => {
  try {
    const response = await axiosInstance.patch(`/friendships/${friendshipId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('친구 요청 수락 실패', error.response?.data || error.message);
    throw error;
  }
};

export const postFriend = async () => {
  try {
    const response = await axiosInstance.post(`/friendships`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('친구 요청 실패', error.response?.data || error.message);
    throw error;
  }
};
