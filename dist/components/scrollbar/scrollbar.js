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
exports.Scrollbar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var simplebar_react_1 = __importDefault(require("simplebar-react"));
var classes_1 = require("./classes");
// ----------------------------------------------------------------------
exports.Scrollbar = (0, react_1.forwardRef)(function (props, ref) {
    var slotProps = props.slotProps, children = props.children, fillContent = props.fillContent, sx = props.sx, other = __rest(props, ["slotProps", "children", "fillContent", "sx"]);
    return ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({ component: simplebar_react_1.default, scrollableNodeProps: { ref: ref }, clickOnTrack: false, className: classes_1.scrollbarClasses.root, sx: __assign({ minWidth: 0, minHeight: 0, flexGrow: 1, display: 'flex', flexDirection: 'column', '& .simplebar-wrapper': slotProps === null || slotProps === void 0 ? void 0 : slotProps.wrapper, '& .simplebar-content-wrapper': slotProps === null || slotProps === void 0 ? void 0 : slotProps.contentWrapper, '& .simplebar-content': __assign(__assign({}, (fillContent && {
                minHeight: 1,
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'column',
            })), slotProps === null || slotProps === void 0 ? void 0 : slotProps.content) }, sx) }, other, { children: children })));
});
exports.Scrollbar.displayName = 'Scrollbar';
