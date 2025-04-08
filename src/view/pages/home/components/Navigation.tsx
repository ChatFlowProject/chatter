import { useState } from 'react';
import Icon from './Icon';
import NavigationButton from './NavigationButton';

const Navigation = () => {
  const [activeButton, setActiveButton] = useState<string | null>('Online'); // 🔹 기본값 'Online'

  const handleButtonClick = (label: string) => {
    setActiveButton(label);
  };

  const handleAddFriendClick = () => {
    setActiveButton(null);
  };

  return (
    <div className='flex w-full py-3 justify-start items-center bg-[#36393F]'>
      <div className='flex h-6 pr-0 justify-center items-start gap-[776px]'>
        <div className='flex justify-center items-center gap-4 px-[22px]'>
          <div className='flex justify-center items-center gap-[9px]'>
            <div className='w-[22px] h-[22px]'>
              <Icon path='navfriends' />
            </div>
            <p className='text-lg font-bold text-neutral-400'>친구</p>
          </div>
          <div className='w-[1px] h-[24px] bg-[#42454A]' />
          <div className='flex justify-center items-center'>
            <NavigationButton
              isActive={activeButton === 'Online'}
              label='온라인'
              onClick={() => handleButtonClick('Online')}
            />
            <NavigationButton
              isActive={activeButton === 'All'}
              label='모두'
              onClick={() => handleButtonClick('All')}
            />
            <NavigationButton
              isActive={activeButton === 'Pending'}
              label='대기 중'
              onClick={() => handleButtonClick('Pending')}
            />
            <NavigationButton
              isActive={activeButton === 'Pending'}
              isAddFriend={true}
              label='친구 추가하기'
              onClick={handleAddFriendClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
