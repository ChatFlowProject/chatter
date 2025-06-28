import { useMessageHistory } from "@service/feature/chat";
import { useChat } from "@service/feature/chat/hook/useChat.ts";
import { ChatMessage } from "@service/feature/chat/schema/messageSchema.ts";
import { useState, useCallback, useEffect } from "react";
import { ChannelHeader } from "./components/layout/ChannelHeader";
import { ChatInput } from "@pages/chat/components/layout/ChatInput.tsx";
import { ChatView } from "@pages/chat/components/layout/ChatView.tsx";
import { postImage } from "@service/feature/image/imageApi.ts";
import { useParams } from "react-router-dom";
import {v4 as uuidv4} from "uuid";

const MY_ID = "tests";

export function ChatPage() {
  const { channelId } = useParams<{ channelId: string }>();
  const { data: messagesData = [], isLoading, error } = useMessageHistory(channelId);
  const [localMessages, setLocalMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    setLocalMessages([]);
  }, [channelId]);

  useEffect(() => {
    if (Array.isArray(messagesData) && messagesData.length > 0) {
      setLocalMessages(messagesData);
    }
  }, [messagesData]);

  const handleNewMessage = useCallback((msg: ChatMessage) => {
    setLocalMessages(prev => {
      if (msg.tempId) {
        return prev.map(m =>
            m.tempId === msg.tempId
                ? { ...msg, status: 'sent' as const }
                : m
        );
      }
      return [...prev, msg];
    });
  }, []);


  const { sendMessage } = useChat(channelId, handleNewMessage);

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      return await postImage(formData);
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
      throw error;
    }
  };

  const handleSend = async (text: string, files?: File[]) => {
    let imageUrls: string[] = [];

    if (files && files.length > 0) {
      const uploadPromises = files.map((file) => uploadImage(file));
      imageUrls = await Promise.all(uploadPromises);
    }

    const tempMessage: ChatMessage = {
      tempId: uuidv4(),
      sender: {
        memberId: MY_ID,
        name: "tester",
        avatarUrl: "",
      },
      content: text,
      createdAt: new Date().toISOString(),
      isUpdated: false,
      isDeleted: false,
      status: 'pending',
      attachments: imageUrls.length > 0
          ? imageUrls.map((url) => ({type: "image" as const, url}))
          : [],
      messageId: 0
    };

    setLocalMessages(prev => [...prev, tempMessage]);

    try {
      await sendMessage(text, tempMessage.attachments);
    } catch (error) {
      setLocalMessages(prev =>
          prev.map(msg =>
              msg.tempId === tempMessage.tempId
                  ? { ...msg, status: 'error' as const }
                  : msg
          )
      );
      console.error('메시지 전송 실패:', error);
    }
  };

  if (!channelId) return <div>채널 ID가 유효하지 않습니다.</div>;
  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  return (
    <div className="flex h-full flex-col bg-chat text-white">
      <ChannelHeader channelName="일반" />
      <ChatView messages={localMessages} myId={MY_ID} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}