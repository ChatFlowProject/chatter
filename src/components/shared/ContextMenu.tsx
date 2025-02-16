import { Dispatch, SetStateAction, useRef, useState } from 'react'
import RightArrow from '../../assets/right-arrow.svg'

function Item({
  name,
  isDropdown,
  isWarning,
  onClick,
  children,
}: {
  name: string
  isDropdown?: boolean
  isWarning?: boolean
  onClick?: () => void
  children?: React.ReactNode
}) {
  return (
    <div
      onClick={onClick}
      className={` relative hover:bg-primary ${isWarning && 'hover:bg-red'} rounded-[3px] bg-[#202225] flex w-[117px] justify-between items-center px-2 py-1`}
    >
      <div className='font-["Whitney"] font-medium text-[#DCDDDE] text-[11.5px]'>
        {name}
      </div>
      {isDropdown && (
        <div>
          <img src={RightArrow} alt='dropdown btn' />
        </div>
      )}
      {children}
    </div>
  )
}

function SubMenu({
  name,
  list,
  openSubMenu,
  setOpenSubMenu,
}: {
  name: string
  list: string[]
  openSubMenu: string | null
  setOpenSubMenu: Dispatch<SetStateAction<string | null>>
}) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenSubMenu(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenSubMenu((prevOpenSubMenu: string | null) => {
        return prevOpenSubMenu === name ? null : prevOpenSubMenu
      })
    }, 300)
  }

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Item name={name} isDropdown />

      {openSubMenu === name && (
        <div
          className='absolute left-[125px] top-0 bg-[#202225] flex flex-col p-1 rounded-[5px] shadow-md'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {list.map((item, index) => (
            <Item key={index} name={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function ContextMenu() {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)

  return (
    <div className='bg-[#202225] inline-flex flex-col p-1 rounded-[5px]'>
      <Item name='프로필' />
      <Item name='멘션' />
      <Item name='메시지' />
      <Item name='통화' />
      <Item name='메모 추가하기' />
      <div className='h-[1px] my-1 bg-[#2F2F34] ' />
      <SubMenu
        name='앱'
        list={['1']}
        openSubMenu={openSubMenu}
        setOpenSubMenu={setOpenSubMenu}
      />
      <SubMenu
        name='서버에 초대하기'
        list={['2']}
        openSubMenu={openSubMenu}
        setOpenSubMenu={setOpenSubMenu}
      />
      <Item name='친구 초대하기' />
      <Item name='거절' />
      <Item name='차단하기' isWarning />
      <div className='h-[1px] my-1 bg-[#2F2F34] ' />
      <Item name='관리자 뷰' />
    </div>
  )
}
