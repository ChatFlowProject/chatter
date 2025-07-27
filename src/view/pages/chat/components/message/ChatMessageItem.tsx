import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FileIcon } from 'lucide-react';
import fallbackIcon from '@assets/img/logo/chatflow.png';
import { type ChatMessage } from '@service/feature/chat/schema/messageSchema.ts';

dayjs.extend(relativeTime);

interface Props {
  msg: ChatMessage;
  isMine: boolean;
  showMeta: boolean;
  memberIds: string[];
}

const MessageStatus = ({ status }: { status?: string }) => {
  if (!status || status === 'sent') return null;

  return (
      <span className="ml-2 text-xs flex items-center">
      {status === 'pending' && <span className="animate-pulse inline-flex items-center gap-1">
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
        전송중
      </span>}
        {status === 'error' && <span className="text-red-500 inline-flex items-center gap-1">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
        </svg>
        전송 실패
      </span>}
    </span>
  );
};

const parseMentions = (text: string, memberIds: string[] = []) => {
  return text.split(/(\@[^\s]+)/g).map((part, index) => {
    if (part.startsWith('@') && memberIds.includes(part.slice(1))) {
      return (
        <span key={index} className="text-blue-500 font-semibold">
          {part}
        </span>
      );
    }
    if (part === '@everyone') {
      return (
        <span key={index} className="text-red-500 font-semibold">
          {part}
        </span>
      );
    }
    return part;
  });
};

export const ChatMessageItem = ({ msg, isMine, showMeta, memberIds }: Props) => {
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
          <span className="text-sm text-blue-400 underline">첨부 파일 다운로드</span>
        </a>
    );
  };

  return (
    <div className={`flex items-start gap-2 ${isMine ? 'justify-end' : 'justify-start'}`}>
      {!isMine && showMeta && (
        <img
          src={msg.sender.avatarUrl || fallbackIcon}
          alt={msg.sender.name}
          className="w-10 h-10 rounded-full shrink-0"
          onError={e => {
            e.currentTarget.src = fallbackIcon;
          }}
        />
      )}
      <div className={`max-w-[70%] ${isMine ? 'text-right' : ''} ${!isMine && !showMeta ? 'ml-[50px]' : ''}`}>
        {showMeta && (
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-sm font-semibold ${isMine ? 'text-green-400' : 'text-blue-400'}`}>
              {msg.sender.name}
            </span>
            <span className="text-xs text-gray-500">{dayjs(msg.createdAt).fromNow()}</span>
          </div>
        )}
        <div className={`flex items-center gap-2 ${isMine ? 'flex-row-reverse' : ''}`}>
          <MessageStatus status={msg.status}/>
          <div className={`px-3 py-2 rounded-lg ${isMine ? 'bg-blurple text-white' : 'bg-off text-gray-100'}`}>
            {msg.content && (
                <p className="whitespace-pre-wrap text-sm">{parseMentions(msg.content, memberIds)}</p>
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
    </div>
  );
};