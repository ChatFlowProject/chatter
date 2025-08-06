import { useDeleteTeamMutation } from '@service/feature/team/hook/mutation/useTeamServiceMutation';
import { Circle, CircleCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

interface MoreMenuProps {
  children: React.ReactNode;
  teamId: string;
}
const TeamDeleteMoreMenu = ({ children, teamId }: MoreMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate } = useDeleteTeamMutation();
  const navigate = useNavigate();

  const handleClick = () => {
    mutate(teamId);
    navigate(`/channels/@me`);
    setIsOpen(false);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // 외부 클릭 감지 및 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className='relative'>
      <div onContextMenu={handleToggle}>{children}</div>
      {isOpen && (
        <div className='absolute px-3 py-2 left-6 top-14 bg-chat border border-neutral-600 rounded-[8px] text-sm z-10'>
          <div
            className='p-2 rounded-[2px] hover:bg-[#4C4847] w-[130px] h-[36px] text-red'
            onClick={handleClick}
          >
            <p>팀 삭제하기</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamDeleteMoreMenu;
