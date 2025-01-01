"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RejectionFiles = RejectionFiles;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_1 = require("lib/theme/styles");
var format_number_1 = require("lib/utils/format-number");
var file_thumbnail_1 = require("../../file-thumbnail");
function RejectionFiles(_a) {
    var files = _a.files;
    if (!files.length) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(Paper_1.default, { variant: "outlined", sx: {
            py: 1,
            px: 2,
            mt: 3,
            textAlign: 'left',
            borderStyle: 'dashed',
            borderColor: 'error.main',
            bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.error.mainChannel, 0.08); },
        }, children: files.map(function (_a) {
            var file = _a.file, errors = _a.errors;
            var _b = (0, file_thumbnail_1.fileData)(file), path = _b.path, size = _b.size;
            return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { my: 1 }, children: [(0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "subtitle2", noWrap: true, children: [path, " - ", size ? (0, format_number_1.fData)(size) : ''] }), errors.map(function (error) { return ((0, jsx_runtime_1.jsxs)(Box_1.default, { component: "span", sx: { typography: 'caption' }, children: ["- ", error.message] }, error.code)); })] }, path));
        }) }));
}
