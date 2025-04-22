import AddServerModal from '@pages/chat/components/AddServerModal';
import { useNavigate, useParams } from 'react-router-dom';
import ChatServer from 'src/service/feature/team/ChatServer';
import { useGetTeam } from 'src/service/feature/team/hooks/useTeamSidebar';

// 대충 넣은 것
const TeamSidebar = () => {
  const params = useParams();
  const channelId = params.serverId;
  const navigate = useNavigate();

  // 팀 목록 불러오기
  const { data: servers, isLoading } = useGetTeam();

  if (isLoading) return <div>로딩중....</div>;

  const handleChannel = (id: string) => {
    if (id === '') {
      navigate(`/channels/@me`);
    } else {
      navigate(`/channels/${id}`);
    }
  };
  return (
    <div className='wrapper flex'>
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
      <AddServerModal />
    </div>
  );
};

export default TeamSidebar;
