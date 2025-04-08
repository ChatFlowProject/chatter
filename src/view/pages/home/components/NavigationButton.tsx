interface NavigationButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  notification?: number;
  isAddFriend?: boolean;
}

const NavigationButton = ({
  label,
  isActive,
  onClick,
  notification,
  isAddFriend,
}: NavigationButtonProps) => {
  return (
    <div
      className={`flex py-[4px] px-[12px] justify-center items-center gap-[10px] rounded-[3px] text-lg text-white cursor-pointer font-bold mx-2
        ${isAddFriend ? 'bg-primary text-white hover:bg-primary-hover' : isActive ? 'bg-[#3E4249]' : 'hover:bg-[#3E4249] text-neutral-400'}`}
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
