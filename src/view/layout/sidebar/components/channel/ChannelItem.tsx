import { useNavigate, useParams } from 'react-router-dom';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Hash } from 'lucide-react';

interface ChannelItemProps {
  id: number;
  name: string;
  type?: 'text' | 'voice' | 'event';
  chatId: string;
}

const ChannelItem = ({ id, name, chatId }: ChannelItemProps) => {
  const navigate = useNavigate();
  const { serverId } = useParams<{ serverId: string }>();
  
  const {attributes, listeners, setNodeRef, transform, transition,} = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleClick = () => {
    navigate(`/channels/${serverId}/${chatId}`);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}{...attributes}{...listeners}
      className="px-2 py-1 mx-2 text-[#949ba4] hover:text-white hover:bg-[#393C43] rounded cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center gap-1.5">
        <Hash size={18} />
        <span className="text-sm font-medium">{name}</span>
      </div>
    </div>
  );
};

export default ChannelItem;