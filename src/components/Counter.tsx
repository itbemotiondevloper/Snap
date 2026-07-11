"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({
  end,
  suffix = "",
  duration = 2000,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
