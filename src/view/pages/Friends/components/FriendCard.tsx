import { Check, EllipsisVertical, X } from 'lucide-react';
import {
  useAcceptFriend,
  useCancelFriend,
  useRefuseFriend,
} from '@service/feature/friend/hook/useFriendQuery';
import MoreMenu from './MoreMenu';
import { ChannelMember } from '@service/feature/channel/types/channel';
import { useNavigate } from 'react-router-dom';

const FriendCard = ({
  user,
  friendshipId,
  type = 'message',
  openMenuId,
  setOpenMenuId,
}: {
  user: ChannelMember;
  friendshipId: number;
  type?: 'sent' | 'received' | 'message';
  onToggle?: () => void;
  openMenuId?: number | null;
  setOpenMenuId?: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const navigation = useNavigate();

  const { id, name, state, avatarUrl } = user;

  // TODO: 추후 chatId 받아오는 방식 고려.
  // 현재는 DM 채널과 유저를 매칭시킬 수 있는 방법이 없음.
  const handleClick = () => {
    navigation(`/channels/@me/${id}`);
  };

  // 친구 요청 취소
  const { mutate: cancleFriendMutate } = useCancelFriend();

  // 친구 요청 수락
  const { mutate: acceptFriendMutate } = useAcceptFriend();

  // 친구 요청 거절
  const { mutate: refuseFriendMutate } = useRefuseFriend();

  return (
    <div className='mx-[20px] border-t border-chat-hover'>
      <div
        className={`flex h-[42px] rounded-[8px] text-white cursor-pointer items-center ${type && 'w-full justify-between'} text-neutral-300 h-[60px] hover:bg-chat-hover`}
        onClick={handleClick}
      >
        <div className='flex'>
          <div className='w-8 h-8 my-[5px] ml-2 flex items-center justify-center relative mr-3'>
            <img
              className='rounded-full'
              src={avatarUrl || '/logo.png'}
              alt={user.name}
            />
            <div
              className={`absolute right-0 bottom-[-2px] w-[12px] h-[12px] border-2 border-[#2e3036] ${state === 'ONLINE' ? 'bg-lime-500' : 'bg-slate-500'} rounded-full`}
            ></div>
          </div>
          <div className='flex items-start flex-col justify-center overflow-hidden whitespace-nowrap'>
            <p className='w-[151px] text-lg m-0 h-[18px] flex items-center '>
              {name}
            </p>
            {status ? (
              <div className='flex items-center h-[15px] gap-[3px]'>
                {status ? (
                  <p className='text-[13px] self-stretch flex items-center m-0 '>
                    {status}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
        {type === 'message' && (
          <MoreMenu
            ownId={friendshipId}
            openMenuId={openMenuId!}
            setOpenMenuId={setOpenMenuId!}
          >
            <div className='w-7 h-7 bbg-chat rounded-full mr-2 flex justify-center items-center'>
              <EllipsisVertical color='#d4d4d4' className='w-full' />
            </div>
          </MoreMenu>
        )}
        {type === 'sent' && (
          <button
            className='w-7 h-7 bg-chat rounded-full mr-2 flex justify-center items-center'
            onClick={(e) => {
              e.stopPropagation();
              cancleFriendMutate(friendshipId);
            }}
            type='button'
          >
            <X color='#d4d4d4' />
          </button>
        )}

        {type === 'received' && (
          <div className='flex mr-2 gap-2'>
            <button
              className='w-7 h-7 bg-chat rounded-full hover:text-blue-500 flex justify-center items-center'
              onClick={(e) => {
                e.stopPropagation();
                acceptFriendMutate(friendshipId);
              }}
              type='button'
            >
              <Check color='#d4d4d4' />
            </button>
            <button
              className='w-7 h-7 bg-chat rounded-full hover:text-red flex justify-center items-center'
              onClick={(e) => {
                e.stopPropagation();
                refuseFriendMutate(friendshipId);
              }}
              type='button'
            >
              <X className='hover:text-red' />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendCard;
