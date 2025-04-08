import Profile from '../../../../public/assets/profile.svg';
import Warning from '../../../../public/assets/warning.svg';
import CancelBtn from '../../../../public/assets/cancel-btn.svg';
import { createPortal } from 'react-dom';
import { createContext, useContext, useEffect, useState } from 'react';

const ModalContext = createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
} | null>(null);

const Modal = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
Modal.Root = Modal;

Modal.Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-[166px] flex flex-col justify-between gap-[0.75rem] w-[22.0625rem] bg-[#36393F] shadow-[0px_5px_20px_0px_rgba(0,0,0,0.2)] rounded-[4px]'>
      {children}
    </div>
  );
};

Modal.Trigger = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(ModalContext);
  if (!context) return null;
  return (
    <div onClick={() => context?.setIsOpen(!context.isOpen)}>{children}</div>
  );
};

Modal.Portal = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(ModalContext);

  const modalRoot = document.getElementById('modal');
  if (!modalRoot) return null;

  useEffect(() => {
    if (!context || !context.isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        context.setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [context]);

  if (!context || !context.isOpen) return null;

  return createPortal(children, modalRoot);
};

Modal.Overlay = () => {
  const context = useContext(ModalContext);
  if (!context || !context.isOpen) return null;
  return (
    <div
      onClick={() => context.setIsOpen(false)}
      className='inset-0 bg-black bg-opacity-70 fixed'
    />
  );
};

Modal.Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col p-[0.75rem] pb-0 gap-[13px]'>{children}</div>
  );
};

Modal.Title = ({
  profile,
  isCloseBtn,
  children,
  className,
}: {
  profile?: string;
  isCloseBtn?: boolean;
  children: React.ReactNode;
  className?: string;
}) => {
  const context = useContext(ModalContext);
  if (!context) return null;

  return (
    <div className='flex items-center justify-between'>
      <div className={`flex items-center ${className}`}>
        {!!profile && (
          <div className='w-[17px] h-[17px] mr-[6px]'>
            <img className='w-full' src={Profile} alt='profile' />
          </div>
        )}
        <h2 className='font-display text-white'>{children}</h2>
      </div>

      {isCloseBtn && (
        <button
          onClick={() => context?.setIsOpen(false)}
          className='mr-1 group'
        >
          <img
            src={CancelBtn}
            alt='닫기 버튼'
            className='group-hover:brightness-50 group-hover:invert transition-all duration-800'
          />
        </button>
      )}
    </div>
  );
};

Modal.Description = ({ children }: { children: React.ReactNode }) => {
  return <p className='font-display text-[#B9BBBE] text-[10px]'>{children}</p>;
};

Modal.Body = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='px-[0.75rem] flex flex-col gap-[11px]'>{children}</div>
  );
};

Modal.Label = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={`font-semibold text-[#B9BBBE] text-[11.5px] ${className}`}>
      {children}
    </p>
  );
};

Modal.Warning = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex border border-[#FAA61A] bg-[#FAA61A] bg-opacity-10 rounded-[3px] p-[8px]'>
      <div className='w-[18px] h-[18px]'>
        <img className='w-full' src={Warning} alt='warning' />
      </div>
      <p className='pl-[7px] text-[10px] text-white'>{children}</p>
    </div>
  );
};

Modal.ShortText = ({
  label,
  children,
  setValue,
}: {
  label?: string;
  children?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div>
      <span className='font-semibold text-[#B9BBBE] text-[11.5px]'>
        {label}
      </span>
      <input
        className='w-full h-[30px] bg-[#18191c] rounded-[2px] text-[#DCDDDE] text-[12px] pl-[8px]'
        value={children}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

Modal.LongText = ({ label }: { label?: string }) => {
  return (
    <div className=''>
      <span className='font-semibold text-[#B9BBBE] text-[11.5px]'>
        {label}
      </span>
      <textarea
        rows={3}
        className=' block resize-none w-full bg-[#18191c] rounded-[2px] text-[#DCDDDE] text-[12px] p-[8px] pb-[12px]'
      />
      <p className='relative float-right bottom-4 right-2 text-[#72767D] text-[8px]'>
        200
      </p>
    </div>
  );
};

Modal.Profile = ({
  profile,
  name,
  message,
  date,
}: {
  profile: string;
  name: string;
  message: string;
  date: string;
}) => {
  return (
    <div className='flex my-[6px] p-[0.56rem] border border-[#2A2C31] rounded-[0.1875rem] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.10)]'>
      <div className='w-[36px] h-[36px]'>
        <img className='w-fill' src={Profile} alt='profile' />
      </div>
      <div className='ml-[0.56rem]'>
        <div className='flex gap-[7px]'>
          <p className='font-medium text-[11px] text-[#FF5688]'>{name}</p>
          <p className='font-medium text-[#72767D] text-[9px]'>{date}</p>
        </div>
        <p className='text-des text-[11px] font-medium'>{message}</p>
      </div>
    </div>
  );
};

Modal.ProTip = ({ children }: { children: string }) => {
  return (
    <div>
      <h3 className='text-[#3BA55C] font-display text-[11px] font-medium'>
        PROTIP
      </h3>
      <p className='min-h-[31px] text-[#8E9297] font-display text-[10px] font-medium'>
        {children}
      </p>
    </div>
  );
};

Modal.Footer = ({
  onSubmit,
  backBtnText,
  submitBtnText,
}: {
  onSubmit: () => void;
  backBtnText?: string;
  submitBtnText?: string;
}) => {
  const context = useContext(ModalContext);
  if (!context) return null;

  const handleSubmit = () => {
    context.setIsOpen(false);
    onSubmit();
  };

  return (
    <div className=' h-[48px] flex bg-[#2F3136] px-[0.75rem] justify-between items-center rounded-b-[4px]'>
      <button
        onClick={() => context.setIsOpen(false)}
        className='text-[#DCDDDE] text-[10px] px-[0.94rem] py-[0.5rem] rounded-[0.13275rem] hover:bg-[#404249]'
      >
        {backBtnText ? backBtnText : 'Back'}
      </button>
      <div className='flex'>
        <button
          onClick={handleSubmit}
          className='bg-[#5865F2] text-white px-[0.94rem] py-[0.5rem] rounded-[0.13275rem] text-[10px] hover:bg-[#4752C4]'
        >
          {submitBtnText ? submitBtnText : 'Okay'}
        </button>
      </div>
    </div>
  );
};

export default Modal;
