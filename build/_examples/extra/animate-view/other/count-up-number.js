import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimateCountUp } from '../../../../components/animate';
// ----------------------------------------------------------------------
export function AnimateCountUpNumber() {
    return (_jsxs(_Fragment, { children: [_jsx(AnimateCountUp, { component: "h6", variant: "h1", to: 500, unit: "+" }), _jsx(AnimateCountUp, { component: "h6", variant: "h1", from: 200, to: 500.14, toFixed: 2, unit: "k" })] }));
}
