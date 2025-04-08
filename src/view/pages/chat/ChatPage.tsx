import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ChatServer from 'src/feature/server/ChatServer';
import ChatChannel from 'src/feature/channel/ChatChannel';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import AddServerModal from './components/AddServerModal';
import Navigation from '@pages/home/components/Navigation';
import { useNavigate } from 'react-router-dom';

const servers = [
  { id: 1, title: '서버1' },
  { id: 2, title: 'server2' },
];
const channels = [
  { id: 1, title: '일반1' },
  { id: 2, title: '일반2' },
];
export default function ChatPage() {
  const [activeServer, setActiveServer] = useState<number | null>(null);
  const [activeChannel, setActiveChannel] = useState<number | null>(null);
  const [messages, setMessages] = useState<{ id: string; text: string }[]>([]);

  const navigate = useNavigate();

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { id: uuidv4(), text: message }]);
  };

  const handleChannel = (server: { id: number; title: string }) => {
    setActiveServer(server.id);
    navigate(`/channels/${server.id}`);
  };

  return (
    <div className='flex w-screen h-screen'>
      <div className='wrapper flex'>
        {servers.map((server) => (
          <ChatServer
            isActive={activeServer === server.id}
            key={server.id}
            onClick={() => handleChannel(server)}
            title={server.title}
          />
        ))}
        {/* 서버 추가하기 */}
        <AddServerModal />
      </div>
      <div className='sidebar relative flex flex-col w-[303px]'>
        <div className='smoff'>채팅채널</div>
        {channels.map((channel) => (
          <ChatChannel
            isActive={activeChannel === channel.id}
            key={channel.id}
            onClick={() => setActiveChannel(channel.id)}
            title={channel.title}
          />
        ))}
        <div className='bottom-0 absolute h-[52px] bg-panel font-regular text-white text-base '>
          user
        </div>
      </div>
      <div className='chat flex-1'>
        <Navigation />
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message.text} />
        ))}
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
