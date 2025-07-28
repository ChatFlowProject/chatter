import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { MyAlarm } from '@service/feature/noti/types/noti';
import { useDeleteMyNoti } from '@service/feature/noti/hook/useInbox';

dayjs.extend(relativeTime);

const ForYou = ({ data }: { data: MyAlarm }) => {
  // const { type, userName, userNotiProfile } = data;
  const { id, type, isRead, message, receiverId, sender } = data;
  const navigate = useNavigate();

  const { mutate } = useDeleteMyNoti();

  const handleClick = () => {
    navigate('/channels/@me');
  };

  const handleClickDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    mutate(id);
  };

  return (
    <div
      className='flex justify-between items-center hover:bg-[#393c43] hover:cursor-pointer'
      onClick={handleClick}
    >
      <div className='flex gap-[8px] p-[12px] '>
        <div className='w-[40px] h-[40px]'>
          <img
            src={sender.avatarUrl || require('@assets/img/logo/chatflow.png')}
          />
        </div>
        <div className='gap-[2px] flex flex-col justify-center'>
          <p className='text-[#b9bbbe] text-lg font-medium font-[Whitney Semibold]'>
            {message}
          </p>
          <p className='text-[#b9bbbe] text-[10px] font-medium font-[Whitney Semibold]'>
            1분전
            {/* {dayjs(createdAt.createdAt).fromNow()} */}
          </p>
        </div>
      </div>

      <button
        className='w-7 h-7 bg-chat rounded-full mr-2 flex justify-center items-center'
        onClick={(e) => handleClickDelete(e)}
        type='button'
      >
        <X className='text-neutral-300 transform:rotate-90 hover:text-red' />
      </button>
    </div>
  );
};

export default ForYou;
