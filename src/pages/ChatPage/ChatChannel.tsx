import Button from '@components/Button.tsx'
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
        <div className='lgon'>{title}</div>
      </Button>
    </div>
  )
}
