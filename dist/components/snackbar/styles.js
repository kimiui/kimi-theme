'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledToaster = void 0;
var sonner_1 = require("sonner");
var styles_1 = require("@mui/material/styles");
var styles_2 = require("../../theme/styles");
var classes_1 = require("./classes");
// ----------------------------------------------------------------------
exports.StyledToaster = (0, styles_1.styled)(sonner_1.Toaster)(function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var theme = _a.theme;
    var baseStyles = {
        toastDefault: {
            padding: theme.spacing(1, 1, 1, 1.5),
            boxShadow: theme.shadows.z8,
            color: theme.vars.palette.background.paper,
            backgroundColor: theme.vars.palette.text.primary,
        },
        toastColor: {
            padding: theme.spacing(0.5, 1, 0.5, 0.5),
            boxShadow: theme.shadows.z8,
            color: theme.vars.palette.text.primary,
            backgroundColor: theme.vars.palette.background.paper,
        },
        toastLoader: {
            padding: theme.spacing(0.5, 1, 0.5, 0.5),
            boxShadow: theme.shadows.z8,
            color: theme.vars.palette.text.primary,
            backgroundColor: theme.vars.palette.background.paper,
        },
    };
    var loadingStyles = (_b = {
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'none',
            transform: 'none',
            overflow: 'hidden',
            alignItems: 'center',
            position: 'relative',
            borderRadius: 'inherit',
            justifyContent: 'center',
            background: theme.vars.palette.background.neutral
        },
        _b["& .".concat(classes_1.toasterClasses.loadingIcon)] = {
            zIndex: 9,
            width: 24,
            height: 24,
            borderRadius: '50%',
            animation: 'rotate 3s infinite linear',
            background: "conic-gradient(".concat((0, styles_2.varAlpha)(theme.vars.palette.text.primaryChannel, 0), ", ").concat((0, styles_2.varAlpha)(theme.vars.palette.text.disabledChannel, 0.64), ")"),
        },
        _b[classes_1.toasterClasses.loaderVisible] = { display: 'flex' },
        _b);
    return _c = {
            width: 300
        },
        _c["& .".concat(classes_1.toasterClasses.toast)] = {
            gap: 12,
            width: '100%',
            minHeight: 52,
            display: 'flex',
            borderRadius: 12,
            alignItems: 'center',
        },
        /*
         * Content
         */
        _c["& .".concat(classes_1.toasterClasses.content)] = {
            gap: 0,
            flex: '1 1 auto',
        },
        _c["& .".concat(classes_1.toasterClasses.title)] = {
            fontSize: theme.typography.subtitle2.fontSize,
        },
        _c["& .".concat(classes_1.toasterClasses.description)] = __assign(__assign({}, theme.typography.caption), { opacity: 0.64 }),
        /*
         * Buttons
         */
        _c["& .".concat(classes_1.toasterClasses.actionButton)] = {},
        _c["& .".concat(classes_1.toasterClasses.cancelButton)] = {},
        _c["& .".concat(classes_1.toasterClasses.closeButton)] = {
            top: 0,
            right: 0,
            left: 'auto',
            color: 'currentColor',
            backgroundColor: 'transparent',
            transform: 'translate(-6px, 6px)',
            borderColor: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16),
            transition: theme.transitions.create(['background-color', 'border-color']),
            '&:hover': {
                borderColor: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.24),
                backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08),
            },
        },
        /*
         * Icon
         */
        _c["& .".concat(classes_1.toasterClasses.icon)] = (_d = {
                margin: 0,
                width: 48,
                height: 48,
                alignItems: 'center',
                borderRadius: 'inherit',
                justifyContent: 'center',
                alignSelf: 'flex-start'
            },
            _d["& .".concat(classes_1.toasterClasses.iconSvg)] = {
                width: 24,
                height: 24,
                fontSize: 0,
            },
            _d),
        /*
         * Default
         */
        _c['@keyframes rotate'] = { to: { transform: 'rotate(1turn)' } },
        _c["& .".concat(classes_1.toasterClasses.default)] = __assign(__assign({}, baseStyles.toastDefault), (_e = {}, _e["&:has(".concat(classes_1.toasterClasses.closeBtnVisible, ")")] = (_f = {},
            _f["& .".concat(classes_1.toasterClasses.content)] = {
                paddingRight: 32,
            },
            _f), _e["&:has(.".concat(classes_1.toasterClasses.loader, ")")] = baseStyles.toastLoader, _e["&:has(.".concat(classes_1.toasterClasses.loader, ")")] = baseStyles.toastLoader, _e["& .".concat(classes_1.toasterClasses.loader)] = loadingStyles, _e)),
        /*
         * Error
         */
        _c["& .".concat(classes_1.toasterClasses.error)] = __assign(__assign({}, baseStyles.toastColor), (_g = {}, _g["& .".concat(classes_1.toasterClasses.icon)] = {
            color: theme.vars.palette.error.main,
            backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.error.mainChannel, 0.08),
        }, _g)),
        /*
         * Success
         */
        _c["& .".concat(classes_1.toasterClasses.success)] = __assign(__assign({}, baseStyles.toastColor), (_h = {}, _h["& .".concat(classes_1.toasterClasses.icon)] = {
            color: theme.vars.palette.success.main,
            backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.success.mainChannel, 0.08),
        }, _h)),
        /*
         * Warning
         */
        _c["& .".concat(classes_1.toasterClasses.warning)] = __assign(__assign({}, baseStyles.toastColor), (_j = {}, _j["& .".concat(classes_1.toasterClasses.icon)] = {
            color: theme.vars.palette.warning.main,
            backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.warning.mainChannel, 0.08),
        }, _j)),
        /*
         * Info
         */
        _c["& .".concat(classes_1.toasterClasses.info)] = __assign(__assign({}, baseStyles.toastColor), (_k = {}, _k["& .".concat(classes_1.toasterClasses.icon)] = {
            color: theme.vars.palette.info.main,
            backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.info.mainChannel, 0.08),
        }, _k)),
        _c;
});
