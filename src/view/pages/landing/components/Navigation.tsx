import { useState } from 'react'
import Icon from './Icon.tsx'
import NavigationButton from './NavigationButton.tsx'

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
          <div className='w-[1px] h-[24px] bg-[#42454A]' />
          <div className='flex justify-center items-center gap-[11px]'>
            <NavigationButton
              isActive={activeButton === 'Online'}
              label='Online'
              onClick={() => handleButtonClick('Online')}
              paddingX={7}
            />
            <NavigationButton
              isActive={activeButton === 'All'}
              label='All'
              onClick={() => handleButtonClick('All')}
              paddingX={15}
            />
            <NavigationButton
              isActive={activeButton === 'Pending'}
              label='Pending'
              onClick={() => handleButtonClick('Pending')}
              paddingX={9}
            />
            <NavigationButton
              isActive={activeButton === 'Suggestions'}
              label='Suggestions'
              onClick={() => handleButtonClick('Suggestions')}
              paddingX={9}
            />
            <NavigationButton
              isActive={activeButton === 'Blocked'}
              label='Blocked'
              onClick={() => handleButtonClick('Blocked')}
              paddingX={12}
            />
            <button
              className='flex py-[3px] px-[7px] justify-center items-center gap-[10px] rounded-[3px] bg-[#3BA55D]'
              onClick={handleAddFriendClick}
              type='button'
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
