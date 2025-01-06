import React from 'react'
interface TextProps {
  children: React.ReactNode
  className?: string
  fontWeight?: 'regular' | 'bold' | 'semibold' | 'medium'
}

function Text({ children, className, fontWeight = 'regular' }: TextProps) {
  const isKorean = /[가-힣]/.test(children as string)
  const englishFonts = {
    regular: 'gg sans Regular',
    bold: 'gg sans Bold',
    semibold: 'gg sans SemiBold',
    medium: 'gg sans Medium',
  }
  return (
    <span
      className={`${className} ${isKorean ? 'korean-text' : englishFonts[fontWeight]}`}
      style={{
        fontFamily: isKorean
          ? 'NotoSansKR-VariableFont_wght'
          : englishFonts[fontWeight],
      }}
    >
      {children}
    </span>
  )
}
export default Text
