import React, { useState } from 'react';
import { User } from '@service/feature/auth/types/user';

interface ChatInputProps {
  onSend: (text: string, mentions: string[]) => void;
  users: User[];
}

export const ChatInput = ({ onSend, users }: ChatInputProps) => {
  const [text, setText] = useState('');
  const [mentionList, setMentionList] = useState<User[]>([]);
  const [showMentionList, setShowMentionList] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);

    const mentionTriggerIndex = value.lastIndexOf('@');
    if (mentionTriggerIndex !== -1) {
      const query = value.slice(mentionTriggerIndex + 1).toLowerCase();
      if (query.trim()) {
        const filteredUsers = users.filter(user =>
          user.name.toLowerCase().includes(query)
        );
        setMentionList(filteredUsers);
        setShowMentionList(filteredUsers.length > 0);
      } else {
        setShowMentionList(false);
      }
    } else {
      setShowMentionList(false);
    }
  };

  const addMention = (user: User) => {
    const mentionTriggerIndex = text.lastIndexOf('@');
    const prefix = text.slice(0, mentionTriggerIndex);
    const withMention = `${prefix}@${user.name} `;
    setText(withMention);
    setShowMentionList(false);
  };

  const extractMentions = (text: string): string[] => {
    const mentionRegex = /@([^\s]+)/g;
    const matches = [...text.matchAll(mentionRegex)];
    return matches.map(match => match[1]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    const mentions = extractMentions(text);
    onSend(text, mentions);
    setText('');
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input type="text" value={text} onChange={handleInputChange} placeholder="메시지 입력..." className="flex-1 bg-chat rounded px-4 py-2 focus:outline-none"/>
        <button type="submit" className="px-4 py-2 bg-blue-500 rounded">전송</button>
      </form>
      {showMentionList && (
        <div className="absolute bg-gray-700 rounded shadow p-2 max-h-48 overflow-auto">
          {mentionList.map(user => (
            <div key={user.id} className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-600" onClick={() => addMention(user)}>
              <img src={user.avatarUrl} alt={user.name} className="w-6 h-6 rounded-full"/>
              <span>{user.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};