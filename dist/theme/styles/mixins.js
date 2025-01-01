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
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideScrollY = exports.hideScrollX = void 0;
exports.textGradient = textGradient;
exports.borderGradient = borderGradient;
exports.bgGradient = bgGradient;
exports.bgBlur = bgBlur;
exports.maxLine = maxLine;
exports.paper = paper;
exports.menuItem = menuItem;
var Divider_1 = require("@mui/material/Divider");
var Checkbox_1 = require("@mui/material/Checkbox");
var MenuItem_1 = require("@mui/material/MenuItem");
var Autocomplete_1 = require("@mui/material/Autocomplete");
var utils_1 = require("./utils");
// ----------------------------------------------------------------------
/**
 * Usage:
 * ...hideScrollX,
 * ...hideScrollY,
 */
exports.hideScrollX = {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    overflowX: 'auto',
    '&::-webkit-scrollbar': { display: 'none' },
};
exports.hideScrollY = {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    overflowY: 'auto',
    '&::-webkit-scrollbar': { display: 'none' },
};
/**
 * Usage:
 * ...textGradient(`to right, ${theme.vars.palette.text.primary}, ${alpha(theme.vars.palette.text.primary, 0.2)}`
 */
function textGradient(color) {
    return {
        background: "linear-gradient(".concat(color, ")"),
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        color: 'transparent',
    };
}
function borderGradient(props) {
    var _a;
    return __assign({ inset: 0, width: '100%', content: '""', height: '100%', margin: 'auto', position: 'absolute', borderRadius: 'inherit', padding: (_a = props === null || props === void 0 ? void 0 : props.padding) !== null && _a !== void 0 ? _a : '2px', 
        //
        mask: 'linear-gradient(#FFF 0 0) content-box, linear-gradient(#FFF 0 0)', WebkitMask: 'linear-gradient(#FFF 0 0) content-box, linear-gradient(#FFF 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor' }, ((props === null || props === void 0 ? void 0 : props.color) && {
        background: "linear-gradient(".concat(props.color, ")"),
    }));
}
function bgGradient(_a) {
    var color = _a.color, imgUrl = _a.imgUrl;
    if (imgUrl) {
        return {
            background: "linear-gradient(".concat(color, "), url(").concat(imgUrl, ")"),
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
        };
    }
    return { background: "linear-gradient(".concat(color, ")") };
}
function bgBlur(_a) {
    var color = _a.color, _b = _a.blur, blur = _b === void 0 ? 6 : _b, imgUrl = _a.imgUrl;
    if (imgUrl) {
        return {
            position: 'relative',
            backgroundImage: "url(".concat(imgUrl, ")"),
            '&::before': {
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 9,
                content: '""',
                width: '100%',
                height: '100%',
                backdropFilter: "blur(".concat(blur, "px)"),
                WebkitBackdropFilter: "blur(".concat(blur, "px)"),
                backgroundColor: color,
            },
        };
    }
    return {
        backdropFilter: "blur(".concat(blur, "px)"),
        WebkitBackdropFilter: "blur(".concat(blur, "px)"),
        backgroundColor: color,
    };
}
function getFontSize(fontSize) {
    return typeof fontSize === 'string' ? (0, utils_1.remToPx)(fontSize) : fontSize;
}
function getLineHeight(lineHeight, fontSize) {
    if (typeof lineHeight === 'string') {
        return fontSize ? (0, utils_1.remToPx)(lineHeight) / fontSize : 1;
    }
    return lineHeight;
}
function maxLine(_a) {
    var _b, _c, _d;
    var _e, _f, _g;
    var line = _a.line, persistent = _a.persistent;
    var baseStyles = {
        overflow: 'hidden',
        display: '-webkit-box',
        textOverflow: 'ellipsis',
        WebkitLineClamp: line,
        WebkitBoxOrient: 'vertical',
    };
    if (persistent) {
        var fontSizeBase = getFontSize(persistent.fontSize);
        var fontSizeSm = getFontSize((_e = persistent[utils_1.mediaQueries.upSm]) === null || _e === void 0 ? void 0 : _e.fontSize);
        var fontSizeMd = getFontSize((_f = persistent[utils_1.mediaQueries.upMd]) === null || _f === void 0 ? void 0 : _f.fontSize);
        var fontSizeLg = getFontSize((_g = persistent[utils_1.mediaQueries.upLg]) === null || _g === void 0 ? void 0 : _g.fontSize);
        var lineHeight = getLineHeight(persistent.lineHeight, fontSizeBase);
        return __assign(__assign({}, baseStyles), (lineHeight && __assign(__assign(__assign(__assign({}, (fontSizeBase && { height: fontSizeBase * lineHeight * line })), (fontSizeSm && (_b = {},
            _b[utils_1.mediaQueries.upSm] = { height: fontSizeSm * lineHeight * line },
            _b))), (fontSizeMd && (_c = {},
            _c[utils_1.mediaQueries.upMd] = { height: fontSizeMd * lineHeight * line },
            _c))), (fontSizeLg && (_d = {},
            _d[utils_1.mediaQueries.upLg] = { height: fontSizeLg * lineHeight * line },
            _d)))));
    }
    return baseStyles;
}
function paper(_a) {
    var theme = _a.theme, color = _a.color, dropdown = _a.dropdown;
    return __assign(__assign(__assign(__assign({}, bgBlur({
        color: color !== null && color !== void 0 ? color : (0, utils_1.varAlpha)(theme.vars.palette.background.paperChannel, 0.9),
        blur: 20,
    })), { backgroundImage: "url(/assets/cyan-blur.png), url(/assets/red-blur.png)", backgroundRepeat: 'no-repeat, no-repeat', backgroundPosition: 'top right, left bottom', backgroundSize: '50%, 50%' }), (theme.direction === 'rtl' && {
        backgroundPosition: 'top left, right bottom',
    })), (dropdown && {
        padding: theme.spacing(0.5),
        boxShadow: theme.shadows[8],
        borderRadius: "".concat(theme.shape.borderRadius * 1.25, "px"),
    }));
}
/**
 * Usage:
 * ...menuItem(theme)
 */
function menuItem(theme) {
    var _a;
    return __assign(__assign({}, theme.typography.body2), (_a = { padding: theme.spacing(0.75, 1), borderRadius: theme.shape.borderRadius * 0.75, '&:not(:last-of-type)': { marginBottom: 4 } }, _a["&.".concat(MenuItem_1.menuItemClasses.selected)] = {
        fontWeight: theme.typography.fontWeightSemiBold,
        backgroundColor: theme.vars.palette.action.selected,
        '&:hover': { backgroundColor: theme.vars.palette.action.hover },
    }, _a["& .".concat(Checkbox_1.checkboxClasses.root)] = {
        padding: theme.spacing(0.5),
        marginLeft: theme.spacing(-0.5),
        marginRight: theme.spacing(0.5),
    }, _a["&.".concat(Autocomplete_1.autocompleteClasses.option, "[aria-selected=\"true\"]")] = {
        backgroundColor: theme.vars.palette.action.selected,
        '&:hover': { backgroundColor: theme.vars.palette.action.hover },
    }, _a["&+.".concat(Divider_1.dividerClasses.root)] = { margin: theme.spacing(0.5, 0) }, _a));
}
