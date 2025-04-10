import DirectMessages from './DirectMessages.tsx';
import ChannelNavigation from '../channel/ChannelNavigation.tsx';

const DirectBar = () => {
  return (
    <div className='inline-flex py-[7px] px-2 flex-col items-center bg-[#2F3136]'>
      <div className='flex flex-col justify-center items-center gap-[19px]'>
        <ChannelNavigation />
        <div className='border w-full h-[1px] border-[#42454A]' />
        <DirectMessages />
      </div>
    </div>
  );
};

export default DirectBar;
