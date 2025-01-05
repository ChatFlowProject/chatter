import { useRef } from 'react'

interface DropDownProps {
  id: string
  options: number[]
  value: number | ''
  onChange: (value: number) => void
  placeholder: string
  openDropdown: string | null // 열려 있는 드롭다운 ID
  setOpenDropdown: (id: string | null) => void // 부모 상태 변경 함수
}

export default function DropDown({
  id,
  options,
  value,
  onChange,
  placeholder,
  openDropdown,
  setOpenDropdown,
}: DropDownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  const isOpen = openDropdown === id

  const toggleDropdown = () => {
    console.log('토글', id)

    setOpenDropdown(isOpen ? null : id) // 클릭한 드롭다운을 열거나 닫음
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenDropdown(null)
    }
  }

  document.addEventListener('mousedown', handleClickOutside)

  return (
    <div className='relative w-full' ref={dropdownRef}>
      <div
        onMouseDown={(e) => {
          e.stopPropagation() // 내부 클릭 이벤트 외부 전파 방지
          toggleDropdown()
        }}
        className='flex items-center justify-between bg-[#1E1F22] text-[#B5B9C0] rounded-md px-4 py-2 w-full'
      >
        <span>{value || placeholder}</span>
        <svg
          className='w-[20px] h-[20px] fill-none opacity-70 hover:opacity-100 hover:cursor-pointer'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'
            fill='#FFFFFF'
          />
        </svg>
      </div>
      {isOpen && (
        <div
          className='absolute bg-[#25272b] text-[#FFFFFF] rounded-md w-full max-h-48 overflow-y-auto mb-2 text-left 
        top-0 transform -translate-y-full'
        >
          {options.map((option) => (
            <div
              key={option}
              className='hover:bg-[#393c43] px-4 py-2 cursor-pointer'
              onMouseDown={(e) => {
                e.stopPropagation()
                onChange(option)
                setOpenDropdown(null)
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
