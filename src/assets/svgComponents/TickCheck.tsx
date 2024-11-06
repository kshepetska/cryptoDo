import React from 'react';

export const TickCheck = (props: React.SVGProps<SVGSVGElement>) => {
  const {className, ...rest} = props;
  return (
    <svg
      className={`${className || ''}`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      {...props}
    >
      <rect width="20" height="20" rx="4" fill="#286497" />
      <path
        d="M5.00293 9.48337L7.2157 11.6961M15.9415 6.28906L8.87505 13.3555L8.34771 12.8281"
        stroke="black"
        strokeWidth="1.5"
      />
    </svg>
  );
};
