import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ChatServer from 'src/feature/server/ChatServer';
import ChatChannel from 'src/feature/channel/ChatChannel';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import AddServerModal from './components/AddServerModal';
import Navigation from '@pages/home/components/Navigation';
import { useNavigate, useParams } from 'react-router-dom';
import DirectBar from '@pages/home/components/DirectBar';
import Friend from './components/Friend';

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
      <div className='wrapper flex'>
        {/* 자기 채널 */}
        <ChatServer
          isActive={channelId === '@me'}
          onClick={() => handleChannel({ id: 0, title: 'me' })}
          title={'me'}
        />
        <div className='border w-[48px] h-[1px] border-[#42454A]' />

        {servers.map((server) => (
          <ChatServer
            isActive={channelId === String(server.id)}
            key={server.id}
            onClick={() => handleChannel(server)}
            title={server.title}
          />
        ))}
        {/* 서버 추가하기 */}
        <AddServerModal />
      </div>
      {/* 채널 사이드바 */}
      <div className='sidebar relative flex flex-col w-[303px]'>
        {/* <div className='smoff'>채팅채널</div>
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
        </div> */}
        <DirectBar />
      </div>
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
