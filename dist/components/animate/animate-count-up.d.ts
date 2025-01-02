import type { UseInViewOptions } from 'framer-motion';
import type { TypographyProps } from '@mui/material/Typography';
export type AnimateCountUpProps = TypographyProps & {
    to: number;
    from?: number;
    toFixed?: number;
    duration?: number;
    unit?: string;
    once?: UseInViewOptions['once'];
    amount?: UseInViewOptions['amount'];
};
export declare function AnimateCountUp({ to, sx, from, unit, toFixed, duration, once, amount, component, ...other }: AnimateCountUpProps): import("react/jsx-runtime").JSX.Element;
