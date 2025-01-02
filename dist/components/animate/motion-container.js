import { jsx as _jsx } from "react/jsx-runtime";
import { m } from 'framer-motion';
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { varContainer } from './variants';
export const MotionContainer = forwardRef(({ animate, action = false, children, ...other }, ref) => {
    const animationState = action ? (animate ? 'animate' : 'exit') : 'animate';
    const commonProps = {
        ref,
        component: m.div,
        variants: varContainer(),
        initial: action ? false : 'initial',
        animate: animationState,
        exit: action ? undefined : 'exit',
        ...other,
    };
    return _jsx(Box, { ...commonProps, children: children });
});
