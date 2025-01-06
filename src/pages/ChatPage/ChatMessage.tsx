import 'src/App.css'
import Text from '@components/Text.tsx'

interface ChatMessageProps {
  message: string
}
export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className='p-3'>
      <Text className='text-white font-regular text-lg'>{message}</Text>
    </div>
  )
}
