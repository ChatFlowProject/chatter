const Empty = ({
  className,
  message,
}: {
  className?: string;
  message: string;
}) => {
  return (
    <div
      className={`flex justify-center items-center h-full text-center ${className}`}
    >
      {message}
    </div>
  );
};

export default Empty;
// flex-1 h-full
