import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FileIcon } from 'lucide-react';
import fallbackIcon from '@assets/img/logo/chatflow.png';
import { useJoinTeamMutation} from '@service/feature/team/hook/mutation/useTeamMemberMutation';
import { type ChatMessage } from '@service/feature/chat/schema/messageSchema';

dayjs.extend(relativeTime);

interface Props {
  msg: ChatMessage;
  isMine: boolean;
  showMeta: boolean;
  memberIds: string[];
}

export const ChatMessageItem = ({ msg, isMine, showMeta }: Props) => {
  const { mutate: inviteFriend } = useJoinTeamMutation();

  const handleInvite = () => {
    if (msg.teamId) {
      inviteFriend(msg.teamId);
    }
  };

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
      {/* 메타 데이터 (프로필 이미지) */}
      {!isMine && showMeta && (
        <img
          src={msg.sender.avatarUrl || fallbackIcon}
          alt={msg.sender.name}
          className="w-10 h-10 rounded-full shrink-0"
          onError={(e) => {
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

        <div className={`px-3 py-2 rounded-lg ${isMine ? 'bg-blurple text-white' : 'bg-off text-gray-100'}`}>
          {msg.content && <p className="whitespace-pre-wrap text-sm">{msg.content}</p>}
          {msg.attachments && (
            <div className="flex flex-col gap-2">
              {msg.attachments.map((attachment, index) => (
                <div key={index}>{renderAttachment(attachment)}</div>
              ))}
            </div>
          )}
        </div>

        {msg.teamId && (
          <button
            onClick={handleInvite}
            className="mt-2 border border-green-500 px-3 py-1 rounded text-white bg-green-500 hover:bg-green-600 text-sm"
          >
            초대하기
          </button>
        )}
      </div>
    </div>
  );
};