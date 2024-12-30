import { useState } from 'react'

interface LoginLabelProps {
  title: string
  error?: string
  children?: React.ReactNode
}

export default function LoginLabel({
  title,
  error,
  children,
}: LoginLabelProps) {
  const [isBlurred, setIsBlurred] = useState(false)
  function handleBlur() {
    setIsBlurred(true)
  }

  return (
    <label className='mt-5 flex flex-col items-stretch' onBlur={handleBlur}>
      <div className='pb-2 text-[#B5BAC1] text-sm text-left'>{title}</div>
      {children}
      {error && isBlurred && (
        <div className='pt-1 text-sm text-[#fb8d91] text-left'>{error}</div>
      )}
    </label>
  )
}
