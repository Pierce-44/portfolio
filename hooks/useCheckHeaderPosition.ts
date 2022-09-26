import React from 'react';

export default function useCheckHeaderPosition() {
  const [headerBackground, setHeaderBackground] = React.useState(false);

  function handleScroll() {
    if (window.pageYOffset > 0) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return headerBackground;
}
