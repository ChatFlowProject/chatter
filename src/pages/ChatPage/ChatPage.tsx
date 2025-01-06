import ChatServer from './ChatServer'
import ChatChannel from './ChatChannel'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import Text from '@components/Text.tsx'
import { useState } from 'react'

export default function ChatPage() {
  const [activeServer, setActiveServer] = useState<number | null>(null)
  const [activeChannel, setActiveChannel] = useState<number | null>(null)
  const [messages, setMessages] = useState<string[]>([])

  const servers = [
    { id: 1, title: '서버1' },
    { id: 2, title: 'server2' },
    { id: 3, title: '추가' },
  ]
  const channels = [
    { id: 1, title: '일반1' },
    { id: 2, title: '일반2' },
  ]

  const handleSendMessage = (message: string) => {
    setMessages([...messages, message])
  }

  return (
    <div className='flex w-screen h-screen'>
      <div className='wrapper'>
        {servers.map((server) => (
          <ChatServer
            key={server.id}
            title={server.title}
            isActive={activeServer === server.id}
            onClick={() => {
              setActiveServer(server.id)
            }}
          />
        ))}
      </div>
      <div className='sidebar'>
        <Text className='smoff'>채팅채널</Text>
        {channels.map((channel) => (
          <ChatChannel
            key={channel.id}
            title={channel.title}
            isActive={activeChannel === channel.id}
            onClick={() => setActiveChannel(channel.id)}
          />
        ))}
        <div className='text-white font-regular text-base bg-[#292b2f] h-[52px] bottom-0 fixed'>
          user
        </div>
      </div>
      <div className='chat'>
        <div>
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div>
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  )
}
