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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbsLink = BreadcrumbsLink;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Link_1 = __importDefault(require("@mui/material/Link"));
var routes_react_1 = require("routes-react");
function BreadcrumbsLink(_a) {
    var link = _a.link, activeLast = _a.activeLast, disabled = _a.disabled;
    var styles = __assign({ typography: 'body2', alignItems: 'center', color: 'text.primary', display: 'inline-flex' }, (disabled &&
        !activeLast && {
        cursor: 'default',
        pointerEvents: 'none',
        color: 'text.disabled',
    }));
    var renderContent = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [link.icon && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: {
                    mr: 1,
                    display: 'inherit',
                    '& svg, & img': {
                        width: 20,
                        height: 20,
                    },
                }, children: link.icon })), link.name] }));
    if (link.href) {
        return ((0, jsx_runtime_1.jsx)(Link_1.default, { component: routes_react_1.RouterLink, href: link.href, sx: styles, children: renderContent }));
    }
    return (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: styles, children: [" ", renderContent, " "] });
}
