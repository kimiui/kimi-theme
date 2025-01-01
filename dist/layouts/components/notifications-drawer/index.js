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
exports.NotificationsDrawer = NotificationsDrawer;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Tab_1 = __importDefault(require("@mui/material/Tab"));
var ahooks_1 = require("ahooks");
var Badge_1 = __importDefault(require("@mui/material/Badge"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var react_1 = require("react");
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var label_1 = require("../../../components/label");
var iconify_1 = require("../../../components/iconify");
var animate_1 = require("../../../components/animate");
var scrollbar_1 = require("../../../components/scrollbar");
var custom_tabs_1 = require("../../../components/custom-tabs");
var notification_item_1 = require("./notification-item");
// ----------------------------------------------------------------------
var TABS = [
    { value: 'all', label: 'All', count: 22 },
    { value: 'unread', label: 'Unread', count: 12 },
    { value: 'archived', label: 'Archived', count: 10 },
];
function NotificationsDrawer(_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, sx = _a.sx, other = __rest(_a, ["data", "sx"]);
    var _c = (0, ahooks_1.useBoolean)(), drawer = _c[0], _d = _c[1], setTrue = _d.setTrue, setFalse = _d.setFalse;
    var _e = (0, react_1.useState)('all'), currentTab = _e[0], setCurrentTab = _e[1];
    var handleChangeTab = (0, react_1.useCallback)(function (event, newValue) {
        setCurrentTab(newValue);
    }, []);
    var _f = (0, react_1.useState)(data), notifications = _f[0], setNotifications = _f[1];
    var totalUnRead = notifications.filter(function (item) { return item.isUnRead === true; }).length;
    var handleMarkAllAsRead = function () {
        setNotifications(notifications.map(function (notification) { return (__assign(__assign({}, notification), { isUnRead: false })); }));
    };
    var renderHead = ((0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", alignItems: "center", sx: { py: 2, pl: 2.5, pr: 1, minHeight: 68 }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h6", sx: { flexGrow: 1 }, children: "Notifications" }), !!totalUnRead && ((0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Mark all as read", children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { color: "primary", onClick: handleMarkAllAsRead, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:done-all-fill" }) }) })), (0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: setFalse, sx: { display: { xs: 'inline-flex', sm: 'none' } }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:close-line" }) }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:settings-bold-duotone" }) })] }));
    var renderTabs = ((0, jsx_runtime_1.jsx)(custom_tabs_1.CustomTabs, { variant: "fullWidth", value: currentTab, onChange: handleChangeTab, children: TABS.map(function (tab) { return ((0, jsx_runtime_1.jsx)(Tab_1.default, { iconPosition: "end", value: tab.value, label: tab.label, icon: (0, jsx_runtime_1.jsx)(label_1.Label, { variant: ((tab.value === 'all' || tab.value === currentTab) && 'filled') || 'soft', color: (tab.value === 'unread' && 'info') ||
                    (tab.value === 'archived' && 'success') ||
                    'default', children: tab.count }) }, tab.value)); }) }));
    var renderList = ((0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: "ul", children: notifications === null || notifications === void 0 ? void 0 : notifications.map(function (notification) { return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", sx: { display: 'flex' }, children: (0, jsx_runtime_1.jsx)(notification_item_1.NotificationItem, { notification: notification }) }, notification.id)); }) }) }));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, __assign({ component: framer_motion_1.m.button, whileTap: "tap", whileHover: "hover", variants: (0, animate_1.varHover)(1.05), onClick: setTrue, sx: sx }, other, { children: (0, jsx_runtime_1.jsx)(Badge_1.default, { badgeContent: totalUnRead, color: "error", children: (0, jsx_runtime_1.jsxs)(SvgIcon_1.default, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.393 4.393 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7", opacity: "0.5" }), (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M12.75 6a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0" })] }) }) })), (0, jsx_runtime_1.jsxs)(Drawer_1.default, { open: drawer, onClose: setFalse, anchor: "right", slotProps: { backdrop: { invisible: true } }, PaperProps: { sx: { width: 1, maxWidth: 420 } }, children: [renderHead, renderTabs, renderList, (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { p: 1 }, children: (0, jsx_runtime_1.jsx)(Button_1.default, { fullWidth: true, size: "large", children: "View all" }) })] })] }));
}
