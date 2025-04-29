import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { ChevronDown, ChevronRight, Plus } from 'lucide-react';
import ChannelItem from './ChannelItem.tsx';

interface Channel {
  id: string;
  name: string;
  type?: 'text' | 'voice' | 'event';
}

const ChannelCategory = ({
                           title,
                           type,
                           defaultItems,
                         }: {
  title: string;
  type: 'text' | 'voice' | 'event';
  defaultItems: Channel[];
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [items, setItems] = useState(defaultItems);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);
      setItems((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <div className="w-full">
      <div
        className="flex items-center justify-between px-2 py-1 hover:bg-[#393C43] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-1 text-xs text-[#b9bbbe] font-semibold">
          {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          <span>{title}</span>
        </div>
        <Plus size={14} className="text-[#b9bbbe] hover:text-white" />
      </div>

      {isOpen && (
        <DndContext onDragEnd={handleDragEnd}>
          <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
            <div className="flex flex-col gap-[2px]">
              {items.map((item) => (
                <ChannelItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  type={type}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
};

export default ChannelCategory;