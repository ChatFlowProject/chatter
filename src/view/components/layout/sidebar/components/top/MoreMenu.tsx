import { Circle, CircleCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const MoreMenu = ({ children }: { children: React.ReactNode }) => {
  const [isCheckMention, setIsCheckMention] = useState(true);
  const [isCheckAllServer, setIsCheckAllServer] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (target: 'mention' | 'server') => {
    if (target === 'mention') {
      setIsCheckMention((prev) => !prev);
    } else {
      setIsCheckAllServer((prev) => !prev);
    }
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
      <div onClick={(e) => handleToggle(e)}>{children}</div>
      {isOpen && (
        <div className='absolute px-3 py-2 right-0 bg-chat border border-neutral-600 rounded-[8px] text-sm w-[200px]'>
          <div
            className='p-2 rounded-[2px] hover:bg-chat-hover h-[36px] flex justify-between'
            onClick={() => handleClick('mention')}
          >
            <p>@everyone 멘션 포함하기</p>
            {isCheckMention ? (
              <CircleCheck className='text-primary w-5' />
            ) : (
              <Circle className='w-5' />
            )}
          </div>
          <div
            className='p-2 rounded-[2px] hover:bg-chat-hover h-[36px] flex justify-between'
            onClick={() => handleClick('server')}
          >
            <p>모든 서버 포함</p>
            {isCheckAllServer ? (
              <CircleCheck className='text-primary w-5' />
            ) : (
              <Circle className='w-5' />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreMenu;
