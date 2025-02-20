import Conversation from '@components/Home/Conversation';
import DirectBar from '@components/Home/DirectBar';
import FriendsPage from '@components/Home/FriendsPage';
import Navigation from '@components/Home/Navigation';
// import ProfileInfo from '@components/Home/ProfileInfo';
import UserProfile from '@components/Home/UserProfile';
import { useEffect, useState } from 'react';

const Home = () => {
  const [activeButton, setActiveButton] = useState('Online');

  return (
    <div className='flex'>
      <div className='flex flex-col w-[240px]'>
        <Conversation />
        <DirectBar />
        <UserProfile />
      </div>
      <div className='flex flex-col'>
        <Navigation
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <FriendsPage category={activeButton} friends={6} />
      </div>

      {/* <ProfileInfo
        aboutMe='건들지마세요'
        isOnline='online'
        nickname='피비'
        profileImage='phibi'
        pronouns='핍핍'
        status='개발중'
        userName='phibi'
      /> */}
    </div>
  );
};

export default Home;
