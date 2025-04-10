import Icon from '@pages/home/components/Icon';
import Navigation from '@pages/home/components/Navigation';
import UserCard from '@pages/home/components/UserCard';
import { useEffect, useState } from 'react';
import axiosInstance from 'src/feature/intercepter/axiosInstance';

const mockUsers = [
  {
    profileImage: 'nelly',
    isOnline: 'online',
    name: 'Nelly',
    status: '오프라인',
    userId: 1,
  },
  {
    profileImage: 'peppe',
    isOnline: 'idle',
    name: 'Peppe',
    userId: 6,
    status: '오프라인',
  },
  {
    profileImage: 'phibi',
    isOnline: 'dnd',
    name: 'Phibi',
    status: '오프라인',
    userId: 2,
  },
  {
    profileImage: 'cap',
    isOnline: 'offline',
    name: 'Cap',
    userId: 7,
    status: '오프라인',
  },
  {
    profileImage: 'wumpus',
    isOnline: 'streaming',
    name: 'Wumpus',
    status: '오프라인',
    userId: 3,
  },
  {
    profileImage: 'locke',
    isOnline: 'phone',
    name: 'Locke',
    status: '온라인',
    userId: 4,
  },
  {
    profileImage: 'clyde',
    isOnline: 'online',
    name: 'Clyde',
    status: '온라인',
    userId: 5,
  },
];

interface ChatMessageProps {
  message: string;
}

const FriendCard = ({
  user,
}: {
  user: {
    profileImage: string;
    isOnline: string;
    name: string;
    status: string;
    userId: number;
  };
}) => {
  return (
    <div className='mx-[20px] border-t border-[#3E4147]'>
      <UserCard
        key={user.name}
        {...user}
        isActive={false}
        className='text-neutral-300 h-[60px] hover:bg-[#3E4147]'
        onClick={() => console.log('')}
        isMessage
      />
    </div>
  );
};

export default function Friend() {
  const [activeButton, setActiveButton] = useState<string | null>('Online'); // 🔹 기본값 'Online'

  // 데이터 패칭
  const fetchData = async () => {
    const res = await axiosInstance.get('/friendships');
    console.log('res: ', res);
  };

  useEffect(() => {
    console.log('activeButton: ', activeButton);
    fetchData();
  }, [activeButton]);

  return (
    <>
      <Navigation
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <div className='flex flex-col items-start gap-[2px]'>
        <p className='mx-5 my-4 text-neutral-300 font-bold'>모든 친구 - 11명</p>
        <div className='w-full'>
          {mockUsers.map((user) => (
            <FriendCard user={user} />
          ))}
        </div>
      </div>
    </>
  );
}
