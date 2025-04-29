import { useParams } from 'react-router-dom';
import ChannelCategory from './ChannelCategory.tsx';
import { useChannelList } from '@service/feature/channel/hook/useChannelList.ts';

const ServerChannelList = () => {
  const { serverId } = useParams();
  const { data: channels, isLoading, error } = useChannelList(serverId!);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>에러 발생</div>;

  const categories = channels?.reduce((acc, channel) => {
    if (!acc[channel.category]) acc[channel.category] = [];
    acc[channel.category].push(channel);
    return acc;
  }, {} as Record<string, typeof channels>) ?? {};

  return (
    <div className="flex flex-col w-full gap-2 mt-2">
      {Object.entries(categories).map(([categoryName, categoryChannels]) => (
        <ChannelCategory
          key={categoryName}
          title={categoryName}
          type="text"
          defaultItems={categoryChannels}
        />
      ))}
    </div>
  );
};

export default ServerChannelList;