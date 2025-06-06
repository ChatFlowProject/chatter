const SkeletonFriendList = () => {
  return (
    <div className='w-fill'>
      <div className='flex flex-col gap-[2px] mx-[20px] '>
        <div className='border-[#3E4147] bg-[#3E4147] h-[60px] rounded-[8px] w-full animate-pulse'></div>
        <div className='border-[#3E4147] bg-[#3E4147] h-[60px] rounded-[8px] w-full animate-pulse'></div>
        <div className='border-[#3E4147] bg-[#3E4147] h-[60px] rounded-[8px] w-full animate-pulse'></div>
      </div>
    </div>
  );
};

export default SkeletonFriendList;
