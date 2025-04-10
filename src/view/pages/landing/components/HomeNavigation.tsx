import { useState } from 'react';
import NavigationCard from './NavigationCard.tsx';

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
      <NavigationCard
        isActive={selectedPath === 'nitro'}
        onClick={() => setSelectedPath('nitro')}
        path='nitro'
      >
        Nitro
      </NavigationCard>
    </div>
  );
};

export default HomeNavigation;
