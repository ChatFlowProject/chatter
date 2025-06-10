import { useState } from 'react';

export const ChatInput = ({ onSend }: { onSend: (text: string) => void }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <div className="mt-4 flex gap-2 p-3 bg-sidebar rounded-md">
      <input
        className="flex-1 bg-chat rounded px-4 py-2 text-white outline-none placeholder:text-gray-400"
        placeholder="메시지를 입력하세요..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button
        className="px-4 py-2 bg-blurple rounded text-white hover:bg-indigo-700"
        onClick={handleSend}
      >
        전송
      </button>
    </div>
  );
};