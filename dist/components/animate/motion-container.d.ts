import type { MotionProps } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';
export type MotionContainerProps = BoxProps & MotionProps & {
    animate?: boolean;
    action?: boolean;
};
export declare const MotionContainer: import("react").ForwardRefExoticComponent<Omit<MotionContainerProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
