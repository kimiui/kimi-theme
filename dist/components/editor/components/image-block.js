'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageBlock = ImageBlock;
var jsx_runtime_1 = require("react/jsx-runtime");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Popover_1 = __importDefault(require("@mui/material/Popover"));
var react_1 = require("react");
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var classes_1 = require("../classes");
var toolbar_item_1 = require("./toolbar-item");
// ----------------------------------------------------------------------
function ImageBlock(_a) {
    var editor = _a.editor;
    var _b = (0, react_1.useState)(''), url = _b[0], setUrl = _b[1];
    var _c = (0, react_1.useState)(null), anchorEl = _c[0], setAnchorEl = _c[1];
    var handleOpenPopover = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClosePopover = function () {
        setAnchorEl(null);
    };
    var handleUpdateUrl = (0, react_1.useCallback)(function () {
        handleClosePopover();
        if (anchorEl) {
            editor === null || editor === void 0 ? void 0 : editor.chain().focus().setImage({ src: url }).run();
        }
    }, [anchorEl, editor, url]);
    if (!editor) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(toolbar_item_1.ToolbarItem, { "aria-label": "Image", className: classes_1.editorClasses.toolbar.image, onClick: handleOpenPopover, icon: (0, jsx_runtime_1.jsx)("path", { d: "M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" }) }), (0, jsx_runtime_1.jsxs)(Popover_1.default, { id: anchorEl ? 'simple-popover' : undefined, open: !!anchorEl, anchorEl: anchorEl, onClose: handleClosePopover, anchorOrigin: { vertical: 'bottom', horizontal: 'left' }, slotProps: { paper: { sx: { p: 2.5 } } }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", sx: { mb: 1 }, children: "URL" }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", alignItems: "center", spacing: 1, children: [(0, jsx_runtime_1.jsx)(TextField_1.default, { size: "small", placeholder: "Enter URL here...", value: url, onChange: function (event) {
                                    setUrl(event.target.value);
                                }, sx: { width: 240 } }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: handleUpdateUrl, children: "Apply" })] })] })] }));
}
