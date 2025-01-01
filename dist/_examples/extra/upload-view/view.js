'use client';
"use strict";
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
exports.UploadView = UploadView;
var jsx_runtime_1 = require("react/jsx-runtime");
var ahooks_1 = require("ahooks");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var react_1 = require("react");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var paths_1 = require("lib/routes/paths");
var format_number_1 = require("lib/utils/format-number");
var iconify_1 = require("lib/components/iconify");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var upload_1 = require("lib/components/upload");
var component_hero_1 = require("../../component-hero");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
function UploadView() {
    var _a = (0, ahooks_1.useBoolean)(), preview = _a[0], previewActions = _a[1];
    var _b = (0, react_1.useState)([]), files = _b[0], setFiles = _b[1];
    var _c = (0, react_1.useState)(null), file = _c[0], setFile = _c[1];
    var _d = (0, react_1.useState)(null), avatarUrl = _d[0], setAvatarUrl = _d[1];
    var handleDropSingleFile = (0, react_1.useCallback)(function (acceptedFiles) {
        var newFile = acceptedFiles[0];
        setFile(newFile);
    }, []);
    var handleDropAvatar = (0, react_1.useCallback)(function (acceptedFiles) {
        var newFile = acceptedFiles[0];
        setAvatarUrl(newFile);
    }, []);
    var handleDropMultiFile = (0, react_1.useCallback)(function (acceptedFiles) {
        setFiles(__spreadArray(__spreadArray([], files, true), acceptedFiles, true));
    }, [files]);
    var handleRemoveFile = function (inputFile) {
        var filesFiltered = files.filter(function (fileFiltered) { return fileFiltered !== inputFile; });
        setFiles(filesFiltered);
    };
    var handleRemoveAllFiles = function () {
        setFiles([]);
    };
    var DEMO = [
        {
            name: 'Upload multi file',
            component: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { checked: preview, onClick: previewActions.toggle }), label: "Show Thumbnail", sx: { mb: 3, width: 1, justifyContent: 'flex-end' } }), (0, jsx_runtime_1.jsx)(upload_1.Upload, { multiple: true, thumbnail: preview, value: files, onDrop: handleDropMultiFile, onRemove: handleRemoveFile, onRemoveAll: handleRemoveAllFiles, onUpload: function () { return console.info('ON UPLOAD'); } })] })),
        },
        {
            name: 'Upload single file',
            component: ((0, jsx_runtime_1.jsx)(upload_1.Upload, { value: file, onDrop: handleDropSingleFile, onDelete: function () { return setFile(null); } })),
        },
        {
            name: 'Upload avatar',
            component: ((0, jsx_runtime_1.jsx)(upload_1.UploadAvatar, { value: avatarUrl, onDrop: handleDropAvatar, validator: function (fileData) {
                    if (fileData.size > 1000000) {
                        return {
                            code: 'file-too-large',
                            message: "File is larger than ".concat((0, format_number_1.fData)(1000000)),
                        };
                    }
                    return null;
                }, helperText: (0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "caption", sx: {
                        mt: 3,
                        mx: 'auto',
                        display: 'block',
                        textAlign: 'center',
                        color: 'text.disabled',
                    }, children: ["Allowed *.jpeg, *.jpg, *.png, *.gif", (0, jsx_runtime_1.jsx)("br", {}), " max size of ", (0, format_number_1.fData)(3145728)] }) })),
        },
        {
            name: 'Upload box',
            component: ((0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", spacing: 2, children: [(0, jsx_runtime_1.jsx)(upload_1.UploadBox, {}), (0, jsx_runtime_1.jsx)(upload_1.UploadBox, { placeholder: (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 0.5, alignItems: "center", children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:cloud-upload-fill", width: 40 }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", children: "Upload file" })] }), sx: { mb: 3, py: 2.5, flexGrow: 1, height: 'auto' } })] })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Upload", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Upload' }], moreLink: ['https://react-dropzone.js.org/#section-basic-example'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
