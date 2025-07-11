import {Channel} from "@service/feature/channel/types/channel.ts";
import {MemberInfo} from "@service/feature/member/types/memberAPI.ts";

export interface Team {
  id: string;
  name: string;
  iconUrl?: string;
  masterId?: string;
  [key: string]: any;
}

export interface CategoriesView {
  category: {
    id: number,
    name: string,
    position: number,
  },
  channels: Channel[],
}

export interface TeamMembers {
  id: number,
  role: "ADMIN",
  memberInfo: MemberInfo,
}