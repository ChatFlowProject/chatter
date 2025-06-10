import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FileIcon } from 'lucide-react';
import { ChatMessage } from '@service/feature/chat/schema/messageSchema.ts';

dayjs.extend(relativeTime);

interface Props {
  msg: ChatMessage;
  isMine: boolean;
  showMeta: boolean;
}

export const ChatMessageItem = ({ msg, isMine, showMeta }: Props) => {
  const renderAttachment = (attachment: { type: string; url: string }) => {
    if (attachment.type === 'image') {
      return (
        <img
          src={attachment.url}
          alt="첨부 이미지"
          className="max-w-xs rounded-md border border-gray-600 hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      );
    }

    return (
      <a
        href={attachment.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
      >
        <FileIcon className="w-5 h-5" />
        <span className="text-sm text-blue-400 underline">
          첨부 파일 다운로드
        </span>
      </a>
    );
  };

  return (
    <div className={`flex items-start gap-2 ${isMine ? 'justify-end' : 'justify-start'}`}>
      {!isMine && showMeta && (
        <img
          src={msg.sender.avatarUrl}
          alt={msg.sender.username}
          className="w-10 h-10 rounded-full shrink-0"
        />
      )}
      <div className={`max-w-[70%] ${isMine ? 'text-right' : ''} ${!isMine && !showMeta ? 'ml-[50px]' : ''}`}>
        {showMeta && (
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-sm font-semibold ${isMine ? 'text-green-400' : 'text-blue-400'}`}>
              {msg.sender.username}
            </span>
            <span className="text-xs text-gray-500">
              {dayjs(msg.createdAt).fromNow()}
            </span>
          </div>
        )}
        <div className={`px-3 py-2 rounded-lg ${isMine ? 'bg-blurple text-white' : 'bg-off text-gray-100'}`}>
          {msg.content && (
            <p className="whitespace-pre-wrap text-sm mb-2">{msg.content}</p>
          )}
          {msg.attachments && (
            <div className="flex flex-col gap-2">
              {msg.attachments.map((attachment, index) => (
                <div key={index}>{renderAttachment(attachment)}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};