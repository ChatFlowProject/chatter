import { useEffect, useRef } from 'react';
import { ChatMessageItem } from '@pages/chat/components/ChatMessageItem.tsx';
import { ChatMessage } from '@service/feature/chat/schema/messageSchema.ts';

export const ChatView = ({
                           messages,
                           myId,
                         }: {
  messages: ChatMessage[];
  myId: string;
}) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto flex flex-col gap-1 p-4">
      {messages.map((msg, index) => {
        const prev = messages[index - 1];
        const isSameSender = prev?.senderId === msg.senderId;
        const showMeta = !isSameSender;

        return (
          <ChatMessageItem
            key={index}
            msg={msg}
            isMine={msg.senderId === myId}
            showMeta={showMeta}
          />
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
};