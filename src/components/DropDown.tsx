interface DropDownProps {
  style: string
}

export default function DropDown({ style }: DropDownProps) {
  return <input className={`${style}`} />
}
