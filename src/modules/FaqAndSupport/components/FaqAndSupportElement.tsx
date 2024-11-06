import {useEffect, useRef, useState} from 'react';
import {FaqAndSupportElementType} from '../store/useFaqAndSupportStore';
import {CrossCancel} from '../../../assets/svgComponents/CrossCancel';

type Props = {
  element: FaqAndSupportElementType;
};

export const FaqAndSupportElement: React.FC<Props> = ({element}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);

  const onToggleContent = () => {
    setIsOpen(state => !state);
  };

  return (
    <div className="border-b-[1px] border-l-100 border-solid py-5 last:border-none transition-all">
      <button
        type="button"
        className="flex justify-between items-center gap-2 w-full text-left text-sm"
        onClick={onToggleContent}
      >
        <span className="text-xl xl:text-2xl block max-w-[612px]">
          {element.title}
        </span>
        <button className="w-6 h-6 relative flex-shrink-0">
          <span className="bg-white block w-6 h-0.5 absolute left-0 top-1/2 -translate-y-1/2"></span>
          <div
            className={`absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full flex flex-col justify-between transition-all ${
              isOpen ? 'rotate-90' : 'rotate-0'
            }`}
          >
            <span className="bg-white w-full h-[11px] block"></span>
            <span className="bg-white w-full h-[9px] block"></span>
          </div>
        </button>
      </button>

      <div
        className="max-w-[640px] mt-2 text-sm xl:text-base text-l-800 leading-5"
        style={{
          overflow: 'hidden',
          maxHeight: contentHeight + 'px',
          transition: 'max-height .3s ease-in-out',
        }}
        ref={contentRef}
      >
        {element.content}
      </div>
    </div>
  );
};
