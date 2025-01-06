interface ButtonProps {
  style: string
  children: React.ReactNode
  onClick?: () => void
}
export default function Button({ style, children }: ButtonProps) {
  return <button className={`${style}`}>{children}</button>
}
