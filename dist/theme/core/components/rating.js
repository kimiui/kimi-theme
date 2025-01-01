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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.rating = exports.RatingIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Rating_1 = require("@mui/material/Rating");
var SvgIcon_1 = __importStar(require("@mui/material/SvgIcon"));
var styles_1 = require("../../styles");
// ----------------------------------------------------------------------
/**
 * Icons
 */
var RatingIcon = function (props) { return ((0, jsx_runtime_1.jsx)(SvgIcon_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M17.56,21 C17.4000767,21.0006435 17.2423316,20.9629218 17.1,20.89 L12,18.22 L6.9,20.89 C6.56213339,21.067663 6.15259539,21.0374771 5.8444287,20.8121966 C5.53626201,20.5869161 5.38323252,20.2058459 5.45,19.83 L6.45,14.2 L2.33,10.2 C2.06805623,9.93860108 1.9718844,9.55391377 2.08,9.2 C2.19824414,8.83742187 2.51242293,8.57366684 2.89,8.52 L8.59,7.69 L11.1,2.56 C11.2670864,2.21500967 11.6166774,1.99588989 12,1.99588989 C12.3833226,1.99588989 12.7329136,2.21500967 12.9,2.56 L15.44,7.68 L21.14,8.51 C21.5175771,8.56366684 21.8317559,8.82742187 21.95,9.19 C22.0581156,9.54391377 21.9619438,9.92860108 21.7,10.19 L17.58,14.19 L18.58,19.82 C18.652893,20.2027971 18.4967826,20.5930731 18.18,20.82 C17.9989179,20.9468967 17.7808835,21.010197 17.56,21 L17.56,21 Z" }) }))); };
exports.RatingIcon = RatingIcon;
// ----------------------------------------------------------------------
var MuiRating = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { emptyIcon: (0, jsx_runtime_1.jsx)(exports.RatingIcon, {}), icon: (0, jsx_runtime_1.jsx)(exports.RatingIcon, {}) },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: (_a = {}, _a["&.".concat(Rating_1.ratingClasses.disabled)] = { opacity: 0.48 }, _a),
        iconEmpty: function (_a) {
            var theme = _a.theme;
            return ({ color: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.48) });
        },
        sizeSmall: (_b = {}, _b["& .".concat(SvgIcon_1.svgIconClasses.root)] = { width: 20, height: 20 }, _b),
        sizeMedium: (_c = {}, _c["& .".concat(SvgIcon_1.svgIconClasses.root)] = { width: 24, height: 24 }, _c),
        sizeLarge: (_d = {}, _d["& .".concat(SvgIcon_1.svgIconClasses.root)] = { width: 28, height: 28 }, _d),
    },
};
// ----------------------------------------------------------------------
exports.rating = { MuiRating: MuiRating };
