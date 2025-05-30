import Icon from '@components/common/Icon';
import ChatMessage from './ChatMessage';
import { useNavigate } from 'react-router-dom';

const Mention = ({
  data,
}: {
  data: {
    id: string;
    content: string;
    channel_id: string;
    team_name: string;
    category_name: string;
    channel_name: string;
    author: {
      id: string;
      username: string;
      avatar: string;
    };
  };
}) => {
  const {
    id,
    content,
    channel_id,
    channel_name,
    team_name,
    category_name,
    author,
  } = data;
  const navigate = useNavigate();
  const handleClick = () => {
    // 나중에 수정
    navigate(`/channels/${team_name}/${channel_id}`);
  };

  return (
    <div onClick={handleClick} className='hover:cursor-pointer'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-[8px] p-[12px] '>
          <div className='w-[40px] h-[40px] mr-3'>
            <img src={author.avatar} className='w-full rounded-[12px]' />
          </div>
          <div className='gap-[2px] flex flex-col justify-center'>
            <p className='text-[16px] font-bold font-[Whitney Semibold]'>
              # {channel_name}
            </p>
            <p className='text-[12px] font-medium font-[Whitney Semibold]'>
              {team_name} {'>'} {category_name}
            </p>
          </div>
        </div>
        {/* 닫기로 수정 */}
        <button
          className='w-7 h-7 bg-[#37393F] rounded-full mr-2'
          onClick={() => console.log('')}
          type='button'
        >
          <Icon path='more' className='text-neutral-300 transform:rotate-90' />
        </button>
      </div>
      <ChatMessage message={content} />
    </div>
  );
};

export default Mention;
