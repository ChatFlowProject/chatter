import UserCard from '@pages/Friends/components/UserCard';
import { FriendData } from 'src/service/feature/friend/types/friend';

const FriendCard = ({
  user,
  type = 'message',
  openMenuId,
  setOpenMenuId,
}: {
  user: FriendData;
  type?: 'sent' | 'received' | 'message';
  onToggle?: () => void;
  openMenuId?: number | null;
  setOpenMenuId?: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <div className='mx-[20px] border-t border-[#3E4147]'>
      <UserCard
        className='text-neutral-300 h-[60px] hover:bg-[#3E4147]'
        key={user.friendshipInfo.name}
        user={user.friendshipInfo}
        friendshipId={user.friendshipId}
        type={type}
        isActive={false}
        openMenuId={openMenuId}
        setOpenMenuId={setOpenMenuId}
      />
    </div>
  );
};

export default FriendCard;
