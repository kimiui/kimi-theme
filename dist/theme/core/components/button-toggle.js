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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleButton = void 0;
var ToggleButton_1 = require("@mui/material/ToggleButton");
var styles_1 = require("../../styles");
// ----------------------------------------------------------------------
var COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
function styleColors(ownerState, styles) {
    var outputStyle = COLORS.reduce(function (acc, color) {
        if (!ownerState.disabled && ownerState.color === color) {
            acc = styles(color);
        }
        return acc;
    }, {});
    return outputStyle;
}
// ----------------------------------------------------------------------
var MuiToggleButton = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var _b, _c;
            var theme = _a.theme, ownerState = _a.ownerState;
            var styled = {
                colors: styleColors(ownerState, function (color) { return ({
                    '&:hover': {
                        borderColor: (0, styles_1.varAlpha)(theme.vars.palette[color].mainChannel, 0.48),
                        backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette[color].mainChannel, theme.vars.palette.action.hoverOpacity),
                    },
                }); }),
                selected: (_b = {},
                    _b["&.".concat(ToggleButton_1.toggleButtonClasses.selected)] = {
                        borderColor: 'currentColor',
                        boxShadow: '0 0 0 0.75px currentColor',
                    },
                    _b),
                disabled: __assign({}, (ownerState.disabled && (_c = {},
                    _c["&.".concat(ToggleButton_1.toggleButtonClasses.selected)] = {
                        color: theme.vars.palette.action.disabled,
                        backgroundColor: theme.vars.palette.action.selected,
                        borderColor: theme.vars.palette.action.disabledBackground,
                    },
                    _c))),
            };
            return __assign(__assign(__assign({}, styled.colors), styled.selected), styled.disabled);
        },
    },
};
// ----------------------------------------------------------------------
var MuiToggleButtonGroup = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var theme = _a.theme;
            return ({
                gap: 4,
                padding: 4,
                border: "solid 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08)),
            });
        },
        grouped: (_a = {},
            _a["&.".concat(ToggleButton_1.toggleButtonClasses.root)] = { border: 'none', borderRadius: 'inherit' },
            _a["&.".concat(ToggleButton_1.toggleButtonClasses.selected)] = { boxShadow: 'none' },
            _a),
    },
};
// ----------------------------------------------------------------------
exports.toggleButton = { MuiToggleButton: MuiToggleButton, MuiToggleButtonGroup: MuiToggleButtonGroup };
