import { PropsWithChildren } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { Users } from 'lucide-react';

interface NavigationCardProps {
  path: string;
}

const NavigationCard = ({ path, children }: PropsWithChildren<NavigationCardProps>) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === path;

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div
      className={clsx(
        'flex w-full py-[10px] pl-[13px] justify-start items-center gap-[17px] cursor-pointer rounded-[5px] hover:bg-chat',
        isActive && 'bg-chat'
      )}
      onClick={handleClick}
    >
      <div className="h-[22px] w-[22px] text-white">
        <Users size={22} />
      </div>
      <p className="text-white text-lg">{children}</p>
    </div>
  );
};

export default NavigationCard;