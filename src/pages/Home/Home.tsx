import DirectBar from '@components/Home/DirectBar'
import UserProfile from '@components/Home/UserProfile'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <DirectBar />
      <UserProfile />
      <div></div>
      <div></div>
    </div>
  )
}

export default Home
