import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeamDetails } from '@service/feature/team/store/teamSlice';
import { TeamMembers } from '@service/feature/team/types/team';
import { RootState } from "../../../../../app/store.ts";

interface DropdownProps {
    teamId: string;
    onSelect: (member: string) => void;
}

export const TeamMemberDropdown: React.FC<DropdownProps> = ({ teamId, onSelect }) => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const { teamDetails, loading, error } = useSelector(
        (state: RootState) => ({
            teamDetails: state.teams.teamDetails,
            loading: state.teams.loading,
            error: state.teams.error,
        })
    );

    useEffect(() => {
        if (!teamDetails || teamDetails.id !== teamId) {
            dispatch(fetchTeamDetails(teamId) as any);
        }
    }, [dispatch, teamId, teamDetails]);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>멤버를 가져오는 중 오류가 발생했습니다.</div>;

    const teamMembers = teamDetails?.teamMembers || [];
    const filteredMembers = teamMembers.filter((member: TeamMembers) =>
        member.memberInfo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative">
            <input
                type="text"
                placeholder="@mention할 멤버 검색"
                className="w-full p-2 border rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredMembers.length > 0 && (
                <ul className="absolute mt-1 w-full bg-white border rounded shadow-md z-10">
                    {filteredMembers.map((member: TeamMembers) => (
                        <li
                            key={member.memberInfo.id}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => onSelect(member.memberInfo.nickname)}
                        >
                            {member.memberInfo.nickname}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};