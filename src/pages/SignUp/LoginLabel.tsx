interface LoginLabelProps {
  title: string
  children?: React.ReactNode
}

export default function LoginLabel({ title, children }: LoginLabelProps) {
  return (
    <label className='flex flex-col mt-5 items-stretch gap-2'>
      <div className='text-[#B5BAC1] text-xs text-left'>{title}</div>
      {children}
    </label>
  )
}
