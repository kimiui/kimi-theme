import type { MotionProps } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';
export type MotionViewportProps = BoxProps & MotionProps & {
    disableAnimate?: boolean;
};
export declare const MotionViewport: import("react").ForwardRefExoticComponent<Omit<MotionViewportProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
