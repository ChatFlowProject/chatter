import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { MemberState } from '@service/feature/auth/types/profile.ts';
import { useLogout } from '@service/feature/auth/hook/auth/useLogin.ts';
import EditProfileModal from './EditProfileModal';
import UpdateStatusModal from './UpdateStatusModal.tsx';

interface UserProfileContextMenuProps {
    onEditProfile: () => void;
    onChangeStatus: (state: MemberState) => void;
}

const UserProfileContextMenu: React.FC<UserProfileContextMenuProps> = () => {
    const logout = useLogout();
    const [isContextMenuOpen, setContextMenuOpen] = useState(false);
    const [isProfileModalOpen, setProfileModalOpen] = useState(false);
    const [isStatusModalOpen, setStatusModalOpen] = useState(false);

    const toggleContextMenu = () => {
        setContextMenuOpen((prevState) => !prevState);
    };

    const handleProfileEdit = () => {
        setProfileModalOpen(true);
        setContextMenuOpen(false);
    };

    const handleStatusChange = () => {
        setStatusModalOpen(true);
        setContextMenuOpen(false);
    };

    const handleLogout = () => {
        logout();
        setContextMenuOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleContextMenu}
                className="w-5 h-5 text-gray-400 hover:text-white transition cursor-pointer"
            >
                <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition" />
            </button>

            {/* Context Menu: isContextMenuOpen 상태에 따라 표시 */}
            {isContextMenuOpen && (
                <div className="absolute right-[-150px] bottom-[10px] w-36 bg-gray-700 text-white rounded shadow-lg z-10">
                    <div className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={handleProfileEdit}>
                        내 정보 수정
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={handleStatusChange}>
                        내 상태 변경
                    </div>
                    <div className="px-4 py-2 hover:bg-red-500 cursor-pointer" onClick={handleLogout}>
                        로그아웃
                    </div>
                </div>
            )}
            {isProfileModalOpen && (
                <EditProfileModal onClose={() => setProfileModalOpen(false)} />
            )}
            {isStatusModalOpen && (
                <UpdateStatusModal onClose={() => setStatusModalOpen(false)} />
            )}
        </div>
    );
};

export default UserProfileContextMenu;