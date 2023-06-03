import { useEffect, useRef, useState } from 'react';

export default function useElementOnScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Callback function for intersection observer
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  // Call the observe method
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      rootMargin: '0px',
      threshold: 0.2,
    });
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [containerRef]);

  return [containerRef, isVisible];
}
