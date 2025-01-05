import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { motion as m } from 'motion/react';
import type { MotionProps } from 'motion/react';
import type { BoxProps } from '@mui/material/Box';

import { useResponsive } from 'lib/hooks';

import { varContainer } from './variants';

// ----------------------------------------------------------------------

export type MotionViewportProps = BoxProps &
  MotionProps & {
    disableAnimate?: boolean;
  };

export const MotionViewport = forwardRef<HTMLDivElement, MotionViewportProps>(
  ({ children, disableAnimate = true, ...other }, ref) => {
    const smDown = useResponsive('down', 'sm');

    const disabled = smDown && disableAnimate;

    const props = disabled
      ? {}
      : {
          component: m.div,
          initial: 'initial',
          whileInView: 'animate',
          variants: varContainer(),
          viewport: { once: true, amount: 0.3 },
        };

    return (
      <Box ref={ref} {...props} {...other}>
        {children}
      </Box>
    );
  }
);
