import { useEffect, useRef } from 'react';
import { Chat } from  '@service/feature/chat/type/messages.ts'
import { DateDivider } from '@pages/chat/components/message/DateDivider.tsx';
import { ChatMessageItem } from '@pages/chat/components/message/ChatMessageItem.tsx';
import {CategoryView} from "@service/feature/channel/types/channel.ts";

export const ChatView = ({messages = [], myId }: {
  messages: Chat[];
  myId: string;
  categories: CategoryView[]
}) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const messageList = Array.isArray(messages) ? messages : [];

  const shouldShowDateDivider = (currentMsg: ChatMessage, prevMsg?: ChatMessage) => {
    if (!prevMsg) return true;
    const currentDate = new Date(currentMsg.createdAt);
    const prevDate = new Date(prevMsg.createdAt);
    return currentDate.toDateString() !== prevDate.toDateString();
  };

  return (
      <div className="flex-1 overflow-y-auto flex flex-col gap-1 p-4">
        {messageList.map((msg, index) => {
          const prev = messageList[index - 1];
          const isSameSender = prev?.sender?.memberId === msg.sender?.memberId;
          const showMeta = !isSameSender || shouldShowDateDivider(msg, prev);

          return (
              <div key={`msg-${index}`}>
                {shouldShowDateDivider(msg, prev) && (<DateDivider date={new Date(msg.createdAt)} />)}
                <ChatMessageItem msg={msg} isMine={msg.sender.memberId === myId} showMeta={showMeta} mentions={[]}/>
              </div>
          );
        })}
        <div ref={bottomRef} />
      </div>
  );
};
