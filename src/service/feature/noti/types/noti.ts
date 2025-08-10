/**
 * TODO
 * SSEMentionResponse 와 나중에 비교
 */

export interface Mention {
  sender: Sender;
  team: Team;
  channel: Channel;
  messageId: number;
  content: string;
  createdAt: string;
}

interface Sender {
  id: string;
  name: string;
  avatarUrl: string;
}

interface Team {
  id: string;
  name: string;
  iconUrl: string;
}

interface Channel {
  id: number;
  name: string;
}

// 위에는 SSE mention
// 아래는 받은편지함 나의 알림

export interface MyAlarm {
  id: number;
  isRead: boolean;
  message: string;
  receiverId: string;
  sender: Sender;
  type: 'FRIEND_REQUEST' | 'FRIEND_ACCEPTED';
  createdAt: string;
  dm?: {
    chatId: string;
    messageId: string;
  };
}

export interface PageMetaData<T> {
  content: T;
  hasNext: boolean;
  nextCursorCreatedAt: string;
  nextCursorId: number;
}

// 무한스크롤 페이지네이션 틀
export interface InfinityResponse<T> {
  pageParams: number[];
  pages: PageMetaData<T>[];
}
