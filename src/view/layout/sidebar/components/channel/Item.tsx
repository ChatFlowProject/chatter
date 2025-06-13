import { FriendData } from '@service/feature/friend/types/friend';
import { useInviteFriendMutation } from '@service/feature/team/hook/mutation/useTeamMemberMutation';

const Item = ({ teamId, member }: { teamId: string; member: FriendData }) => {
  // 친구 초대
  const { mutate } = useInviteFriendMutation();

  const handleInvite = () => {
    mutate({ teamId, memberId: String(member.friendshipInfo.id) });
  };

  /**
   * 기본 이미지 넣기
   */
  return (
    <div className='flex justify-between mx-4 my-2'>
      <div className='flex items-center'>
        <img
          className='w-8 h-8 mr-[10px] rounded-full'
          src={member.friendshipInfo.avatarUrl || '/logo.png'}
          alt={member.friendshipInfo.name}
        />
        <p className='text-[#b9bbbe]'>{member.friendshipInfo.name}</p>
      </div>
      <button
        className='border border-[#43A25A] px-4 rounded-[8px] text-white hover:bg-[#43A25A]'
        onClick={handleInvite}
      >
        초대
      </button>
    </div>
  );
};

export default Item;
