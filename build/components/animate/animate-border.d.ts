import type { BoxProps } from '@mui/material/Box';
import type { Easing, RepeatType } from 'framer-motion';
/**
 * Source:
 * https://gradientborder.framer.website/
 */
export type AnimateBorderProps = BoxProps & {
    animate?: {
        outline?: string;
        color?: string | string[];
        width?: string;
        angle?: number;
        loop?: boolean;
        length?: number;
        distance?: number;
        ease?: Easing;
        delay?: number;
        duration?: number;
        repeatType?: RepeatType;
        disable?: boolean;
        disableDoubleline?: boolean;
    };
};
export declare function AnimateBorder({ animate, sx }: AnimateBorderProps): import("react/jsx-runtime").JSX.Element;
