import Conversation from '@components/Home/Conversation';
import DirectBar from '@components/Home/DirectBar';
import ProfileInfo from '@components/Home/ProfileInfo';
import Topbar from '@components/Home/Topbar';
import UserProfile from '@components/Home/UserProfile';
import { useState } from 'react';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <Topbar />
      <div className='flex flex-col'>
        <Conversation value={searchValue} onChange={setSearchValue} />
        <DirectBar />
        <UserProfile />
        <ProfileInfo
          profileImage='phibi'
          isOnline='online'
          userName='phibi'
          nickname='피비'
          pronouns='핍핍'
          status='개발중'
          aboutMe='건들지마세요'
        />

        <div></div>
      </div>
    </>
  );
};

export default Home;
