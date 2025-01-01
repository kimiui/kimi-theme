'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnackbarView = SnackbarView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = __importDefault(require("@mui/material/Button"));
var paths_1 = require("../../../routes/paths");
var snackbar_1 = require("../../../components/snackbar");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
function SnackbarView() {
    var _this = this;
    var onSubmit = function () { return __awaiter(_this, void 0, void 0, function () {
        var promise, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promise = new Promise(function (resolve) { return setTimeout(resolve, 3000); });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    snackbar_1.toast.promise(promise, {
                        loading: 'Loading...',
                        success: function () { return "Loading success!"; },
                        error: 'Error',
                        closeButton: false,
                    });
                    return [4 /*yield*/, promise];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Snackbar", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Snackbar' }], moreLink: ['https://sonner.emilkowal.ski/'] }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentContainer, { sx: {
                    rowGap: 5,
                    columnGap: 3,
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                    },
                }, children: [(0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Simple", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", color: "inherit", onClick: function () { return (0, snackbar_1.toast)('This is an default'); }, children: "Default" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", color: "info", onClick: function () { return snackbar_1.toast.info('This is an info'); }, children: "Info" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", color: "success", onClick: function () { return snackbar_1.toast.success('This is an success'); }, children: "Success" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", color: "warning", onClick: function () { return snackbar_1.toast.warning('This is an warning'); }, children: "Warning" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", color: "error", onClick: function () { return snackbar_1.toast.error('This is an error'); }, children: "Error" })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "With Action", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", color: "inherit", onClick: function () {
                                    (0, snackbar_1.toast)('Title', {
                                        id: 'defaultId',
                                        description: 'description',
                                        closeButton: false,
                                        action: ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: "primary", size: "small", onClick: function () { return console.info('Action!'); }, children: "Action" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: "small", onClick: function () {
                                                        console.info('Action!');
                                                        snackbar_1.toast.dismiss('defaultId');
                                                    }, children: "Dismiss" })] })),
                                    });
                                }, children: "Default" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", color: "info", onClick: function () {
                                    snackbar_1.toast.info('Title', {
                                        id: 'infoId',
                                        description: 'description',
                                        closeButton: false,
                                        action: ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: "info", size: "small", onClick: function () { return console.info('Action!'); }, children: "Action" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: "small", onClick: function () {
                                                        console.info('Action!');
                                                        snackbar_1.toast.dismiss('infoId');
                                                    }, children: "Dismiss" })] })),
                                    });
                                }, children: "Info" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", color: "success", onClick: function () {
                                    snackbar_1.toast.success('Title', {
                                        id: 'successId',
                                        description: 'description',
                                        closeButton: false,
                                        action: ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: "success", size: "small", onClick: function () { return console.info('Action!'); }, children: "Action" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: "small", onClick: function () {
                                                        console.info('Action!');
                                                        snackbar_1.toast.dismiss('successId');
                                                    }, children: "Dismiss" })] })),
                                    });
                                }, children: "Success" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", color: "warning", onClick: function () {
                                    snackbar_1.toast.warning('Title', {
                                        id: 'warningId',
                                        description: 'description',
                                        closeButton: false,
                                        action: ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: "warning", size: "small", onClick: function () { return console.info('Action!'); }, children: "Action" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: "small", onClick: function () {
                                                        console.info('Action!');
                                                        snackbar_1.toast.dismiss('warningId');
                                                    }, children: "Dismiss" })] })),
                                    });
                                }, children: "Warning" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", color: "error", onClick: function () {
                                    snackbar_1.toast.error('Error title', {
                                        id: 'errorId',
                                        description: 'description',
                                        closeButton: false,
                                        action: ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: "error", size: "small", onClick: function () { return console.info('Action!'); }, children: "Action" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: "small", onClick: function () {
                                                        console.info('Action!');
                                                        snackbar_1.toast.dismiss('errorId');
                                                    }, children: "Dismiss" })] })),
                                    });
                                }, children: "Error" })] }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "anchorOrigin", children: [
                            'top-left',
                            'top-center',
                            'top-right',
                            'bottom-left',
                            'bottom-center',
                            'bottom-right',
                        ].map(function (position) { return ((0, jsx_runtime_1.jsx)(Button_1.default, { variant: "text", color: "inherit", onClick: function () { return (0, snackbar_1.toast)(position, { position: position }); }, children: position }, position)); }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "With promise", children: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outlined", onClick: onSubmit, children: "On submit" }) })] })] }));
}
