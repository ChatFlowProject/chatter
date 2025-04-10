export interface FriendData {
  friendshipId: 8;
  friendshipDateTime: string;
  friendshipInfo: FriendInfoData;
}

export interface FriendInfoData {
  id: string;
  nickname: string;
  name: string;
  avatarUrl: string;
  state: 'ONLINE' | 'OFFLINE';
  createdAt: string;
}
