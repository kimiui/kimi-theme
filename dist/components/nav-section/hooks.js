"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNavItem = useNavItem;
var react_1 = require("react");
var routes_react_1 = require("routes-react");
function useNavItem(_a) {
    var path = _a.path, icon = _a.icon, info = _a.info, depth = _a.depth, render = _a.render, hasChild = _a.hasChild, externalLink = _a.externalLink, enabledRootRedirect = _a.enabledRootRedirect;
    var rootItem = depth === 1;
    var subItem = !rootItem;
    var subDeepItem = Number(depth) > 2;
    var linkProps = externalLink
        ? { href: path, target: '_blank', rel: 'noopener' }
        : { component: routes_react_1.RouterLink, href: path };
    var baseProps = hasChild && !enabledRootRedirect ? { component: 'div' } : linkProps;
    /**
     * Render @icon
     */
    var renderIcon;
    if (icon && (render === null || render === void 0 ? void 0 : render.navIcon) && typeof icon === 'string') {
        renderIcon = render === null || render === void 0 ? void 0 : render.navIcon[icon];
    }
    else {
        renderIcon = icon;
    }
    /**
     * Render @info
     */
    var renderInfo = null;
    if (info && (render === null || render === void 0 ? void 0 : render.navInfo) && Array.isArray(info)) {
        var key = info[0], value = info[1];
        var element = render.navInfo(value)[key];
        renderInfo = element ? (0, react_1.cloneElement)(element) : null;
    }
    else {
        renderInfo = info;
    }
    return {
        subItem: subItem,
        rootItem: rootItem,
        subDeepItem: subDeepItem,
        baseProps: baseProps,
        renderIcon: renderIcon,
        renderInfo: renderInfo,
    };
}
