interface ChatMessageProps {
  message: string
}
export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className='p-3'>
      <div className='font-regular text-white  text-lg'>{message}</div>
    </div>
  )
}
