import React from 'react';

interface Props {
  inView: boolean;
  setInView: (update: React.SetStateAction<boolean>) => void;
}

export default function useHandleInView({ inView, setInView }: Props) {
  React.useEffect(() => {
    if (inView) {
      setInView(true);
    } else {
      setInView(false);
    }
  }, [inView, setInView]);
}
