interface IconProps {
  path: string
}

/**
 * <div> 태그로 덮은 뒤에 거기서 크기 지정해주세요.
 */

const Icon = ({ path }: IconProps) => {
  return <img src={`/assets/${path}.svg`} alt={`${path} icon`} />
}

export default Icon
