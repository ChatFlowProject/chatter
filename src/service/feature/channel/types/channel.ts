export type ChannelType = 'text' | 'voice' | 'event';

export interface DMDetail {
  channel: Channel;
  channelMembers: ChannelMember[];
}

export interface DMList extends Channel {
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

export interface Channel {
  id: number;
  name: string;
  position: number;
  type: string;
  accessType: string;
  chatId: string;
}

export interface CategoryView {
  category: {
    id: number;
    name: string;
    position: number;
  };
  channels: Channel[];

}

export interface ChannelResponse {
  team: {
    id: string;
    name: string;
    masterId: string;
    iconUrl: string;
  };
  categoriesView: CategoryView[];
  teamMembers: {
    id: number;
    role: 'OWNER' | 'MEMBER';
    memberInfo: ChannelMember;
  }[];
}

export interface ChannelMember {
  id: string;
  nickname: string;
  name: string;
  avatarUrl: string;
  state: 'ONLINE' | 'OFFLINE';
  createdAt: string;
}