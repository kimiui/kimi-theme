'use client';
"use strict";
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
exports.ListView = ListView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var List_1 = __importDefault(require("@mui/material/List"));
var Avatar_1 = __importDefault(require("@mui/material/Avatar"));
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var react_1 = require("react");
var ListItem_1 = __importDefault(require("@mui/material/ListItem"));
var Collapse_1 = __importDefault(require("@mui/material/Collapse"));
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var ListItemIcon_1 = __importDefault(require("@mui/material/ListItemIcon"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var ListSubheader_1 = __importDefault(require("@mui/material/ListSubheader"));
var ListItemAvatar_1 = __importDefault(require("@mui/material/ListItemAvatar"));
var ListItemButton_1 = __importDefault(require("@mui/material/ListItemButton"));
var ListItemSecondaryAction_1 = __importDefault(require("@mui/material/ListItemSecondaryAction"));
var paths_1 = require("../../../routes/paths");
var iconify_1 = require("../../../components/iconify");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
function ListView() {
    var _a = (0, react_1.useState)(true), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)([0]), checked = _b[0], setChecked = _b[1];
    var _c = (0, react_1.useState)(['wifi']), toggle = _c[0], setToggle = _c[1];
    var _d = (0, react_1.useState)(1), selectedIndex = _d[0], setSelectedIndex = _d[1];
    var handleClick = (0, react_1.useCallback)(function () {
        setOpen(function (prev) { return !prev; });
    }, []);
    var handleListItemClick = (0, react_1.useCallback)(function (event, index) {
        setSelectedIndex(index);
    }, []);
    var handleCheck = function (value) { return function () {
        var currentIndex = checked.indexOf(value);
        var newChecked = __spreadArray([], checked, true);
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    }; };
    var handleToggle = function (value) { return function () {
        var currentIndex = toggle.indexOf(value);
        var newChecked = __spreadArray([], toggle, true);
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setToggle(newChecked);
    }; };
    var DEMO = [
        {
            name: 'Simple',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { bgcolor: 'background.paper' }, children: [(0, jsx_runtime_1.jsx)("nav", { "aria-label": "main mailbox folders", children: (0, jsx_runtime_1.jsxs)(List_1.default, { children: [(0, jsx_runtime_1.jsx)(ListItem_1.default, { disablePadding: true, children: (0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:inbox-in-bold", width: 24 }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Inbox" })] }) }), (0, jsx_runtime_1.jsx)(ListItem_1.default, { disablePadding: true, children: (0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "fluent:mail-24-filled", width: 24 }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Drafts" })] }) })] }) }), (0, jsx_runtime_1.jsx)(Divider_1.default, {}), (0, jsx_runtime_1.jsx)("nav", { "aria-label": "secondary mailbox folders", children: (0, jsx_runtime_1.jsxs)(List_1.default, { children: [(0, jsx_runtime_1.jsx)(ListItem_1.default, { disablePadding: true, children: (0, jsx_runtime_1.jsx)(ListItemButton_1.default, { children: (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Trash" }) }) }), (0, jsx_runtime_1.jsx)(ListItem_1.default, { disablePadding: true, children: (0, jsx_runtime_1.jsx)(ListItemButton_1.default, { component: "a", href: "#simple-list", children: (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Spam" }) }) })] }) })] }) })),
        },
        {
            name: 'Nested',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: (0, jsx_runtime_1.jsxs)(List_1.default, { sx: { bgcolor: 'background.paper' }, component: "nav", "aria-labelledby": "nested-list-subheader", subheader: (0, jsx_runtime_1.jsx)(ListSubheader_1.default, { component: "div", id: "nested-list-subheader", children: "Nested List Items" }), children: [(0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "iconamoon:send-fill", width: 24 }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Sent mail" })] }), (0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "fluent:mail-24-filled", width: 24 }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Drafts" })] }), (0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { onClick: handleClick, children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:inbox-in-bold", width: 24 }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Inbox" }), (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill' })] }), (0, jsx_runtime_1.jsx)(Collapse_1.default, { in: open, timeout: "auto", unmountOnExit: true, children: (0, jsx_runtime_1.jsx)(List_1.default, { component: "div", disablePadding: true, children: (0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { sx: { pl: 4 }, children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-star-border", width: 24 }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Starred" })] }) }) })] }) })),
        },
        {
            name: 'Folder',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: (0, jsx_runtime_1.jsxs)(List_1.default, { sx: { bgcolor: 'background.paper' }, children: [(0, jsx_runtime_1.jsxs)(ListItem_1.default, { children: [(0, jsx_runtime_1.jsx)(ListItemAvatar_1.default, { children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:baseline-image", width: 24 }) }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Photos", secondary: "Jan 9, 2014" })] }), (0, jsx_runtime_1.jsxs)(ListItem_1.default, { children: [(0, jsx_runtime_1.jsx)(ListItemAvatar_1.default, { children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:baseline-work", width: 24 }) }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Work", secondary: "Jan 7, 2014" })] }), (0, jsx_runtime_1.jsxs)(ListItem_1.default, { children: [(0, jsx_runtime_1.jsx)(ListItemAvatar_1.default, { children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-beach-access", width: 24 }) }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Vacation", secondary: "July 20, 2014" })] })] }) })),
        },
        {
            name: 'Selected',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { bgcolor: 'background.paper' }, children: [(0, jsx_runtime_1.jsxs)(List_1.default, { component: "nav", "aria-label": "main mailbox folders", children: [(0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { selected: selectedIndex === 0, onClick: function (event) { return handleListItemClick(event, 0); }, children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:inbox-in-bold", width: 24 }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Inbox" })] }), (0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { selected: selectedIndex === 1, onClick: function (event) { return handleListItemClick(event, 1); }, children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "fluent:mail-24-filled", width: 24 }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Drafts" })] })] }), (0, jsx_runtime_1.jsx)(Divider_1.default, {}), (0, jsx_runtime_1.jsxs)(List_1.default, { component: "nav", "aria-label": "secondary mailbox folder", children: [(0, jsx_runtime_1.jsx)(ListItemButton_1.default, { selected: selectedIndex === 2, onClick: function (event) { return handleListItemClick(event, 2); }, children: (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Trash" }) }), (0, jsx_runtime_1.jsx)(ListItemButton_1.default, { selected: selectedIndex === 3, onClick: function (event) { return handleListItemClick(event, 3); }, children: (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Spam" }) })] })] }) })),
        },
        {
            name: 'Controls',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: (0, jsx_runtime_1.jsx)(List_1.default, { sx: { bgcolor: 'background.paper' }, children: [0, 1, 2, 3].map(function (value) {
                        var labelId = "checkbox-list-label-".concat(value);
                        return ((0, jsx_runtime_1.jsx)(ListItem_1.default, { secondaryAction: (0, jsx_runtime_1.jsx)(IconButton_1.default, { edge: "end", "aria-label": "comments", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:chat-round-dots-bold", width: 24 }) }), disablePadding: true, children: (0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { role: undefined, dense: true, onClick: handleCheck(value), children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { edge: "start", checked: checked.indexOf(value) !== -1, tabIndex: -1, disableRipple: true, inputProps: { id: labelId, 'aria-labelledby': labelId } }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { id: labelId, primary: "Line item ".concat(value + 1) })] }, value) }, value));
                    }) }) })),
        },
        {
            name: 'Switch',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: (0, jsx_runtime_1.jsxs)(List_1.default, { subheader: (0, jsx_runtime_1.jsx)(ListSubheader_1.default, { children: "Settings" }), sx: { bgcolor: 'background.paper' }, children: [(0, jsx_runtime_1.jsx)(ListItem_1.default, { children: (0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:baseline-wifi", width: 24 }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { id: "switch-list-label-wifi", primary: "Wi-Fi" }), (0, jsx_runtime_1.jsx)(ListItemSecondaryAction_1.default, { children: (0, jsx_runtime_1.jsx)(Switch_1.default, { edge: "end", onChange: handleToggle('wifi'), checked: toggle.indexOf('wifi') !== -1, inputProps: {
                                                id: 'switch-list-label-wifi',
                                                'aria-labelledby': 'switch-list-label-wifi',
                                            } }) })] }) }), (0, jsx_runtime_1.jsx)(ListItem_1.default, { children: (0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:baseline-bluetooth", width: 24 }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { id: "switch-list-label-bluetooth", primary: "Bluetooth" }), (0, jsx_runtime_1.jsx)(ListItemSecondaryAction_1.default, { children: (0, jsx_runtime_1.jsx)(Switch_1.default, { edge: "end", onChange: handleToggle('bluetooth'), checked: toggle.indexOf('bluetooth') !== -1, inputProps: {
                                                id: 'switch-list-label-bluetooth',
                                                'aria-labelledby': 'switch-list-label-bluetooth',
                                            } }) })] }) })] }) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "List", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Lists' }], moreLink: ['https://mui.com/components/lists'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
