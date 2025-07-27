export interface SSEResponse {
  eventName: string;
  receiverId: string;
  sender: SSESender;
}

export interface SSEMentionResponse extends SSEResponse {
  channel: SSEChannel;
  content: string;
  team: SSETeam;
  category: SSECategory;
  chatId: string;
}

export interface SSESender {
  avatarUrl: string;
  id: string;
  name: string;
}

export interface SSETeam {
  id: string;
  name: string;
  iconUrl: string;
}

export interface SSEChannel {
  id: string;
  name: string;
}

export interface SSESender {
  id: string;
  name: string;
  avatarUrl: string;
}
/**
 * TODO
 * 추후 백엔드 응답값 확인 후 변경
 */
export interface SSECategory {
  id: string;
  name: string;
}
