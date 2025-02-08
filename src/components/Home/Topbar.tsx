import Conversation from './Conversation'

interface TopbarProps {
  value: string
  onChange: (newValue: string) => void
}

const Topbar = ({ value, onChange }: TopbarProps) => {
  return (
    <div className='inline-flex h-[50px] justify-center items-start flex-shrink-0'>
      <Conversation value={value} onChange={onChange} />
      <div></div>
    </div>
  )
}

export default Topbar
