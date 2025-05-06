import AddTeamModal from '../components/team/AddTeamModal.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useTeamListQuery } from '@service/feature/team/hook/query/useTeamServiceQuery.ts';
import ChatServer from '../components/team/ChatServer.tsx';

const TeamSidebar = () => {
  const params = useParams();
  const channelId = params.serverId;
  const navigate = useNavigate();

  const { data: servers } = useTeamListQuery()

  const handleChannel = (id: string) => {
    if (id === '') {
      navigate(`/channels/@me`);
    } else {
      navigate(`/channels/${id}`);
    }
  };

  return (
    <div className='wrapper flex pt-5'>
      {/* 자기 채널 */}
      <ChatServer
        isActive={channelId === '@me'}
        onClick={() => handleChannel('')}
      />
      <div className='border w-[48px] h-[1px] border-[#42454A]' />

      {servers?.map((server) => (
        <ChatServer
          isActive={channelId === String(server.id)}
          key={server.id}
          onClick={() => handleChannel(server.id)}
          server={server}
        />
      ))}
      {/* 서버 추가하기 */}
      <AddTeamModal />
    </div>
  );
};

export default TeamSidebar;
