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
    const socket = new SockJS('http://nps.flowchat.shop:30004/ws/chat?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmYzgxMGZmMy1hMTU2LTQxMGMtODBkYi05Mzk0NDA1MDdkYzM6TUVNQkVSIiwiaXNzIjoiamVycnkwMzM5IiwiaWF0IjoxNzQ4MzUzMjY0LCJleHAiOjE3ODA3NTMyNjR9.LQjgAXMs64eZbmmbkQZVZM-ohu9Rn0WZBgNvelqZOyh2CGc8paAvChI3kjBIp0v2s21_woSae7srlf7Qfvzc0w');
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