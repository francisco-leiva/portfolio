import { useEffect, useRef, useState } from 'react';

export default function useElementOnScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Callback function for intersection observer
  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  // Call the observe method
  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    const observer = new IntersectionObserver(callbackFunction, {
      rootMargin: '0px',
      threshold: 0.2,
    });

    if (containerRefCurrent) observer.observe(containerRefCurrent);

    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent);
      }
    };
  }, [containerRef]);

  return [containerRef, isVisible];
}
