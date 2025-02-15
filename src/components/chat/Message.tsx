import React from 'react';

type AvatarProps = {
  imageUrl: string;
  altText: string;
};

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText }) => {
  return (
    <div className="w-[35px] h-[35px] relative">
      <div className="w-[35px] h-[35.51px] left-0 top-0 absolute rounded-full bg-gray-500" />
      <img
        className="w-[31px] h-[30.94px] left-[2px] top-[2.03px] absolute rounded-full"
        src={imageUrl}
        alt={altText}
      />
    </div>
  );
};

type MessageHeaderProps = {
  username: string;
  timestamp: string;
};

const MessageHeader: React.FC<MessageHeaderProps> = ({ username, timestamp }) => {
  return (
    <div className="justify-start items-end gap-1.5 inline-flex">
      <div className="text-white text-xs font-semibold font-['Whitney Semibold']">{username}</div>
      <div className="text-[#72767d] text-[9px] font-medium font-['Whitney']">{timestamp}</div>
    </div>
  );
};

type MessageContentProps = {
  content: string;
};

const MessageContent: React.FC<MessageContentProps> = ({ content }) => {
  return (
    <div className="justify-start items-start inline-flex">
      <div className="text-[#dcddde] text-xs font-medium font-['Whitney']">{content}</div>
    </div>
  );
};

type MessageProps = {
  avatarUrl: string;
  username: string;
  timestamp: string;
  content: string;
};

const Message: React.FC<MessageProps> = ({ avatarUrl, username, timestamp, content }) => {
  return (
    <div className="h-[35px] justify-start items-start gap-[9px] inline-flex">
      <Avatar imageUrl={avatarUrl} altText="User avatar" />
      <div className="flex-col justify-start items-start gap-[5px] inline-flex">
        <MessageHeader username={username} timestamp={timestamp} />
        <MessageContent content={content} />
      </div>
    </div>
  );
};

export default Message;
