import Friend from './components/Friend';

export default function ChatPage() {

  return (
    <div className='flex w-full h-screen'>
      <div className='chat flex-1'>
        <Friend />
      </div>
    </div>
  );
}
