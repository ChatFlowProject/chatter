export type ChannelType = 'text' | 'voice' | 'event';

export interface Channel {
  id: string;
  name: string;
  type: ChannelType;
  category: string;
  [key: string]: unknown;
}