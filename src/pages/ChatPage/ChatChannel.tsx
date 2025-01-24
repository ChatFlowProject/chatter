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
    <button
      type='button'
      className={`w-full p-[5px] ${isActive ? 'bg-primary' : ''} font-regular text-white  text-lg  text-left`}
      onClick={onClick}
    >
      <div className='lgon'>{title}</div>
    </button>
  )
}
