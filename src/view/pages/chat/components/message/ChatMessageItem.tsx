import React from 'react';
import { useInviteFriendMutation } from '@service/feature/team/hook/mutation/useTeamMemberMutation';

type ChatMessageProps = {
  message: {
    content: string;
    sender: string;
    timestamp: string;
    teamId?: string;
  };
};

const ChatMessageItem: React.FC<ChatMessageProps> = ({ message }) => {
  const { mutate: inviteFriend } = useInviteFriendMutation();

  const handleInvite = () => {
    if (message.teamId) {
      inviteFriend({
        teamId: message.teamId,
        memberId: message.sender,
      });
    }
  };

  return (
    <div className="chat-message-item border-b border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold">{message.sender}</span>
          <span className="text-sm text-gray-500 ml-2">
            {new Date(message.timestamp).toLocaleTimeString()}
          </span>
        </div>
      </div>
      <div className="mt-2">
        <p>{message.content}</p>
      </div>
      {message.teamId && (
        <div className="mt-2">
          <button
            onClick={handleInvite}
            className="border border-green-500 px-3 py-1 rounded text-white bg-green-500 hover:bg-green-600 text-sm"
          >
            초대
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatMessageItem;