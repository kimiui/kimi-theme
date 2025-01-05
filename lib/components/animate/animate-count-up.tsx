'use client';

import { useRef, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import type { UseInViewOptions } from 'motion/react';
import type { TypographyProps } from '@mui/material/Typography';
import { animate, useInView, motion as m, useTransform, useMotionValue } from 'motion/react';

// ----------------------------------------------------------------------

export type AnimateCountUpProps = TypographyProps & {
  to: number;
  from?: number;
  toFixed?: number;
  duration?: number;
  unit?: string;
  once?: UseInViewOptions['once'];
  amount?: UseInViewOptions['amount'];
};

export function AnimateCountUp({
  to,
  sx,
  from = 0,
  unit = '',
  toFixed = 0,
  duration = 2,
  once = true,
  amount = 0.5,
  component = 'p',
  ...other
}: AnimateCountUpProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref as React.RefObject<Element>, { once, amount });

  const count = useMotionValue(from);

  const rounded = useTransform(count, (latest) => latest.toFixed(toFixed));

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration });
    }
  }, [count, duration, inView, to]);

  return (
    <Typography
      component={component}
      sx={{
        display: 'inline-flex',
        p: 0,
        m: 0,
        ...sx,
      }}
      {...other}
    >
      <m.span ref={ref}>{rounded}</m.span>
      {unit}
    </Typography>
  );
}
