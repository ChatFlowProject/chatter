import { useNavigate } from 'react-router-dom';
import { DMDetail, DMList } from '@service/feature/channel/types/channel.ts';

interface UserCardProps {
  isActive?: boolean;
  className?: string;
  data: DMDetail;
}

const DMUserCard = ({ data, isActive, className }: UserCardProps) => {
  const navigation = useNavigate();
  const user = data.channelMembers;
  const memberSize = user.length;

  const handleClick = () => {
    navigation(`/channels/@me/${data.channel.chatId}`);
  };

  return (
    <div
      className={`flex h-[42px] rounded-[8px] cursor-pointer items-center w-full ${
        isActive ? 'bg-[#41424b]' : 'hover:bg-[#41424b]'
      } ${className}`}
      onClick={handleClick}
    >
      <div className='flex'>
        <div className='w-8 h-8 my-[5px] ml-2 block items-center justify-center relative mr-3'>
          {memberSize === 1 ? (
            <div>
              <img
                className='rounded-full'
                src={
                  user[0].avatarUrl || require('@assets/img/logo/chatflow.png')
                }
                alt={data.channel.name}
              />
              <div
                className={`absolute right-0 bottom-[-2px] w-[12px] h-[12px] border-2 border-[#2e3036] ${user[0].state === 'ONLINE' ? 'bg-lime-500' : 'bg-slate-500'} rounded-full`}
              ></div>
            </div>
          ) : (
            <div>
              <img
                className='rounded-full w-[21px] h-[21px]'
                src={
                  user[0].avatarUrl || require('@assets/img/logo/chatflow.png')
                }
                alt={data.channel.name}
              />
              <div className='absolute top-[10px] left-[10px]'>
                <img
                  className='rounded-full w-[21px] h-[21px] border-4 border-[#2e3036] box-content'
                  src={
                    user[1].avatarUrl ||
                    require('@assets/img/logo/chatflow.png')
                  }
                  alt={data.channel.name}
                />
              </div>
            </div>
          )}
        </div>
        <div
          className={`flex items-start flex-col justify-center overflow-hidden whitespace-nowrap text-neutral-400 hover:text-white ${isActive && 'text-neutral-200'}`}
        >
          <p className={`w-[151px] text-lg m-0 h-[18px] flex items-center`}>
            {data.channel.name}
          </p>
          {memberSize !== 1 ? (
            <div className='flex items-center h-[15px] gap-[3px]'>
              <p className={`text-[11px] self-stretch flex items-center m-0`}>
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
