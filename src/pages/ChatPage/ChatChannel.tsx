import 'src/App.css'
import Button from '@components/Button.tsx'
import Text from '@components/Text.tsx'
interface ChatChannelProps {
  title: string
  isActive: boolean
  onClick: () => void
}

export default function ChatChannel({
  title,
  isActive,
  onClick,
}: ChatChannelProps) {
  return (
    <div>
      <Button
        style={`channel ${isActive ? 'active' : ''} text-left`}
        onClick={onClick}
      >
        <Text className='lgon'>{title}</Text>
      </Button>
    </div>
  )
}
