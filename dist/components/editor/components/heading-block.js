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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadingBlock = HeadingBlock;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Menu_1 = __importDefault(require("@mui/material/Menu"));
var List_1 = require("@mui/material/List");
var ButtonBase_1 = __importStar(require("@mui/material/ButtonBase"));
var styles_1 = require("lib/theme/styles");
var iconify_1 = require("../../iconify");
var toolbar_item_1 = require("./toolbar-item");
var HEADING_OPTIONS = [
    'Heading 1',
    'Heading 2',
    'Heading 3',
    'Heading 4',
    'Heading 5',
    'Heading 6',
];
function HeadingBlock(_a) {
    var _b;
    var editor = _a.editor;
    var _c = (0, react_1.useState)(null), anchorEl = _c[0], setAnchorEl = _c[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    if (!editor) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(ButtonBase_1.default, { id: "heading-menu-button", "aria-label": "Heading menu button", "aria-controls": anchorEl ? 'heading-menu-button' : undefined, "aria-haspopup": "true", "aria-expanded": anchorEl ? 'true' : undefined, onClick: handleClick, sx: {
                    px: 1,
                    width: 120,
                    height: 32,
                    borderRadius: 0.75,
                    typography: 'body2',
                    justifyContent: 'space-between',
                    border: function (theme) { return "solid 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.2)); },
                }, children: [(editor.isActive('heading', { level: 1 }) && 'Heading 1') ||
                        (editor.isActive('heading', { level: 2 }) && 'Heading 2') ||
                        (editor.isActive('heading', { level: 3 }) && 'Heading 3') ||
                        (editor.isActive('heading', { level: 4 }) && 'Heading 4') ||
                        (editor.isActive('heading', { level: 5 }) && 'Heading 5') ||
                        (editor.isActive('heading', { level: 6 }) && 'Heading 6') ||
                        'Paragraph', (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 16, icon: anchorEl ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill' })] }), (0, jsx_runtime_1.jsxs)(Menu_1.default, { id: "heading-menu", anchorEl: anchorEl, open: !!anchorEl, onClose: handleClose, MenuListProps: { 'aria-labelledby': 'heading-button' }, slotProps: {
                    paper: {
                        sx: (_b = {
                                width: 120
                            },
                            _b["& .".concat(List_1.listClasses.root)] = {
                                gap: 0.5,
                                display: 'flex',
                                flexDirection: 'column',
                            },
                            _b["& .".concat(ButtonBase_1.buttonBaseClasses.root)] = {
                                px: 1,
                                width: 1,
                                height: 34,
                                borderRadius: 0.75,
                                justifyContent: 'flex-start',
                                '&:hover': { backgroundColor: 'action.hover' },
                            },
                            _b),
                    },
                }, children: [(0, jsx_runtime_1.jsx)(toolbar_item_1.ToolbarItem, { component: "li", label: "Paragraph", active: editor.isActive('paragraph'), onClick: function () {
                            handleClose();
                            editor.chain().focus().setParagraph().run();
                        } }), HEADING_OPTIONS.map(function (heading, index) {
                        var level = (index + 1);
                        return ((0, jsx_runtime_1.jsx)(toolbar_item_1.ToolbarItem, { "aria-label": heading, component: "li", label: heading, active: editor.isActive('heading', { level: level }), onClick: function () {
                                handleClose();
                                editor.chain().focus().toggleHeading({ level: level }).run();
                            }, sx: __assign({}, (heading !== 'Paragraph' && {
                                fontSize: 18 - index,
                                fontWeight: 'fontWeightBold',
                            })) }, heading));
                    })] })] }));
}
