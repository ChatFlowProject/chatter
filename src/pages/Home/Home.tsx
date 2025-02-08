import DirectBar from '@components/Home/DirectBar'
import Topbar from '@components/Home/Topbar'
import UserProfile from '@components/Home/UserProfile'
import { useState } from 'react'

const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <>
      <Topbar value={searchValue} onChange={setSearchValue} />
      <div className='flex flex-col'>
        <DirectBar />
        <UserProfile />

        <div></div>
      </div>
    </>
  )
}

export default Home
