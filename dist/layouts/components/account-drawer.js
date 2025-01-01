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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDrawer = AccountDrawer;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Avatar_1 = __importDefault(require("@mui/material/Avatar"));
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var react_1 = require("react");
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var styles_1 = require("@mui/material/styles");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var routes_react_1 = require("routes-react");
var _mock_1 = require("../../_mock");
var paths_1 = require("../../routes/paths");
var styles_2 = require("../../theme/styles");
var label_1 = require("../../components/label");
var iconify_1 = require("../../components/iconify");
var scrollbar_1 = require("../../components/scrollbar");
var animate_1 = require("../../components/animate");
var nav_helper_1 = require("./nav-helper");
var account_button_1 = require("./account-button");
var sign_out_button_1 = require("./sign-out-button");
function AccountDrawer(_a) {
    var _b;
    var _c = _a.data, data = _c === void 0 ? [] : _c, sx = _a.sx, other = __rest(_a, ["data", "sx"]);
    var theme = (0, styles_1.useTheme)();
    var router = (0, routes_react_1.useRouter)();
    var pathname = (0, routes_react_1.usePathname)();
    var user = _mock_1._mock.user;
    var _d = (0, react_1.useState)(false), open = _d[0], setOpen = _d[1];
    var handleOpenDrawer = (0, react_1.useCallback)(function () {
        setOpen(true);
    }, []);
    var handleCloseDrawer = (0, react_1.useCallback)(function () {
        setOpen(false);
    }, []);
    var handleClickItem = (0, react_1.useCallback)(function (path) {
        handleCloseDrawer();
        router.push(path);
    }, [handleCloseDrawer, router]);
    var renderAvatar = ((0, jsx_runtime_1.jsx)(animate_1.AnimateAvatar, { width: 96, slotProps: {
            avatar: { src: user === null || user === void 0 ? void 0 : user.photoURL, alt: user === null || user === void 0 ? void 0 : user.displayName },
            overlay: {
                border: 2,
                spacing: 3,
                color: "linear-gradient(135deg, ".concat((0, styles_2.varAlpha)(theme.vars.palette.primary.mainChannel, 0), " 25%, ").concat(theme.vars.palette.primary.main, " 100%)"),
            },
        }, children: (_b = user === null || user === void 0 ? void 0 : user.displayName) === null || _b === void 0 ? void 0 : _b.charAt(0).toUpperCase() }));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(account_button_1.AccountButton, __assign({ open: open, onClick: handleOpenDrawer, photoURL: user === null || user === void 0 ? void 0 : user.photoURL, displayName: user === null || user === void 0 ? void 0 : user.displayName, sx: sx }, other)), (0, jsx_runtime_1.jsxs)(Drawer_1.default, { open: open, onClose: handleCloseDrawer, anchor: "right", slotProps: { backdrop: { invisible: true } }, PaperProps: { sx: { width: 320 } }, children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: handleCloseDrawer, sx: { top: 12, left: 12, zIndex: 9, position: 'absolute' }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:close-line" }) }), (0, jsx_runtime_1.jsxs)(scrollbar_1.Scrollbar, { children: [(0, jsx_runtime_1.jsxs)(Stack_1.default, { alignItems: "center", sx: { pt: 8 }, children: [renderAvatar, (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle1", noWrap: true, sx: { mt: 2 }, children: user === null || user === void 0 ? void 0 : user.displayName }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", sx: { color: 'text.secondary', mt: 0.5 }, noWrap: true, children: user === null || user === void 0 ? void 0 : user.email })] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", spacing: 1, flexWrap: "wrap", justifyContent: "center", sx: { p: 3 }, children: [__spreadArray([], Array(3), true).map(function (_, index) { return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Switch to: ".concat(_mock_1._mock.fullName(index + 1)), children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { alt: _mock_1._mock.fullName(index + 1), src: _mock_1._mock.image.avatar(index + 1), onClick: function () { } }) }, _mock_1._mock.fullName(index + 1))); }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add account", children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { sx: {
                                                bgcolor: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08),
                                                border: "dashed 1px ".concat((0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.32)),
                                            }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:add-line" }) }) })] }), (0, jsx_runtime_1.jsx)(Stack_1.default, { sx: {
                                    py: 3,
                                    px: 2.5,
                                    borderTop: "dashed 1px ".concat(theme.vars.palette.divider),
                                    borderBottom: "dashed 1px ".concat(theme.vars.palette.divider),
                                }, children: data.map(function (option) {
                                    var rootLabel = pathname.includes('/dashboard') ? 'Home' : 'Dashboard';
                                    var rootHref = pathname.includes('/dashboard') ? '/' : paths_1.paths.dashboard.root;
                                    return ((0, jsx_runtime_1.jsxs)(MenuItem_1.default, { onClick: function () { return handleClickItem(option.label === 'Home' ? rootHref : option.href); }, sx: {
                                            py: 1,
                                            color: 'text.secondary',
                                            '& svg': { width: 24, height: 24 },
                                            '&:hover': { color: 'text.primary' },
                                        }, children: [option.icon, (0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: { ml: 2 }, children: option.label === 'Home' ? rootLabel : option.label }), option.info && ((0, jsx_runtime_1.jsx)(label_1.Label, { color: "error", sx: { ml: 1 }, children: option.info }))] }, option.label));
                                }) }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { px: 2.5, py: 3 }, children: (0, jsx_runtime_1.jsx)(nav_helper_1.UpgradeBlock, {}) })] }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { p: 2.5 }, children: (0, jsx_runtime_1.jsx)(sign_out_button_1.SignOutButton, { onClose: handleCloseDrawer }) })] })] }));
}
