import { Settings } from 'lucide-react';
import Avatar from '@components/common/user/Avatar.tsx';
import UserStatus from '@components/common/user/UserStatus.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store.ts';

const UserProfileBar = () => {
  const profile = useSelector(
    (state: RootState) => (state.auth as any).profile,
  );

  return (
    <div className='h-16 flex items-center justify-between px-4 border-t border-gray-600 bg-chat'>
      <div className='flex items-center space-x-2'>
        <Avatar
          src={profile?.avatarUrl || undefined}
          alt={profile?.nickname}
          fallback='/logo.png'
          size={32}
        />
        <div>
          <div className='text-sm font-medium'>
            {profile?.nickname ?? '사용자'}
          </div>
          <UserStatus status={profile?.state ?? 'OFFLINE'} />
        </div>
      </div>
      <Settings className='w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition' />
    </div>
  );
};

export default UserProfileBar;
