import Item from './Item';
import SearchFriends from '@pages/Friends/components/SearchFriends';
import { useEffect, useMemo, useState } from 'react';
import Modal from '@components/common/Modal';
import { useGetAllFriends } from '@service/feature/friend/hook/useFriendQuery';
import { FriendData } from '@service/feature/friend/types/friend';

const InviteFriendModal = ({
  team,
}: {
  team: {
    id: string;
    name: string;
    masterId: string;
    iconUrl: string;
  };
}) => {
  const [keyword, setKeyword] = useState('');
  const [memberList, setMemberList] = useState<[] | FriendData[]>();

  // 내 모든 친구 불러오기
  const { data, isLoading, error } = useGetAllFriends();

  /**
   * TODO
   * 이미 맴버인 인원들 제외시키기.
   * 초대 됐다면 제외시키기
   */

  useEffect(() => {
    setMemberList(data);
  }, [data]);

  const searchData = useMemo(() => {
    return memberList?.filter(
      (friend) =>
        friend.friendshipInfo.name.includes(keyword) ||
        friend.friendshipInfo.nickname.includes(keyword),
    );
  }, [memberList, keyword]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error</div>;

  return (
    <Modal.Root>
      <Modal.Trigger>
        <button>초대하기</button>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content className='max-w-[442px] w-[442px]'>
          <Modal.Header>
            <Modal.Title
              isCloseBtn
              className='mx-6 mt-4 font-bold justify-between'
            >
              친구를 {team.name} 그룹으로 초대하기
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SearchFriends setKeyword={setKeyword} keyword={keyword} />
            <div className='min-h-[60px] max-h-[645px]'>
              {searchData?.map((member) => (
                <Item member={member} teamId={team.id} />
              ))}
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  );
};

export default InviteFriendModal;
