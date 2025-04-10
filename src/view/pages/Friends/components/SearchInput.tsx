interface ConversationProps {
  value: string
  onChange: (newValue: string) => void
}

const SearchInput = ({ value, onChange }: ConversationProps) => {
  return (
    <div className='flex w-[240px] py-[10px] flex-col justify-end items-center gap-[10px] rounded-s-[7px] bg-[#2F3136]'>
      <input
        className='flex w-[220px] h-[28px] pt-[5px] pr-[47px] pb-[6px] pl-[6px] items-center rounded-[3px] bg-[#202225] text-white'
        onChange={(e) => onChange(e.target.value)}
        placeholder='Find or start a conversation'
        value={value}
      />
    </div>
  )
}

export default SearchInput
