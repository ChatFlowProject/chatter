interface IconProps {
  path: string;
  className?: string;
}

const Icon = ({ path, className }: IconProps) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
    >
      <img
        src={`/assets/${path}.svg`}
        alt={`${path} icon`}
        className='w-full h-full object-contain'
      />
    </div>
  );
};

export default Icon;
