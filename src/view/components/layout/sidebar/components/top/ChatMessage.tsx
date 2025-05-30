interface ChatMessageProps {
  message: string;
}
export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className='mx-3 mb-4 p-3 border border-[#42454A] bg-[rgb(47,49,54)] rounded-[8px]'>
      <div className='font-regular text-white  text-lg'>{message}</div>
    </div>
  );
}
