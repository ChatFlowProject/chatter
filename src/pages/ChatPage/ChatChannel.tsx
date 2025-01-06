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
        className={`w-full p-[5px] ${isActive ? 'bg-primary' : ''} font-regular text-white  text-lg  text-left`}
        onClick={onClick}
      >
        <Text className='lgon'>{title}</Text>
      </Button>
    </div>
  )
}
