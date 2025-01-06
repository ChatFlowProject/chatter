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
    <Button
      className={`text-des w-[48px] h-[48px] mt-[6px] justify-center items-center flex rounded-full overflow-hidden ${isActive ? 'bg-primary' : 'bg-chat'}`}
      onClick={onClick}
    >
      <Text className='text-center text-lg'>{title}</Text>
    </Button>
  )
}
