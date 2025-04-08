interface IconProps {
  path: string;
  className?: string;
  width?: number;
  height?: number;
}

const Icon = ({ path, className, width, height }: IconProps) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
    >
      <img
        alt={`${path} icon`}
        className='w-full h-full object-contain'
        src={`/assets/${path}.svg`}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Icon;
