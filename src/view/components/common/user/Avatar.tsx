import fallbackIcon from '@assets/img/logo/chatflow.png';

interface AvatarProps {
  src?: string;
  alt: string;
  fallback?: string;
  size?: number;
}

const Avatar = ({ 
  src, 
  alt, 
  fallback = fallbackIcon, 
  size = 32 
}: AvatarProps) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = fallback;
  };

  return (
    <img
      src={src || fallback}
      alt={alt}
      className="rounded-full object-cover"
      style={{ 
        width: Math.max(16, Math.min(size, 256)),
        height: Math.max(16, Math.min(size, 256))
      }}
      onError={handleError}
    />
  );
};

export default Avatar;