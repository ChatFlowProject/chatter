import { Team } from '@service/feature/team/types/team.ts';
import { Plus } from 'lucide-react';

interface ChatServerProps {
  server?: Team;
  isActive: boolean;
  onClick: () => void;
  isAdd?: boolean;
}
export default function ChatServer({
  isAdd,
  server,
  isActive,
  onClick,
}: ChatServerProps) {
  return (
    <button
      className={`flex rounded-[13px] w-[48px] h-[48px] mt-[6px] ${isActive ? 'bg-primary' : 'bg-chat'} text-des justify-center items-center overflow-hidden hover:bg-primary transition-colors duration-300 ease-in-out
`}
      onClick={onClick}
      type='button'
    >
      {isAdd ? (
        <Plus className='!w-5 !h-5' />
      ) : (
        !server && <div className='text-center text-lg'>me</div>
      )}
      {server?.iconUrl ? (
        <img src={server.iconUrl} alt={server.name} />
      ) : (
        <div className='text-center text-lg'>{server?.name}</div>
      )}
    </button>
  );
}
