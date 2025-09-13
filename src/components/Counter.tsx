import { useEffect, useState, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

interface CounterProps {
  target: number;
  duration?: number; // seconds
}

const Counter = ({ target, duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // trigger once when visible

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration,
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}+</span>;
};

export default Counter;
