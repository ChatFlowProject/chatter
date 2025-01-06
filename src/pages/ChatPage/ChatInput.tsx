import React, { useState } from 'react'

interface ChatInputProps {
  onSendMessage: (message: string) => void
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [input, setInput] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  const handleSendMessage = () => {
    if (input.trim()) {
      onSendMessage(input)
      setInput('')
    }
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage()
    }
  }
  return (
    <div className='fixed bottom-0'>
      <input
        className=' w-[1500px] h-[44px] m-[5px] bg-chat text-white'
        type='text'
        value={input}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
        placeholder='메시지를 입력하세요'
      />
    </div>
  )
}
