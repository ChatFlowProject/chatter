import { useParams } from 'react-router-dom';
import { useChannelListQuery } from '@service/feature/channel/hook/query/useChannelQuery.ts';
import InviteFriendModal from './InviteFriendModal.tsx';
import ChannelCategory from "./ChannelCategory.tsx";

const ServerChannelList = () => {
  const { serverId } = useParams<{ serverId: string }>();
  const { data: channels, isLoading, error } = useChannelListQuery(serverId!);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>에러 발생</div>;
  
  if (!channels?.categoriesView) return null;

  return (
    <div className='flex flex-col w-full h-full gap-2 mt-2 justify-between'>
      {channels.categoriesView.map((categoryView) => (
        <ChannelCategory
          key={categoryView.category.id}
          title={categoryView.category.name}
          type='text'
          defaultItems={categoryView.channels}
        />
      ))}
      <InviteFriendModal team={channels.team} />
    </div>
  );
};

export default ServerChannelList;