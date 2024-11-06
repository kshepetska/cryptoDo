export const MobileOverlay = ({
  className = '',
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`absolute left-0 z-9999 top-0 h-screen w-full bg-black opacity-80 sm:hidden ${className}`}
      onClick={onClick}
    ></div>
  );
};
