import {ChannelType} from "@service/feature/channel/types/category.ts";

export interface Channel {
  id: number;
  name: string;
  position: number;
  type: string;
  accessType: string;
  chatId: string;
}

export interface ChannelMember {
  id: string;
  nickname: string;
  name: string;
  avatarUrl: string;
  state: 'ONLINE' | 'OFFLINE';
  createdAt: string;
}

export interface DMDetail {
  channel: Channel;
  channelMembers: ChannelMember[];
}

export interface DMList extends Channel {
  channelMembers: ChannelMember[];
}

export interface Category {
  id: number;
  name: string;
  position: number;
}

export interface CategoryView {
  category: Category;
  channels: Channel[];
}

export interface TeamMember {
  id: number;
  role: 'OWNER' | 'MEMBER';
  memberInfo: ChannelMember;
}

export interface Team {
  id: string;
  name: string;
  masterId: string;
  iconUrl: string;
}

export interface CreateChannelRequest {
  name: string;
  channelType: ChannelType;
}

export interface ChannelResponse {
  team: Team;
  categoriesView: CategoryView[];
  teamMembers: TeamMember[];
}