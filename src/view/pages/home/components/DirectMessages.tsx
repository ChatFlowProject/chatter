import { useState } from 'react';
import Icon from './Icon';
import UserCard from './UserCard';

const DirectMessages = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

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
          },
          { profileImage: 'peppe', isOnline: 'idle', name: 'Peppe' },
          {
            profileImage: 'phibi',
            isOnline: 'dnd',
            name: 'Phibi',
            status: 'Playing ',
            special: 'GTA',
          },
          { profileImage: 'cap', isOnline: 'offline', name: 'Cap' },
          {
            profileImage: 'wumpus',
            isOnline: 'streaming',
            name: 'Wumpus',
            status: 'Streaming ',
            special: 'Minecraft',
          },
          {
            profileImage: 'locke',
            isOnline: 'phone',
            name: 'Locke',
            status: `I'm on a hike trip today!`,
          },
          {
            profileImage: 'clyde',
            isOnline: 'online',
            name: 'Clyde',
            status: 'Playing ',
            special: 'Among Us',
          },
        ].map((user) => (
          <UserCard
            key={user.name}
            {...user}
            isActive={selectedUser === user.name}
            onClick={() => setSelectedUser(user.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default DirectMessages;
