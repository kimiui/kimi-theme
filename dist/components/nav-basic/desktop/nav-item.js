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
    var path = _a.path, icon = _a.icon, info = _a.info, title = _a.title, caption = _a.caption, 
    //
    open = _a.open, depth = _a.depth, render = _a.render, active = _a.active, disabled = _a.disabled, hasChild = _a.hasChild, slotProps = _a.slotProps, externalLink = _a.externalLink, enabledRootRedirect = _a.enabledRootRedirect, other = __rest(_a, ["path", "icon", "info", "title", "caption", "open", "depth", "render", "active", "disabled", "hasChild", "slotProps", "externalLink", "enabledRootRedirect"]);
    var navItem = (0, nav_section_1.useNavItem)({
        path: path,
        icon: icon,
        info: info,
        depth: depth,
        render: render,
        hasChild: hasChild,
        externalLink: externalLink,
        enabledRootRedirect: enabledRootRedirect,
    });
    return ((0, jsx_runtime_1.jsxs)(StyledNavItem, __assign({ ref: ref, "aria-label": title, depth: depth, active: active, disabled: disabled, open: open && !active, disableRipple: navItem.rootItem, sx: __assign(__assign({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.sx), (_b = {}, _b["& .".concat(nav_section_1.navSectionClasses.item.icon)] = slotProps === null || slotProps === void 0 ? void 0 : slotProps.icon, _b["& .".concat(nav_section_1.navSectionClasses.item.texts)] = slotProps === null || slotProps === void 0 ? void 0 : slotProps.texts, _b["& .".concat(nav_section_1.navSectionClasses.item.title)] = slotProps === null || slotProps === void 0 ? void 0 : slotProps.title, _b["& .".concat(nav_section_1.navSectionClasses.item.caption)] = slotProps === null || slotProps === void 0 ? void 0 : slotProps.caption, _b["& .".concat(nav_section_1.navSectionClasses.item.arrow)] = slotProps === null || slotProps === void 0 ? void 0 : slotProps.arrow, _b)), className: (0, nav_section_1.stateClasses)({ open: open && !active, active: active, disabled: disabled }) }, navItem.baseProps, other, { children: [icon && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", className: nav_section_1.navSectionClasses.item.icon, children: navItem.renderIcon })), title && ((0, jsx_runtime_1.jsxs)(Box_1.default, { component: "span", className: nav_section_1.navSectionClasses.item.texts, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", className: nav_section_1.navSectionClasses.item.title, children: title }), caption && navItem.subItem && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", className: nav_section_1.navSectionClasses.item.caption, children: caption }))] })), info && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", className: nav_section_1.navSectionClasses.item.info, children: navItem.renderInfo })), hasChild && ((0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 16, icon: navItem.subItem ? 'eva:arrow-ios-forward-fill' : 'eva:arrow-ios-downward-fill', className: nav_section_1.navSectionClasses.item.arrow }))] })));
});
// ----------------------------------------------------------------------
var StyledNavItem = (0, styles_1.styled)(ButtonBase_1.default, {
    shouldForwardProp: function (prop) {
        return prop !== 'active' && prop !== 'open' && prop !== 'disabled' && prop !== 'depth';
    },
})(function (_a) {
    var _b, _c;
    var depth = _a.depth, open = _a.open, active = _a.active, theme = _a.theme;
    var rootItem = depth === 1;
    var subItem = depth !== 1;
    var baseStyles = {
        item: {},
        icon: __assign(__assign({}, nav_section_1.sharedStyles.icon), { width: 'var(--nav-icon-size)', height: 'var(--nav-icon-size)', margin: 'var(--nav-icon-margin)' }),
        texts: {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
        },
        title: __assign(__assign({}, theme.typography.body2), { fontWeight: active ? theme.typography.fontWeightSemiBold : theme.typography.fontWeightMedium }),
        caption: __assign(__assign({}, theme.typography.caption), { color: 'var(--nav-item-caption-color)' }),
        arrow: __assign({}, nav_section_1.sharedStyles.arrow),
        info: __assign({}, nav_section_1.sharedStyles.info),
    };
    return __assign(__assign(__assign({}, (rootItem && __assign(__assign(__assign(__assign({}, baseStyles.item), (_b = { padding: 'var(--nav-item-root-padding)', borderRadius: 'var(--nav-item-radius)', transition: theme.transitions.create(['all'], {
                duration: theme.transitions.duration.shorter,
            }), '&:hover': { opacity: 0.64 } }, _b["& .".concat(nav_section_1.navSectionClasses.item.icon)] = __assign({}, baseStyles.icon), _b["& .".concat(nav_section_1.navSectionClasses.item.texts)] = __assign({}, baseStyles.texts), _b["& .".concat(nav_section_1.navSectionClasses.item.title)] = __assign({}, baseStyles.title), _b["& .".concat(nav_section_1.navSectionClasses.item.arrow)] = __assign({}, baseStyles.arrow), _b["& .".concat(nav_section_1.navSectionClasses.item.info)] = __assign({}, baseStyles.info), _b)), (active && {
        color: 'var(--nav-item-root-active-color)',
    })), (open && {
        opacity: 0.64,
    })))), (subItem && __assign(__assign(__assign(__assign({}, baseStyles.item), (_c = { fontSize: theme.typography.pxToRem(13), borderRadius: 'var(--nav-item-sub-radius)', padding: 'var(--nav-item-sub-padding)', '&:hover': {
                color: 'var(--nav-item-sub-hover-color)',
                backgroundColor: 'var(--nav-item-sub-hover-bg)',
            }, color: 'var(--nav-item-sub-color)' }, _c["& .".concat(nav_section_1.navSectionClasses.item.icon)] = __assign({}, baseStyles.icon), _c["& .".concat(nav_section_1.navSectionClasses.item.texts)] = __assign({}, baseStyles.texts), _c["& .".concat(nav_section_1.navSectionClasses.item.title)] = __assign({}, baseStyles.title), _c["& .".concat(nav_section_1.navSectionClasses.item.caption)] = __assign({}, baseStyles.caption), _c["& .".concat(nav_section_1.navSectionClasses.item.arrow)] = __assign(__assign({}, baseStyles.arrow), { marginRight: theme.spacing(-0.5) }), _c["& .".concat(nav_section_1.navSectionClasses.item.info)] = __assign({}, baseStyles.info), _c)), (active && {
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
                style: nav_section_1.sharedStyles.disabled,
            },
        ] });
});
