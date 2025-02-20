import { PropsWithChildren } from 'react';
import Icon from './Icon';

interface FriendsUserProps {
  profileImage: string;
  isOnline: string;
  name: string;
  status?: string;
  onClick: () => void;
}

const FriendsUser = ({
  profileImage,
  isOnline,
  name,
  status,
  onClick,
}: PropsWithChildren<FriendsUserProps>) => {
  return (
    <div className='flex flex-col items-start gap-[11px] w-full hover:bg-[#2e3137]'>
      <div className='h-[1px] w-full bg-[#42454A] '></div>
      <div className={`flex h-9 items-center w-full `} onClick={onClick}>
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
        <div className='flex flex-col'>
          <p className='text-[17px] font-bold text-white'>{name}</p>
          {status ? (
            <div className='flex items-center h-[15px] gap-[3px]'>
              {status ? (
                <p className='text-[13px] self-stretch flex items-center m-0 text-[#C7C9CB] '>
                  {status}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FriendsUser;
