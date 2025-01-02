import { jsx as _jsx } from "react/jsx-runtime";
import Portal from '@mui/material/Portal';
import { Iconify } from '../iconify';
import { StyledToaster } from './styles';
import { toasterClasses } from './classes';
// ----------------------------------------------------------------------
export function Snackbar() {
    return (_jsx(Portal, { children: _jsx(StyledToaster, { expand: true, gap: 12, closeButton: true, offset: 16, visibleToasts: 4, position: "top-right", className: toasterClasses.root, toastOptions: {
                unstyled: true,
                classNames: {
                    toast: toasterClasses.toast,
                    icon: toasterClasses.icon,
                    // content
                    content: toasterClasses.content,
                    title: toasterClasses.title,
                    description: toasterClasses.description,
                    // button
                    actionButton: toasterClasses.actionButton,
                    cancelButton: toasterClasses.cancelButton,
                    closeButton: toasterClasses.closeButton,
                    // state
                    default: toasterClasses.default,
                    info: toasterClasses.info,
                    error: toasterClasses.error,
                    success: toasterClasses.success,
                    warning: toasterClasses.warning,
                },
            }, icons: {
                loading: _jsx("span", { className: toasterClasses.loadingIcon }),
                info: _jsx(Iconify, { className: toasterClasses.iconSvg, icon: "solar:info-circle-bold" }),
                success: _jsx(Iconify, { className: toasterClasses.iconSvg, icon: "solar:check-circle-bold" }),
                warning: _jsx(Iconify, { className: toasterClasses.iconSvg, icon: "solar:danger-triangle-bold" }),
                error: _jsx(Iconify, { className: toasterClasses.iconSvg, icon: "solar:danger-bold" }),
            } }) }));
}
