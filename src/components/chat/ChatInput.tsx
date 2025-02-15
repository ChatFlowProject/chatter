import React, { useState } from 'react';

const AddIcon: React.FC = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0.5C3.5888 0.5 0 4.0888 0 8.50001C0 12.9112 3.5888 16.5 8 16.5C12.4112 16.5 16 12.9112 16 8.50001C16 4.0888 12.4112 0.5 8 0.5ZM12 9.30001H8.8V12.5H7.2V9.30001H4V7.70001H7.2V4.5H8.8V7.70001H12V9.30001Z" fill="#B9BBBE"/>
  </svg>
);

const EmojiIcon: React.FC = () => (
  <svg width="58" height="21" viewBox="0 0 58 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.14258 19C13.837 19 17.6426 15.1944 17.6426 10.5C17.6426 5.80558 13.837 2 9.14258 2C4.44816 2 0.642578 5.80558 0.642578 10.5C0.642578 15.1944 4.44816 19 9.14258 19Z" fill="#B9BBBE"/>
  </svg>
);

const DividerIcon: React.FC = () => (
  <svg width="1" height="21" viewBox="0 0 1 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 0V21" stroke="#4F545C"/>
  </svg>
);

type ReplyIconProps = {
  onReply: () => void;
};

const ReplyIcon: React.FC<ReplyIconProps> = ({ onReply }) => (
  <button onClick={onReply} className="hover:opacity-80 transition-opacity">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2L5 7L10 12" stroke="#B9BBBE" strokeWidth="2"/>
    </svg>
  </button>
);

type ChatInputProps = {
  onSendMessage: (message: string) => void;
};

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
      setReplyTo(null);
    }
  };

  const handleReply = () => {
    setReplyTo("Replying to last message...");
  };

  return (
    <div className="w-full max-w-[931px] h-[39px] px-[13px] py-[9px] bg-[#40444b] rounded-[7px] flex items-center gap-3">
      <button>
        <AddIcon />
      </button>

      <div className="flex-grow flex flex-col">
        {replyTo && (
          <div className="text-[#B9BBBE] text-xs italic mb-1">
            {replyTo}
          </div>
        )}
        <input
          type="text"
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="w-full bg-transparent text-[#dcddde] text-xs font-medium placeholder-[#72767D] outline-none"
        />
      </div>

      <button>
        <EmojiIcon />
      </button>

      <DividerIcon />

      <ReplyIcon onReply={handleReply} />
    </div>
  );
};

export default ChatInput;