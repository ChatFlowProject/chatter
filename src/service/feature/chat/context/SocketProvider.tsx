import React, { useEffect, useRef, useState } from 'react';
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { SocketContext } from './SocketContext';


type Props = {
  children: React.ReactNode;
};

export const SocketProvider = ({ children }: Props) => {
  const [isConnected, setIsConnected] = useState(false);
  const clientRef = useRef<CompatClient | null>(null);

  useEffect(() => {
    const token = getTokenFromCookie();
    if (token === null) {
      console.error('토큰을 찾을 수 없습니다.');
      return;
    }

    const socket = new SockJS(`http://nps.flowchat.shop:30004/ws/chat?token=${token}`);
    const stompClient = Stomp.over(socket);
    clientRef.current = stompClient;

    stompClient.connect(
      {},
      () => {
        setIsConnected(true);
        console.log('STOMP connected');
      },
      (error: any) => {
        setIsConnected(false);
        console.error('STOMP connection error:', error);
      }
    );

    return () => {
      if (clientRef.current?.connected) {
        clientRef.current.disconnect(() => {
          console.log('🧹 STOMP disconnected');
        });
      }
    };
  }, []);

  return (
    <SocketContext.Provider value={{ client: clientRef.current, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};

function getTokenFromCookie(): string | null {
    // 실제 구현에서는 쿠키에서 토큰을 찾아 반환하거나 null을 반환해야 합니다
    return null;
}
