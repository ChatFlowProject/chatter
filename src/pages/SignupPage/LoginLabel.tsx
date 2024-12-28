import React from 'react'

interface LoginLabelProps {
  title: string
  children?: React.ReactNode
}

export default function LoginLabel({ title, children }: LoginLabelProps) {
  return (
    <label className='mt-5 flex flex-col items-stretch gap-2'>
      <div className='text-[#B5BAC1] text-xs text-left'>{title}</div>
      {children}
    </label>
  )
}
