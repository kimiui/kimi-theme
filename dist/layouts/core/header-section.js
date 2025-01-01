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
exports.HeaderSection = HeaderSection;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var AppBar_1 = __importDefault(require("@mui/material/AppBar"));
var Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
var Container_1 = __importDefault(require("@mui/material/Container"));
var styles_1 = require("@mui/material/styles");
var hooks_1 = require("lib/hooks");
var styles_2 = require("lib/theme/styles");
var classes_1 = require("../classes");
// ----------------------------------------------------------------------
var StyledElevation = (0, styles_1.styled)('span')(function (_a) {
    var theme = _a.theme;
    return ({
        left: 0,
        right: 0,
        bottom: 0,
        m: 'auto',
        height: 24,
        zIndex: -1,
        opacity: 0.48,
        borderRadius: '50%',
        position: 'absolute',
        width: "calc(100% - 48px)",
        boxShadow: theme.shadows[8],
    });
});
function HeaderSection(_a) {
    var _b, _c;
    var sx = _a.sx, slots = _a.slots, slotProps = _a.slotProps, disableOffset = _a.disableOffset, disableElevation = _a.disableElevation, _d = _a.layoutQuery, layoutQuery = _d === void 0 ? 'md' : _d, other = __rest(_a, ["sx", "slots", "slotProps", "disableOffset", "disableElevation", "layoutQuery"]);
    var theme = (0, styles_1.useTheme)();
    var offsetTop = (0, hooks_1.useScrollOffSetTop)().offsetTop;
    var toolbarStyles = (0, react_1.useMemo)(function () {
        var _a;
        return ({
            default: (_a = {
                    minHeight: 'auto',
                    height: 'var(--layout-header-mobile-height)',
                    transition: theme.transitions.create(['height', 'background-color'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    })
                },
                _a[theme.breakpoints.up('sm')] = {
                    minHeight: 'auto',
                },
                _a[theme.breakpoints.up(layoutQuery)] = {
                    height: 'var(--layout-header-desktop-height)',
                },
                _a),
            offset: __assign({}, (0, styles_2.bgBlur)({
                color: (0, styles_2.varAlpha)(theme.vars.palette.background.defaultChannel, 0.8),
            })),
        });
    }, [theme, layoutQuery]);
    var appBarSx = (0, react_1.useMemo)(function () { return (__assign({ zIndex: 'var(--layout-header-zIndex)' }, sx)); }, [sx]);
    var toolbarSx = (0, react_1.useMemo)(function () {
        var _a;
        return (__assign(__assign(__assign({}, toolbarStyles.default), (!disableOffset && offsetTop && toolbarStyles.offset)), (_a = slotProps === null || slotProps === void 0 ? void 0 : slotProps.toolbar) === null || _a === void 0 ? void 0 : _a.sx));
    }, [toolbarStyles, disableOffset, offsetTop, (_b = slotProps === null || slotProps === void 0 ? void 0 : slotProps.toolbar) === null || _b === void 0 ? void 0 : _b.sx]);
    var containerSx = (0, react_1.useMemo)(function () {
        var _a;
        return (__assign({ height: 1, display: 'flex', alignItems: 'center' }, (_a = slotProps === null || slotProps === void 0 ? void 0 : slotProps.container) === null || _a === void 0 ? void 0 : _a.sx));
    }, [(_c = slotProps === null || slotProps === void 0 ? void 0 : slotProps.container) === null || _c === void 0 ? void 0 : _c.sx]);
    var boxSx = (0, react_1.useMemo)(function () { return ({
        display: 'flex',
        flex: '1 1 auto',
        justifyContent: 'center',
    }); }, []);
    return ((0, jsx_runtime_1.jsxs)(AppBar_1.default, __assign({ position: "sticky", className: classes_1.layoutClasses.header, sx: appBarSx }, other, { children: [slots === null || slots === void 0 ? void 0 : slots.topArea, (0, jsx_runtime_1.jsx)(Toolbar_1.default, __assign({ disableGutters: true }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.toolbar, { sx: toolbarSx, children: (0, jsx_runtime_1.jsxs)(Container_1.default, __assign({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.container, { sx: containerSx, children: [slots === null || slots === void 0 ? void 0 : slots.leftArea, (0, jsx_runtime_1.jsx)(Box_1.default, { sx: boxSx, children: slots === null || slots === void 0 ? void 0 : slots.centerArea }), slots === null || slots === void 0 ? void 0 : slots.rightArea] })) })), slots === null || slots === void 0 ? void 0 : slots.bottomArea, !disableElevation && offsetTop && (0, jsx_runtime_1.jsx)(StyledElevation, {})] })));
}
