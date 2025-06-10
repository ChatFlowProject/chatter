import { useEffect, useRef } from 'react';

import { ChatMessage } from '@service/feature/chat/schema/messageSchema.ts';
import { DateDivider } from '@pages/chat/components/message/DateDivider.tsx';
import { ChatMessageItem } from '@pages/chat/components/message/ChatMessageItem.tsx';


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

  const shouldShowDateDivider = (currentMsg: ChatMessage, prevMsg?: ChatMessage) => {
    if (!prevMsg) return true;

    const currentDate = new Date(currentMsg.createdAt);
    const prevDate = new Date(prevMsg.createdAt);

    return currentDate.toDateString() !== prevDate.toDateString();
  };

  return (
    <div className="flex-1 overflow-y-auto flex flex-col gap-1 p-4">
      {messages.map((msg, index) => {
        const prev = messages[index - 1];
        const isSameSender = prev?.sender === msg.sender;
        const showMeta = !isSameSender || shouldShowDateDivider(msg, prev);

        return (
          <>
            {shouldShowDateDivider(msg, prev) && (
              <DateDivider key={`date-${msg.createdAt}`} date={new Date(msg.createdAt)} />
            )}
            <ChatMessageItem
              key={`msg-${index}`}
              msg={msg}
              isMine={msg.sender.memberId === myId}
              showMeta={showMeta}
            />
          </>
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
};