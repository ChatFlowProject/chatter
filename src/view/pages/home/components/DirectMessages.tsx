import Icon from './Icon';
import UserCard from './UserCard';
import { useNavigate, useParams } from 'react-router-dom';

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
            profileImage: 'nelly',
            isOnline: 'online',
            name: 'Nelly',
            status: 'Listening to ',
            special: 'Spotify',
            userId: 1,
          },
          { profileImage: 'peppe', isOnline: 'idle', name: 'Peppe', userId: 6 },
          {
            profileImage: 'phibi',
            isOnline: 'dnd',
            name: 'Phibi',
            status: 'Playing ',
            special: 'GTA',
            userId: 2,
          },
          { profileImage: 'cap', isOnline: 'offline', name: 'Cap', userId: 7 },
          {
            profileImage: 'wumpus',
            isOnline: 'streaming',
            name: 'Wumpus',
            status: 'Streaming ',
            special: 'Minecraft',
            userId: 3,
          },
          {
            profileImage: 'locke',
            isOnline: 'phone',
            name: 'Locke',
            status: `I'm on a hike trip today!`,
            userId: 4,
          },
          {
            profileImage: 'clyde',
            isOnline: 'online',
            name: 'Clyde',
            status: 'Playing ',
            special: 'Among Us',
            userId: 5,
          },
        ].map((user) => (
          <UserCard
            key={user.name}
            {...user}
            isActive={userId == user.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default DirectMessages;
