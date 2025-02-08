import { useState } from 'react'
import Icon from './Icon'
import NavigationButton from './NavigationButton'

const Navigation = () => {
  const [activeButton, setActiveButton] = useState<string | null>('Online') // 🔹 기본값 'Online'

  const handleButtonClick = (label: string) => {
    setActiveButton(label)
  }

  const handleAddFriendClick = () => {
    setActiveButton(null)
  }

  return (
    <div className='flex w-[1608px] py-3 justify-end items-center bg-[#36393F]'>
      <div className='flex h-6 pr-0 justify-center items-start gap-[776px]'>
        <div className='flex justify-center items-center gap-4'>
          <div className='flex justify-center items-center gap-[9px]'>
            <div className='w-[22px] h-[22px]'>
              <Icon path='navfriends' />
            </div>
            <p className='text-lg font-bold'>Friends</p>
          </div>
          <div className='w-[1px] h-[24px] bg-[#42454A]'></div>
          <div className='flex justify-center items-center gap-[11px]'>
            <NavigationButton
              label='Online'
              paddingX={7}
              isActive={activeButton === 'Online'}
              onClick={() => handleButtonClick('Online')}
            />
            <NavigationButton
              label='All'
              paddingX={15}
              isActive={activeButton === 'All'}
              onClick={() => handleButtonClick('All')}
            />
            <NavigationButton
              label='Pending'
              paddingX={9}
              isActive={activeButton === 'Pending'}
              onClick={() => handleButtonClick('Pending')}
            />
            <NavigationButton
              label='Suggestions'
              paddingX={9}
              isActive={activeButton === 'Suggestions'}
              onClick={() => handleButtonClick('Suggestions')}
            />
            <NavigationButton
              label='Blocked'
              paddingX={12}
              isActive={activeButton === 'Blocked'}
              onClick={() => handleButtonClick('Blocked')}
            />
            <button
              type='button'
              className='flex py-[3px] px-[7px] justify-center items-center gap-[10px] rounded-[3px] bg-[#3BA55D]'
              onClick={handleAddFriendClick}
            >
              Add Friend
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
