export type MemberState = 'ONLINE' | 'OFFLINE' | 'IDLE' | 'DO_NOT_DISTURB';
export type MemberType = 'MEMBER' | 'ADMIN'

export interface UserProfile {
    id: string;
    email: string;
    nickname: string;
    name: string;
    birth: string;
    type: MemberType;
    avatarUrl: string | null;
    state: MemberState;
    createdAt: string;
}