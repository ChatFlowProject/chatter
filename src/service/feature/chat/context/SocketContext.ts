import { createContext } from 'react';
import { CompatClient } from '@stomp/stompjs';

export type SocketContextType = {
  client: CompatClient | null;
  isConnected: boolean;
};

export const SocketContext = createContext<SocketContextType | null>(null);