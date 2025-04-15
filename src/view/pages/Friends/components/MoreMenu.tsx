import { useState } from 'react';

interface MoreMenuProps {
  children: React.ReactNode;
  onToggle: () => void;
  isOpen: boolean;
}

const MoreMenu = ({ children, onToggle, isOpen }: MoreMenuProps) => {
  return (
    <div onClick={onToggle} className='relative'>
      {children}
      {isOpen && (
        <div className='absolute px-3 py-2 right-[38px] bg-[#37393F] border border-neutral-600 rounded-[8px]'>
          <div className='p-2 rounded-[2px] hover:bg-[#3E4147] w-[150px] h-[36px]'>
            영상 통화 시작하기
          </div>
          <div className='p-2 rounded-[2px] hover:bg-[#3E4147] w-[150px] h-[36px]'>
            음성 통화 시작하기
          </div>
          <div className='p-2 rounded-[2px] hover:bg-[#907d79] w-[150px] h-[36px] text-red'>
            친구 삭제하기
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreMenu;
