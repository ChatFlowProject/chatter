// import RightArrow from '../../assets/right-arrow.svg'
import RightArrow from '../../assets/right-arrow.svg'
function Item({
  name,
  isDropdown,
  isWarning,
  children,
}: {
  name: string
  isDropdown?: boolean
  isWarning?: boolean
  children?: React.ReactNode
}) {
  console.log('RightArrow', RightArrow)
  return (
    <div
      className={`group relative hover:bg-primary ${isWarning && 'hover:bg-red'} rounded-[3px] bg-[#202225] flex w-[117px] justify-between items-center px-2 py-1`}
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

function SubMenu() {
  return (
    <div className='group-hover:visible invisible absolute left-[125px] bg-[#202225] inline-flex flex-col p-1 rounded-[5px]'>
      <Item name='서버 A' />
      <Item name='서버 B' />
      <Item name='서버 C' />
      <Item name='서버 D' />
    </div>
  )
}
export default function ContextMenu() {
  return (
    <div className='bg-[#202225] inline-flex flex-col p-1 rounded-[5px]'>
      <Item name='프로필' />
      <Item name='멘션' />
      <Item name='메시지' />
      <Item name='통화' />
      <Item name='메모 추가하기' />
      <div className='h-[1px] my-1 bg-[#2F2F34] ' />
      <Item name='앱' isDropdown>
        <SubMenu />
      </Item>
      <Item name='서버에 초대하기' isDropdown>
        <SubMenu />
      </Item>
      <Item name='친구 초대하기' />
      <Item name='거절' />
      <Item name='차단하기' isWarning />
      <div className='h-[1px] my-1 bg-[#2F2F34] ' />
      <Item name='관리자 뷰' />
    </div>
  )
}
