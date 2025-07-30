import { SSESender } from '@service/feature/chat/type/alert';

interface ChatMessageProps {
  message: string;
  sender: SSESender;
}
export default function ChatMessage({ message, sender }: ChatMessageProps) {
  return (
    <div className='mx-3 mb-4 p-3 border border-[#42454A] bg-[rgb(47,49,54)] rounded-[8px]'>
      <div className='flex flex-row'>
        <div className='w-[40px] h-[40px] mr-3'>
          <img
            src={sender.avatarUrl || require('@assets/img/logo/chatflow.png')}
            className='w-full rounded-full'
            alt='서버 프로필'
          />
        </div>
        <p className='text-[16px] font-bold font-[Whitney Semibold] '>
          {sender.name}
        </p>
      </div>

      <div className='font-regular text-[#b9bbbe] text-sm ml-[50px] mt-[-16px]'>
        {message}
      </div>
    </div>
  );
}
