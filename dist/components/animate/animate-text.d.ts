import type { TypographyProps } from '@mui/material/Typography';
import type { Variants, UseInViewOptions } from 'framer-motion';
export declare const animateTextClasses: {
    root: string;
    lines: string;
    line: string;
    word: string;
    char: string;
    space: string;
    srOnly: string;
    dataIndex: string;
};
export type AnimateTextProps = TypographyProps & {
    variants?: Variants;
    repeatDelay?: number;
    text: string | string[];
    once?: UseInViewOptions['once'];
    amount?: UseInViewOptions['amount'];
};
export declare function AnimateText({ sx, text, variants, once, amount, component, repeatDelay, // 1000 = 1s
...other }: AnimateTextProps): import("react/jsx-runtime").JSX.Element;
