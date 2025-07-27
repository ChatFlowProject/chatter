import React, {useState} from 'react';
import {updateProfile} from '@service/feature/auth/api/profileApi';

interface EditProfileModalProps {
    onClose: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({onClose}) => {
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    const handleSubmit = async () => {
        try {
            await updateProfile({
                birth,
                name,
                password,
                newPassword,
                avatarUrl
            });
            alert('정보가 수정되었습니다.');
            onClose();
        } catch (error) {
            console.error(error);
            alert('수정 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-chat p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">내 정보 수정</h2>
                <input
                    type="text"
                    placeholder="닉네임"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded bg-chat mb-2"
                />
                <input
                    type="date"
                    placeholder="생년월일"
                    value={birth}
                    onChange={(e) => setBirth(e.target.value)}
                    className="w-full px-3 py-2 border rounded bg-chat mb-2"
                />
                <input
                    type="password"
                    placeholder="현재 비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded bg-chat mb-2"
                />
                <input
                    type="password"
                    placeholder="새 비밀번호"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded bg-chat mb-2"
                />
                <input
                    type="text"
                    placeholder="프로필 이미지 URL"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                    className="w-full px-3 py-2 border rounded bg-chat mb-2"
                />
                <div className="flex justify-end space-x-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
                        취소
                    </button>
                    <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
                        저장
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfileModal;