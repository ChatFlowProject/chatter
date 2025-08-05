import AddTeamModal from '../components/team/AddTeamModal.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useTeamListQuery } from '@service/feature/team/hook/query/useTeamServiceQuery.ts';
import ChatServer from '../components/team/ChatServer.tsx';
import SkeletonTeamSidebar from '../components/skeletons/SkeletonTeamSidebar.tsx';
import TeamDeleteMoreMenu from './TeamDeleteMoreMenu.tsx';

const TeamSidebar = () => {
  const params = useParams();
  const channelId = params.serverId;
  const navigate = useNavigate();

  const { data: servers, isLoading, error } = useTeamListQuery();

  const handleChannel = (id: string) => {
    if (id === '') {
      navigate(`/channels/@me`);
    } else {
      navigate(`/channels/${id}`);
    }
  };

  if (isLoading) return <SkeletonTeamSidebar />;
  if (error) return <div>에러</div>;

  return (
    <div className='wrapper flex pt-5'>
      {/* 자기 채널 */}
      <ChatServer
        isActive={channelId === '@me'}
        onClick={() => handleChannel('')}
      />
      <div className='border w-[48px] h-[1px] border-[#42454A]' />

      {servers?.map((server) => (
        <TeamDeleteMoreMenu teamId={server.id}>
          <ChatServer
            isActive={channelId === String(server.id)}
            key={server.id}
            onClick={() => handleChannel(server.id)}
            server={server}
          />
        </TeamDeleteMoreMenu>
      ))}
      {/* 서버 추가하기 */}
      <AddTeamModal />
    </div>
  );
};

export default TeamSidebar;
