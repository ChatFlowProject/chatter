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
    // const token = getTokenFromCookie();
    // if (token === null) {
    //   console.error('토큰을 찾을 수 없습니다.');
    //   return;
    // }

    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmYzgxMGZmMy1hMTU2LTQxMGMtODBkYi05Mzk0NDA1MDdkYzM6TUVNQkVSIiwiaXNzIjoiamVycnkwMzM5IiwiaWF0IjoxNzQ4NjE5MDY0LCJleHAiOjE3ODEwMTkwNjR9.IO6VIqIfoS1EosqkAMTDd8Xv34HhmTbtp-CDppDcidjnsOOIpMyjNTnHgDS-2RsmFLIWQzvZjBKd-rvdebxkBA';

    const socket = new SockJS(`http://flowchat.shop:30100/ws/chat?token=${token}`);
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

// function getTokenFromCookie(): string | null {
//   const cookies = document.cookie;
//   const cookieArray = cookies.split('; ');
//
//   for (const cookie of cookieArray) {
//     const [name, value] = cookie.split('=');
//     if (name === 'accessToken' && value && value.startsWith('ey')) {
//       return value;
//     }
//   }
//   return null;
// }
