import React from 'react'

interface LoginLabelProps {
  title: string
  children?: React.ReactNode
}

export default function LoginLabel({ title, children }: LoginLabelProps) {
  return (
    <label className='mt-5 flex flex-col items-stretch'>
      <div className='pb-2 text-[#B5BAC1] text-sm text-left'>{title}</div>
      {children}
    </label>
  )
}
