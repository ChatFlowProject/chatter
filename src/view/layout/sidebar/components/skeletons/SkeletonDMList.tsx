const SkeletonDMList = ({
  className,
  size = 7,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <div
      className={`flex flex-col items-start gap-[2px] w-[203px] ${className}`}
    >
      {Array.from({ length: size }, (_, i) => (
        <div
          key={i}
          className='bg-chat-hover h-[42px] rounded-[8px] w-full animate-pulse'
        ></div>
      ))}
    </div>
  );
};

export default SkeletonDMList;
