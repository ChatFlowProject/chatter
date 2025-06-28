import React, { useEffect, useRef, useState } from 'react';
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { SocketContext } from './SocketContext';
import {getCookie} from "@service/feature/auth/lib/getCookie.ts";

type Props = {
  children: React.ReactNode;
};

export const SocketProvider = ({ children }: Props) => {
  const [isConnected, setIsConnected] = useState(false);
  const clientRef = useRef<CompatClient | null>(null);

  useEffect(() => {
    const token = getCookie("accessToken");
    if (!token) {
      console.error('토큰을 찾을 수 없습니다.');
      return;
    }

    const socket = new SockJS(`http://flowchat.shop:30100/ws/chat?token=${token}`);
    const stompClient = Stomp.over(socket);
    clientRef.current = stompClient;

    stompClient.connect(
      {
        Authorization: `Bearer ${token}`,
      },
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