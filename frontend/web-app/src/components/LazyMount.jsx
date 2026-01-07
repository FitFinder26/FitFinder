import { useEffect, useRef, useState } from "react";

// Mounts the component after 10% is visible. When `unmountOnHide` is false, it stays mounted after first reveal.
export default function LazyMount({ children, unmountOnHide = true }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasIntersected(true);
          // observer.disconnect(); // mount only once
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const shouldRender = unmountOnHide ? isVisible : hasIntersected;

  return <div ref={ref}>{shouldRender ? children : null}</div>;
}
