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
exports.ColorPicker = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var react_1 = require("react");
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var styles_1 = require("@mui/material/styles");
var styles_2 = require("../../theme/styles");
var iconify_1 = require("../iconify");
// ----------------------------------------------------------------------
var StyledUl = (0, styles_1.styled)('ul')(function (_a) {
    var theme = _a.theme;
    return ({});
});
exports.ColorPicker = (0, react_1.forwardRef)(function (_a, ref) {
    var colors = _a.colors, selected = _a.selected, onSelectColor = _a.onSelectColor, _b = _a.limit, limit = _b === void 0 ? 'auto' : _b, sx = _a.sx, slotProps = _a.slotProps;
    var singleSelect = typeof selected === 'string';
    var handleSelect = (0, react_1.useCallback)(function (color) {
        if (singleSelect) {
            if (color !== selected) {
                onSelectColor(color);
            }
        }
        else {
            var newSelected = selected.includes(color)
                ? selected.filter(function (value) { return value !== color; })
                : __spreadArray(__spreadArray([], selected, true), [color], false);
            onSelectColor(newSelected);
        }
    }, [onSelectColor, selected, singleSelect]);
    return ((0, jsx_runtime_1.jsx)(StyledUl, { ref: ref, sx: __assign(__assign({ flexWrap: 'wrap', flexDirection: 'row', display: 'inline-flex' }, (limit !== 'auto' && {
            width: limit * 36,
            justifyContent: 'flex-end',
        })), sx), children: colors.map(function (color) {
            var hasSelected = singleSelect ? selected === color : selected.includes(color);
            return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", sx: { display: 'inline-flex' }, children: (0, jsx_runtime_1.jsx)(ButtonBase_1.default, { "aria-label": color, onClick: function () { return handleSelect(color); }, sx: __assign({ width: 36, height: 36, borderRadius: '50%' }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.button), children: (0, jsx_runtime_1.jsx)(Stack_1.default, { alignItems: "center", justifyContent: "center", sx: __assign({ width: 20, height: 20, bgcolor: color, borderRadius: '50%', border: function (theme) {
                                return "solid 1px ".concat((0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16));
                            } }, (hasSelected && {
                            transform: 'scale(1.3)',
                            boxShadow: "4px 4px 8px 0 ".concat((0, styles_1.alpha)(color, 0.48)),
                            outline: "solid 2px ".concat((0, styles_1.alpha)(color, 0.08)),
                            transition: function (theme) {
                                return theme.transitions.create('all', {
                                    duration: theme.transitions.duration.shortest,
                                });
                            },
                        })), children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: hasSelected ? 12 : 0, icon: "eva:checkmark-fill", sx: {
                                color: function (theme) { return theme.palette.getContrastText(color); },
                                transition: function (theme) {
                                    return theme.transitions.create('all', {
                                        duration: theme.transitions.duration.shortest,
                                    });
                                },
                            } }) }) }) }, color));
        }) }));
});
