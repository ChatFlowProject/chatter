import Modal from '@components/common/Modal';
import SearchFriends from '@pages/Friends/components/SearchFriends';
import { useGetAllFriends } from '@service/feature/friend/hook/useFriendQuery';
import { FriendData } from '@service/feature/friend/types/friend';
import { useEffect, useMemo, useState } from 'react';
import Item from './Item';
import { Plus, Square, SquareCheckBig } from 'lucide-react';
import { useCreateDM } from '@service/feature/channel/hook/query/useChannelQuery';
import { toast } from 'sonner';

const CreateDMModal = () => {
  const [keyword, setKeyword] = useState('');
  const [memberList, setMemberList] = useState<[] | FriendData[]>();
  const [checkList, setCheckList] = useState<string[]>([]);

  // 내 모든 친구 불러오기
  const { data, error } = useGetAllFriends();

  const { mutate } = useCreateDM();
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

  const handleToggle = (memberId: string) => {
    setCheckList((prev) =>
      prev.includes(memberId)
        ? prev.filter((item) => item !== memberId)
        : [...prev, memberId],
    );
  };

  const handleSubmit = () => {
    mutate(checkList);
    setCheckList([]);
    toast.success('채팅방을 생성중입니다...');
  };

  if (error) return <div>error</div>;

  return (
    <Modal.Root>
      <Modal.Trigger>
        <button className='w-[18px] h-[18px]' type='button'>
          <Plus size={18} color='#a3a3a3' />
        </button>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content className='max-w-[442px] w-[442px]'>
          <Modal.Header>
            <Modal.Title
              isCloseBtn
              className='mx-6 mt-4 font-bold justify-between'
            >
              친구 선택하기
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SearchFriends setKeyword={setKeyword} keyword={keyword} />
            <div className='min-h-[60px] max-h-[645px]'>
              {searchData?.map((member) => (
                <Item member={member} key={member.friendshipId}>
                  <button
                    onClick={() => handleToggle(member.friendshipInfo.id)}
                    className='w-[22px] h-[22px] flex items-center justify-center text-white'
                  >
                    {checkList.includes(member.friendshipInfo.id) ? (
                      <SquareCheckBig size={22} className='text-primary' />
                    ) : (
                      <Square
                        size={22}
                        className='text-neutral-400 hover:text-primary'
                      />
                    )}
                  </button>
                </Item>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer
            onSubmit={handleSubmit}
            submitBtnText='DM 생성'
          ></Modal.Footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  );
};

export default CreateDMModal;
