import { useEffect, useCallback } from 'react';
import { useSocket } from '../context/useSocket';
import { ChatMessage } from '@service/feature/chat/schema/messageSchema.ts';

export const useChat = (chatId: string | undefined, onMessage: (msg: ChatMessage) => void) => {
  const { client, isConnected } = useSocket();

  useEffect(() => {
    let subscription: any;
    
    const setupSubscription = () => {
      if (!client || !isConnected) return;
      
      try {
        const subscribeUrl = `/sub/message/${chatId}`;
        subscription = client.subscribe(subscribeUrl, (message) => {
          const parsed: ChatMessage = JSON.parse(message.body);
          onMessage(parsed);
        });
      } catch (error) {
        console.error('STOMP 구독 중 오류 발생:', error);
      }
    };

    setupSubscription();

    return () => {
      if (subscription) {
        try {
          subscription.unsubscribe();
        } catch (error) {
          console.error('구독 해제 중 오류 발생:', error);
        }
      }
    };
  }, [client, isConnected, onMessage]);

  const sendMessage = useCallback((content: string, attachments?: { type: string; url: string }[]) => {
    if (!client || !isConnected) {
      console.warn('메시지를 보낼 수 없습니다: STOMP 연결이 없습니다');
      return;
    }

    const sendUrl = `/pub/message/${chatId}`;
    const message = { chatId, content, attachments, createdAt: new Date().toISOString() };

    try {
      client.publish({
        destination: sendUrl,
        body: JSON.stringify(message),
      });
    } catch (error) {
      console.error('메시지 전송 중 오류 발생:', error);
    }
  }, [client, isConnected, chatId]);

  return { sendMessage, isConnected };
};