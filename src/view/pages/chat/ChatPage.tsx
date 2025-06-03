import { useState } from 'react';
import { ChatView } from '@pages/chat/components/ChatView.tsx';
import { ChatInput } from '@pages/chat/components/ChatInput.tsx';
import { ChatMessage, useChat } from '@service/feature/chat/hook/useChat.ts';
import { ChannelHeader } from '@pages/chat/components/ChannelHeader.tsx';

const CHAT_ID = '25ffc7bf-874f-444e-b331-26ed864a76ba';
const MY_ID = 'tester';

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const { sendMessage } = useChat((msg) => {
    setMessages((prev) => [...prev, msg]);
  });

  const handleSend = (text: string) => {
    const msg: ChatMessage = {
      channelId: CHAT_ID,
      senderId: MY_ID,
      content: text,
      type: 'TEXT',
    };

    sendMessage(msg);
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <div className="flex h-screen flex-col bg-chat text-white ">
      <ChannelHeader channelName="일반" />
      <ChatView messages={messages} myId={MY_ID} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}