import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const subscribeUrl = '/sub/message/25ffc7bf-874f-444e-b331-26ed864a76ba';
const sendUrl = '/pub/message/send';

export interface ChatMessage {
  channelId: string;
  senderId: string;
  content: string;
  type: 'TEXT' | 'IMAGE';
}

export const useChat = (onMessage: (msg: ChatMessage) => void) => {
  const client = new Client({
    webSocketFactory: () => new SockJS('http://flowchat.shop:30100/ws/chat'),
    debug: (str) => console.log('[STOMP DEBUG]', str),
    reconnectDelay: 5000,
    onConnect: () => {
      console.log('WebSocket 연결 완료');

      client.subscribe(subscribeUrl, (message) => {
        const parsed: ChatMessage = JSON.parse(message.body);
        onMessage(parsed);
      });
    },
  });

  client.activate();

  const sendMessage = (msg: ChatMessage) => {
    if (client.connected) {
      client.publish({
        destination: sendUrl,
        body: JSON.stringify(msg),
      });
    } else {
      console.warn('WebSocket 연결 전입니다.');
    }
  };

  return { sendMessage };
};