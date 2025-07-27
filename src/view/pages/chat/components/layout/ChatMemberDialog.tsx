import { useState, useMemo } from 'react';
import { ChannelMember } from '@service/feature/channel/types/channel.ts';
import { X } from 'lucide-react';
import fallbackImg from '@assets/img/chatflow.png'

interface ChatMembersDialogProps {
    isOpen: boolean;
    onClose: () => void;
    members: ChannelMember[];
}

export const ChatMembersDialog = ({ isOpen, onClose, members }: ChatMembersDialogProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredMembers = useMemo(() => {
        return members.filter(member =>
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.nickname.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, members]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg w-full max-w-3xl p-6 relative">
                <h2 className="text-xl font-semibold mb-4 text-white">팀 멤버 목록</h2>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="멤버 검색"
                    className="w-full p-2 mb-4 text-sm rounded bg-gray-700 text-white focus:outline-none"
                />

                <div className="max-h-96 overflow-y-auto">
                    {filteredMembers.length > 0 ? (
                        filteredMembers.map((member) => (
                            <div key={member.id} className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded">
                                <img
                                    src={member.avatarUrl || fallbackImg}
                                    alt={member.nickname}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="text-white text-sm font-medium">{member.name}</p>
                                    <p className="text-gray-400 text-xs">{member.nickname}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-sm">검색 결과가 없습니다.</p>
                    )}
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-300"
                >
                    <X />
                </button>
            </div>
        </div>
    );
};