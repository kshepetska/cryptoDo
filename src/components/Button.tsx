import {Loader} from '../assets/svgComponents/Loader';
import {NextArrow} from '../assets/svgComponents/NextArrow';

type ButtonProps = {
  text: string | JSX.Element;
  loading?: boolean;
  withArrow?: boolean;
  bigger?: boolean;
  smaller?: boolean;
  transparent?: boolean;
  arrowClick?: () => void;
} & JSX.IntrinsicElements['button'];

export const Button = ({
  text,
  className = '',
  disabled,
  loading,
  withArrow,
  arrowClick,
  bigger,
  smaller,
  transparent,
  ...rest
}: ButtonProps) => {
  const backgroundColorClass = transparent
    ? 'bg-transparent border-2 border-[#3C3D3E]'
    : 'bg-opacity-10 backdrop-blur-md bg-[#00C3FD] shadow-md';

  const hoverBackgroundColorClass = transparent ? '' : 'hover:bg-opacity-20';

  return (
    <button
      disabled={disabled || loading}
      className={`${bigger ? 'h-[56px]' : 'h-[48px]'} ${
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : `transition-all duration-200 ease-in-out ${hoverBackgroundColorClass}`
      } relative text-white text-[16px] rounded-[42px] text-center justify-center uppercase ${backgroundColorClass} self-center font-inter font-bold ${className}`}
      {...rest}
    >
      {loading ? (
        <div
          style={{
            width: '100%',
            height: `${smaller ? '40px' : '44px'}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loader />
        </div>
      ) : (
        <div className="flex justify-center">
          <span>{text}</span>
          {withArrow && (
            <div className="flex items-center pl-[16px]">
              <NextArrow onClick={arrowClick} />
            </div>
          )}
        </div>
      )}
    </button>
  );
};
