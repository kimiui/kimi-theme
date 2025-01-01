'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuView = MenuView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Menu_1 = __importDefault(require("@mui/material/Menu"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var react_1 = require("react");
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var ListItemButton_1 = __importDefault(require("@mui/material/ListItemButton"));
var paths_1 = require("../../../routes/paths");
var iconify_1 = require("../../../components/iconify");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
var OPTIONS = [
    'Show some love to Material-UI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content',
];
var OPTIONS_MAXHEIGHT = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];
// ----------------------------------------------------------------------
function MenuView() {
    var _a = (0, react_1.useState)(1), selectedIndex = _a[0], setSelectedIndex = _a[1];
    var _b = (0, react_1.useState)(null), isOpen = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)(null), isOpenList = _c[0], setOpenList = _c[1];
    var _d = (0, react_1.useState)(null), isOpenMaxHeight = _d[0], setOpenMaxHeight = _d[1];
    var handleClick = (0, react_1.useCallback)(function (event) {
        setOpenMaxHeight(event.currentTarget);
    }, []);
    var handleClickListItem = (0, react_1.useCallback)(function (event) {
        setOpenList(event.currentTarget);
    }, []);
    var handleMenuItemClick = (0, react_1.useCallback)(function (event, index) {
        setSelectedIndex(index);
        setOpenList(null);
    }, []);
    var handleOpen = (0, react_1.useCallback)(function (event) {
        setOpen(event.currentTarget);
    }, []);
    var handleClose = (0, react_1.useCallback)(function () {
        setOpen(null);
    }, []);
    var handleMaxHeightClose = (0, react_1.useCallback)(function () {
        setOpenMaxHeight(null);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Menu", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Menu' }], moreLink: ['https://mui.com/components/menus'] }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentContainer, { sx: {
                    rowGap: 5,
                    columnGap: 3,
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                    },
                }, children: [(0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Simple", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outlined", onClick: handleOpen, children: "Open Menu" }), (0, jsx_runtime_1.jsx)(Menu_1.default, { id: "simple-menu", anchorEl: isOpen, onClose: handleClose, open: !!isOpen, children: ['Profile', 'My account', 'Logout'].map(function (option) { return ((0, jsx_runtime_1.jsx)(MenuItem_1.default, { selected: option === 'Profile', onClick: handleClose, children: option }, option)); }) })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Selected", children: [(0, jsx_runtime_1.jsx)("nav", { "aria-label": "Device settings", children: (0, jsx_runtime_1.jsx)(ListItemButton_1.default, { "aria-haspopup": "true", "aria-controls": "lock-menu", "aria-label": "when device is locked", onClick: handleClickListItem, children: (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "When device is locked", secondary: OPTIONS[selectedIndex] }) }) }), (0, jsx_runtime_1.jsx)(Menu_1.default, { id: "lock-menu", anchorEl: isOpenList, onClose: handleClose, open: !!isOpenList, children: OPTIONS.map(function (option, index) { return ((0, jsx_runtime_1.jsx)(MenuItem_1.default, { disabled: index === 0, selected: index === selectedIndex, onClick: function (event) { return handleMenuItemClick(event, index); }, children: option }, option)); }) })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Max height", children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { "aria-label": "more", "aria-controls": "long-menu", "aria-haspopup": "true", onClick: handleClick, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:more-vertical-fill" }) }), (0, jsx_runtime_1.jsx)(Menu_1.default, { id: "long-menu", anchorEl: isOpenMaxHeight, onClose: handleMaxHeightClose, open: !!isOpenMaxHeight, slotProps: {
                                    paper: { sx: { width: '20ch', maxHeight: 48 * 4.5 } },
                                }, children: OPTIONS_MAXHEIGHT.map(function (option) { return ((0, jsx_runtime_1.jsx)(MenuItem_1.default, { selected: option === 'Pyxis', onClick: handleMaxHeightClose, children: option }, option)); }) })] })] })] }));
}
