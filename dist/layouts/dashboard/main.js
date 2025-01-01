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
exports.Main = Main;
exports.DashboardContent = DashboardContent;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
var Container_1 = __importDefault(require("@mui/material/Container"));
var classes_1 = require("lib/layouts/classes");
var settings_1 = require("lib/components/settings");
function Main(_a) {
    var children = _a.children, isNavHorizontal = _a.isNavHorizontal, sx = _a.sx, other = __rest(_a, ["children", "isNavHorizontal", "sx"]);
    return ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({ component: "main", className: classes_1.layoutClasses.main, sx: __assign(__assign({ display: 'flex', flex: '1 1 auto', flexDirection: 'column' }, (isNavHorizontal && {
            '--layout-dashboard-content-pt': '40px',
        })), sx) }, other, { children: children })));
}
function DashboardContent(_a) {
    var _b;
    var sx = _a.sx, children = _a.children, disablePadding = _a.disablePadding, _c = _a.maxWidth, maxWidth = _c === void 0 ? 'lg' : _c, other = __rest(_a, ["sx", "children", "disablePadding", "maxWidth"]);
    var theme = (0, styles_1.useTheme)();
    var settings = (0, settings_1.useSettingsContext)();
    var layoutQuery = 'lg';
    return ((0, jsx_runtime_1.jsx)(Container_1.default, __assign({ className: classes_1.layoutClasses.content, maxWidth: settings.compactLayout ? maxWidth : false, sx: __assign(__assign((_b = { display: 'flex', flex: '1 1 auto', flexDirection: 'column', pt: 'var(--layout-dashboard-content-pt)', pb: 'var(--layout-dashboard-content-pb)', backgroundColor: theme.palette.background.neutral }, _b[theme.breakpoints.up(layoutQuery)] = {
            px: 'var(--layout-dashboard-content-px)',
        }, _b), (disablePadding && {
            p: {
                xs: 0,
                sm: 0,
                md: 0,
                lg: 0,
                xl: 0,
            },
        })), sx) }, other, { children: children })));
}
