import 'src/App.css'
import Text from '@components/Text.tsx'

interface ChatMessageProps {
  message: string
}
export default function ChatMessage({ message }: ChatMessageProps) {
  return <Text className='message'>{message}</Text>
}
