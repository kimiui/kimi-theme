import type { MotionValue } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';
export interface ScrollProgressProps extends BoxProps {
    size?: number;
    thickness?: number;
    progress: MotionValue<number>;
    variant: 'linear' | 'circular';
    color?: 'inherit' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
}
export declare function ScrollProgress({ size, variant, progress, thickness, color, sx, ...other }: Readonly<ScrollProgressProps>): import("react/jsx-runtime").JSX.Element;
