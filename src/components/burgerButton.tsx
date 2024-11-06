interface BurgerButtonProps {
  handleTranslateSidebar: () => void;
  isOpened: boolean;
}

export const BurgerButton = ({
  handleTranslateSidebar,
  isOpened,
}: BurgerButtonProps) => {
  return (
    <button
      onClick={handleTranslateSidebar}
      className="relative w-[28px] h-3 flex md:hidden flex-col gap-[0.625rem]"
    >
      {[0, 1].map((_, barIndex) => (
        <span
          key={barIndex}
          className={`bg-white absolute w-full transition-all h-[1px] block ${
            barIndex === 0 ? 'top-0' : 'bottom-0'
          } ${
            isOpened
              ? barIndex === 0
                ? '!left-1/2 !top-1/2 rotate-45 -translate-x-1/2'
                : '!left-1/2 !top-1/2 -rotate-45 -translate-x-1/2'
              : 'left-0 -translate-x-0'
          }`}
        ></span>
      ))}
    </button>
  );
};
