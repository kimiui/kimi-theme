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
exports.HeaderBase = HeaderBase;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
var theme_mode_toggle_1 = require("../../components/theme-mode-toggle");
var header_section_1 = require("./header-section");
var searchbar_1 = require("../components/searchbar");
var menu_button_1 = require("../components/menu-button");
var sign_in_button_1 = require("../components/sign-in-button");
var account_drawer_1 = require("../components/account-drawer");
var settings_button_1 = require("../components/settings-button");
var language_popover_1 = require("../components/language-popover");
var contacts_popover_1 = require("../components/contacts-popover");
var workspaces_popover_1 = require("../components/workspaces-popover");
var notifications_drawer_1 = require("../components/notifications-drawer");
// ----------------------------------------------------------------------
var StyledDivider = (0, styles_1.styled)('span')(function (_a) {
    var theme = _a.theme;
    return ({
        width: 1,
        height: 10,
        flexShrink: 0,
        display: 'none',
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: theme.spacing(2.5),
        marginRight: theme.spacing(2.5),
        backgroundColor: 'currentColor',
        color: theme.vars.palette.divider,
        '&::before, &::after': {
            top: -5,
            width: 3,
            height: 3,
            content: '""',
            flexShrink: 0,
            borderRadius: '50%',
            position: 'absolute',
            backgroundColor: 'currentColor',
        },
        '&::after': { bottom: -5, top: 'auto' },
    });
});
function HeaderBase(_a) {
    var _b;
    var sx = _a.sx, data = _a.data, slots = _a.slots, slotProps = _a.slotProps, onOpenNav = _a.onOpenNav, layoutQuery = _a.layoutQuery, _c = _a.slotsDisplay, _d = _c === void 0 ? {} : _c, _e = _d.themeMode, themeMode = _e === void 0 ? true : _e, _f = _d.signIn, signIn = _f === void 0 ? true : _f, _g = _d.account, account = _g === void 0 ? true : _g, _h = _d.settings, settings = _h === void 0 ? true : _h, _j = _d.contacts, contacts = _j === void 0 ? true : _j, _k = _d.searchbar, searchbar = _k === void 0 ? true : _k, _l = _d.workspaces, workspaces = _l === void 0 ? true : _l, _m = _d.menuButton, menuButton = _m === void 0 ? true : _m, _o = _d.localization, localization = _o === void 0 ? true : _o, _p = _d.notifications, notifications = _p === void 0 ? true : _p, other = __rest(_a, ["sx", "data", "slots", "slotProps", "onOpenNav", "layoutQuery", "slotsDisplay"]);
    var theme = (0, styles_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(header_section_1.HeaderSection, __assign({ sx: sx, layoutQuery: layoutQuery, slots: __assign(__assign({}, slots), { leftAreaStart: slots === null || slots === void 0 ? void 0 : slots.leftAreaStart, leftArea: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [slots === null || slots === void 0 ? void 0 : slots.leftAreaStart, menuButton && ((0, jsx_runtime_1.jsx)(menu_button_1.MenuButton, { "data-slot": "menu-button", onClick: onOpenNav, sx: (_b = {
                                mr: 1,
                                ml: -1
                            },
                            _b[theme.breakpoints.up(layoutQuery)] = { display: 'none' },
                            _b) })), (0, jsx_runtime_1.jsx)(StyledDivider, { "data-slot": "divider" }), workspaces && (0, jsx_runtime_1.jsx)(workspaces_popover_1.WorkspacesPopover, { "data-slot": "workspaces", data: data === null || data === void 0 ? void 0 : data.workspaces }), slots === null || slots === void 0 ? void 0 : slots.leftAreaEnd] })), rightArea: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [slots === null || slots === void 0 ? void 0 : slots.rightAreaStart, (0, jsx_runtime_1.jsxs)(Box_1.default, { "data-area": "right", sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: { xs: 1, sm: 1.5 },
                        }, children: [searchbar && (0, jsx_runtime_1.jsx)(searchbar_1.Searchbar, { "data-slot": "searchbar", data: data === null || data === void 0 ? void 0 : data.nav }), themeMode && (0, jsx_runtime_1.jsx)(theme_mode_toggle_1.ThemeModeToggle, {}), localization && (0, jsx_runtime_1.jsx)(language_popover_1.LanguagePopover, { "data-slot": "localization", data: data === null || data === void 0 ? void 0 : data.langs }), notifications && ((0, jsx_runtime_1.jsx)(notifications_drawer_1.NotificationsDrawer, { "data-slot": "notifications", data: data === null || data === void 0 ? void 0 : data.notifications })), contacts && (0, jsx_runtime_1.jsx)(contacts_popover_1.ContactsPopover, { "data-slot": "contacts", data: data === null || data === void 0 ? void 0 : data.contacts }), settings && (0, jsx_runtime_1.jsx)(settings_button_1.SettingsButton, { "data-slot": "settings" }), account && (0, jsx_runtime_1.jsx)(account_drawer_1.AccountDrawer, { "data-slot": "account", data: data === null || data === void 0 ? void 0 : data.account }), signIn && (0, jsx_runtime_1.jsx)(sign_in_button_1.SignInButton, {})] }), slots === null || slots === void 0 ? void 0 : slots.rightAreaEnd] })) }), slotProps: slotProps }, other)));
}
