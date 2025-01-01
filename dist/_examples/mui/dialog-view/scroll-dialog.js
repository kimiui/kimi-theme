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
exports.ScrollDialog = ScrollDialog;
var jsx_runtime_1 = require("react/jsx-runtime");
var ahooks_1 = require("ahooks");
var Button_1 = __importDefault(require("@mui/material/Button"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogContentText_1 = __importDefault(require("@mui/material/DialogContentText"));
var react_1 = require("react");
// ----------------------------------------------------------------------
function ScrollDialog() {
    var _a = (0, ahooks_1.useBoolean)(), dialog = _a[0], dialogActions = _a[1];
    var _b = (0, react_1.useState)('paper'), scroll = _b[0], setScroll = _b[1];
    var handleClickOpen = (0, react_1.useCallback)(function (scrollType) { return function () {
        dialogActions.setTrue();
        setScroll(scrollType);
    }; }, [dialogActions]);
    var descriptionElementRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (dialog) {
            var descriptionElement = descriptionElementRef.current;
            if (descriptionElement) {
                descriptionElement.focus();
            }
        }
    }, [dialog]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outlined", onClick: handleClickOpen('paper'), sx: { mr: 2 }, children: "scroll=paper" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outlined", onClick: handleClickOpen('body'), children: "scroll=body" }), (0, jsx_runtime_1.jsxs)(Dialog_1.default, { open: dialog, onClose: dialogActions.setFalse, scroll: scroll, children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, { sx: { pb: 2 }, children: "Subscribe" }), (0, jsx_runtime_1.jsx)(DialogContent_1.default, { dividers: scroll === 'paper', children: (0, jsx_runtime_1.jsx)(DialogContentText_1.default, { ref: descriptionElementRef, tabIndex: -1, children: __spreadArray([], new Array(50), true).map(function () { return "Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et."; })
                                .join('\n') }) }), (0, jsx_runtime_1.jsxs)(DialogActions_1.default, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { onClick: dialogActions.setFalse, children: "Cancel" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: dialogActions.setFalse, children: "Subscribe" })] })] })] }));
}
