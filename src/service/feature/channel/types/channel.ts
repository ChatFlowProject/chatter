export type ChannelType = 'text' | 'voice' | 'event';

// export interface Channel {
//   id: string;
//   name: string;
//   type: ChannelType;
//   category: string;
//   [key: string]: unknown;
// }

export interface DMDetail {
  channel: Channel2;
  channelMembers: ChannelMember[];
}

export interface DMList extends Channel2 {
  channelMembers: ChannelMember[];
}

export interface ChannelMember {
  id: string;
  nickname: string;
  name: string;
  avatarUrl: string;
  state: 'ONLINE' | 'OFFLINE';
  createdAt: string;
}

// 팀 서버 상세 조회에서 불러오는 channel 타입도 이것. 추후 아래 Channel 타입에서 이걸로 변경해야 할 듯
export interface Channel2 {
  id: number;
  name: string;
  position: number;
  type: string;
  accessType: string;
  chatId: string;
}

export interface Channel {
  categoriesView: CategoriesView[];
  team: Team;
  teamMembers: TeamMembers[];
}

export interface CategoriesView {
  category: {
    id: number;
    name: string;
    position: number;
  };
}

export interface Team {
  id: string;
  name: string;
  masterId: string;
  iconUrl: string;
}

export interface TeamMembers {
  id: number;
  role: 'OWNER' | 'MEMBER';
  memberInfo: ChannelMember;
}
