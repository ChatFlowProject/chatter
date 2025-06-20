import Navigation from './components/Navigation';
import FriendList from '@pages/Friends/components/FriendList';
import { useState } from 'react';

export default function FriendsPage() {
  const [activeButton, setActiveButton] = useState<
    'Online' | 'All' | 'Pending' | null
  >('Online');

  return (
    <div className='bg-chat h-full'>
      <Navigation
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <FriendList activeButton={activeButton} />
    </div>
  );
}
