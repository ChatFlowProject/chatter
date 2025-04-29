import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import Icon from '@components/common/Icon.tsx';

interface NavigationCardProps {
  route: string;
  iconPath: string;
  isActive?: boolean;
  path: string;
  onClick?: () => void;
}

const NavigationCard = ({ route, iconPath, isActive = false, onClick, children,
                        }: PropsWithChildren<NavigationCardProps>) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    navigate(route);
  };

  return (
    <div className={clsx(
        'flex w-full py-[10px] pl-[13px] justify-start items-center gap-[17px] cursor-pointer rounded-[5px] hover:bg-[#393C43]',
        isActive && 'bg-[#393C43]')} onClick={handleClick}>
      <div className='h-[22px] w-[22px]'>
        <Icon path={iconPath} />
      </div>
      <p className='text-white text-lg'>{children}</p>
    </div>
  );
};

export default NavigationCard;