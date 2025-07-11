import React, { useState, useEffect, useRef } from 'react';
import { ChannelMember } from '@service/feature/channel/types/channel.ts';

interface ChatInputProps {
  onSend: (text: string, mentions: string[]) => void;
  users: ChannelMember[];
}

export const ChatInput = ({ onSend, users }: ChatInputProps) => {
  const [text, setText] = useState('');
  const [mentionList, setMentionList] = useState<ChannelMember[]>([]);
  const [showMentionList, setShowMentionList] = useState(false);
  const [mentionMap, setMentionMap] = useState<Map<string, string>>(new Map());
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);

    const mentionTriggerIndex = value.lastIndexOf('@');
    if (mentionTriggerIndex !== -1) {
      const query = value.slice(mentionTriggerIndex + 1).toLowerCase();
      if (query.trim()) {
        const filteredUsers = users.filter(user =>
          user.name.toLowerCase().includes(query) || user.nickname.toLowerCase().includes(query)
        );
        setMentionList(filteredUsers);
        setShowMentionList(true);
      } else {
        setMentionList([]);
        setShowMentionList(true);
      }
    } else {
      setShowMentionList(false);
    }
  };

  const addMention = (user: ChannelMember) => {
    const mentionTriggerIndex = text.lastIndexOf('@');
    const prefix = text.slice(0, mentionTriggerIndex);
    const withMention = `${prefix}@${user.name} `;
    setText(withMention);
    setMentionMap(prev => new Map(prev).set(user.name, user.id));
    setShowMentionList(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setShowMentionList(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const extractMentions = (text: string): string[] => {
    const mentionRegex = /@([^\s]+)/g;
    const matches = [...text.matchAll(mentionRegex)];
    return matches
      .map(match => match[1])
      .filter(mention => mentionMap.has(mention))
      .map(mention => mentionMap.get(mention)!);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const mentions = extractMentions(text);
    onSend(text, mentions);
    setText('');
    setMentionMap(new Map());
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="메시지 입력..."
          className="flex-1 bg-sidebar rounded px-4 py-2 focus:outline-none"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 rounded">
          전송
        </button>
      </form>

      {showMentionList && (
        <div
          ref={dropdownRef}
          className="absolute z-10 bg-gray-700 rounded shadow p-2 max-h-48 overflow-auto"
        >
          {mentionList.length > 0 ? (
            mentionList.map(user => (
              <div
                key={user.id}
                className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-600"
                onClick={() => addMention(user)}
              >
                <img src={user.avatarUrl} alt={user.nickname} className="w-6 h-6 rounded-full" />
                <span>{user.name} ({user.nickname})</span>
              </div>
            ))
          ) : (
            <div className="p-2 text-sm text-gray-400">
              멘션 가능한 멤버가 없습니다.
            </div>
          )}
        </div>
      )}
    </div>
  );
};