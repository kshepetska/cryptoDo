export const CopyIcon = ({
  rectanglesColor = 'white',
  ...props
}: React.SVGProps<SVGSVGElement> & {rectanglesColor?: string}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.7 1.66699H9.455C7.985 1.66699 6.82 1.66699 5.90917 1.79033C4.97083 1.91699 4.21167 2.18366 3.61333 2.78449C3.01417 3.38533 2.74833 4.14783 2.6225 5.08949C2.5 6.00449 2.5 7.17366 2.5 8.64949V13.5145C2.5 14.7712 3.26667 15.8478 4.35583 16.2995C4.3 15.5412 4.3 14.4787 4.3 13.5937V9.41866C4.3 8.35116 4.3 7.43033 4.39833 6.69366C4.50417 5.90366 4.7425 5.14699 5.35417 4.53283C5.96583 3.91866 6.72 3.67949 7.50667 3.57283C8.24 3.47449 9.15667 3.47449 10.2208 3.47449H12.7792C13.8425 3.47449 14.7575 3.47449 15.4917 3.57283C15.2717 3.01147 14.8877 2.5294 14.3897 2.18946C13.8917 1.84951 13.3029 1.66744 12.7 1.66699Z"
        fill={rectanglesColor}
      />
      <path
        opacity="0.4"
        d="M5.49902 9.49788C5.49902 7.22621 5.49902 6.09038 6.20236 5.38454C6.90486 4.67871 8.03569 4.67871 10.299 4.67871H12.699C14.9615 4.67871 16.0932 4.67871 16.7965 5.38454C17.499 6.09038 17.499 7.22621 17.499 9.49788V13.5145C17.499 15.7862 17.499 16.922 16.7965 17.6279C16.0932 18.3337 14.9615 18.3337 12.699 18.3337H10.299C8.03652 18.3337 6.90486 18.3337 6.20236 17.6279C5.49902 16.922 5.49902 15.7862 5.49902 13.5145V9.49788Z"
        fill={rectanglesColor}
      />
    </svg>
  );
};
