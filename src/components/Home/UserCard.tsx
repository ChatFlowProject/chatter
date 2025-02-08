import Icon from './Icon'

interface UserCardProps {
  profileImage: string
  isOnline: string
  name: string
  status?: string
  special?: string
  isActive: boolean
  onClick: () => void
}

const UserCard = ({
  profileImage,
  isOnline,
  name,
  status,
  special,
  isActive,
  onClick,
}: UserCardProps) => {
  return (
    <div
      className={`flex w-[223px] h-[42px] rounded-[3px] text-white cursor-pointer ${
        isActive ? 'bg-[#393C43]' : 'hover:bg-[#2e3137]'
      }`}
      onClick={onClick}
    >
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
      <div className='flex items-start flex-col justify-center overflow-hidden whitespace-nowrap'>
        <p className='w-[151px] text-lg m-0 h-[18px] flex items-center '>
          {name}
        </p>
        {status && (
          <div className='flex items-center h-[15px] gap-[3px]'>
            {status && (
              <p className='text-[13px] self-stretch flex items-center m-0 '>
                {status}
              </p>
            )}
            {special && (
              <span className='text-[13px] items-center self-stretch flex m-0'>
                {special}
                <Icon path='richPresence' />
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default UserCard
