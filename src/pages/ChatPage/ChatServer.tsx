import 'src/App.css'
import Button from '@components/Button.tsx'
import Text from '@components/Text.tsx'

interface ChatServerProps {
  title: string
  isActive: boolean
  onClick: () => void
}
export default function ChatServer({
  title,
  isActive,
  onClick,
}: ChatServerProps) {
  return (
    <Button style={`server ${isActive ? 'active' : ''}`} onClick={onClick}>
      <Text className='baseon text-center'>{title}</Text>
    </Button>
  )
}
