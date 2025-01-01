"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snackbar = Snackbar;
var jsx_runtime_1 = require("react/jsx-runtime");
var Portal_1 = __importDefault(require("@mui/material/Portal"));
var iconify_1 = require("../iconify");
var styles_1 = require("./styles");
var classes_1 = require("./classes");
// ----------------------------------------------------------------------
function Snackbar() {
    return ((0, jsx_runtime_1.jsx)(Portal_1.default, { children: (0, jsx_runtime_1.jsx)(styles_1.StyledToaster, { expand: true, gap: 12, closeButton: true, offset: 16, visibleToasts: 4, position: "top-right", className: classes_1.toasterClasses.root, toastOptions: {
                unstyled: true,
                classNames: {
                    toast: classes_1.toasterClasses.toast,
                    icon: classes_1.toasterClasses.icon,
                    // content
                    content: classes_1.toasterClasses.content,
                    title: classes_1.toasterClasses.title,
                    description: classes_1.toasterClasses.description,
                    // button
                    actionButton: classes_1.toasterClasses.actionButton,
                    cancelButton: classes_1.toasterClasses.cancelButton,
                    closeButton: classes_1.toasterClasses.closeButton,
                    // state
                    default: classes_1.toasterClasses.default,
                    info: classes_1.toasterClasses.info,
                    error: classes_1.toasterClasses.error,
                    success: classes_1.toasterClasses.success,
                    warning: classes_1.toasterClasses.warning,
                },
            }, icons: {
                loading: (0, jsx_runtime_1.jsx)("span", { className: classes_1.toasterClasses.loadingIcon }),
                info: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { className: classes_1.toasterClasses.iconSvg, icon: "solar:info-circle-bold" }),
                success: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { className: classes_1.toasterClasses.iconSvg, icon: "solar:check-circle-bold" }),
                warning: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { className: classes_1.toasterClasses.iconSvg, icon: "solar:danger-triangle-bold" }),
                error: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { className: classes_1.toasterClasses.iconSvg, icon: "solar:danger-bold" }),
            } }) }));
}
