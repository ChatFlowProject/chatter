import { createContext, useContext } from 'react';
import type { CompatClient } from '@stomp/stompjs';

export type SocketContextType = {
  client: CompatClient | null;
  isConnected: boolean;
};

export const SocketContext = createContext<SocketContextType | null>(null);