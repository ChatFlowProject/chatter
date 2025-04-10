import Icon from '@components/common/Icon';
import { PropsWithChildren } from 'react';

interface NavigationCardProps {
  path: string;
  isActive?: boolean;
  onClick: () => void;
}

const NavigationCard = ({
  path,
  isActive,
  onClick,
  children,
}: PropsWithChildren<NavigationCardProps>) => {
  return (
    <div
      className={`flex w-full py-[10px] pl-[13px] justify-start items-start gap-[17px] cursor-pointer rounded-[5px] bg-[#2e3137] hover:bg-[#393C43] ${
        isActive ?? 'bg-[#393C43]'
      }`}
      onClick={onClick}
    >
      <div className='h-[22px] w-[22px]'>
        <Icon path={`${path}`} />
      </div>
      <p className='text-white text-lg'>{children}</p>
    </div>
  );
};

export default NavigationCard;
