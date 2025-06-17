import { useNavigate } from 'react-router-dom';
import { DMList } from '@service/feature/channel/types/channel.ts';

interface UserCardProps {
  isActive?: boolean;
  className?: string;
  channel: DMList;
}

const DMUserCard = ({ channel, isActive, className }: UserCardProps) => {
  const navigation = useNavigate();

  // 만약 맴버가 여러명이면 맴버 순서대로 2명 프로필 노출
  // const user = channel.channelMembers;

  // 백엔드 개발 완료되기 전 임시 데이터
  const user = [
    { id: 0, state: 'ONLINE' },
    // { id: 1, state: 'OFFLINE' },
  ];

  const memberSize = user.length;

  const handleClick = () => {
    navigation(`/channels/@me/${channel.chatId}`);
  };

  return (
    <div
      className={`flex h-[42px] rounded-[8px] text-white cursor-pointer items-center w-full ${
        isActive
          ? 'bg-[#41424b] text-white'
          : 'hover:bg-[#41424b] hover:text-white text-neutral-400'
      } ${className}`}
      onClick={handleClick}
    >
      <div className='flex'>
        <div className='w-8 h-8 my-[5px] ml-2 block items-center justify-center relative mr-3'>
          {memberSize === 1 ? (
            <div>
              <img
                className='rounded-full'
                // src={user[0].avatarUrl || '/logo.png'}
                src={'/logo.png'}
                alt={channel.name}
              />
              <div
                className={`absolute right-0 bottom-[-2px] w-[12px] h-[12px] border-2 border-[#2e3036] ${user[0].state === 'ONLINE' ? 'bg-lime-500' : 'bg-slate-500'} rounded-full`}
              ></div>
            </div>
          ) : (
            <div>
              <img
                className='rounded-full w-[21px] h-[21px]'
                src={'/logo.png'}
                // src={user[0].avatarUrl}
                alt={channel.name}
              />
              <div className='absolute top-[10px] left-[10px]'>
                <img
                  className='rounded-full w-[21px] h-[21px] border-4 border-[#2e3036] box-content'
                  src={'/logo.png'}
                  // src={user[1].avatarUrl}
                  alt={channel.name}
                />
              </div>
            </div>
          )}
        </div>
        <div className='flex items-start flex-col justify-center overflow-hidden whitespace-nowrap'>
          <p
            className={`w-[151px] text-lg m-0 h-[18px] flex items-center text-neutral-400 ${isActive && 'text-neutral-200'}`}
          >
            {channel.name}
          </p>
          {memberSize !== 1 ? (
            <div className='flex items-center h-[15px] gap-[3px]'>
              <p
                className={`text-[11px] self-stretch flex items-center m-0 text-neutral-400 ${isActive && 'text-neutral-200'}`}
              >
                맴버 {memberSize}명
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DMUserCard;
