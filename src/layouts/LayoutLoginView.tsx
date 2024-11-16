import React, {ReactNode, useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import logoIcon from '../assets/logo.png';

type LayoutLoginViewProps = {
  children: ReactNode;
};

export const LayoutLoginView: React.FC<LayoutLoginViewProps> = ({children}) => {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute"
        style={{
          background: 'radial-gradient(circle, #01C3FD 2%, transparent 40%)',
          width: '1200px',
          height: '1200px',
        }}
        animate={{
          left: position.x,
          top: position.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 40,
          damping: 30,
          duration: 4,
        }}
      ></motion.div>

      <div className="relative w-full max-w-[calc(1266px+2rem)] px-4 mx-auto z-[1]">
        <div className="flex h-full md:pt-[100px] xl:pt-[152px] items-start">
          <div className="hidden flex-col gap-10 md:flex bg-center w-full max-w-[650px]">
            <div className=" left-4 hidden md:block items-center">
              <img className="" src={logoIcon} alt="CryptoDo" />
            </div>
            <div className="flex flex-col">
              <div className="pt-[60px] md:pt-0 max-w-[522px] justify-center">
                <p className="text-white text-[28px] lg:text-[48px] leading-[120%] tracking-[-0.96px] font-bold font-inter">
                  Be Part of The
                  <span className="text-[#43CA9B] pr-2">
                    <br />
                    Next
                  </span>
                  Wave of <br />
                  <span className="text-[#01C3FD] font-bold font-inter">
                    Web3
                  </span>
                  <span className="text-white font-bold font-inter">
                    <br />
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
