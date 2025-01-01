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
exports.redShape = exports.cyanShape = void 0;
exports.menuItemStyles = menuItemStyles;
exports.paperStyles = paperStyles;
var Divider_1 = require("@mui/material/Divider");
var Checkbox_1 = require("@mui/material/Checkbox");
var MenuItem_1 = require("@mui/material/MenuItem");
var Autocomplete_1 = require("@mui/material/Autocomplete");
var styles_1 = require("lib/theme/styles");
// ----------------------------------------------------------------------
/**
 * Generates styles for menu items.
 *
 * @param {Theme} theme - The theme object.
 * @returns {CSSObject} The CSS object for menu item styles.
 *
 * @example
 * ...theme.mixins.menuItemStyles(theme)
 */
function menuItemStyles(theme) {
    var _a;
    return __assign(__assign({}, theme.typography.body2), (_a = { padding: theme.spacing(0.75, 1), borderRadius: theme.shape.borderRadius * 0.75, '&:not(:last-of-type)': {
                marginBottom: 4,
            } }, _a["&.".concat(MenuItem_1.menuItemClasses.selected)] = {
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
    }, _a["&+.".concat(Divider_1.dividerClasses.root)] = {
        margin: theme.spacing(0.5, 0),
    }, _a));
}
exports.cyanShape = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfMjc0OV8xNDUxODYpIiBmaWxsLW9wYWNpdHk9IjAuMTIiLz4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX3JhZGlhbF8yNzQ5XzE0NTE4NiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAgMS44MTgxMmUtMDUpIHJvdGF0ZSgtNDUpIHNjYWxlKDEyMy4yNSkiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBCOEQ5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwQjhEOSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==';
exports.redShape = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfMjc0OV8xNDUxODcpIiBmaWxsLW9wYWNpdHk9IjAuMTIiLz4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX3JhZGlhbF8yNzQ5XzE0NTE4NyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEyMCkgcm90YXRlKDEzNSkgc2NhbGUoMTIzLjI1KSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjU2MzAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY1NjMwIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9yYWRpYWxHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K';
function paperStyles(theme, options) {
    var _a = options !== null && options !== void 0 ? options : {}, _b = _a.blur, blur = _b === void 0 ? 20 : _b, color = _a.color, dropdown = _a.dropdown;
    return __assign(__assign(__assign({}, theme.mixins.bgGradient({
        images: ["url(".concat(exports.cyanShape, ")"), "url(".concat(exports.redShape, ")")],
        sizes: ['50%', '50%'],
        positions: theme.direction === 'rtl' ? ['top left', 'right bottom'] : ['top right', 'left bottom'],
    })), { backdropFilter: "blur(".concat(blur, "px)"), WebkitBackdropFilter: "blur(".concat(blur, "px)"), backgroundColor: color !== null && color !== void 0 ? color : (0, styles_1.varAlpha)(theme.vars.palette.background.paperChannel, 0.9) }), (dropdown && {
        padding: theme.spacing(0.5),
        boxShadow: theme.vars.shadows[8],
        borderRadius: "".concat(theme.shape.borderRadius * 1.25, "px"),
    }));
}
