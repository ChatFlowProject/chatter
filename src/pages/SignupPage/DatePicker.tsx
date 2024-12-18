import DropDown from '@components/DropDown'

export default function DatePicker() {
  return (
    <div className='flex justify-between gap-3'>
      <DropDown style='w-32 h-10 rounded-[3px] bg-[#1E1F22]' />
      <DropDown style='w-32 h-10 rounded-[3px] bg-[#1E1F22]' />
      <DropDown style='w-32 h-10 rounded-[3px] bg-[#1E1F22]' />
    </div>
  )
}
