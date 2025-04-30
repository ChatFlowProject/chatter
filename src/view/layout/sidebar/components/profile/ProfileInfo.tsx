import { PropsWithChildren } from 'react';
import Icon from '@components/common/Icon.tsx';

interface ProfileInfoProps {
  profileImage: string;
  isOnline: string;
  userName: string;
  nickname: string;
  pronouns: string;
  status: string;
  aboutMe: string;
}

const ProfileInfo = ({
  profileImage,
  isOnline,
  userName,
  nickname,
  pronouns,
  status,
  aboutMe,
}: PropsWithChildren<ProfileInfoProps>) => {
  return (
    <div className='inline-flex flex-col justify-center items-center rounded-lg bg-[#262732]'>
      <div className='w-full h-[174px] relative rounded-lg'>
        <div className='w-full h-[120px] bg-blue-100 ' />
        <div className='w-[92px] h-[92px] absolute flex-shrink-0 top-[71px] left-[11px] z-10'>
          <Icon path='ellipse6' />
        </div>
        <div className='w-20 h-20 absolute flex-shrink-0 top-[77px] left-[17px] z-20'>
          <Icon path={profileImage} />
          <div className='absolute right-0 bottom-0 w-5 h-5 z-20'>
            <Icon path={isOnline} />
          </div>
        </div>
      </div>
      <div className='flex pt-0 px-4 pb-4 flex-col justify-center items-center gap-[10px]'>
        <div className='flex w-[308px] h-[275px] p-3 flex-col items-start gap-3 rounded-lg bg-black bg-opacity-45'>
          <div className='flex w-[245px] flex-col items-start gap-2'>
            <div className='flex flex-col items-start gap-1'>
              <div className='flex w-[268px] flex-col items-start gap-[2px]'>
                <p className='text-[#E4E5E8] text-[20px] font-bold'>
                  {userName}
                </p>
                <p className='text-[#E4E5E8] text-[14px] font-medium'>
                  {nickname}
                </p>
                <p className='text-[#C7C8CE] text-[14px] font-medium'>
                  {pronouns}
                </p>
              </div>
            </div>
            <p className='text-[#C7C8CE] text-[14px] font-medium'>{status}</p>
            <div className='flex pt-0 pr-0 pb-[7px] pl-[0.5px] justify-end items-center'>
              <div className='flex w-[268px] h-[131px] flex-col items-start gap-2'>
                <p className='flex text-[#9597A3] w-[73px] flex-col justify-center flex-shrink-0 text-sm font-bold'>
                  ABOUT ME
                </p>
                <p className='w-[268px] text-[#C7C8CE] text-base font-medium'>
                  {aboutMe}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
