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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverView = PopoverView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Radio_1 = __importDefault(require("@mui/material/Radio"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var FormLabel_1 = __importDefault(require("@mui/material/FormLabel"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var RadioGroup_1 = __importDefault(require("@mui/material/RadioGroup"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var react_1 = require("react");
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var paths_1 = require("../../../routes/paths");
var iconify_1 = require("../../../components/iconify");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var custom_popover_1 = require("../../../components/custom-popover");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
function PopoverView() {
    var _a = (0, react_1.useState)('top-left'), arrow = _a[0], setArrow = _a[1];
    var clickPopover = (0, custom_popover_1.usePopover)();
    var customizedPopover = (0, custom_popover_1.usePopover)();
    var hoverPopoverRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(false), hoverPopoverOpen = _b[0], setHoverPopoverOpen = _b[1];
    var handleChangePopoverArrow = (0, react_1.useCallback)(function (event) {
        setArrow(event.target.value);
    }, []);
    var handleHoverPopoverOpen = (0, react_1.useCallback)(function () {
        setHoverPopoverOpen(true);
    }, []);
    var handleHoverPopoverClose = (0, react_1.useCallback)(function () {
        setHoverPopoverOpen(false);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Popover", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Popover' }], moreLink: ['https://mui.com/components/popover'] }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentContainer, { sx: {
                    rowGap: 5,
                    columnGap: 3,
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
                }, children: [(0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Click & hover", sx: { gap: 3 }, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: clickPopover.onOpen, children: "Click popover" }), (0, jsx_runtime_1.jsx)(custom_popover_1.CustomPopover, { open: clickPopover.open, onClose: clickPopover.onClose, anchorEl: clickPopover.anchorEl, slotProps: { arrow: { placement: 'top-center' } }, children: (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { p: 2, maxWidth: 280 }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle1", gutterBottom: true, children: "Etiam feugiat lorem non metus" }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", sx: { color: 'text.secondary' }, children: "Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis." })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { ref: hoverPopoverRef, variant: "outlined", onMouseEnter: handleHoverPopoverOpen, onMouseLeave: handleHoverPopoverClose, children: "Hover popover." }), (0, jsx_runtime_1.jsx)(custom_popover_1.CustomPopover, { open: hoverPopoverOpen, anchorEl: hoverPopoverRef.current, slotProps: {
                                            arrow: { placement: 'bottom-center' },
                                            paper: {
                                                onMouseEnter: handleHoverPopoverOpen,
                                                onMouseLeave: handleHoverPopoverClose,
                                                sx: __assign({}, (hoverPopoverOpen && { pointerEvents: 'auto' })),
                                            },
                                        }, sx: { pointerEvents: 'none' }, children: (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { p: 2, maxWidth: 280 }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle1", gutterBottom: true, children: "Etiam feugiat lorem non metus" }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", sx: { color: 'text.secondary' }, children: "Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis." })] }) })] })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Customized", sx: { gap: 5 }, children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: customizedPopover.onOpen, sx: { bgcolor: 'action.hover' }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:more-vertical-fill" }) }), (0, jsx_runtime_1.jsxs)(FormControl_1.default, { children: [(0, jsx_runtime_1.jsx)(FormLabel_1.default, { sx: { typography: 'body2' }, children: "Arrow" }), (0, jsx_runtime_1.jsx)(RadioGroup_1.default, { value: arrow, onChange: handleChangePopoverArrow, children: [
                                            'top-left',
                                            'top-center',
                                            'top-right',
                                            'bottom-left',
                                            'bottom-center',
                                            'bottom-right',
                                            'left-top',
                                            'left-center',
                                            'left-bottom',
                                            'right-top',
                                            'right-center',
                                            'right-bottom',
                                        ].map(function (position) { return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: position, control: (0, jsx_runtime_1.jsx)(Radio_1.default, {}), label: position }, position)); }) })] }), (0, jsx_runtime_1.jsx)(custom_popover_1.CustomPopover, { open: customizedPopover.open, onClose: customizedPopover.onClose, anchorEl: customizedPopover.anchorEl, slotProps: { arrow: { placement: arrow } }, children: (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { p: 2, maxWidth: 280 }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle1", gutterBottom: true, children: "Etiam feugiat lorem non metus" }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", sx: { color: 'text.secondary' }, children: "Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis." })] }) })] })] })] }));
}
