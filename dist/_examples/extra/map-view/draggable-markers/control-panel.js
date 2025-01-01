"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlPanel = ControlPanel;
var jsx_runtime_1 = require("react/jsx-runtime");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_1 = require("../styles");
// ----------------------------------------------------------------------
var EVENT_NAMES = ['onDragStart', 'onDrag', 'onDragEnd'];
function round(value) {
    return (Math.round(value * 1e5) / 1e5).toFixed(5);
}
function ControlPanel(_a) {
    var _b = _a.events, events = _b === void 0 ? {} : _b;
    return ((0, jsx_runtime_1.jsx)(styles_1.StyledControlPanel, { children: EVENT_NAMES.map(function (event) {
            var lngLat = events[event];
            return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "subtitle2", sx: { color: 'common.white' }, children: [event, ":"] }), lngLat ? ((0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", sx: { color: 'primary.main' }, children: "".concat(round(lngLat.lng), ", ").concat(round(lngLat.lat)) })) : ((0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", component: "em", sx: { color: 'error.main' }, children: "null" }))] }, event));
        }) }));
}
