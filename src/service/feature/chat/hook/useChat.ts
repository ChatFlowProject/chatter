import { useEffect } from 'react';
import { useSocket } from '../context/useSocket';
import { ChatMessage } from './types';

const subscribeUrl = '/sub/message/25ffc7bf-874f-444e-b331-26ed864a76ba';
const sendUrl = '/pub/message/25ffc7bf-874f-444e-b331-26ed864a76ba';

export const useChat = (onMessage: (msg: ChatMessage) => void) => {
  const { client, isConnected } = useSocket();

  useEffect(() => {
    if (!client || !isConnected) return;

    const subscription = client.subscribe(subscribeUrl, (message) => {
      const parsed: ChatMessage = JSON.parse(message.body);
      onMessage(parsed);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [client, isConnected, onMessage]);

  const sendMessage = (msg: ChatMessage) => {
    if (client && client.connected) {
      client.publish({
        destination: sendUrl,
        body: JSON.stringify(msg),
      });
    } else {
      console.warn('WebSocket이 아직 연결되지 않았습니다.');
    }
  };

  return { sendMessage };
};