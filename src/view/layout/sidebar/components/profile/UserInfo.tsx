import Icon from '@components/common/Icon.tsx';

interface UserInfoProps {
  profileImage: string;
  isOnline: string;
  name: string;
  tag: string;
}

const UserInfo = ({ profileImage, isOnline, name, tag }: UserInfoProps) => {
  return (
    <div className=' flex items-center pl-2'>
      <div className='w-8 h-8 my-[5px] flex items-center justify-center relative'>
        <Icon path={`${profileImage}`} />
        <div
          className={`absolute right-0 bottom-0 ${
            isOnline === 'phone' ? 'w-[10px] h-[15px]' : 'w-[10px] h-[10px]'
          }`}
        >
          <Icon path={`${isOnline}`} />
        </div>
      </div>
      <div className='flex flex-col ml-2'>
        <p className='text-[15px] font-semibold text-white'>{name}</p>
        <p className='text-[13px] font-medium text-white'>#{tag}</p>
      </div>
    </div>
  );
};

export default UserInfo;
