import { useCallback, useEffect, useState } from 'react';

const useScrollPos = () => {
  const [scroll, setScroll] = useState<number | null>(null);

  const updateScroll = useCallback(() => {
    const scrollY = global?.scrollY;
    if (scrollY && scrollY !== scroll) {
      setScroll(scrollY);
    }
  }, [scroll]);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);

    return () => window.removeEventListener('scroll', updateScroll);
  }, [updateScroll]);

  return scroll;
};

export default useScrollPos;
