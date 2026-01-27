"use client";

import { useEffect, useState } from "react";

export function useCountUp(
  target: number,
  isActive: boolean,
  duration = 1500
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let start = 0;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(eased * target);

      setCount(currentCount);

      if (progress < 1) {
        start = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }

    start = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(start);
  }, [target, isActive, duration]);

  return count;
}
