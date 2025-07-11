import {useState} from "react";
import {useParams} from "react-router-dom";
import {useTeamDetailQuery} from "@service/feature/team/hook/query/useTeamServiceQuery.ts";
import { Bell, Pin, Users, Info, Video, Search, } from 'lucide-react';
import {ChatMembersDialog} from "@pages/chat/components/layout/ChatMemberDialog.tsx";

interface ChannelHeaderProps {
    channelName: string;
    iconUrl?: string;
}

export const ChannelHeader = ({channelName = '일반', iconUrl}: ChannelHeaderProps) => {
    const { serverId, channelId } = useParams<{ serverId: string; channelId: string }>();
    const { data: teamData, isLoading: isTeamLoading } = useTeamDetailQuery(serverId);

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const members = teamData?.teamMembers?.map((member: { memberInfo: ChannelMember }) => member.memberInfo) || [];

    const handleDialogOpen = () => setIsDialogOpen(true);
    const handleDialogClose = () => setIsDialogOpen(false);

    if (isTeamLoading) return <div>로딩 중...</div>;

    return (
    <header className="flex items-center justify-between px-4 h-12 border-b border-gray-700 bg-[#2b2d31] text-white">
      <div className="flex items-center gap-2">
          {iconUrl && (
              <img src={iconUrl} alt={`${channelName} icon`} className="w-8 h-8 rounded-full" />
          )}
          <span className="text-md font-semibold">{channelName}</span>
      </div>

      <div className="flex items-center gap-4 text-gray-400">
        <Bell className="w-5 h-5 cursor-pointer hover:text-white" />
        <Pin className="w-5 h-5 cursor-pointer hover:text-white" />
        <Users className="w-5 h-5 cursor-pointer hover:text-white" onClick={handleDialogOpen}/>
        <Video className="w-5 h-5 cursor-pointer hover:text-white" />
        <Search className="w-5 h-5 cursor-pointer hover:text-white" />
        <Info className="w-5 h-5 cursor-pointer hover:text-white" />
      </div>
      <ChatMembersDialog isOpen={isDialogOpen} onClose={handleDialogClose} members={members}/>
    </header>
  );
};