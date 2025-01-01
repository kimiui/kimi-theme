'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyToClipboard = CopyToClipboard;
var jsx_runtime_1 = require("react/jsx-runtime");
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var react_1 = require("react");
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
var snackbar_1 = require("../../../components/snackbar");
var iconify_1 = require("../../../components/iconify");
var hooks_1 = require("../../../hooks");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
function CopyToClipboard() {
    var copy = (0, hooks_1.useCopyToClipboard)().copy;
    var _a = (0, react_1.useState)('https://www.npmjs.com/package/'), value = _a[0], setValue = _a[1];
    var textOnClick = "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia\n  Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat\n  dolor lectus quis orci. Cras non dolor.\n  ";
    var onCopy = (0, react_1.useCallback)(function (text) {
        if (text) {
            snackbar_1.toast.success('Copied!');
            copy(text);
        }
    }, [copy]);
    var handleClick = (0, hooks_1.useDoubleClick)({ doubleClick: function () { return onCopy(textOnClick); } });
    var handleChange = (0, react_1.useCallback)(function (event) {
        setValue(event.target.value);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentContainer, { sx: {
            rowGap: 5,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }, children: [(0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "onChange", children: (0, jsx_runtime_1.jsx)(TextField_1.default, { fullWidth: true, value: value, onChange: handleChange, slotProps: {
                        input: {
                            endAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "end", children: (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Copy", children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: function () { return onCopy(value); }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:copy-fill", width: 24 }) }) }) })),
                        },
                    } }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "onDoubleClick", children: (0, jsx_runtime_1.jsx)(Typography_1.default, { onClick: handleClick, children: textOnClick }) })] }));
}
