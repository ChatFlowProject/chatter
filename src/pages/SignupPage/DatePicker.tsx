import DropDown from '@components/DropDown'
import { useState } from 'react'

export default function DatePicker() {
  const [year, setYear] = useState<number | ''>('')
  const [month, setMonth] = useState<number | ''>('')
  const [day, setDay] = useState<number | ''>('')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null) // 열려 있는 드롭다운 추적

  const years = Array.from(
    { length: 150 },
    (_, i) => new Date().getFullYear() - i,
  )
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <div className='flex space-x-3'>
      <DropDown
        id='year'
        options={years}
        value={year}
        onChange={(value) => setYear(value)}
        placeholder='년'
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      <DropDown
        id='month'
        options={months}
        value={month}
        onChange={(value) => setMonth(value)}
        placeholder='월'
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      <DropDown
        id='day'
        options={days}
        value={day}
        onChange={(value) => setDay(value)}
        placeholder='일'
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
    </div>
  )
}
