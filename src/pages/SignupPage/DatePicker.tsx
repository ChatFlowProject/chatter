import DropDown from '@components/DropDown'

const years = Array.from(
  { length: 150 },
  (_, i) => new Date().getFullYear() - i,
)
const months = Array.from({ length: 12 }, (_, i) => i + 1)
const days = Array.from({ length: 31 }, (_, i) => i + 1)

export default function DatePicker() {
  return (
    <div className='flex justify-between gap-3'>
      <DropDown style='w-32 h-10 rounded-[3px] bg-[#1E1F22]' />
      <DropDown style='w-32 h-10 rounded-[3px] bg-[#1E1F22]' />
      <DropDown style='w-32 h-10 rounded-[3px] bg-[#1E1F22]' />
    </div>
  )
}
