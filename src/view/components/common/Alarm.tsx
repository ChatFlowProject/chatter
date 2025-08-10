import {
  DM,
  SSECategory,
  SSEChannel,
  SSEMentionMsg,
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
  text,
  dm,
  type = 'friend',
}: {
  sender: SSESender;
  team?: SSETeam;
  channel?: SSEChannel;
  category?: SSECategory;
  message?: SSEMentionMsg;
  text?: string;
  dm?: DM;
  type?: 'friend' | 'mention' | 'inviteTeam';
}) {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const handleClick = () => {
    if (type === 'mention') {
      navigate(
        `/channels/${team?.id}/${message?.chatId}?messageId=${message?.id}`,
      );
    } else if (type === 'inviteTeam') {
      navigate(`/channels/@me/${dm?.chatId}`);
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
          {sender.name}{' '}
          {type === 'mention' && `(#${channel?.name}, ${category?.name})`}
        </p>
        <div className='text-[#b9bbbe] text-[10px] font-medium font-[Whitney Semibold] flex gap-1 items-center'>
          {type === 'mention' && (
            <p className='text-[#818284] text-[9px]'>@{sender?.name}</p>
          )}
          <p>{message?.content || text}</p>
        </div>
      </div>
    </div>
  );
}
