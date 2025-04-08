import Conversation from './components/Conversation.tsx';
import DirectBar from './components/DirectBar.tsx';
import ProfileInfo from './components/ProfileInfo.tsx';
import Topbar from './components/Topbar.tsx';
import UserProfile from './components/UserProfile.tsx';
import { useState } from 'react';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <Topbar />
      <div className='flex flex-col'>
        <Conversation onChange={setSearchValue} value={searchValue} />
        <DirectBar />
        <UserProfile />
        <ProfileInfo
          aboutMe='건들지마세요'
          isOnline='online'
          nickname='피비'
          profileImage='phibi'
          pronouns='핍핍'
          status='개발중'
          userName='phibi'
        />

        <div />
      </div>
    </>
  );
};

export default HomePage;
