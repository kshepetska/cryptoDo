import {useEffect, useLayoutEffect, useState} from 'react';

type UseLockedBodyOutput = [boolean, (locked: boolean) => void];

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useLockedScroll(
  initialLocked = false,
  rootId = '___gatsby' // Default to `___gatsby` to not introduce breaking change
): UseLockedBodyOutput {
  const [locked, setLocked] = useState(initialLocked);

  // Do the side effect before render
  useIsomorphicLayoutEffect(() => {
    if (!locked) {
      return;
    }
    const root = document.getElementById(rootId); // or root

    // Save initial body style
    const originalOverflow = root
      ? root.style.overflow
      : document.body.style.overflow;
    const originalPaddingRight = root
      ? getComputedStyle(root).paddingRight
      : document.body.style.paddingRight;

    // Get the scrollBar width
    const scrollBarWidth = root
      ? root.offsetWidth - root.scrollWidth + parseInt(originalPaddingRight)
      : 0;

    // Lock body scroll
    if (!root) {
      document.body.style.overflow = 'hidden';
    } else {
      root.style.overflow = 'hidden';
    }

    // Avoid width reflow
    if (scrollBarWidth) {
      if (!root) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      } else {
        root.style.paddingRight = `${scrollBarWidth}px`;
      }
    }

    return () => {
      if (!root) {
        document.body.style.overflow = originalOverflow;

        if (scrollBarWidth) {
          document.body.style.paddingRight = originalPaddingRight;
        }
      } else {
        root.style.overflow = originalOverflow;

        if (scrollBarWidth) {
          root.style.paddingRight = originalPaddingRight;
        }
      }
    };
  }, [locked]);

  // Update state if initialValue changes
  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocked]);

  return [locked, setLocked];
}
