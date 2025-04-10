import { useSocket } from '../context/useSocket';

type SendMessagePayload = {
  content: string;
  channelId: string;
  sender: string;
};

export const useSendMessage = () => {
  const { client, isConnected } = useSocket();

  const sendMessage = ({ content, channelId, sender }: SendMessagePayload) => {
    if (!client || !isConnected) return;

    const payload = {
      content,
      sender,
      timestamp: new Date().toISOString(),
    };

    client.send(`/pub/chat/${channelId}`, {}, JSON.stringify(payload));
  };

  return { sendMessage };
};