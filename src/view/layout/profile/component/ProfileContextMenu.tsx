import React, { useState } from 'react';
import {Settings} from "lucide-react";
import {MemberState} from "@service/feature/auth/types/profile.ts";
import {useLogout} from "@service/feature/auth/hook/auth/useLogin.ts";
import EditProfileModal from './EditProfileModal';
import UpdateStatusModal from "./UpdateStatusModal.tsx";

interface UserProfileContextMenuProps {
    onEditProfile: () => void;
    onChangeStatus: (state: MemberState) => void;
}

const UserProfileContextMenu: React.FC<UserProfileContextMenuProps> = () => {
    const logout = useLogout();
    const [isProfileModalOpen, setProfileModalOpen] = useState(false);
    const [isStatusModalOpen, setStatusModalOpen] = useState(false);

    const handleProfileEdit = () => {
        setProfileModalOpen(true);
    };

    const handleStatusChange = () => {
        setStatusModalOpen(true);
    };

    const handleLogout = () => {
        logout();
    };


    return (
        <div className="relative">
            <button className="w-5 h-5 text-gray-400 hover:text-white transition cursor-pointer">
                <Settings className='w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition' />
            </button>
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