import React, {ReactNode, useEffect} from 'react';
import logoIcon from '../assets/logo.png';

type LayoutLoginViewProps = {
  children: ReactNode;
};

export const LayoutLoginView: React.FC<LayoutLoginViewProps> = ({children}) => {
  return (
    <div className="flex relative min-h-screen after:h-full after:w-[47%] after:top-0 after:left-0  after:hidden md:after:block after:bg-cover after:bg-center after:bg-no-repeat after:absolute after:pointer-events-none">
      <div className="relative w-full max-w-[calc(1266px+2rem)] px-4 mx-auto z-[1]">
        <div className="absolute left-4 hidden md:block items-center top-8">
          <img className="" src={logoIcon} alt="CryptoDo" />
        </div>
        <div className="flex h-full md:pt-[100px] xl:pt-[152px] items-start">
          <div className="hidden md:flex bg-center w-full max-w-[650px]">
            <div className="flex flex-col">
              <div className="pt-[60px] md:pt-0 max-w-[522px] justify-center">
                <p className="text-[#43CA9B] text-[28px] lg:text-[48px] leading-[120%] tracking-[-0.96px] font-bold font-inter">
                  Be Part of The
                  <span>
                    <br></br>Next
                  </span>
                  Wave of <br></br>
                  <span className="text-[#01C3FD] font-bold font-inter">
                    Web3
                  </span>
                  <span className="text-white font-bold font-inter">
                    <br></br>
                    Projects with CryptoDo.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full lg:max-w-[602px] relative mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
