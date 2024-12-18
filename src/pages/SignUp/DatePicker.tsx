import DropDown from '@components/DropDown'

export default function DatePicker() {
  return (
    <div className='flex justify-between gap-3'>
      <DropDown />
      <DropDown />
      <DropDown />
    </div>
  )
}
