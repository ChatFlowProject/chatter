import NavigationCard from './NavigationCard';

const ChannelNavigation = () => {
  return (
    <div className='flex flex-col w-full items-start gap-[2px]'>
      <NavigationCard onClick={() => console.log('friends')} path='friends'>
        Friends
      </NavigationCard>
    </div>
  );
};

export default ChannelNavigation;
