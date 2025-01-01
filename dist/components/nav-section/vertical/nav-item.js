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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var styles_1 = require("@mui/material/styles");
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var styles_2 = require("lib/theme/styles");
var hooks_1 = require("../hooks");
var iconify_1 = require("../../iconify");
var classes_1 = require("../classes");
var styles_3 = require("../styles");
// ----------------------------------------------------------------------
exports.NavItem = (0, react_1.forwardRef)(function (_a, ref) {
    var _b;
    var path = _a.path, icon = _a.icon, info = _a.info, title = _a.title, caption = _a.caption, 
    //
    open = _a.open, depth = _a.depth, render = _a.render, active = _a.active, disabled = _a.disabled, hasChild = _a.hasChild, slotProps = _a.slotProps, externalLink = _a.externalLink, enabledRootRedirect = _a.enabledRootRedirect, other = __rest(_a, ["path", "icon", "info", "title", "caption", "open", "depth", "render", "active", "disabled", "hasChild", "slotProps", "externalLink", "enabledRootRedirect"]);
    var navItem = (0, hooks_1.useNavItem)({
        path: path,
        icon: icon,
        info: info,
        depth: depth,
        render: render,
        hasChild: hasChild,
        externalLink: externalLink,
        enabledRootRedirect: enabledRootRedirect,
    });
    return ((0, jsx_runtime_1.jsxs)(StyledNavItem, __assign({ ref: ref, "aria-label": title, depth: depth, active: active, disabled: disabled, open: open && !active, sx: __assign(__assign({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.sx), (_b = {}, _b["& .".concat(classes_1.navSectionClasses.item.icon)] = slotProps === null || slotProps === void 0 ? void 0 : slotProps.icon, _b["& .".concat(classes_1.navSectionClasses.item.texts)] = slotProps === null || slotProps === void 0 ? void 0 : slotProps.texts, _b["& .".concat(classes_1.navSectionClasses.item.title)] = slotProps === null || slotProps === void 0 ? void 0 : slotProps.title, _b["& .".concat(classes_1.navSectionClasses.item.caption)] = slotProps === null || slotProps === void 0 ? void 0 : slotProps.caption, _b["& .".concat(classes_1.navSectionClasses.item.info)] = slotProps === null || slotProps === void 0 ? void 0 : slotProps.info, _b["& .".concat(classes_1.navSectionClasses.item.arrow)] = slotProps === null || slotProps === void 0 ? void 0 : slotProps.arrow, _b)), className: (0, styles_3.stateClasses)({ open: open && !active, active: active, disabled: disabled }) }, navItem.baseProps, other, { children: [icon && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", className: classes_1.navSectionClasses.item.icon, children: navItem.renderIcon })), title && ((0, jsx_runtime_1.jsxs)(Box_1.default, { component: "span", className: classes_1.navSectionClasses.item.texts, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", className: classes_1.navSectionClasses.item.title, children: title }), caption && ((0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: caption, placement: "top-start", children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", className: classes_1.navSectionClasses.item.caption, children: caption }) }))] })), info && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", className: classes_1.navSectionClasses.item.info, children: navItem.renderInfo })), hasChild && ((0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill', className: classes_1.navSectionClasses.item.arrow }))] })));
});
// ----------------------------------------------------------------------
var StyledNavItem = (0, styles_1.styled)(ButtonBase_1.default, {
    shouldForwardProp: function (prop) {
        return prop !== 'active' && prop !== 'open' && prop !== 'disabled' && prop !== 'depth';
    },
})(function (_a) {
    var _b, _c, _d, _e;
    var active = _a.active, open = _a.open, depth = _a.depth, theme = _a.theme;
    var rootItem = depth === 1;
    var subItem = !rootItem;
    var baseStyles = {
        item: {
            width: '100%',
            paddingTop: 'var(--nav-item-pt)',
            paddingLeft: 'var(--nav-item-pl)',
            paddingRight: 'var(--nav-item-pr)',
            paddingBottom: 'var(--nav-item-pb)',
            borderRadius: 'var(--nav-item-radius)',
            color: 'var(--nav-item-color)',
            '&:hover': {
                backgroundColor: 'var(--nav-item-hover-bg)',
            },
        },
        texts: { minWidth: 0, flex: '1 1 auto' },
        title: __assign(__assign(__assign({}, styles_3.sharedStyles.noWrap), theme.typography.body2), { fontWeight: active ? theme.typography.fontWeightSemiBold : theme.typography.fontWeightMedium }),
        caption: __assign(__assign(__assign({}, styles_3.sharedStyles.noWrap), theme.typography.caption), { color: 'var(--nav-item-caption-color)' }),
        icon: __assign(__assign({}, styles_3.sharedStyles.icon), { width: 'var(--nav-icon-size)', height: 'var(--nav-icon-size)', margin: 'var(--nav-icon-margin)' }),
        arrow: __assign({}, styles_3.sharedStyles.arrow),
        info: __assign({}, styles_3.sharedStyles.info),
    };
    return __assign(__assign(__assign({}, (rootItem && __assign(__assign(__assign(__assign({}, baseStyles.item), (_b = { minHeight: 'var(--nav-item-root-height)' }, _b["& .".concat(classes_1.navSectionClasses.item.icon)] = __assign({}, baseStyles.icon), _b["& .".concat(classes_1.navSectionClasses.item.texts)] = __assign({}, baseStyles.texts), _b["& .".concat(classes_1.navSectionClasses.item.title)] = __assign({}, baseStyles.title), _b["& .".concat(classes_1.navSectionClasses.item.caption)] = __assign({}, baseStyles.caption), _b["& .".concat(classes_1.navSectionClasses.item.arrow)] = __assign({}, baseStyles.arrow), _b["& .".concat(classes_1.navSectionClasses.item.info)] = __assign({}, baseStyles.info), _b)), (active && (_c = {
            color: 'var(--nav-item-root-active-color)',
            backgroundColor: 'var(--nav-item-root-active-bg)',
            '&:hover': {
                backgroundColor: 'var(--nav-item-root-active-hover-bg)',
            }
        },
        _c[styles_2.stylesMode.dark] = {
            color: 'var(--nav-item-root-active-color-on-dark)',
        },
        _c))), (open && {
        color: 'var(--nav-item-root-open-color)',
        backgroundColor: 'var(--nav-item-root-open-bg)',
    })))), (subItem && __assign(__assign(__assign(__assign({}, baseStyles.item), (_d = { minHeight: 'var(--nav-item-sub-height)' }, _d["& .".concat(classes_1.navSectionClasses.item.icon)] = __assign({}, baseStyles.icon), _d["& .".concat(classes_1.navSectionClasses.item.texts)] = __assign({}, baseStyles.texts), _d["& .".concat(classes_1.navSectionClasses.item.title)] = __assign({}, baseStyles.title), _d["& .".concat(classes_1.navSectionClasses.item.caption)] = __assign({}, baseStyles.caption), _d["& .".concat(classes_1.navSectionClasses.item.arrow)] = __assign({}, baseStyles.arrow), _d["& .".concat(classes_1.navSectionClasses.item.info)] = __assign({}, baseStyles.info), 
    // Shape
    _d['&::before'] = (_e = {
            left: 0,
            content: '""',
            position: 'absolute',
            width: 'var(--nav-bullet-size)',
            height: 'var(--nav-bullet-size)',
            transform: 'translate(calc(var(--nav-bullet-size) * -1), calc(var(--nav-bullet-size) * -0.4))',
            backgroundColor: 'var(--nav-bullet-light-color)',
            mask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' viewBox='0 0 14 14'%3E%3Cpath d='M1 1v4a8 8 0 0 0 8 8h4' stroke='%23efefef' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\") no-repeat 50% 50%/100% auto",
            WebkitMask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' viewBox='0 0 14 14'%3E%3Cpath d='M1 1v4a8 8 0 0 0 8 8h4' stroke='%23efefef' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\") no-repeat 50% 50%/100% auto"
        },
        _e[styles_2.stylesMode.dark] = {
            backgroundColor: 'var(--nav-bullet-dark-color)',
        },
        _e), _d)), (active && {
        color: 'var(--nav-item-sub-active-color)',
        backgroundColor: 'var(--nav-item-sub-active-bg)',
    })), (open && {
        color: 'var(--nav-item-sub-open-color)',
        backgroundColor: 'var(--nav-item-sub-open-bg)',
    })))), { variants: [
            {
                props: function (_a) {
                    var disabled = _a.disabled;
                    return disabled;
                },
                style: styles_3.sharedStyles.disabled,
            },
        ] });
});
