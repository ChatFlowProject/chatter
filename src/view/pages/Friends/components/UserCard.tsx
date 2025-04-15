import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/common/Icon.tsx';
import { FriendInfoData } from 'src/service/feature/friend/types/friend.ts';
import {
  useAcceptFriend,
  useCancelFriend,
  useRefuseFriend,
} from 'src/service/feature/friend/hook/useFriendQuery.ts';
import MoreMenu from './MoreMenu.tsx';

interface UserCardProps {
  status?: string;
  isActive: boolean;
  className?: string;
  friendshipId: number;
  type?: 'sent' | 'received' | 'message';
  openMenuId?: number | null;
  setOpenMenuId?: React.Dispatch<React.SetStateAction<number | null>>;
  user:
    | FriendInfoData
    | {
        avatarUrl: string;
        state: string;
        name: string;
        id: string;
      };
}

const UserCard = ({
  user,
  status,
  isActive,
  className,
  type,
  friendshipId,
  setOpenMenuId,
  openMenuId,
}: UserCardProps) => {
  const navigation = useNavigate();

  const { id, name, avatarUrl, state: isOnline } = user;

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
    <div
      className={`flex h-[42px] rounded-[8px] text-white cursor-pointer items-center ${
        isActive
          ? 'bg-[#393C43] text-white'
          : 'hover:bg-[#393C43] hover:text-white text-neutral-400'
      } ${type && 'w-full justify-between'} ${className}`}
      onClick={handleClick}
    >
      <div className='flex'>
        <div className='w-8 h-8 my-[5px] ml-2 flex items-center justify-center relative mr-3'>
          {/* 추후 user avatarUrl로 변경 */}
          <Icon path={'Nelly'} />
          <div className='absolute right-0 bottom-0 w-[10px] h-[10px]'>
            <Icon path={`${isOnline}`} />
          </div>
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
          <button
            className='w-7 h-7 bg-[#37393F] rounded-full mr-2'
            onClick={() => console.log('')}
            type='button'
          >
            <Icon path='more' className='text-neutral-300' />
          </button>
        </MoreMenu>
      )}
      {type === 'sent' && (
        <button
          className='w-7 h-7 bg-[#37393F] rounded-full mr-2'
          onClick={() => cancleFriendMutate(friendshipId)}
          type='button'
        >
          <Icon path='close' className='text-neutral-300' />
        </button>
      )}

      {type === 'received' && (
        <div className='flex mr-2 gap-2'>
          <button
            className='w-7 h-7 bg-[#37393F] rounded-full hover:text-blue-500'
            onClick={() => acceptFriendMutate(friendshipId)}
            type='button'
          >
            <Icon path='check' className='hover:text-blue-500' />
          </button>
          <button
            className='w-7 h-7 bg-[#37393F] rounded-full hover:text-red'
            onClick={() => refuseFriendMutate(friendshipId)}
            type='button'
          >
            <Icon path='close' className='hover:text-red' />
          </button>
        </div>
      )}
    </div>
  );
};

export default UserCard;
