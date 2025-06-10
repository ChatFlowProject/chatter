import { useEffect } from 'react';
import { useSocket } from '../context/useSocket';
import { ChatMessage } from '@service/feature/chat/schema/messageSchema.ts';

export const useChat = (onMessage: (msg: ChatMessage) => void) => {
  const { client, isConnected } = useSocket();
  const chatId = '25ffc7bf-874f-444e-b331-26ed864a76ba';

  useEffect(() => {
    if (!client || !isConnected) return;

    const subscribeUrl = `/sub/message/${chatId}`;
    const subscription = client.subscribe(subscribeUrl, (message) => {
      const parsed: ChatMessage = JSON.parse(message.body);
      onMessage(parsed);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [client, isConnected, onMessage]);

  const sendMessage = (content: string, attachments?: { type: string; url: string }[]) => {
    if (!client || !isConnected) return;

    const sendUrl = `/pub/message/${chatId}`;
    const message = { chatId, content, attachments, createdAt: new Date().toISOString()};

    client.publish({
      destination: sendUrl,
      body: JSON.stringify(message),
    });
  };

  return { sendMessage };
};