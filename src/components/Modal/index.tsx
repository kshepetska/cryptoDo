import {useEffect} from 'react';
import {createPortal} from 'react-dom';

export interface IModalProps {
  handleClose?: () => void;
  childrenWrapperStyles?: string;
}

export const Modal: React.FC<React.PropsWithChildren<IModalProps>> = ({
  childrenWrapperStyles = '',
  handleClose,
  children,
}) => {
  useEffect(() => {
    const initBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = initBodyOverflow;
    };
  }, []);

  return createPortal(
    <div className="fixed h-full inset-0 flex items-end justify-center z-[101] overflow-auto">
      <div
        className="md:bg-d-800 fixed h-full inset-0 z-0 bg-[#012B5A]"
        onClick={handleClose}
      ></div>
      <div
        className={`w-screen md:w-fit h-fit z-[102] flex justify-center mt-auto md:my-auto ${childrenWrapperStyles}`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
