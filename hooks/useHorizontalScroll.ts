/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';

export function useHorizontalScroll() {
  const elRef = React.useRef<any>();
  React.useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: any) => {
        if (e.deltaY === 0) return;

        const tune = e.deltaY > 0 ? 100 : -100;

        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY + tune,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  return elRef;
}
