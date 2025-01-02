import { jsx as _jsx } from "react/jsx-runtime";
import { domMax, LazyMotion } from 'framer-motion';
export function MotionLazy({ children }) {
    return (_jsx(LazyMotion, { strict: true, features: domMax, children: children }));
}
