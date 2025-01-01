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
exports.SettingsButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Badge_1 = __importDefault(require("@mui/material/Badge"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var iconify_1 = require("lib/components/iconify");
var context_1 = require("lib/components/settings/context");
exports.SettingsButton = (0, react_1.memo)(function (_a) {
    var sx = _a.sx, other = __rest(_a, ["sx"]);
    var settings = (0, context_1.useSettingsContext)();
    var memoizedSx = (0, react_1.useMemo)(function () { return (__assign({ p: 0, width: 40, height: 40 }, sx)); }, [sx]);
    return ((0, jsx_runtime_1.jsx)(IconButton_1.default, __assign({ "aria-label": "settings", onClick: settings.onToggleDrawer, sx: memoizedSx }, other, { children: (0, jsx_runtime_1.jsx)(Badge_1.default, { color: "error", variant: "dot", invisible: !settings.canReset, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "material-symbols:settings-rounded" }) }) })));
});
