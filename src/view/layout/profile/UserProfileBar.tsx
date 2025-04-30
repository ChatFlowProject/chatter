import { Settings } from 'lucide-react';
import { useUserProfile } from '@service/feature/auth/hook/useProfileQuery.ts';
import Avatar from '@components/common/user/Avatar.tsx';
import UserStatus from '@components/common/user/UserStatus.tsx';

const UserProfileBar = () => {
  const { data: user } = useUserProfile();

  return (
    <div className="h-16 flex items-center justify-between px-4 border-t border-gray-600 bg-chat">
      <div className="flex items-center space-x-2">
        <Avatar
          src={user?.avatarUrl}
          alt={user?.nickname}
          size={32}
        />
        <div>
          <div className="text-sm font-medium">{user?.nickname || '사용자'}</div>
          <UserStatus status={user?.memberState || 'OFFLINE'} />
        </div>
      </div>
      <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition" />
    </div>
  );
};

export default UserProfileBar;