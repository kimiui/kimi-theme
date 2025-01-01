'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxWidthDialog = MaxWidthDialog;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var ahooks_1 = require("ahooks");
var Button_1 = __importDefault(require("@mui/material/Button"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var Select_1 = __importDefault(require("@mui/material/Select"));
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var react_1 = require("react");
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
// ----------------------------------------------------------------------
function MaxWidthDialog() {
    var _a = (0, ahooks_1.useBoolean)(), dialog = _a[0], dialogActions = _a[1];
    var _b = (0, react_1.useState)(true), fullWidth = _b[0], setFullWidth = _b[1];
    var _c = (0, react_1.useState)('sm'), maxWidth = _c[0], setMaxWidth = _c[1];
    var handleMaxWidthChange = (0, react_1.useCallback)(function (event) {
        setMaxWidth(
        // @ts-expect-error autofill of arbitrary value is not handled.
        event.target.value);
    }, []);
    var handleFullWidthChange = (0, react_1.useCallback)(function (event) {
        setFullWidth(event.target.checked);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outlined", onClick: dialogActions.setTrue, children: "Max width dialog" }), (0, jsx_runtime_1.jsxs)(Dialog_1.default, { open: dialog, maxWidth: maxWidth, onClose: dialogActions.setFalse, fullWidth: fullWidth, children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, { children: "Optional sizes" }), (0, jsx_runtime_1.jsxs)(DialogContent_1.default, { children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { sx: { color: 'text.secondary' }, children: "You can set my maximum width and whether to adapt or not." }), (0, jsx_runtime_1.jsxs)(Box_1.default, { component: "form", noValidate: true, sx: {
                                    margin: 'auto',
                                    display: 'flex',
                                    width: 'fit-content',
                                    flexDirection: 'column',
                                }, children: [(0, jsx_runtime_1.jsxs)(FormControl_1.default, { sx: { my: 3, minWidth: 160 }, children: [(0, jsx_runtime_1.jsx)(InputLabel_1.default, { htmlFor: "max-width-label", children: "maxWidth" }), (0, jsx_runtime_1.jsxs)(Select_1.default, { autoFocus: true, value: maxWidth, onChange: handleMaxWidthChange, label: "maxWidth", inputProps: { id: 'max-width-label' }, children: [(0, jsx_runtime_1.jsx)(MenuItem_1.default, { value: false, children: "false" }), (0, jsx_runtime_1.jsx)(MenuItem_1.default, { value: "xs", children: "xs" }), (0, jsx_runtime_1.jsx)(MenuItem_1.default, { value: "sm", children: "sm" }), (0, jsx_runtime_1.jsx)(MenuItem_1.default, { value: "md", children: "md" }), (0, jsx_runtime_1.jsx)(MenuItem_1.default, { value: "lg", children: "lg" }), (0, jsx_runtime_1.jsx)(MenuItem_1.default, { value: "xl", children: "xl" })] })] }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { checked: fullWidth, onChange: handleFullWidthChange }), label: "Full width", sx: { mt: 1 } })] })] }), (0, jsx_runtime_1.jsx)(DialogActions_1.default, { children: (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: dialogActions.setFalse, variant: "contained", children: "Close" }) })] })] }));
}
