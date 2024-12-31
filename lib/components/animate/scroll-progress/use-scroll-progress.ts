'use client';

import { useRef, useMemo } from 'react';
import { useScroll } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

// ----------------------------------------------------------------------

export type UseScrollProgressReturn = {
  scrollXProgress: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
  elementRef: React.RefObject<HTMLDivElement | null>;
};

export type UseScrollProgress = 'document' | 'container';

export function useScrollProgress(target: UseScrollProgress = 'document'): UseScrollProgressReturn {
  const elementRef = useRef<HTMLDivElement>(null);

  const options = { container: elementRef as React.RefObject<HTMLElement> };

  const { scrollYProgress, scrollXProgress } = useScroll(
    target === 'container' ? options : undefined
  );

  const memoizedValue = useMemo(
    () => ({ elementRef, scrollXProgress, scrollYProgress }),
    [elementRef, scrollXProgress, scrollYProgress]
  );

  return memoizedValue;
}