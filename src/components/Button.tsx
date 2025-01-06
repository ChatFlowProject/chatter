interface ButtonProps {
  className: string
  className: string
  children: React.ReactNode
  onClick?: () => void
}
export default function Button({ className, children }: ButtonProps) {
  return <button className={`${className}`}>{children}</button>
}
