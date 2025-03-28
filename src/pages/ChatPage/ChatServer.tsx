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
    <button
      className={`flex rounded-full w-[48px] h-[48px] mt-[6px] ${isActive ? 'bg-primary' : 'bg-chat'} text-des justify-center items-center overflow-hidden`}
      onClick={onClick}
      type='button'
    >
      <div className='text-center text-lg'>{title}</div>
    </button>
  )
}
