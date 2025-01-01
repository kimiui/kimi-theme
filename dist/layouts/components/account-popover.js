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
exports.AccountPopover = AccountPopover;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var MenuList_1 = __importDefault(require("@mui/material/MenuList"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var routes_react_1 = require("routes-react");
var paths_1 = require("lib/routes/paths");
var label_1 = require("lib/components/label");
var hooks_1 = require("lib/auth/hooks");
var custom_popover_1 = require("lib/components/custom-popover");
var account_button_1 = require("./account-button");
var sign_out_button_1 = require("./sign-out-button");
function AccountPopover(_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, sx = _a.sx, other = __rest(_a, ["data", "sx"]);
    var router = (0, routes_react_1.useRouter)();
    var popover = (0, custom_popover_1.usePopover)();
    var pathname = (0, routes_react_1.usePathname)();
    var user = (0, hooks_1.useMockedUser)().user;
    var handleClickItem = function (path) {
        popover.onClose();
        router.push(path);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(account_button_1.AccountButton, __assign({ open: popover.open, onClick: popover.onOpen, photoURL: user === null || user === void 0 ? void 0 : user.photoURL, displayName: user === null || user === void 0 ? void 0 : user.displayName, sx: sx }, other)), (0, jsx_runtime_1.jsxs)(custom_popover_1.CustomPopover, { open: popover.open, anchorEl: popover.anchorEl, onClose: popover.onClose, slotProps: {
                    paper: { sx: { p: 0, width: 200 } },
                    arrow: { offset: 20 },
                }, children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { p: 2, pb: 1.5 }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", noWrap: true, children: user === null || user === void 0 ? void 0 : user.displayName }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", sx: { color: 'text.secondary' }, noWrap: true, children: user === null || user === void 0 ? void 0 : user.email })] }), (0, jsx_runtime_1.jsx)(Divider_1.default, { sx: { borderStyle: 'dashed' } }), (0, jsx_runtime_1.jsx)(MenuList_1.default, { sx: { p: 1, my: 1 }, children: data.map(function (option) {
                            var rootLabel = pathname.includes('/dashboard') ? 'Home' : 'Dashboard';
                            var rootHref = pathname.includes('/dashboard') ? '/' : paths_1.paths.dashboard.root;
                            return ((0, jsx_runtime_1.jsxs)(MenuItem_1.default, { onClick: function () { return handleClickItem(option.label === 'Home' ? rootHref : option.href); }, sx: {
                                    py: 1,
                                    color: 'text.secondary',
                                    '& svg': { width: 24, height: 24 },
                                    '&:hover': { color: 'text.primary' },
                                }, children: [option.icon, (0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", children: option.label === 'Home' ? rootLabel : option.label }), option.info && ((0, jsx_runtime_1.jsx)(label_1.Label, { color: "error", sx: { ml: 1 }, children: option.info }))] }, option.label));
                        }) }), (0, jsx_runtime_1.jsx)(Divider_1.default, { sx: { borderStyle: 'dashed' } }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { p: 1 }, children: (0, jsx_runtime_1.jsx)(sign_out_button_1.SignOutButton, { size: "medium", variant: "text", onClose: popover.onClose, sx: { display: 'block', textAlign: 'left' } }) })] })] }));
}
