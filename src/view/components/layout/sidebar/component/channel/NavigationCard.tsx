import { PropsWithChildren } from 'react'
import Icon from '../../../../common/Icon.tsx'

interface NavigationCardProps {
  path: string
  isActive: boolean
  onClick: () => void
}

const NavigationCard = ({
  path,
  isActive,
  onClick,
  children,
}: PropsWithChildren<NavigationCardProps>) => {
  return (
    <div
      className={`flex w-full py-[10px] pl-[13px] justify-start items-start gap-[17px] cursor-pointer rounded-[5px] ${
        isActive ? 'bg-[#393C43]' : 'hover:bg-[#2e3137]'
      }`}
      onClick={onClick}
    >
      <div className='h-[22px] w-[22px]'>
        <Icon path={`${path}`} />
      </div>
      <p className='text-white text-lg'>{children}</p>
    </div>
  )
}

export default NavigationCard
