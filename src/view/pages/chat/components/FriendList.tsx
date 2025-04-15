import { FriendData } from 'src/service/feature/friend/types/friend';
import AddFriend from './AddFriend';
import FriendCard from './FriendCard';
import { useGetFriends } from 'src/service/feature/friend/hook/useFriendQuery';

interface NavigationProps {
  activeButton: 'Online' | 'All' | 'Pending' | null;
}

export default function FriendList({ activeButton }: NavigationProps) {
  const { data, isLoading, error } = useGetFriends(activeButton);

  const title =
    activeButton === 'Online'
      ? '온라인'
      : activeButton === 'All'
        ? '모든 친구'
        : '보냄';

  if (isLoading)
    return (
      <div className='flex flex-col items-start gap-[2px]'>
        <p className='mx-5 my-4 text-neutral-300 font-bold'>{title}</p>
      </div>
    );
  if (error) return <div>에러</div>;

  return (
    <>
      {activeButton === null ? (
        <AddFriend />
      ) : activeButton === 'Pending' ? (
        <div className='flex flex-col items-start gap-[2px]'>
          {data && 'sent' in data && (
            <>
              <p className='mx-5 my-4 text-neutral-300 font-bold'>
                보냄 - {data.sent?.length}명
              </p>
              <div className='w-full'>
                {data.sent?.map((user: FriendData, idx: number) => (
                  <FriendCard key={`sent-${idx}`} user={user} type='sent' />
                ))}
              </div>
            </>
          )}
          {data && 'received' in data && (
            <>
              <p className='mx-5 my-4 text-neutral-300 font-bold'>
                받음 - {data.received?.length}명
              </p>
              <div className='w-full'>
                {data.received?.map((user: FriendData, idx: number) => (
                  <FriendCard
                    key={`received-${idx}`}
                    user={user}
                    type='received'
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className='flex flex-col items-start gap-[2px]'>
          <p className='mx-5 my-4 text-neutral-300 font-bold'>
            {title} - {Array.isArray(data) && data.length}명
          </p>
          <div className='w-full'>
            {Array.isArray(data) &&
              data.map((user: FriendData, idx: number) => (
                <FriendCard key={`friend-${idx}`} user={user} />
              ))}
          </div>
        </div>
      )}
    </>
  );
}
