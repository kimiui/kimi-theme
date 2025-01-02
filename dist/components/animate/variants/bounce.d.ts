import type { VariantsType } from '../types';
export declare const varBounce: (props?: VariantsType) => {
    in: {
        initial: {};
        animate: {
            scale: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            scale: number[];
            opacity: number[];
        };
    };
    inUp: {
        initial: {};
        animate: {
            y: number[];
            scaleY: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            y: number[];
            scaleY: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    inDown: {
        initial: {};
        animate: {
            y: number[];
            scaleY: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            y: number[];
            scaleY: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    inLeft: {
        initial: {};
        animate: {
            x: number[];
            scaleX: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            x: number[];
            scaleX: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    inRight: {
        initial: {};
        animate: {
            x: number[];
            scaleX: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            x: number[];
            scaleX: number[];
            opacity: number[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    out: {
        animate: {
            scale: number[];
            opacity: number[];
        };
    };
    outUp: {
        animate: {
            y: number[];
            scaleY: number[];
            opacity: number[];
        };
    };
    outDown: {
        animate: {
            y: number[];
            scaleY: number[];
            opacity: number[];
        };
    };
    outLeft: {
        animate: {
            x: number[];
            scaleX: number[];
            opacity: number[];
        };
    };
    outRight: {
        animate: {
            x: number[];
            scaleX: number[];
            opacity: number[];
        };
    };
};
