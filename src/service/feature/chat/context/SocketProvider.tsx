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
    // SockJS로 STOMP 연결
    const socket = new SockJS(import.meta.env.VITE_SOCKET_URL + '/ws'); // ✅ Spring의 WebSocket endpoint
    const stompClient = Stomp.over(socket);
    clientRef.current = stompClient;

    stompClient.connect(
      {}, // 헤더에 토큰 넣고 싶으면 여기에 추가
      () => {
        setIsConnected(true);
        console.log('✅ STOMP connected');
      },
      (error) => {
        setIsConnected(false);
        console.error('❌ STOMP connection error:', error);
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