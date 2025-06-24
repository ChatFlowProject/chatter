import { FriendData } from '@service/feature/friend/types/friend';
import { ReactNode } from 'react';

const Item = ({
  member,
  children,
}: {
  member: FriendData;
  children: ReactNode;
}) => {
  return (
    <div className='flex h-[42px] rounded-[8px] cursor-pointer items-center w-full hover:bg-[#41424b] justify-between'>
      <div className='flex'>
        <div className='w-8 h-8 my-[5px] ml-2 block items-center justify-center relative mr-3'>
          <div>
            <img
              className='rounded-full'
              src={member.friendshipInfo.avatarUrl || '/logo.png'}
              alt={'logo'}
            />
            <div
              className={`absolute right-0 bottom-[-2px] w-[12px] h-[12px] border-2 border-[#2e3036] ${member.friendshipInfo.state === 'ONLINE' ? 'bg-lime-500' : 'bg-slate-500'} rounded-full`}
            ></div>
          </div>
        </div>
        <div className='flex items-start flex-col justify-center overflow-hidden whitespace-nowrap'>
          <p
            className={`w-[151px] text-lg m-0 h-[18px] flex items-center text-neutral-400 hover:text-white  `}
          >
            {member.friendshipInfo.name}
          </p>
        </div>
      </div>
      <div className='mr-2'>{children}</div>
    </div>
  );
};

export default Item;
