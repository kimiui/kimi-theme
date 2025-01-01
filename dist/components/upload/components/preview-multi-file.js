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
exports.MultiFilePreview = MultiFilePreview;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var styles_1 = require("../../../theme/styles");
var format_number_1 = require("../../../utils/format-number");
var iconify_1 = require("../../iconify");
var file_thumbnail_1 = require("../../file-thumbnail");
// ----------------------------------------------------------------------
function MultiFilePreview(_a) {
    var sx = _a.sx, onRemove = _a.onRemove, lastNode = _a.lastNode, thumbnail = _a.thumbnail, slotProps = _a.slotProps, firstNode = _a.firstNode, _b = _a.files, files = _b === void 0 ? [] : _b;
    var renderFirstNode = firstNode && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", sx: __assign({}, (thumbnail && {
            width: 'auto',
            display: 'inline-flex',
        })), children: firstNode }));
    var renderLastNode = lastNode && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", sx: __assign({}, (thumbnail && { width: 'auto', display: 'inline-flex' })), children: lastNode }));
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { component: "ul", sx: __assign(__assign({ gap: 1, display: 'flex', flexDirection: 'column' }, (thumbnail && {
            flexWrap: 'wrap',
            flexDirection: 'row',
        })), sx), children: [renderFirstNode, files.map(function (file) {
                var _a = (0, file_thumbnail_1.fileData)(file), name = _a.name, size = _a.size;
                if (thumbnail) {
                    return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", sx: { display: 'inline-flex' }, children: (0, jsx_runtime_1.jsx)(file_thumbnail_1.FileThumbnail, __assign({ tooltip: true, imageView: true, file: file, onRemove: function () { return onRemove === null || onRemove === void 0 ? void 0 : onRemove(file); }, sx: {
                                width: 80,
                                height: 80,
                                border: function (theme) {
                                    return "solid 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16));
                                },
                            }, slotProps: { icon: { width: 36, height: 36 } } }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.thumbnail)) }, name));
                }
                return ((0, jsx_runtime_1.jsxs)(Box_1.default, { component: "li", sx: {
                        py: 1,
                        pr: 1,
                        pl: 1.5,
                        gap: 1.5,
                        display: 'flex',
                        borderRadius: 1,
                        alignItems: 'center',
                        border: function (theme) {
                            return "solid 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16));
                        },
                    }, children: [(0, jsx_runtime_1.jsx)(file_thumbnail_1.FileThumbnail, __assign({ file: file }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.thumbnail)), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: name, secondary: (0, format_number_1.fData)(size), secondaryTypographyProps: {
                                component: 'span',
                                typography: 'caption',
                            } }), onRemove && ((0, jsx_runtime_1.jsx)(IconButton_1.default, { size: "small", onClick: function () { return onRemove(file); }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:close-line", width: 16 }) }))] }, name));
            }), renderLastNode] }));
}
