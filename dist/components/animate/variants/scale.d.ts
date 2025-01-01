import type { VariantsType } from '../types';
export declare const varScale: (props?: VariantsType) => {
    in: {
        initial: {
            scale: number;
            opacity: number;
        };
        animate: {
            scale: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            scale: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    inX: {
        initial: {
            scaleX: number;
            opacity: number;
        };
        animate: {
            scaleX: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            scaleX: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    inY: {
        initial: {
            scaleY: number;
            opacity: number;
        };
        animate: {
            scaleY: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            scaleY: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    out: {
        initial: {
            scale: number;
            opacity: number;
        };
        animate: {
            scale: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    outX: {
        initial: {
            scaleX: number;
            opacity: number;
        };
        animate: {
            scaleX: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    outY: {
        initial: {
            scaleY: number;
            opacity: number;
        };
        animate: {
            scaleY: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
};
