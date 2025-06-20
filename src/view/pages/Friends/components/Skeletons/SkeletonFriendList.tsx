const SkeletonFriendList = () => {
  return (
    <div className='w-fill'>
      <div className='flex flex-col gap-[2px] mx-[20px] '>
        <div className='bg-chat-hover h-[60px] rounded-[8px] w-full animate-pulse'></div>
        <div className='bg-chat-hover h-[60px] rounded-[8px] w-full animate-pulse'></div>
        <div className='bg-chat-hover h-[60px] rounded-[8px] w-full animate-pulse'></div>
      </div>
    </div>
  );
};

export default SkeletonFriendList;
