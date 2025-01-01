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
exports.FileThumbnail = FileThumbnail;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var classes_1 = require("./classes");
var utils_1 = require("./utils");
var action_buttons_1 = require("./action-buttons");
// ----------------------------------------------------------------------
function FileThumbnail(_a) {
    var sx = _a.sx, file = _a.file, tooltip = _a.tooltip, onRemove = _a.onRemove, imageView = _a.imageView, slotProps = _a.slotProps, onDownload = _a.onDownload, other = __rest(_a, ["sx", "file", "tooltip", "onRemove", "imageView", "slotProps", "onDownload"]);
    var previewUrl = typeof file === 'string' ? file : URL.createObjectURL(file);
    var _b = (0, utils_1.fileData)(file), name = _b.name, path = _b.path;
    var format = (0, utils_1.fileFormat)(path !== null && path !== void 0 ? path : previewUrl);
    var renderImg = ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "img", src: previewUrl, className: classes_1.fileThumbnailClasses.img, sx: __assign({ width: 1, height: 1, objectFit: 'cover', borderRadius: 'inherit' }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.img) }));
    var renderIcon = ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "img", src: (0, utils_1.fileThumb)(format), className: classes_1.fileThumbnailClasses.icon, sx: __assign({ width: 1, height: 1 }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.icon) }));
    var renderContent = ((0, jsx_runtime_1.jsxs)(Stack_1.default, __assign({ component: "span", className: classes_1.fileThumbnailClasses.root, sx: __assign({ width: 36, height: 36, flexShrink: 0, borderRadius: 1.25, alignItems: 'center', position: 'relative', display: 'inline-flex', justifyContent: 'center' }, sx) }, other, { children: [format === 'image' && imageView ? renderImg : renderIcon, onRemove && ((0, jsx_runtime_1.jsx)(action_buttons_1.RemoveButton, { onClick: onRemove, className: classes_1.fileThumbnailClasses.removeBtn, sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.removeBtn })), onDownload && ((0, jsx_runtime_1.jsx)(action_buttons_1.DownloadButton, { onClick: onDownload, className: classes_1.fileThumbnailClasses.downloadBtn, sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.downloadBtn }))] })));
    if (tooltip) {
        return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, { arrow: true, title: name, slotProps: { popper: { modifiers: [{ name: 'offset', options: { offset: [0, -12] } }] } }, children: renderContent }));
    }
    return renderContent;
}
