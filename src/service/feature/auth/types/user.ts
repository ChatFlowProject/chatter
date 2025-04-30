export type MemberState = 'ONLINE' | 'OFFLINE' | 'IDLE' | 'DO_NOT_DISTURB';

export interface UserProfile {
  userId: string;
  nickname: string;
  email: string;
  avatarUrl?: string;
  memberState: MemberState;
  status?: string;
  aboutMe?: string;
  pronouns?: string;
}