import { useNavigate } from 'react-router-dom';
import { FriendInfoData } from 'src/service/feature/friend/types/friend.ts';
import Icon from '@components/common/Icon.tsx';

interface UserCardProps {
  status?: string;
  isActive: boolean;
  className?: string;
  isMessage?: boolean;
  user:
    | FriendInfoData
    | {
        avatarUrl: string;
        state: string;
        name: string;
        id: number;
      };
}

const UserCard = ({
  user,
  status,
  isActive,
  className,
  isMessage,
}: UserCardProps) => {
  const navigation = useNavigate();

  const { id, name, avatarUrl, state: isOnline } = user;

  const handleClick = () => {
    navigation(`/channels/@me/${id}`);
  };
  return (
    <div
      className={`flex h-[42px] rounded-[8px] text-white cursor-pointer items-center ${
        isActive
          ? 'bg-[#393C43] text-white'
          : 'hover:bg-[#393C43] hover:text-white text-neutral-400'
      } ${isMessage && 'w-full justify-between'} ${className}`}
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
      {isMessage && (
        <button
          className='w-5 h-5'
          onClick={() => console.log('')}
          type='button'
        >
          <Icon path='message' className='text-neutral-300' />
        </button>
      )}
    </div>
  );
};

export default UserCard;
