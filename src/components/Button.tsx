interface ButtonProps {
  style: string
  children: React.ReactNode
}
export default function Button({ style, children }: ButtonProps) {
  return <button className={`${style}`}>{children}</button>
}
