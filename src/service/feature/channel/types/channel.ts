export type ChannelType = 'text' | 'voice' | 'event';

// export interface Channel {
//   id: string;
//   name: string;
//   type: ChannelType;
//   category: string;
//   [key: string]: unknown;
// }

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
  memberInfo: {
    id: string;
    nickname: string;
    name: string;
    avatarUrl: string;
    state: 'OFFLINE' | 'ONLINE';
    createdAt: string;
  };
}
