export type MemberState =
  | 'ONLINE'
  | 'IDLE'
  | 'DO_NOT_DISTURB'
  | 'OFFLINE'
  | '온라인'
  | '자리비움'
  | '방해금지'
  | '오프라인';

export interface MemberInfo {
  userId: string;
  email: string;
  nickname: string;
  avatarUrl?: string;
  birth?: string;
}

export interface UpdateMemberStatusRequest {
  memberState: MemberState;
}

export interface UpdateMemberInfoRequest {
  password: string;
  newPassword: string;
  name: string;
  birth: string;
  avatarUrl?: string;
}

export interface SearchMembersRequest {
  memberIds: string[];
}

export interface SearchMemberResult {
  userId: string;
  email: string;
  nickname: string;
  avatarUrl?: string;
}