import { useState, useMemo, useEffect } from 'react';
import { FriendData } from 'src/service/feature/friend/types/friend';
import { useGetFriends } from 'src/service/feature/friend/hook/useFriendQuery';
import AddFriend from './AddFriend';
import FriendCard from './FriendCard';
import SearchFriends from './SearchFriends';
import SkeletonFriendList from './Skeletons/SkeletonFriendList';
import Empty from './Skeletons/Empty';
import { EMPTY_MESSAGE } from '@service/lib/const/stateMsg/empty';

interface NavigationProps {
  activeButton: 'Online' | 'All' | 'Pending' | null;
}

export default function FriendList({ activeButton }: NavigationProps) {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [keyword, setKeyword] = useState('');

  const { data, isLoading, error } = useGetFriends(activeButton);

  const title =
    activeButton === 'Online'
      ? '온라인'
      : activeButton === 'All'
        ? '모든 친구'
        : '보냄';

  useEffect(() => {
    setKeyword('');
  }, [title]);

  const searchData = useMemo(() => {
    if (!data) return undefined;

    if (Array.isArray(data)) {
      return data.filter(
        (friend) =>
          friend.friendshipInfo.name.includes(keyword) ||
          friend.friendshipInfo.nickname.includes(keyword),
      );
    } else if ('sent' in data && 'received' in data) {
      const filteredSent = data.sent?.filter(
        (friend) =>
          friend.friendshipInfo.name.includes(keyword) ||
          friend.friendshipInfo.nickname.includes(keyword),
      );

      const filteredReceived = data.received?.filter(
        (friend) =>
          friend.friendshipInfo.name.includes(keyword) ||
          friend.friendshipInfo.nickname.includes(keyword),
      );

      return { sent: filteredSent, received: filteredReceived };
    }
  }, [data, keyword]);

  if (isLoading) {
    return (
      <div className='items-start gap-[2px]'>
        <SearchFriends setKeyword={setKeyword} keyword={keyword} />
        <p className='mx-5 my-4 text-neutral-300 font-bold'>{title}</p>
        <SkeletonFriendList />
        {title === '보냄' && (
          <>
            <p className='mx-5 my-4 text-neutral-300 font-bold'>받음</p>
            <SkeletonFriendList />
          </>
        )}
      </div>
    );
  }

  if (error) {
    return <div>에러</div>;
  }

  return (
    <>
      {activeButton === null ? (
        <AddFriend />
      ) : activeButton === 'Pending' ? (
        <div className='items-start gap-[2px]'>
          <SearchFriends setKeyword={setKeyword} keyword={keyword} />
          {searchData && 'sent' in searchData && (
            <>
              <p className='mx-5 my-4 text-neutral-300 font-bold'>
                보냄 - {searchData.sent?.length}명
              </p>
              <div className='w-full'>
                {searchData.sent?.map((user: FriendData, idx: number) => (
                  <FriendCard key={`sent-${idx}`} user={user} type='sent' />
                ))}
                {searchData.sent?.length === 0 && (
                  <Empty
                    message={EMPTY_MESSAGE.FRIEND['sent']}
                    className='m-5 mt-8'
                  />
                )}
              </div>
            </>
          )}
          {searchData && 'received' in searchData && (
            <>
              <p className='mx-5 my-4 text-neutral-300 font-bold'>
                받음 - {searchData.received?.length}명
              </p>
              <div className='w-full'>
                {searchData.received?.map((user: FriendData, idx: number) => (
                  <FriendCard
                    key={`received-${idx}`}
                    user={user}
                    type='received'
                  />
                ))}
                {searchData.received?.length === 0 && (
                  <Empty
                    message={EMPTY_MESSAGE.FRIEND['received']}
                    className='m-5 mt-8'
                  />
                )}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className='items-start gap-[2px]'>
          <SearchFriends setKeyword={setKeyword} keyword={keyword} />
          <p className='mx-5 my-4 text-neutral-300 font-bold'>
            {title} - {Array.isArray(searchData) ? searchData.length : 0}명
          </p>
          <div className='w-full'>
            {Array.isArray(searchData) &&
              searchData.map((user: FriendData, idx: number) => (
                <FriendCard
                  key={`friend-${idx}`}
                  user={user}
                  setOpenMenuId={setOpenMenuId}
                  openMenuId={openMenuId}
                />
              ))}
            {Array.isArray(searchData) && searchData?.length === 0 && (
              <Empty
                message={EMPTY_MESSAGE.FRIEND[activeButton]}
                className='m-5 mt-8'
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
