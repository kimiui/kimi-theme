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
var styles_1 = require("@mui/material/styles");
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var iconify_1 = require("../../iconify");
var nav_section_1 = require("../../nav-section");
// ----------------------------------------------------------------------
exports.NavItem = (0, react_1.forwardRef)(function (_a, ref) {
    var _b;
    var path = _a.path, icon = _a.icon, info = _a.info, title = _a.title, 
    //
    open = _a.open, render = _a.render, active = _a.active, hasChild = _a.hasChild, disabled = _a.disabled, slotProps = _a.slotProps, externalLink = _a.externalLink, enabledRootRedirect = _a.enabledRootRedirect, other = __rest(_a, ["path", "icon", "info", "title", "open", "render", "active", "hasChild", "disabled", "slotProps", "externalLink", "enabledRootRedirect"]);
    var navItem = (0, nav_section_1.useNavItem)({
        path: path,
        icon: icon,
        info: info,
        render: render,
        hasChild: hasChild,
        externalLink: externalLink,
        enabledRootRedirect: enabledRootRedirect,
    });
    return ((0, jsx_runtime_1.jsxs)(StyledNavItem, __assign({ ref: ref, "aria-label": title, open: open, active: active, disabled: disabled, className: (0, nav_section_1.stateClasses)({ open: open && !active, active: active, disabled: disabled }), sx: __assign(__assign({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.sx), (_b = {}, _b["& .".concat(nav_section_1.navSectionClasses.item.icon)] = slotProps === null || slotProps === void 0 ? void 0 : slotProps.icon, _b["& .".concat(nav_section_1.navSectionClasses.item.title)] = slotProps === null || slotProps === void 0 ? void 0 : slotProps.title, _b["& .".concat(nav_section_1.navSectionClasses.item.info)] = slotProps === null || slotProps === void 0 ? void 0 : slotProps.info, _b["& .".concat(nav_section_1.navSectionClasses.item.arrow)] = slotProps === null || slotProps === void 0 ? void 0 : slotProps.arrow, _b)) }, navItem.baseProps, other, { children: [icon && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", className: nav_section_1.navSectionClasses.item.icon, children: navItem.renderIcon })), title && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", className: nav_section_1.navSectionClasses.item.title, children: title })), info && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", className: nav_section_1.navSectionClasses.item.info, children: navItem.renderInfo })), hasChild && ((0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:arrow-ios-forward-fill", className: nav_section_1.navSectionClasses.item.arrow }))] })));
});
// ----------------------------------------------------------------------
var StyledNavItem = (0, styles_1.styled)(ButtonBase_1.default, {
    shouldForwardProp: function (prop) { return prop !== 'active' && prop !== 'open' && prop !== 'disabled'; },
})(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return (_b = {
            minHeight: 'var(--nav-item-height)',
            borderRadius: 'var(--nav-item-radius)',
            padding: 'var(--nav-item-padding)',
            transition: theme.transitions.create(['background-color'], {
                duration: theme.transitions.duration.standard,
            }),
            '&:hover': {
                backgroundColor: 'var(--nav-item-hover-bg)',
            }
        },
        _b["& .".concat(nav_section_1.navSectionClasses.item.title)] = __assign(__assign({}, theme.typography.body2), { flex: '1 1 auto', fontWeight: theme.typography.fontWeightMedium }),
        _b["& .".concat(nav_section_1.navSectionClasses.item.icon)] = __assign(__assign({}, nav_section_1.sharedStyles.icon), { width: 'var(--nav-icon-size)', height: 'var(--nav-icon-size)', margin: 'var(--nav-icon-margin)' }),
        _b["& .".concat(nav_section_1.navSectionClasses.item.arrow)] = __assign({}, nav_section_1.sharedStyles.arrow),
        _b["& .".concat(nav_section_1.navSectionClasses.item.info)] = __assign({}, nav_section_1.sharedStyles.info),
        _b.variants = [
            {
                props: { active: true },
                style: (_c = {},
                    _c["& .".concat(nav_section_1.navSectionClasses.item.title)] = {
                        fontWeight: theme.typography.fontWeightSemiBold,
                    },
                    _c.color = 'var(--nav-item-active-color)',
                    _c.backgroundColor = 'var(--nav-item-active-bg)',
                    _c['&:hover'] = {
                        backgroundColor: 'var(--nav-item-active-hover-bg)',
                    },
                    _c),
            },
            {
                props: { open: true },
                style: {
                    color: 'var(--nav-item-open-color)',
                    backgroundColor: 'var(--nav-item-open-bg)',
                },
            },
            {
                props: { disabled: true },
                style: nav_section_1.sharedStyles.disabled,
            },
        ],
        _b);
});
