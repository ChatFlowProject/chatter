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
        alt={`${path} icon`}
        className='w-full h-full object-contain'
        src={`/assets/img/${path}.svg`}
      />
    </div>
  );
};

export default Icon;
