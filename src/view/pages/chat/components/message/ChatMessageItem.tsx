import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ChatMessage } from '@service/feature/chat/hook/useChat.ts';

dayjs.extend(relativeTime);

interface Props {
  msg: ChatMessage;
  isMine: boolean;
  showMeta: boolean;
}

export const ChatMessageItem = ({ msg, isMine, showMeta }: Props) => {
  const renderContent = () => {
    if (msg.type === 'IMAGE') {
      return (
        <img
          src={msg.content}
          alt="이미지"
          className="max-w-xs rounded-md border border-gray-600 hover:scale-105 transition-transform duration-200"
        />
      );
    }

    return <p className="whitespace-pre-wrap text-sm">{msg.content}</p>;
  };

  return (
    <div
      className={`flex items-start gap-2 ${
        isMine ? 'justify-end' : 'justify-start'
      }`}
    >
      {!isMine && showMeta && (
        <div className="w-10 h-10 rounded-full bg-gray-600 shrink-0" />
      )}

      <div
        className={`max-w-[70%] ${
          isMine ? 'text-right' : ''
        } ${!isMine && !showMeta ? 'ml-[50px]' : ''}`}
      >
        {showMeta && (
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`text-sm font-semibold ${
                isMine ? 'text-green-400' : 'text-blue-400'
              }`}
            >
              {msg.senderId}
            </span>
            <span className="text-xs text-gray-500">
              {dayjs().fromNow()}
            </span>
          </div>
        )}

        <div
          className={`px-3 py-2 rounded-lg ${
            isMine
              ? 'bg-blurple text-white'
              : 'bg-off text-gray-100'
          }`}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};