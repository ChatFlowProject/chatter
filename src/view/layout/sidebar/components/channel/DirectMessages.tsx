import Icon from '@components/common/Icon.tsx';
import UserCard from '@pages/Friends/components/UserCard';
import { useParams } from 'react-router-dom';

const DirectMessages = () => {
  const params = useParams();

  const userId = Number(params.channelId);

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
          <Icon path='plus' />
        </button>
      </div>
      <div className='flex flex-col items-start gap-[2px]'>
        {[
          {
            avatarUrl: 'nelly',
            state: 'online',
            name: 'Nelly',
            id: 1,
          },
          {
            avatarUrl: 'peppe',
            state: 'idle',
            name: 'Peppe',
            id: 6,
          },
          {
            avatarUrl: 'phibi',
            state: 'dnd',
            name: 'Phibi',
            id: 2,
          },
          {
            avatarUrl: 'cap',
            state: 'offline',
            name: 'Cap',
            id: 7,
          },
          {
            avatarUrl: 'wumpus',
            state: 'streaming',
            name: 'Wumpus',
            id: 3,
          },
          {
            avatarUrl: 'locke',
            state: 'phone',
            name: 'Locke',
            id: 4,
          },
          {
            avatarUrl: 'clyde',
            state: 'online',
            name: 'Clyde',
            id: 5,
          },
        ].map((user) => (
          <UserCard key={user.name} user={user} isActive={userId == user.id} />
        ))}
      </div>
    </div>
  );
};

export default DirectMessages;
