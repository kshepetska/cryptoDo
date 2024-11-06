import {
  MouseEvent,
  ReactNode,
  TouchEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import {useLockedScroll} from '../../hooks/useLockedScroll';

interface MobileDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  children?: ReactNode;
  touchOffsetValue?: number;
  isDesktopModal?: boolean;
}

export function MobileDialog({
  isOpen,
  touchOffsetValue,
  onOpenChange,
  children,
  isDesktopModal,
}: React.PropsWithChildren<MobileDialogProps>) {
  const [translateY, setTranslateY] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useLockedScroll(isOpen);

  useEffect(() => {
    if (isOpen) {
      setTranslateY(0);
    }
  }, [isOpen]);

  const handleClick = () => {
    onOpenChange(false);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const distance = Math.min(translateY - e.movementY, 0);

    setTranslateY(distance);

    if (distance < -100) {
      setIsDragging(false);
      onOpenChange(false);
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    if (!isDragging) return;

    const shiftY = containerRef.current?.getBoundingClientRect().top ?? 0;
    const box = (e.target as HTMLDivElement).getBoundingClientRect();

    const distance = Math.min(
      translateY - (e.touches[0].clientY - shiftY - box.height / 2),
      0
    );

    setTranslateY(distance);

    if (distance < (touchOffsetValue ? touchOffsetValue * -1 : -100)) {
      setIsDragging(false);
      onOpenChange(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60 transition-opacity duration-150 z-[990]"
        style={{
          opacity: `${isOpen ? 1 : 0}`,
          pointerEvents: `${isOpen ? 'auto' : 'none'}`,
        }}
        onClick={() => onOpenChange(false)}
      />
      <div
        className={classNames(
          'fixed bottom-0 left-0 right-0 h-auto flex flex-col gap-8 pb-10 rounded-t-20 trans-300  z-[999]',
          !isDragging && 'transition-transform duration-300',
          isOpen
            ? 'translate-y-0 xl:opacity-100 xl:pointer-events-auto'
            : 'translate-y-full xl:opacity-0 xl:pointer-events-none xl:translate-y-0',
          isDesktopModal &&
            'xl:w-full xl:h-full xl:flex xl:justify-center xl:items-center xl:bg-[rgba(0,0,0,.8)] xl:pb-0'
        )}
        style={{
          bottom: `${translateY}px`,
        }}
        ref={containerRef}
      >
        <div className="flex justify-center items-center">
          <button
            className={`py-2.5 ${isDesktopModal ? 'xl:hidden' : ''}`}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onDragStart={() => false}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={handleMouseDown}
            onTouchMove={handleTouchStart}
            onTouchEnd={handleMouseUp}
          >
            <span className="block w-[78px] h-1 rounded-full bg-white cursor-pointer" />
          </button>
        </div>
        {children}
      </div>
    </>
  );
}
