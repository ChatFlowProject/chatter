import UserCard from '@pages/Friends/components/UserCard';
import { useParams } from 'react-router-dom';
import { Plus } from 'lucide-react';

const DirectMessages = () => {
  const params = useParams();

  const userId = params.channelId;

  const handlePlus = () => {
    console.log('plus 버튼 클릭');
  };

  return (
    <div className='flex flex-col justify-center items-center gap-[9px]'>
      <div className='flex justify-center items-center gap-[76px]'>
        <p className='text-[13px] text-neutral-400 font-bold'>
          DIRECT MESSAGES
        </p>
        <button
          className='w-[11px] h-[11px]'
          onClick={handlePlus}
          type='button'
        >
          <Plus />
        </button>
      </div>
      <div className='flex flex-col items-start gap-[2px]'>
        {[
          {
            id: 'sdfsdf',
            name: '사용자3',
            state: 'DND',
            avatarUrl: 'profile',
          },
        ].map((user) => (
          <UserCard
            key={user.name}
            user={user}
            isActive={userId === user.id}
            friendshipId={0}
          />
        ))}
      </div>
    </div>
  );
};

export default DirectMessages;
