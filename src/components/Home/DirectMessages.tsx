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
      <div className='flex justify-center items-end gap-[76px]'>
        <p className='text-[13px]'>DIRECT MESSAGES</p>
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
          },
          { profileImage: 'peppe', isOnline: 'idle', name: 'Peppe' },
          {
            profileImage: 'phibi',
            isOnline: 'dnd',
            name: 'Phibi',
          },
          { profileImage: 'cap', isOnline: 'offline', name: 'Cap' },
          {
            profileImage: 'wumpus',
            isOnline: 'streaming',
            name: 'Wumpus',
          },
          {
            profileImage: 'locke',
            isOnline: 'phone',
            name: 'Locke',
          },
          {
            profileImage: 'clyde',
            isOnline: 'online',
            name: 'Clyde',
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
