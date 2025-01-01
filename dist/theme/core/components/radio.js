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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.radio = exports.RadioCheckedIcon = exports.RadioIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
var Radio_1 = require("@mui/material/Radio");
// ----------------------------------------------------------------------
/**
 * Icons
 */
var RadioIcon = function (props) { return ((0, jsx_runtime_1.jsx)(SvgIcon_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12 2C13.9778 2 15.9112 2.58649 17.5557 3.6853C19.2002 4.78412 20.4819 6.3459 21.2388 8.17317C21.9957 10.0004 22.1937 12.0111 21.8079 13.9509C21.422 15.8907 20.4696 17.6725 19.0711 19.0711C17.6725 20.4696 15.8907 21.422 13.9509 21.8079C12.0111 22.1937 10.0004 21.9957 8.17317 21.2388C6.3459 20.4819 4.78412 19.2002 3.6853 17.5557C2.58649 15.9112 2 13.9778 2 12C2 6.477 6.477 2 12 2ZM12 3.5C9.74566 3.5 7.58365 4.39553 5.98959 5.98959C4.39553 7.58365 3.5 9.74566 3.5 12C3.5 14.2543 4.39553 16.4163 5.98959 18.0104C7.58365 19.6045 9.74566 20.5 12 20.5C14.2543 20.5 16.4163 19.6045 18.0104 18.0104C19.6045 16.4163 20.5 14.2543 20.5 12C20.5 9.74566 19.6045 7.58365 18.0104 5.98959C16.4163 4.39553 14.2543 3.5 12 3.5Z", fill: "currentColor" }) }))); };
exports.RadioIcon = RadioIcon;
var RadioCheckedIcon = function (props) { return ((0, jsx_runtime_1.jsx)(SvgIcon_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z", fill: "currentColor" }) }))); };
exports.RadioCheckedIcon = RadioCheckedIcon;
// ----------------------------------------------------------------------
var MuiRadio = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: {
        size: 'small',
        icon: (0, jsx_runtime_1.jsx)(exports.RadioIcon, {}),
        checkedIcon: (0, jsx_runtime_1.jsx)(exports.RadioCheckedIcon, {}),
    },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var _b, _c;
            var ownerState = _a.ownerState, theme = _a.theme;
            return (__assign(__assign({ padding: theme.spacing(1) }, (ownerState.color === 'default' && (_b = {},
                _b["&.".concat(Radio_1.radioClasses.checked)] = { color: theme.vars.palette.text.primary },
                _b))), (_c = {}, _c["&.".concat(Radio_1.radioClasses.disabled)] = { color: theme.vars.palette.action.disabled }, _c)));
        },
    },
};
// ----------------------------------------------------------------------
exports.radio = { MuiRadio: MuiRadio };
