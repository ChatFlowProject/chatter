import { v4 as uuidv4 } from 'uuid';
import { useEffect, useCallback } from 'react';
import { useSocket } from '../context/useSocket';
import { ChatMessage } from '@service/feature/chat/schema/messageSchema.ts';

export const useChat = (chatId: string | undefined, onMessage: (msg: ChatMessage) => void) => {
  const { client, isConnected } = useSocket();

  useEffect(() => {
    let subscription: any;
    
    const setupSubscription = () => {
      if (!client || !isConnected || !chatId) {
        console.log('채팅 구독 조건이 충족되지 않음:', { client: !!client, isConnected, chatId });
        return;
      }
      
      try {
        const subscribeUrl = `/sub/message/${chatId}`;
        console.log('채팅 구독 시도:', subscribeUrl);
        
        subscription = client.subscribe(subscribeUrl, (message) => {
          const parsed: ChatMessage = JSON.parse(message.body);
          onMessage(parsed);
        });
        
        console.log('채팅 구독 성공');
      } catch (error) {
        console.error('STOMP 구독 중 오류 발생:', error);
      }
    };

    setupSubscription();

    return () => {
      if (subscription) {
        try {
          subscription.unsubscribe();
          console.log('채팅 구독 해제');
        } catch (error) {
          console.error('구독 해제 중 오류 발생:', error);
        }
      }
    };
  }, [client, isConnected, chatId, onMessage]);

  const sendMessage = useCallback(async (content: string, attachments?: { type: string; url: string }[]) => {
    if (!client || !isConnected || !chatId) {
      console.warn('메시지를 보낼 수 없습니다:', {
        client: !!client,
        isConnected,
        chatId
      });
      return Promise.reject(new Error('연결 상태가 올바르지 않습니다.'));
    }

    const tempId = uuidv4();
    const sendUrl = `/pub/message/${chatId}`;
    const message = {
      chatId,
      content,
      attachments,
      createdAt: new Date().toISOString(),
      tempId
    };

    return new Promise((resolve, reject) => {
      try {
        client.publish({
          destination: sendUrl,
          body: JSON.stringify(message),
        });
        resolve(tempId);
      } catch (error) {
        console.error('메시지 전송 중 오류 발생:', error);
        reject(error);
      }
    });
  }, [client, isConnected, chatId]);

  return { sendMessage, isConnected };
};