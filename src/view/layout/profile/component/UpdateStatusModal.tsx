import React, { useState } from 'react';
import { updateStatus } from '@service/feature/auth/api/profileApi';
import {MemberState} from "@service/feature/auth/types/profile.ts";

interface UpdateStatusModalProps {
    onClose: () => void;
}

const UpdateStatusModal: React.FC<UpdateStatusModalProps> = ({ onClose }) => {
    const [selectedStatus, setSelectedStatus] = useState<MemberState>('ONLINE');

    const handleStatusChange = async () => {
        try {
            await updateStatus(selectedStatus);
            alert(`상태가 ${selectedStatus}로 변경되었습니다.`);
            onClose();
        } catch (error) {
            console.error(error);
            alert('상태 변경 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">내 상태 변경</h2>
                <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value as MemberState)}
                    className="w-full px-3 py-2 border rounded mb-4"
                >
                    <option value="ONLINE">온라인</option>
                    <option value="IDLE">자리비움</option>
                    <option value="DO_NOT_DISTURB">방해금지</option>
                    <option value="OFFLINE">오프라인</option>
                </select>
                <div className="flex justify-end space-x-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
                        취소
                    </button>
                    <button onClick={handleStatusChange} className="px-4 py-2 bg-blue-500 text-white rounded">
                        저장
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateStatusModal;