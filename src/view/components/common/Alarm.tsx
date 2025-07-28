import {
  SSECategory,
  SSEChannel,
  SSESender,
  SSETeam,
} from '@service/feature/chat/type/alert';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'src/app/store';

export default function Alarm({
  sender,
  team,
  channel,
  category,
  message,
  chatId,
}: {
  sender: SSESender;
  team?: SSETeam;
  channel?: SSEChannel;
  category?: SSECategory;
  message: string;
  chatId?: string;
}) {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const handleClick = () => {
    if (team && channel) {
      navigate(`/channels/${team.id}/${chatId}`);
    } else {
      navigate('/channels/@me');
    }
  };

  return (
    // <div
    //   onClick={handleClick}
    //   className='fixed bottom-2 right-2 flex gap-[8px] p-[12px] w-[220px] bg-[#2f3136] rounded-sm shadow-[0px_0px_41px_0px_rgba(0,0,0,0.34)]'
    // >
    <div className='flex gap-2' onClick={handleClick}>
      <div className='w-[40px] h-[40px]'>
        <img
          src={sender.avatarUrl || require('@assets/img/logo/chatflow.png')}
          className='w-full'
        />
      </div>
      <div className='gap-[2px] flex flex-col justify-center'>
        <p className='text-white text-[12px] font-medium font-[Ginto]'>
          {sender.name} {channel && `(#${channel.name}, ${category?.name})`}
        </p>
        <div className='text-[#b9bbbe] text-[10px] font-medium font-[Whitney Semibold] flex gap-1 items-center'>
          {channel && (
            <p className='text-[#818284] text-[9px]'>@{user?.nickname}</p>
          )}
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
