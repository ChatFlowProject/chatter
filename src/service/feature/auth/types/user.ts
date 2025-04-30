export type MemberState = 'ONLINE' | 'OFFLINE' | 'IDLE' | 'DO_NOT_DISTURB';

export interface UserProfile {
  id: string;
  email: string;
  nickname: string;
  name: string;
  birth: string;
  type: 'MEMBER' | 'ADMIN' | string;
  avatarUrl: string | null;
  state: MemberState;
  createdAt: string;
}