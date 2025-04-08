import SearchInput from '../Friends/components/SearchInput.tsx';
import DirectBar from '../../components/layout/sidebar/component/right/DirectBar.tsx';
import ProfileInfo from '../../components/layout/sidebar/component/profile/ProfileInfo.tsx';
import Topbar from '../Friends/components/Topbar.tsx';
import UserProfile from '../../components/layout/sidebar/component/profile/UserProfile.tsx';
import { useState } from 'react';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <Topbar />
      <div className='flex flex-col'>
        <SearchInput onChange={setSearchValue} value={searchValue} />
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
