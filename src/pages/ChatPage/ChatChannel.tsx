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
        className={`text-white w-full p-[5px] font-regular text-lg ${isActive ? 'bg-primary' : ''} text-left`}
        onClick={onClick}
      >
        <Text className='lgon'>{title}</Text>
      </Button>
    </div>
  )
}
