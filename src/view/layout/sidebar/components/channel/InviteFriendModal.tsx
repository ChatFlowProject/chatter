import Item from './Item';
import SearchFriends from '@pages/Friends/components/SearchFriends';
import { useEffect, useMemo, useState } from 'react';
import Modal from '@components/common/Modal';
import { useGetAllFriends } from '@service/feature/friend/hook/useFriendQuery';
import { FriendData } from '@service/feature/friend/types/friend';
import { useSendMessage } from '@service/feature/chat/hook/useSendMessage';
import {useCreateDM} from "@service/feature/channel/hook/query/useChannelQuery.ts";

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

  const { data: friendsData, isLoading, error } = useGetAllFriends();
  const { data: dmData, mutate } = useCreateDM();
  const { sendMessage } = useSendMessage();



  /**
   * 이미 맴버인 인원들 제외시키기.
   * 초대 됐다면 제외시키기.
   */
  useEffect(() => {
    setMemberList(friendsData);
  }, [friendsData]);

  // 키워드로 친구 검색
  const searchData = useMemo(() => {
    return memberList?.filter(
      (friend) =>
        friend.friendshipInfo.name.includes(keyword) ||
        friend.friendshipInfo.nickname.includes(keyword),
    );
  }, [memberList, keyword]);

  const handleInvite = (friendsData:FriendData) => {
    mutate([friendsData.friendshipInfo.id])
    sendMessage({
      content: `"${team.name}`,
      channelId: dmData?.channel.chatId as string,
      sender: "system",
      teamId:team.id
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error</div>;

  return (
    <Modal.Root>
      <Modal.Trigger>
        <button className='flex h-8 w-full items-center justify-center rounded text-sm font-medium bg-blurple hover:bg-[#4752C4] text-white transition-colors duration-200'>
          초대하기
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
              친구를 {team.name} 그룹으로 초대하기
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SearchFriends setKeyword={setKeyword} keyword={keyword} />
            <div className='min-h-[60px] max-h-[645px]'>
              {searchData?.map((member) => (
                <Item member={member} key={member.friendshipId}>
                  <button
                    className='border border-[#43A25A] px-4 rounded-[8px] text-white hover:bg-[#43A25A]'
                    onClick={() => handleInvite(member)}
                  >
                    초대
                  </button>
                </Item>
              ))}
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  );
};

export default InviteFriendModal;