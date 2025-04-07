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
