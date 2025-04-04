import ChatServer from './ChatServer'
import ChatChannel from './ChatChannel'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const servers = [
  { id: 1, title: '서버1' },
  { id: 2, title: 'server2' },
  { id: 3, title: '추가' },
]
const channels = [
  { id: 1, title: '일반1' },
  { id: 2, title: '일반2' },
]
export default function ChatPage() {
  const [activeServer, setActiveServer] = useState<number | null>(null)
  const [activeChannel, setActiveChannel] = useState<number | null>(null)
  const [messages, setMessages] = useState<{ id: string; text: string }[]>([])

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { id: uuidv4(), text: message }])
  }

  return (
    <div className='flex w-screen h-screen'>
      <div className='wrapper'>
        {servers.map((server) => (
          <ChatServer
            isActive={activeServer === server.id}
            key={server.id}
            onClick={() => {
              setActiveServer(server.id)
            }}
            title={server.title}
          />
        ))}
      </div>
      <div className='sidebar relative'>
        <div className='smoff'>채팅채널</div>
        {channels.map((channel) => (
          <ChatChannel
            isActive={activeChannel === channel.id}
            key={channel.id}
            onClick={() => setActiveChannel(channel.id)}
            title={channel.title}
          />
        ))}
        <div className='bottom-0 absolute h-[52px] bg-panel font-regular text-white text-base '>
          user
        </div>
      </div>
      <div className='chat'>
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message.text} />
        ))}
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  )
}
