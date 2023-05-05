import { useEffect, useRef, useState } from 'react';

export default function useElementOnScreen() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      rootMargin: '0px',
      threshold: 0.3,
    });
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  return [containerRef, isVisible];
}
