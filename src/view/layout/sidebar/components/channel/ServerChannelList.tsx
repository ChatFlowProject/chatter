import { useParams } from 'react-router-dom';
import ChannelCategory from './ChannelCategory.tsx';
import { useChannelListQuery } from '@service/feature/channel/hook/query/useChannelQuery.ts';
import { Channel } from '@service/feature/channel/types/channel.ts';

const ServerChannelList = () => {
  const { serverId } = useParams<{ serverId: string }>();
  const { data: channels, isLoading, error } = useChannelListQuery(serverId!);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>에러 발생</div>;

  const categories =
    channels?.reduce(
      (acc: Record<string, Channel[]>, channel: Channel) => {
        if (!acc[channel.category]) acc[channel.category] = [];
        acc[channel.category].push(channel);
        return acc;
      },
      {},
    ) ?? {};

  return (
    <div className='flex flex-col w-full gap-2 mt-2'>
      {Object.entries(categories).map(([categoryName, categoryChannels]) => (
        <ChannelCategory
          key={categoryName}
          title={categoryName}
          type='text'
          defaultItems={categoryChannels}
        />
      ))}
    </div>
  );
};

export default ServerChannelList;