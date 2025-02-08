import Interactions from './Interactions'
import UserInfo from './UserInfo'

const UserProfile = () => {
  return (
    <div className='bg-[#292B2F] flex py-[10px] w-[240px] h-[53px] flex-shrink-0'>
      <UserInfo
        profileImage='nelly'
        isOnline='online'
        name='bawwub'
        tag='0001'
      />
      <Interactions />
    </div>
  )
}

export default UserProfile
