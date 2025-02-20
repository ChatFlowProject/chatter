interface NavigationButtonProps {
  label: string;
  paddingX?: number; // 🔹 px 값을 유동적으로 받음 (기본값 설정 가능)
  isActive?: boolean;
  onClick?: () => void;
  notification?: number;
}

const NavigationButton = ({
  label,
  isActive,
  onClick,
  notification,
}: NavigationButtonProps) => {
  return (
    <div
      className={`flex py-[3px] px-[15px] justify-center items-center gap-[10px] rounded-[3px] text-lg text-white cursor-pointer
        ${isActive ? 'bg-[#3E4249]' : 'hover:bg-[#3E4249]'}`}
      onClick={onClick}
    >
      {label}
      {notification ? (
        <div className='flex h-[16px] py-0 px-[5px] flex-col items-center gap-[10px] rounded-lg bg-[#ED4245]'>
          {notification}
        </div>
      ) : null}
    </div>
  );
};

export default NavigationButton;
