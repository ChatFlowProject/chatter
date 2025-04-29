import { useEffect, useRef } from 'react';
import { useRemoveFriend } from 'src/service/feature/friend/hook/useFriendQuery';

interface MoreMenuProps {
  children: React.ReactNode;
  openMenuId: number | null;
  ownId: number | null;
  setOpenMenuId: React.Dispatch<React.SetStateAction<number | null>>;
}

const MoreMenu = ({
  children,
  openMenuId,
  ownId,
  setOpenMenuId,
}: MoreMenuProps) => {
  const isOpen = openMenuId !== null && openMenuId === ownId;
  console.log('openMenuId: ', openMenuId, 'ownId: ', ownId);

  const menuRef = useRef<HTMLDivElement>(null);

  // 친구 삭제하기
  const { mutate } = useRemoveFriend();

  const handleClick = () => {
    console.log('친구 삭제하기');
    mutate(ownId!);
  };

  // 외부 클릭 감지
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenuId(null); // 닫기
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, setOpenMenuId]);

  const handleToggle = () => {
    setOpenMenuId((prev) => (prev === ownId ? null : ownId));
  };

  return (
    <div ref={menuRef} onClick={handleToggle} className='relative'>
      {children}
      {isOpen && (
        <div className='absolute px-3 py-2 right-[38px] bg-[#37393F] border border-neutral-600 rounded-[8px]'>
          <div className='p-2 rounded-[2px] hover:bg-[#3E4147] w-[150px] h-[36px]'>
            영상 통화 시작하기
          </div>
          <div className='p-2 rounded-[2px] hover:bg-[#3E4147] w-[150px] h-[36px]'>
            음성 통화 시작하기
          </div>
          <div
            className='p-2 rounded-[2px] hover:bg-[#907d79] w-[150px] h-[36px] text-red'
            onClick={handleClick}
          >
            친구 삭제하기
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreMenu;
