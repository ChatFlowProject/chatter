import 'src/App.css'

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
    <div className='chatinput'>
      <input
        className='chatinputbox'
        type='text'
        value={input}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
        placeholder='메시지를 입력하세요'
      />
    </div>
  )
}
