import React from 'react';

interface DiamondProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const Diamond: React.FC<DiamondProps> = ({
  color = '#0194FE',
  ...props
}) => {
  return (
    <svg
      width="143"
      height="128"
      viewBox="0 0 143 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.39"
        d="M82.5666 117.458C106.798 117.458 126.441 97.8153 126.441 73.5842C126.441 49.3531 106.798 29.71 82.5666 29.71C58.3356 29.71 38.6924 49.3531 38.6924 73.5842C38.6924 97.8153 58.3356 117.458 82.5666 117.458Z"
        fill="url(#paint0_radial_7_8174)"
      />
      <path
        d="M83.5634 47.6306L83.1895 48.7525V82.1287L83.5634 82.5026L98.9894 73.3405L83.5634 47.6306Z"
        fill={color}
      />
      <path
        d="M83.5634 47.6306L68.0439 73.3405L83.5634 82.5026V66.3287V47.6306Z"
        fill="#86E3FF"
      />
      <path
        d="M83.5637 85.4008L83.2832 85.6813V97.5546L83.5637 98.1156L98.9896 76.2388L83.5637 85.4008Z"
        fill={color}
      />
      <path
        d="M83.5634 98.1156V85.4008L68.0439 76.2388L83.5634 98.1156Z"
        fill="#86E3FF"
      />
      <path
        d="M98.9894 73.3404L83.5635 82.5025V66.3286L98.9894 73.3404Z"
        fill="#01C3FD"
      />
      <path
        d="M83.5634 66.3289V82.5027L68.0439 73.3407L83.5634 66.3289Z"
        fill={color}
      />
      <path
        d="M82.1963 13.1277C115.013 13.1277 141.617 40.0946 141.617 73.3599C141.617 93.9477 131.427 112.123 115.88 122.986"
        stroke="url(#paint1_linear_7_8174)"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M118.816 123.196C118.816 121.07 117.144 119.4 115.016 119.4C112.888 119.4 111.216 121.07 111.216 123.196C111.216 125.321 112.888 126.991 115.016 126.991C117.144 127.143 118.816 125.321 118.816 123.196Z"
        fill="#2C3D4C"
        stroke="url(#paint2_linear_7_8174)"
        strokeMiterlimit="10"
      />
      <path
        d="M52.1553 124.873C23.3507 108.242 13.4297 71.5 29.9961 42.8062C40.2489 25.0478 58.2444 14.5341 77.2998 13.0421"
        stroke="url(#paint3_linear_7_8174)"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M73.8119 12.277C72.7491 14.1178 73.3621 16.4002 75.2051 17.4642C77.048 18.5282 79.3311 17.9179 80.3939 16.0771C81.4567 14.2363 80.8438 11.9539 79.0008 10.8898C77.2337 9.69432 74.8747 10.4361 73.8119 12.277Z"
        fill="#2C3D4C"
        stroke="url(#paint4_linear_7_8174)"
        strokeMiterlimit="10"
      />
      <defs>
        <radialGradient
          id="paint0_radial_7_8174"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(82.5765 73.5751) scale(54.5173)"
        >
          <stop stopColor="#11639D" />
          <stop offset="0.99" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_7_8174"
          x1="112.096"
          y1="-37.1298"
          x2="194.665"
          y2="84.9908"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.303689" stopColor="#004DF4" stopOpacity="0" />
          <stop offset="0.422945" stopColor="#004DF4" stopOpacity="0.4" />
          <stop offset="0.499089" stopColor="#004DF4" />
          <stop offset="0.649516" stopColor="#26DDFF" />
          <stop offset="0.953267" stopColor="#26DDFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_7_8174"
          x1="110.57"
          y1="123.218"
          x2="131.97"
          y2="123.492"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#26BAD8" />
          <stop offset="0.803412" stopColor="#1C3D71" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_7_8174"
          x1="0.882952"
          y1="153.072"
          x2="-8.39169"
          y2="5.74081"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.303689" stopColor="#004DF4" stopOpacity="0" />
          <stop offset="0.422945" stopColor="#004DF4" stopOpacity="0.4" />
          <stop offset="0.674376" stopColor="#004DF4" />
          <stop offset="0.89827" stopColor={color} />
        </linearGradient>
        <linearGradient
          id="paint4_linear_7_8174"
          x1="132.257"
          y1="26.7142"
          x2="62.5683"
          y2="5.44281"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#26BAD8" />
          <stop offset="0.803412" stopColor="#0194FE" />
        </linearGradient>
      </defs>
    </svg>
  );
};
