import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useChannelListQuery } from '@service/feature/channel/hook/query/useChannelQuery.ts';
import InviteFriendModal from './InviteFriendModal.tsx';
import ChannelCategory from "./ChannelCategory.tsx";

const ServerChannelList = () => {
  const { serverId, channelId } = useParams<{ serverId: string; channelId: string }>();
  const navigate = useNavigate();
// Line 10 removed
  const { data: channels, isLoading, error } = useChannelListQuery(serverId!);

  useEffect(() => {
    if (channels?.categoriesView && channels.categoriesView.length > 0 && !channelId) {
      const firstCategory = channels.categoriesView[0];
      if (firstCategory.channels && firstCategory.channels.length > 0) {
        const firstChannel = firstCategory.channels[0];
        navigate(`/channels/${serverId}/${firstChannel.chatId}`, { replace: true });
      }
    }
  }, [channels, serverId, channelId, navigate]);

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