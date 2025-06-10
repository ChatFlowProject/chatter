import { useState } from 'react';
import { useChat } from '@service/feature/chat/hook/useChat.ts';
import { ChatMessage } from '@service/feature/chat/schema/messageSchema.ts';
import { ChannelHeader } from './components/layout/ChannelHeader';
import { ChatInput } from '@pages/chat/components/layout/ChatInput.tsx';
import { ChatView } from '@pages/chat/components/layout/ChatView.tsx';

const CHAT_ID = '25ffc7bf-874f-444e-b331-26ed864a76ba';
const MY_ID = 'tester';

export function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const { sendMessage } = useChat((msg) => {
    setMessages((prev) => [...prev, msg]);
  });

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
      throw error;
    }
  };

  const handleSend = async (text: string, files?: File[]) => {
      let imageUrls: string[] = [];

      if (files && files.length > 0) {
        const uploadPromises = files.map(file => uploadImage(file));
        imageUrls = await Promise.all(uploadPromises);
      }

    const msg: ChatMessage = {
      chatId: CHAT_ID,
      sender: {
        memberId: MY_ID,
        username: 'tester',
        avatarUrl: '',
      },
      content: text,
      createdAt: new Date().toISOString(),
      attachments:
        imageUrls.length > 0
          ? imageUrls.map((url) => ({ type: 'image', url }))
          : undefined,
    };

    sendMessage(msg.content, msg.attachments);
  };

  return (
    <div className="flex h-screen flex-col bg-chat text-white">
      <ChannelHeader channelName="일반" />
      <ChatView messages={messages} myId={MY_ID} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}