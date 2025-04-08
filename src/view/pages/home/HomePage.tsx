import { useState } from 'react';
import Topbar from './components/Topbar';
import Conversation from './components/Conversation';
import DirectBar from './components/DirectBar';
import UserProfile from './components/UserProfile';
import ProfileInfo from './components/ProfileInfo';

const Home = () => {
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

export default Home;
