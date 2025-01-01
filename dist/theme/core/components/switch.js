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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.switches = void 0;
var Switch_1 = require("@mui/material/Switch");
var styles_1 = require("../../styles");
// ----------------------------------------------------------------------
var MuiSwitch = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: { alignItems: 'center' },
        switchBase: function (_a) {
            var _b, _c, _d, _e, _f;
            var ownerState = _a.ownerState, theme = _a.theme;
            return (_b = {
                    top: 'unset',
                    transform: 'translateX(6px)'
                },
                _b["&.".concat(Switch_1.switchClasses.checked)] = (_c = {},
                    _c["& .".concat(Switch_1.switchClasses.thumb)] = __assign({}, (ownerState.color === 'default' && (_d = {},
                        _d[styles_1.stylesMode.dark] = { color: theme.vars.palette.grey[800] },
                        _d))),
                    _c["&+.".concat(Switch_1.switchClasses.track)] = __assign({ opacity: 1 }, (ownerState.color === 'default' && {
                        backgroundColor: theme.vars.palette.text.primary,
                    })),
                    _c),
                _b["&.".concat(Switch_1.switchClasses.disabled)] = (_e = {},
                    _e["& .".concat(Switch_1.switchClasses.thumb)] = (_f = { opacity: 1 }, _f[styles_1.stylesMode.dark] = { opacity: 0.48 }, _f),
                    _e["&+.".concat(Switch_1.switchClasses.track)] = { opacity: 0.48 },
                    _e),
                _b);
        },
        track: function (_a) {
            var theme = _a.theme;
            return ({
                opacity: 1,
                borderRadius: 10,
                backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.48),
            });
        },
        thumb: function (_a) {
            var theme = _a.theme;
            return ({ color: theme.vars.palette.common.white });
        },
        sizeMedium: (_a = {},
            _a["& .".concat(Switch_1.switchClasses.track)] = { height: 20 },
            _a["& .".concat(Switch_1.switchClasses.thumb)] = { width: 14, height: 14 },
            _a),
        sizeSmall: (_b = {},
            _b["& .".concat(Switch_1.switchClasses.track)] = { height: 16 },
            _b["& .".concat(Switch_1.switchClasses.thumb)] = { width: 10, height: 10 },
            _b),
    },
};
// ----------------------------------------------------------------------
exports.switches = { MuiSwitch: MuiSwitch };
