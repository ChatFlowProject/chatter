import DropDown from '@components/common/DropDown.tsx';
import { useState } from 'react';

type DatePickerProps = {
  onChange: (date: {
    year: number | '';
    month: number | '';
    day: number | '';
  }) => void;
};

export default function DatePicker({ onChange }: DatePickerProps) {
  const [year, setYear] = useState<number | ''>('');
  const [month, setMonth] = useState<number | ''>('');
  const [day, setDay] = useState<number | ''>('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const years = Array.from(
    { length: 150 },
    (_, i) => new Date().getFullYear() - i,
  );
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleChange = (
    field: 'year' | 'month' | 'day',
    value: number | '',
  ) => {
    const newDate = { year, month, day, [field]: value };
    if (field === 'year') setYear(value);
    if (field === 'month') setMonth(value);
    if (field === 'day') setDay(value);
    onChange(newDate);
  };

  return (
    <div className='flex space-x-3'>
      <DropDown
        id='year'
        onChange={(value) => handleChange('year', value)}
        openDropdown={openDropdown}
        options={years}
        placeholder='년'
        setOpenDropdown={setOpenDropdown}
        value={year}
      />
      <DropDown
        id='month'
        onChange={(value) => handleChange('month', value)}
        openDropdown={openDropdown}
        options={months}
        placeholder='월'
        setOpenDropdown={setOpenDropdown}
        value={month}
      />
      <DropDown
        id='day'
        onChange={(value) => handleChange('day', value)}
        openDropdown={openDropdown}
        options={days}
        placeholder='일'
        setOpenDropdown={setOpenDropdown}
        value={day}
      />
    </div>
  );
}
