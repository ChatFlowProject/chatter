import Navigation from './components/Navigation';
import FriendList from '@pages/chat/components/FriendList';
import { useState } from 'react';

export default function FriendsPage() {
  const [activeButton, setActiveButton] = useState<
    'Online' | 'All' | 'Pending' | null
  >('Online');

  return (
    <div className='bg-[#37393F] h-screen'>
      <Navigation
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <FriendList activeButton={activeButton} />
    </div>
  );
}
