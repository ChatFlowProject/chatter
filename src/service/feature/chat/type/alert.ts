export interface SSEResponse {
  eventName?: string;
  receiverId?: string;
  sender: SSESender;
}

export interface SSEMentionResponse extends SSEResponse {
  channel: SSEChannel;
  team: SSETeam;
  category: SSECategory;
  message: SSEMentionMsg;
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

export interface SSEMentionMsg {
  chatId: string;
  content: string;
  createdAt: string;
  id: number;
}

export interface SSECategory {
  id: string;
  name: string;
}
