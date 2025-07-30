import ChatMessage from './ChatMessage';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { SSEMentionResponse } from '@service/feature/chat/type/alert';

const Mention = ({ data }: { data: SSEMentionResponse }) => {
  const { sender, team, channel, category, message } = data;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/channels/${team.id}/${message.chatId}`);
  };

  return (
    <div onClick={handleClick} className='hover:cursor-pointer'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-[8px] p-[12px] '>
          <div className='w-[40px] h-[40px] mr-3'>
            <img
              src={team.iconUrl}
              className='w-full rounded-[12px]'
              alt='서버 프로필'
            />
          </div>
          <div className='gap-[2px] flex flex-col justify-center'>
            <p className='text-[16px] font-bold font-[Whitney Semibold]'>
              # {channel.name}
            </p>
            <p className='text-[12px] font-medium font-[Whitney Semibold]'>
              {team.name} {'>'} {category.name}
            </p>
          </div>
        </div>
        <button
          className='w-7 h-7 bg-chat rounded-full mr-2 flex justify-center items-center'
          onClick={() => console.log('')}
          type='button'
        >
          <X className='text-neutral-300 transform:rotate-90 hover:text-red' />
        </button>
      </div>
      <ChatMessage sender={sender} message={message.content} />
    </div>
  );
};

export default Mention;
