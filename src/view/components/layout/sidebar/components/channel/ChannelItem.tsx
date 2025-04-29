import { useDraggable } from '@dnd-kit/core';
import { Hash, Radio, Volume2 } from 'lucide-react';
import clsx from 'clsx';

const ChannelItem = ({ id, name, type = 'text', selected = false, }: {
  id: string;
  name: string;
  type?: 'text' | 'voice' | 'event';
  selected?: boolean;
}) => {
  const icon =
    type === 'voice' ? <Volume2 size={16} /> :
      type === 'event' ? <Radio size={16} /> :
        <Hash size={16} />;

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id, });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`, opacity: 0.8, }
    : undefined;

  return (
    <div ref={setNodeRef} style={style}{...listeners}{...attributes}
      className={clsx(
        'flex items-center gap-2 px-2 py-1 text-sm text-[#b9bbbe] rounded hover:bg-[#3A3C41] cursor-pointer select-none',
        selected && 'bg-[#393C43] text-white', isDragging && 'opacity-50')}>
      {icon}
      <span className="truncate">{name}</span>
    </div>
  );
};

export default ChannelItem;