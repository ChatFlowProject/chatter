import { Hash, Bell, Pin, Users, Info, Video, Search, } from 'lucide-react';

export const ChannelHeader = ({
                                channelName = '일반',
                              }: {
  channelName?: string;
}) => {
  return (
    <header className="flex items-center justify-between px-4 h-12 border-b border-gray-700 bg-[#2b2d31] text-white">
      <div className="flex items-center gap-2">
        <Hash className="w-5 h-5 text-gray-400" />
        <span className="text-md font-semibold">{channelName}</span>
      </div>

      <div className="flex items-center gap-4 text-gray-400">
        <Bell className="w-5 h-5 cursor-pointer hover:text-white" />
        <Pin className="w-5 h-5 cursor-pointer hover:text-white" />
        <Users className="w-5 h-5 cursor-pointer hover:text-white" />
        <Video className="w-5 h-5 cursor-pointer hover:text-white" />
        <Search className="w-5 h-5 cursor-pointer hover:text-white" />
        <Info className="w-5 h-5 cursor-pointer hover:text-white" />
      </div>
    </header>
  );
};