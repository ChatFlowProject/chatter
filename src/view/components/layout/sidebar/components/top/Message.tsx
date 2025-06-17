import { EllipsisVertical } from 'lucide-react';

const Message = ({
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
    channel_name,
    team_name,
    category_name,
    author,
  } = data;
  console.log('?????');
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-[8px] p-[12px] '>
        <div className='w-[40px] h-[40px]'>
          <img src={author.avatar} className='w-full rounded-[12px]' />
        </div>
        <div className='gap-[2px] flex flex-col justify-center'>
          <p className='text-[#b9bbbe] text-lg font-medium font-[Whitney Semibold]'>
            # {channel_name}
          </p>
          <p className='text-[#b9bbbe] text-[10px] font-medium font-[Whitney Semibold]'>
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
        <EllipsisVertical className='text-neutral-300 transform:rotate-90' />
      </button>
    </div>
  );
};

export default Message;
