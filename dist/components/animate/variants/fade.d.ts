import type { VariantsType } from '../types';
export declare const varFade: (props?: VariantsType) => {
    in: {
        initial: {
            opacity: number;
        };
        animate: {
            opacity: number;
            transition: (props?: import("../types").TranEnterType) => {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            opacity: number;
            transition: (props?: import("../types").TranExitType) => {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    inUp: {
        initial: {
            y: number;
            opacity: number;
        };
        animate: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    inDown: {
        initial: {
            y: number;
            opacity: number;
        };
        animate: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    inLeft: {
        initial: {
            x: number;
            opacity: number;
        };
        animate: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    inRight: {
        initial: {
            x: number;
            opacity: number;
        };
        animate: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    out: {
        initial: {
            opacity: number;
        };
        animate: {
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    outUp: {
        initial: {
            y: number;
            opacity: number;
        };
        animate: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    outDown: {
        initial: {
            y: number;
            opacity: number;
        };
        animate: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            y: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    outLeft: {
        initial: {
            x: number;
            opacity: number;
        };
        animate: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    outRight: {
        initial: {
            x: number;
            opacity: number;
        };
        animate: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
        exit: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
};
