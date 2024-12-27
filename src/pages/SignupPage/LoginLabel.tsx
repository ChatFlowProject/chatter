import React from 'react'

interface LoginLabelProps {
  title: string
  children?: React.ReactNode
}

export default function LoginLabel({ title, children }: LoginLabelProps) {
  const childElement = React.Children.only(children)
  const childId = (childElement as React.ReactElement).props.id
  return (
    <label className='mt-5 flex flex-col items-stretch gap-2' htmlFor={childId}>
      <div className='text-[#B5BAC1] text-xs text-left'>{title}</div>
      {children}
    </label>
  )
}
