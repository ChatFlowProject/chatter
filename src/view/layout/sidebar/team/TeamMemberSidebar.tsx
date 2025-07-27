import { useParams } from 'react-router-dom';
import { useTeamDetailQuery } from '@service/feature/team/hook/query/useTeamServiceQuery.ts';
import SkeletonTeamSidebar from '../components/skeletons/SkeletonTeamSidebar.tsx';
import TeamMember from '../components/team/TeamMember.tsx';
import { TeamMembers } from '@service/feature/team/types/team.ts';
import SkeletonDMList from '../components/skeletons/SkeletonDMList.tsx';

const TeamMemberSidebar = () => {
  const { serverId } = useParams<{
    serverId: string;
    channelId: string;
  }>();

  const { data, isLoading, error } = useTeamDetailQuery(serverId);

  if (isLoading) return <SkeletonDMList className='py-5 px-4' />;
  if (error) return <div>에러</div>;

  console.log('팀 유저 리스트: ', data);
  const offlineUsers = data?.teamMembers.filter(
    (user: { memberInfo: { state: string } }) =>
      user.memberInfo.state === 'OFFLINE',
  );
  const onlineUsers = data?.teamMembers.filter(
    (user: { memberInfo: { state: string } }) =>
      user.memberInfo.state === 'ONLINE',
  );

  return (
    <div className='flex flex-col py-5 px-4 gap-5'>
      {onlineUsers.length > 0 && (
        <div>
          <p className='text-neutral-400 text-text-sm font-bold'>
            온라인 - {onlineUsers.length}
          </p>
          {onlineUsers.map((user: TeamMembers) => (
            <TeamMember key={user.id} user={user.memberInfo} />
          ))}
        </div>
      )}
      {offlineUsers.length > 0 && (
        <div>
          <p className='text-neutral-400 text-text-sm font-bold'>
            오프라인 - {offlineUsers.length}
          </p>
          {offlineUsers.map((user: TeamMembers) => (
            <TeamMember
              key={user.id}
              user={user.memberInfo}
              isActive={false}
              isMe={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamMemberSidebar;
