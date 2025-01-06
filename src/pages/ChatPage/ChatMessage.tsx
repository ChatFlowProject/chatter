import Text from '@components/Text.tsx'

interface ChatMessageProps {
  message: string
}
export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className='p-3'>
      <Text className='font-regular text-white  text-lg'>{message}</Text>
    </div>
  )
}
