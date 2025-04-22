import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import AddServerModal from './components/AddServerModal';
import ChatServer from '../../../service/feature/team/ChatServer.tsx';
import ChatChannel from '../../../service/feature/chat/legacy/ChatChannel.tsx';
import Navigation from '@pages/Friends/components/Navigation.tsx';
import { useNavigate, useParams } from 'react-router-dom';
// import DirectBar from '@pages/home/components/DirectBar';
import Friend from './components/Friend';
import DirectBar from '@components/layout/sidebar/component/right/DirectBar.tsx';
// import DirectBar from '@pages/landing/components/DirectBar.tsx';

const servers = [
  { id: 1, title: '서버1' },
  { id: 2, title: 'server2' },
];
const channels = [
  { id: 1, title: '일반1' },
  { id: 2, title: '일반2' },
];
export default function ChatPage() {
  const [messages, setMessages] = useState<{ id: string; text: string }[]>([]);

  const navigate = useNavigate();
  const params = useParams();
  const channelId = params.serverId;

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { id: uuidv4(), text: message }]);
  };

  const handleChannel = (server: { id: number; title: string }) => {
    console.log('server: ', server);
    if (server.id === 0) {
      navigate(`/channels/@me`);
    } else {
      navigate(`/channels/${server.id}`);
    }
  };

  return (
    <div className='flex w-full h-screen'>
      <div className='chat flex-1'>
        <Friend />
        {/* <Navigation /> */}
        {/* {messages.map((message) => (
          <ChatMessage key={message.id} message={message.text} />
        ))}
        <ChatInput onSendMessage={handleSendMessage} /> */}
      </div>
    </div>
  );
}
