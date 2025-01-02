import type { BackgroundType } from '../types';
export declare const varBgColor: (props?: BackgroundType) => {
    animate: {
        background: string[];
        transition: {
            duration: number;
            ease: import("framer-motion").Easing;
        };
    };
};
export declare const varBgKenburns: (props?: BackgroundType) => {
    top: {
        animate: {
            scale: number[];
            y: number[];
            transformOrigin: string[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    bottom: {
        animate: {
            scale: number[];
            y: number[];
            transformOrigin: string[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    left: {
        animate: {
            scale: number[];
            x: number[];
            y: number[];
            transformOrigin: string[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    right: {
        animate: {
            scale: number[];
            x: number[];
            y: number[];
            transformOrigin: string[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
};
export declare const varBgPan: (props?: BackgroundType) => {
    top: {
        animate: {
            backgroundImage: string[];
            backgroundPosition: string[];
            backgroundSize: string[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    right: {
        animate: {
            backgroundPosition: string[];
            backgroundImage: string[];
            backgroundSize: string[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    bottom: {
        animate: {
            backgroundImage: string[];
            backgroundPosition: string[];
            backgroundSize: string[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
    left: {
        animate: {
            backgroundPosition: string[];
            backgroundImage: string[];
            backgroundSize: string[];
            transition: {
                duration: number;
                ease: import("framer-motion").Easing;
            };
        };
    };
};
