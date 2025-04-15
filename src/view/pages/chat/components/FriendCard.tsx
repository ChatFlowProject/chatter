import UserCard from '@pages/Friends/components/UserCard';
import { FriendData } from 'src/service/feature/friend/types/friend';

const FriendCard = ({
  user,
  type = 'message',
  onToggle,
  isOpen,
}: {
  user: FriendData;
  type?: 'sent' | 'received' | 'message';
  onToggle?: () => void;
  isOpen?: boolean;
}) => {
  return (
    <div className='mx-[20px] border-t border-[#3E4147]'>
      <UserCard
        key={user.friendshipInfo.name}
        user={user.friendshipInfo}
        friendshipId={user.friendshipId}
        isActive={false}
        className='text-neutral-300 h-[60px] hover:bg-[#3E4147]'
        type={type}
        onToggle={onToggle}
        isOpen={isOpen}
      />
    </div>
  );
};

export default FriendCard;
