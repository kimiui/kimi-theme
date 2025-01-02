import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { labelClasses } from './classes';
import { LabelRoot, LabelIcon } from './styles';
// ----------------------------------------------------------------------
export const Label = forwardRef((props, ref) => {
    const { endIcon, children, startIcon, className, disabled, variant = 'soft', color = 'default', sx, ...other } = props;
    return (_jsxs(LabelRoot, { ref: ref, color: color, variant: variant, disabled: disabled, className: [labelClasses.root, className].join(' '), sx: sx, ...other, children: [startIcon && _jsx(LabelIcon, { className: labelClasses.icon, children: startIcon }), typeof children === 'string' ? upperFirst(children) : children, endIcon && _jsx(LabelIcon, { className: labelClasses.icon, children: endIcon })] }));
});
function upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
