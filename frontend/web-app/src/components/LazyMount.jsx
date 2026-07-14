import { useEffect, useRef, useState } from "react";

// Mounts the component only after 10% of it is visible, otherwise unmount it.
export default function LazyMount({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // observer.disconnect(); // mount only once
        } else setIsVisible(false);
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible ? children : null}</div>;
}
