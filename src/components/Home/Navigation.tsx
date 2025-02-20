import Icon from './Icon';
import NavigationButton from './NavigationButton';

interface NavigationProps {
  activeButton: string;
  setActiveButton: (label: string) => void;
}

const Navigation = ({ activeButton, setActiveButton }: NavigationProps) => {
  const handleButtonClick = (label: string) => {
    setActiveButton(label);
  };

  const handleAddFriendClick = () => {
    setActiveButton('Online');
  };

  return (
    <div className='flex w-[1608px] h-[50px] py-3 justify-start items-center pl-[17px] bg-[#36393F]'>
      <div className='flex h-6 pr-0 justify-center items-start gap-[776px]'>
        <div className='flex justify-center items-center gap-4'>
          <div className='flex justify-center items-center gap-[9px]'>
            <div className='w-[22px] h-[22px]'>
              <Icon path='navfriends' />
            </div>
            <p className='text-lg font-bold text-white'>Friends</p>
          </div>
          <div className='w-[1px] h-[24px] bg-[#42454A]' />
          <div className='flex justify-center items-center gap-[11px]'>
            <NavigationButton
              isActive={activeButton === 'Online'}
              label='Online'
              onClick={() => handleButtonClick('Online')}
            />
            <NavigationButton
              isActive={activeButton === 'All'}
              label='All'
              onClick={() => handleButtonClick('All')}
            />
            <NavigationButton
              isActive={activeButton === 'Pending'}
              label='Pending'
              onClick={() => handleButtonClick('Pending')}
            />
            <NavigationButton
              isActive={activeButton === 'Suggestions'}
              label='Suggestions'
              onClick={() => handleButtonClick('Suggestions')}
            />
            <NavigationButton
              isActive={activeButton === 'Blocked'}
              label='Blocked'
              onClick={() => handleButtonClick('Blocked')}
            />
            <button
              className='flex py-[3px] px-[7px] justify-center items-center gap-[10px] rounded-[3px] text-white bg-[#3BA55D]'
              onClick={handleAddFriendClick}
              type='button'
            >
              Add Friend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
