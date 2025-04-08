import { useState } from 'react';
import NavigationCard from './NavigationCard';

const HomeNavigation = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  return (
    <div className='flex flex-col w-full items-start gap-[2px]'>
      <NavigationCard
        isActive={selectedPath === 'friends'}
        onClick={() => setSelectedPath('friends')}
        path='friends'
      >
        Friends
      </NavigationCard>
    </div>
  );
};

export default HomeNavigation;
