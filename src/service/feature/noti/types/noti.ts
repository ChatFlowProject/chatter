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
