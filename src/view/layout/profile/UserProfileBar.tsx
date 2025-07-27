import Avatar from '@components/common/user/Avatar.tsx';
import UserStatus from '@components/common/user/UserStatus.tsx';

import { updateStatus } from "@service/feature/auth/api/profileApi.ts";
import { RootState, } from "../../../app/store.ts";
import { MemberState } from "@service/feature/auth/types/profile.ts";
import UserProfileContextMenu from "./component/ProfileContextMenu.tsx";

const UserProfileBar = () => {
  const profile = useSelector((state: RootState) => (state.auth as any).profile);

  const dispatch = useDispatch();

  const handleEditProfile = () => {
    console.log('내 정보 수정 클릭');
  };

  const handleChangeStatus = (status: MemberState) => {
    dispatch(updateStatus(status));
  };

  return (
    <div className='h-16 flex items-center justify-between px-4 border-t border-gray-600 bg-chat'>
      <div className='flex items-center space-x-2'>
        <Avatar
          src={profile?.avatarUrl || undefined}
          alt={profile?.nickname}
          fallback={require('@assets/img/logo/chatflow.png')}
          size={32}
        />
        <div>
          <div className='text-sm font-medium'>
            {profile?.nickname ?? '사용자'}
          </div>
          <UserStatus status={profile?.state ?? 'OFFLINE'} />
        </div>
      </div>
      <UserProfileContextMenu
        onEditProfile={handleEditProfile}
        onChangeStatus={handleChangeStatus}
      />
    </div>
  );
};

export default UserProfileBar;