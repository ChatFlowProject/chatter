import Icon from './Icon';

interface UserCardProps {
  profileImage: string;
  isOnline: string;
  name: string;
  status?: string;
  isActive: boolean;
  className?: string;
  onClick: () => void;
  isMessage?: boolean;
}

const UserCard = ({
  profileImage,
  isOnline,
  name,
  status,
  isActive,
  className,
  onClick,
  isMessage,
}: UserCardProps) => {
  return (
    <div
      className={`flex h-[42px] rounded-[8px] text-white cursor-pointer items-center ${
        isActive
          ? 'bg-[#393C43] text-white'
          : 'hover:bg-[#393C43] hover:text-white text-neutral-400'
      } ${className} ${isMessage && 'w-full justify-between'}`}
      onClick={onClick}
    >
      <div className='flex'>
        <div className='w-8 h-8 my-[5px] ml-2 flex items-center justify-center relative mr-3'>
          <Icon path={`${profileImage}`} />
          <div
            className={`absolute right-0 bottom-0 ${
              isOnline === 'phone' ? 'w-[10px] h-[15px]' : 'w-[10px] h-[10px]'
            }`}
          >
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
