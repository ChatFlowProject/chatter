import Conversation from './Conversation'
import Navigation from './Navigation'

interface TopbarProps {
  value: string
  onChange: (newValue: string) => void
}

const Topbar = ({ value, onChange }: TopbarProps) => {
  return (
    <div className='inline-flex h-[50px] justify-center items-start flex-shrink-0'>
      <Conversation value={value} onChange={onChange} />
      <Navigation />
    </div>
  )
}

export default Topbar
