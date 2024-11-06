import {Link} from 'react-router-dom';

type ForwardButtonProps = {
  className?: string;
  to: string;
} & JSX.IntrinsicElements['a'];

export const ForwardButton = ({className = '', to}: ForwardButtonProps) => {
  return (
    <Link
      to={to}
      className={`flex transition-all hover:border-l-400 hover:scale-95 justify-center items-center w-9 h-9 rounded-full border-l-200 border-solid border-[1px] ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="3"
        viewBox="0 0 18 3"
        fill="none"
      >
        <path d="M18 3L0 3L0 1.84615L9.12449 1.84615V0L18 3Z" fill="white" />
      </svg>
    </Link>
  );
};
