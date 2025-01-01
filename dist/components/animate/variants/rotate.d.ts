import type { VariantsType } from '../types';
export declare const varRotate: (props?: VariantsType) => {
    in: {
        initial: {
            opacity: number;
            rotate: number;
        };
        animate: {
            opacity: number;
            rotate: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            opacity: number;
            rotate: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    out: {
        initial: {
            opacity: number;
            rotate: number;
        };
        animate: {
            opacity: number;
            rotate: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
};
