import React from 'react';

const MentionIcon: React.FC = () => {
  return (
    <svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 9V6C1 3.23858 3.23858 1 6 1H25.5" stroke="#72767D" />
    </svg>
  );
};

type MentionAvatarProps = {
  avatarUrl: string;
};

const MentionAvatar: React.FC<MentionAvatarProps> = ({ avatarUrl }) => {
  return (
    <div className="w-3.5 h-3.5 relative opacity-90">
      <div className="w-3.5 h-[14.20px] left-0 top-0 absolute rounded-full bg-gray-500" />
      <img className="w-[12.40px] h-[12.38px] left-[0.80px] top-[0.81px] absolute rounded-full" src={avatarUrl} alt="Mention avatar" />
    </div>
  );
};

type MentionTextProps = {
  username: string;
  message: string;
};

const MentionText: React.FC<MentionTextProps> = ({ username, message }) => {
  return (
    <div className="justify-start items-end gap-[3px] flex">
      <div className="opacity-80 text-white text-[10px] font-bold font-['Whitney']">@{username}</div>
      <div className="opacity-50 text-[#dcddde] text-[9px] font-medium font-['Whitney']">{message}</div>
    </div>
  );
};

type MentionMessageProps = {
  avatarUrl: string;
  username: string;
  message: string;
};

const MentionMessage: React.FC<MentionMessageProps> = ({ avatarUrl, username, message }) => {
  return (
    <div className="h-3.5 pl-[18px] pr-px justify-start items-end gap-0.5 inline-flex">
      <div data-svg-wrapper>
        <MentionIcon />
      </div>
      <div className="justify-start items-center gap-0.5 flex">
        <MentionAvatar avatarUrl={avatarUrl} />
        <MentionText username={username} message={message} />
      </div>
    </div>
  );
};

export default MentionMessage;
