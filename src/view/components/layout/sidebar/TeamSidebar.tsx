import AddServerModal from '@pages/chat/components/AddServerModal';
import { useNavigate, useParams } from 'react-router-dom';
import ChatServer from 'src/service/feature/team/ChatServer';

const servers = [
  { id: 1, title: '서버1' },
  { id: 2, title: 'server2' },
];

// 대충 넣은 것
const TeamSidebar = () => {
  const params = useParams();
  const channelId = params.serverId;
  const navigate = useNavigate();

  const handleChannel = (server: { id: number; title: string }) => {
    console.log('server: ', server);
    if (server.id === 0) {
      navigate(`/channels/@me`);
    } else {
      navigate(`/channels/${server.id}`);
    }
  };
  return (
    // <div className="h-full flex flex-col items-center py-4 space-y-4">
    //   {[1, 2, 3].map((server) => (
    //     <div
    //       key={server}
    //       className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 cursor-pointer"
    //     >
    //       {server}
    //     </div>
    //   ))}
    // </div>
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
  );
};

export default TeamSidebar; // src/view/ui/Common/UserProfileBar.tsx
