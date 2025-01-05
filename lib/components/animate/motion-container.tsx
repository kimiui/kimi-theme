import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { motion as m } from 'motion/react';
import type { MotionProps } from 'motion/react';
import type { BoxProps } from '@mui/material/Box';

import { varContainer } from './variants';

// ----------------------------------------------------------------------

export type MotionContainerProps = BoxProps &
  MotionProps & {
    animate?: boolean;
    action?: boolean;
  };

export const MotionContainer = forwardRef<HTMLDivElement, MotionContainerProps>(
  ({ animate, action = false, children, ...other }, ref) => {
    let animationState;
    if (action) {
      animationState = animate ? 'animate' : 'exit';
    } else {
      animationState = 'animate';
    }

    const commonProps = {
      ref,
      component: m.div,
      variants: varContainer(),
      initial: action ? false : 'initial',
      animate: animationState,
      exit: action ? undefined : 'exit',
      ...other,
    };

    return <Box {...commonProps}>{children}</Box>;
  }
);
