import { useEffect } from 'react';
import { useSocket } from '../context/useSocket';
import { useDispatch } from 'react-redux';
import { addMessage } from '../store/chatSlice';

export const useChat = () => {
  const { client, isConnected } = useSocket();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!client || !isConnected) return;

    const subscription = client.subscribe('/topic/chat', (message) => {
      try {
        const body = JSON.parse(message.body);
        dispatch(addMessage(body));
      } catch (err) {
        console.error('Message parse error:', err);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [client, isConnected, dispatch]);

  return {};
};