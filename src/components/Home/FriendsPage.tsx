import { useEffect, useState } from 'react';
import FriendsUser from './FriendsUser';
import { mockFriendsData } from './mock/friendsData';
import {
  getFriend,
  getFriendOnline,
  getFriendReceived,
  getFriendSent,
} from '@api/friendships';

interface FriendsProps {
  category: string;
  friends: number;
}

/*
  Category가 변경되면 값이 변경되게 할 것임.
  All Mock data에서 isOnline이 Offline인 친구만 빼고 불러오는 게 Online.
  추천에 mock data 넣어놓고 그 사람 개수만큼 <chip number={number} /> 호출
  대기 중에는 받음, 보냄이 각각 있고 받음만 chip 호출.
  친구 추가하기 버튼은 누르면 버튼의 background가 사라지고 원래 bg색깔로 text 색상 변경

*/

interface FriendsProps {
  category: string;
  friends: number;
}

const FriendsPage = ({ category, friends }: FriendsProps) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [filteredFriends, setFilteredFriends] = useState<any[]>([]);
  const [receivedFriends, setReceivedFriends] = useState<any[]>([]); // 받은 요청
  const [sentFriends, setSentFriends] = useState<any[]>([]); // 보낸 요청

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        if (category === 'Online') {
          const data = await getFriendOnline();
          setFilteredFriends(Array.isArray(data.friends) ? data.friends : []);
        } else if (category === 'All') {
          const data = await getFriend();
          setFilteredFriends(Array.isArray(data.friends) ? data.friends : []);
        } else if (category === 'Pending') {
          const sent = await getFriendSent();
          const received = await getFriendReceived();
          setSentFriends(Array.isArray(sent.friends) ? sent.friends : []);
          setReceivedFriends(
            Array.isArray(received.friends) ? received.friends : [],
          );
        }
      } catch (error) {
        console.error('친구 목록 불러오기 실패:', error);
        setFilteredFriends([]);
        setSentFriends([]);
        setReceivedFriends([]);
      }
    };

    fetchFriends();
  }, [category]);

  return (
    <div className='flex pt-5 pr-[38px] pl-[30px] flex-col items-start gap-2 bg-[#36393F] h-full'>
      <p className='text-[#B9BBBE] text-[13px] font-semibold'>
        {category} -{' '}
        {category === 'Pending'
          ? receivedFriends.length + sentFriends.length
          : filteredFriends.length}
      </p>

      <div className='flex flex-col items-start gap-[14px] w-full'>
        {category === 'Pending' ? (
          <>
            {receivedFriends.length > 0 && (
              <>
                <p className='text-[#B9BBBE] text-[12px] font-semibold'>
                  받음 - {receivedFriends.length}
                </p>
                {receivedFriends.map((user) => (
                  <FriendsUser
                    key={user.name}
                    {...user}
                    onClick={() => {
                      setSelectedUser(user.name);
                      console.log(user.name);
                    }}
                  />
                ))}
              </>
            )}

            {sentFriends.length > 0 && (
              <>
                <p className='text-[#B9BBBE] text-[12px] font-semibold mt-3'>
                  보냄 - {sentFriends.length}
                </p>
                {sentFriends.map((user) => (
                  <FriendsUser
                    key={user.name}
                    {...user}
                    onClick={() => {
                      setSelectedUser(user.name);
                      console.log(user.name);
                    }}
                  />
                ))}
              </>
            )}
          </>
        ) : (
          filteredFriends.map((user) => (
            <FriendsUser
              key={user.name}
              {...user}
              onClick={() => {
                setSelectedUser(user.name);
                console.log(user.name);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FriendsPage;
