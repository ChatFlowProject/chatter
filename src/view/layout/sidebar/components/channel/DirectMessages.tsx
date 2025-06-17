import Icon from '@components/common/Icon.tsx';
import UserCard from '@pages/Friends/components/UserCard';
import { useDMListQuery } from '@service/feature/chat';
import { useParams } from 'react-router-dom';

const DirectMessages = () => {
  const params = useParams();

  const userId = params.channelId;
  const { data, isLoading, error } = useDMListQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>에러 발생</div>;

  console.log('DM list 출력: ', data);
  const handlePlus = () => {
    console.log('plus 버튼 클릭');
  };

  return (
    <div className='flex flex-col justify-center items-center gap-[9px]'>
      <div className='flex justify-center items-center gap-[76px]'>
        <p className='text-[13px] text-neutral-400 font-bold'>
          DIRECT MESSAGES
        </p>
        <button
          className='w-[11px] h-[11px]'
          onClick={handlePlus}
          type='button'
        >
          <Icon path='plus' />
        </button>
      </div>
      <div className='flex flex-col items-start gap-[2px]'>
        {data?.map((user) => (
          <UserCard
            key={user.name}
            user={user}
            isActive={userId === user.chatId}
            friendshipId={0}
          />
        ))}
      </div>
    </div>
  );
};

export default DirectMessages;
