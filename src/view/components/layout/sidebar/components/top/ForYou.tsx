import { useNavigate } from 'react-router-dom';
import { EllipsisVertical } from 'lucide-react';

const ForYou = ({
  data,
}: {
  data: {
    notiId: string;
    type: 'FRIEND_REQUES' | 'FRIEND_REQUEST_ACCEPTED';
    time: string;
    userName: string;
    userNotiId: string;
    userNotiProfile: string;
  };
}) => {
  const { type, userName, userNotiProfile } = data;
  const navigate = useNavigate();
  console.log('?????');
  const printTypeMsg = (
    type: 'FRIEND_REQUES' | 'FRIEND_REQUEST_ACCEPTED',
    userName: string,
  ) => {
    if (type === 'FRIEND_REQUES')
      return `${userName} 님이 친구 요청을 보냈어요.`;
    if (type === 'FRIEND_REQUEST_ACCEPTED')
      return `${userName} 님이 친구 요청을 수락했어요.`;
  };

  const handleClick = () => {
    navigate('/channels/@me');
  };

  return (
    <div
      className='flex justify-between items-center hover:bg-[#393c43] hover:cursor-pointer'
      onClick={handleClick}
    >
      <div className='flex gap-[8px] p-[12px] '>
        <div className='w-[40px] h-[40px]'>
          <img src={userNotiProfile} className='w-full rounded-full' />
        </div>
        <div className='gap-[2px] flex flex-col justify-center'>
          <p className='text-[#b9bbbe] text-lg font-medium font-[Whitney Semibold]'>
            {printTypeMsg(type, userName)}
          </p>
          <p className='text-[#b9bbbe] text-[10px] font-medium font-[Whitney Semibold]'>
            1분전
          </p>
        </div>
      </div>

      <button
        className='w-7 h-7 bg-[#37393F] rounded-full mr-2'
        onClick={() => console.log('')}
        type='button'
      >
        <EllipsisVertical  className='text-neutral-300 transform:rotate-90' />
      </button>
    </div>
  );
};

export default ForYou;
