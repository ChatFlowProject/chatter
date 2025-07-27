import { useDMListQuery } from '@service/feature/chat';
import { useParams } from 'react-router-dom';
import DMUserCard from '@pages/Friends/components/DMUserCard';
import SkeletonDMList from '../skeletons/SkeletonDMList';

const DirectMessages = () => {
  const params = useParams();

  const userId = params.channelId;
  const { data, isLoading, error } = useDMListQuery();

  if (isLoading) return <SkeletonDMList />;
  if (error) return <div>에러 발생</div>;

  return (
    <div className='flex flex-col items-start gap-[2px]'>
      {data?.map((item, index) => (
        <DMUserCard
          key={index}
          isActive={userId === item.channel.chatId}
          data={item}
        />
      ))}
    </div>
  );
};

export default DirectMessages;
