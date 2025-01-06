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
    <Button
      className={`flex rounded-full w-[48px] h-[48px] mt-[6px] ${isActive ? 'bg-primary' : 'bg-chat'} text-des justify-center items-center overflow-hidden`}
      onClick={onClick}
    >
      <Text className='text-center text-lg'>{title}</Text>
    </Button>
  )
}
