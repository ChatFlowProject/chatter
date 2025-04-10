import { useState } from 'react';
import { useGetFriends } from 'src/service/feature/friend/hook/useFriendQuery';
import { FriendData } from 'src/service/feature/friend/types/friend';
import FriendCard from './FriendCard';
import Navigation from '@pages/Friends/components/Navigation';
import AddFriend from './AddFriend';

export default function Friend() {
  const [activeButton, setActiveButton] = useState<
    'Online' | 'All' | 'Pending' | null
  >('Online');

  const { data, isLoading, error } = useGetFriends(activeButton);

  const title =
    activeButton === 'Online'
      ? '온라인'
      : activeButton === 'All'
        ? '모든 친구'
        : '?';

  if (isLoading) return <div>로딩중</div>;
  if (error) return <div>에러</div>;

  console.log('data: ', data, 'state: ', activeButton);

  return (
    <div className='bg-[#37393F] h-screen'>
      <Navigation
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {activeButton === null ? (
        <AddFriend />
      ) : activeButton === 'Pending' ? (
        <div className='flex flex-col items-start gap-[2px]'>
          <p className='mx-5 my-4 text-neutral-300 font-bold'>보냄 - 0명</p>
          <div className='w-full'>
            {data &&
              'sent' in data &&
              data.sent?.map((user: FriendData, idx: number) => (
                <FriendCard key={`sent-${idx}`} user={user} />
              ))}
          </div>
          <p className='mx-5 my-4 text-neutral-300 font-bold'>받음 - 0명</p>{' '}
          <div className='w-full'>
            {data &&
              'received' in data &&
              data.received?.map((user: FriendData, idx: number) => (
                <FriendCard key={`received-${idx}`} user={user} />
              ))}
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-start gap-[2px]'>
          <p className='mx-5 my-4 text-neutral-300 font-bold'>
            {title} - {Array.isArray(data) ? data.length : 0}명
          </p>
          <div className='w-full'>
            {Array.isArray(data) &&
              data.map((user: FriendData, idx: number) => (
                <FriendCard key={`friend-${idx}`} user={user} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
