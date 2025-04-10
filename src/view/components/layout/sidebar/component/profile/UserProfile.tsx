import Interactions from './Interactions.tsx'
import UserInfo from './UserInfo.tsx'

const UserProfile = () => {
  return (
    <div className='bg-[#292B2F] flex py-[10px] w-[240px] h-[53px] flex-shrink-0'>
      <UserInfo
        isOnline='online'
        name='bawwub'
        profileImage='nelly'
        tag='0001'
      />
      <Interactions />
    </div>
  )
}

export default UserProfile
