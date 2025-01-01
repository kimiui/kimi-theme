import type { VariantsType } from '../types';
export declare const varFlip: (props?: VariantsType) => {
    inX: {
        initial: {
            rotateX: number;
            opacity: number;
        };
        animate: {
            rotateX: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            rotateX: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    inY: {
        initial: {
            rotateY: number;
            opacity: number;
        };
        animate: {
            rotateY: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            rotateY: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    outX: {
        initial: {
            rotateX: number;
            opacity: number;
        };
        animate: {
            rotateX: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    outY: {
        initial: {
            rotateY: number;
            opacity: number;
        };
        animate: {
            rotateY: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
};
