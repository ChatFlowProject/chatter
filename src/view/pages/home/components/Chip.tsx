import { useState, useEffect } from 'react';

interface ChipProps {
  alert: number;
}

const Chip = ({ alert }: ChipProps) => {
  const [displayAlert, setDisplayAlert] = useState<string>('');

  useEffect(() => {
    if (alert >= 1000) {
      setDisplayAlert(`${Math.floor(alert / 1000)}K+`);
    } else {
      setDisplayAlert(`${alert}`);
    }
  }, [alert]);

  return (
    <div className='flex w-8 p-[2px] justify-center items-center gap-2 rounded-2xl border-solid border-[2.5px] border-[#202225] bg-[#ED4245] text-[#FFF] text-sm font-semibold'>
      {displayAlert}
    </div>
  );
};

export default Chip;
