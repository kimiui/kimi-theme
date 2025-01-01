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
exports.CustomPopover = CustomPopover;
var jsx_runtime_1 = require("react/jsx-runtime");
var Popover_1 = __importDefault(require("@mui/material/Popover"));
var List_1 = require("@mui/material/List");
var MenuItem_1 = require("@mui/material/MenuItem");
var styles_1 = require("./styles");
var utils_1 = require("./utils");
// ----------------------------------------------------------------------
function CustomPopover(_a) {
    var _b;
    var _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var open = _a.open, onClose = _a.onClose, children = _a.children, anchorEl = _a.anchorEl, slotProps = _a.slotProps, other = __rest(_a, ["open", "onClose", "children", "anchorEl", "slotProps"]);
    var arrowPlacement = (_d = (_c = slotProps === null || slotProps === void 0 ? void 0 : slotProps.arrow) === null || _c === void 0 ? void 0 : _c.placement) !== null && _d !== void 0 ? _d : 'top-right';
    var arrowSize = (_f = (_e = slotProps === null || slotProps === void 0 ? void 0 : slotProps.arrow) === null || _e === void 0 ? void 0 : _e.size) !== null && _f !== void 0 ? _f : 14;
    var arrowOffset = (_h = (_g = slotProps === null || slotProps === void 0 ? void 0 : slotProps.arrow) === null || _g === void 0 ? void 0 : _g.offset) !== null && _h !== void 0 ? _h : 17;
    var _m = (0, utils_1.calculateAnchorOrigin)(arrowPlacement), paperStyles = _m.paperStyles, anchorOrigin = _m.anchorOrigin, transformOrigin = _m.transformOrigin;
    return ((0, jsx_runtime_1.jsxs)(Popover_1.default, __assign({ open: !!open, anchorEl: anchorEl, onClose: onClose, anchorOrigin: anchorOrigin, transformOrigin: transformOrigin, slotProps: __assign(__assign({}, slotProps), { paper: __assign(__assign({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.paper), { sx: __assign(__assign(__assign({}, paperStyles), (_b = { overflow: 'inherit' }, _b["& .".concat(List_1.listClasses.root)] = { minWidth: 140 }, _b["& .".concat(MenuItem_1.menuItemClasses.root)] = { gap: 2 }, _b)), (_j = slotProps === null || slotProps === void 0 ? void 0 : slotProps.paper) === null || _j === void 0 ? void 0 : _j.sx) }) }) }, other, { children: [!((_k = slotProps === null || slotProps === void 0 ? void 0 : slotProps.arrow) === null || _k === void 0 ? void 0 : _k.hide) && ((0, jsx_runtime_1.jsx)(styles_1.StyledArrow, { sx: (_l = slotProps === null || slotProps === void 0 ? void 0 : slotProps.arrow) === null || _l === void 0 ? void 0 : _l.sx, placement: arrowPlacement, offset: arrowOffset, size: arrowSize })), children] })));
}
