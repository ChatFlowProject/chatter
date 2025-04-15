import UserCard from '@pages/Friends/components/UserCard';
import { FriendData } from 'src/service/feature/friend/types/friend';

const FriendCard = ({
  user,
  type = 'message',
}: {
  user: FriendData;
  type?: 'sent' | 'received' | 'message';
}) => {
  return (
    <div className='mx-[20px] border-t border-[#3E4147]'>
      <UserCard
        key={user.friendshipInfo.name}
        user={user.friendshipInfo}
        isActive={false}
        className='text-neutral-300 h-[60px] hover:bg-[#3E4147]'
        type={type}
      />
    </div>
  );
};

export default FriendCard;
