'use client';
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
exports.defaultValues = void 0;
exports.ReactHookForm = ReactHookForm;
var react_1 = require("react");
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var ahooks_1 = require("ahooks");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var react_hook_form_1 = require("react-hook-form");
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var Backdrop_1 = __importDefault(require("@mui/material/Backdrop"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var LoadingButton_1 = __importDefault(require("@mui/lab/LoadingButton"));
var zod_1 = require("@hookform/resolvers/zod");
var InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
var CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
var format_time_1 = require("../../../utils/format-time");
var iconify_1 = require("../../../components/iconify");
var hook_form_1 = require("../../../components/hook-form");
var schema_1 = require("./schema");
var values_preview_1 = require("./values-preview");
// ----------------------------------------------------------------------
var OPTIONS = [
    { value: 'option 1', label: 'Option 1' },
    { value: 'option 2', label: 'Option 2' },
    { value: 'option 3', label: 'Option 3' },
    { value: 'option 4', label: 'Option 4' },
    { value: 'option 5', label: 'Option 5' },
    { value: 'option 6', label: 'Option 6' },
    { value: 'option 7', label: 'Option 7' },
    { value: 'option 8', label: 'Option 8' },
];
exports.defaultValues = {
    age: 0,
    email: '',
    fullName: '',
    phoneNumber: '',
    //
    editor: '',
    autocomplete: undefined,
    //
    password: '',
    confirmPassword: '',
    //
    startDate: (0, format_time_1.today)(),
    endDate: null,
    //
    singleUpload: '',
    multiUpload: [],
    //
    singleSelect: '',
    multiSelect: [],
    //
    singleCountry: '',
    multiCountry: [],
    //
    rating: 0,
    radioGroup: '',
    //
    switch: false,
    multiSwitch: [],
    //
    checkbox: false,
    multiCheckbox: [],
    //
    slider: 8,
    sliderRange: [15, 80],
};
function ReactHookForm(_a) {
    var _this = this;
    var debug = _a.debug;
    var _b = (0, ahooks_1.useBoolean)(), password = _b[0], passwordActions = _b[1];
    var methods = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(schema_1.FormSchema),
        defaultValues: exports.defaultValues,
    });
    var watch = methods.watch, reset = methods.reset, setValue = methods.setValue, handleSubmit = methods.handleSubmit, isSubmitting = methods.formState.isSubmitting;
    var values = watch();
    var onSubmit = handleSubmit(function (data) { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 3000); })];
                case 1:
                    _a.sent();
                    reset();
                    console.info('DATA', data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [isSubmitting && ((0, jsx_runtime_1.jsx)(Backdrop_1.default, { open: true, sx: { zIndex: function (theme) { return theme.zIndex.modal + 1; } }, children: (0, jsx_runtime_1.jsx)(CircularProgress_1.default, { color: "primary" }) })), (0, jsx_runtime_1.jsxs)(hook_form_1.Form, { methods: methods, onSubmit: onSubmit, children: [debug && (0, jsx_runtime_1.jsx)(values_preview_1.ValuesPreview, { sx: { display: { xs: 'none', lg: 'block' } } }), (0, jsx_runtime_1.jsxs)(Box_1.default, { gap: 5, display: "flex", alignItems: "flex-start", flexDirection: { xs: 'column', md: 'row' }, sx: __assign({ width: 1 }, (debug && { pr: { lg: '320px' } })), children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { gap: 3, display: "flex", flex: "1 0 auto", flexDirection: "column", sx: { width: { xs: 1, md: 0.5 } }, children: [(0, jsx_runtime_1.jsxs)(Grid2, { children: [(0, jsx_runtime_1.jsx)(Block, { children: (0, jsx_runtime_1.jsx)(hook_form_1.Field.Text, { name: "fullName", label: "Full name", helperText: "Helper text" }) }), (0, jsx_runtime_1.jsx)(Block, { children: (0, jsx_runtime_1.jsx)(hook_form_1.Field.Text, { name: "email", label: "Email address" }) })] }), (0, jsx_runtime_1.jsxs)(Grid2, { children: [(0, jsx_runtime_1.jsx)(Block, { label: "RHFPhone", children: (0, jsx_runtime_1.jsx)(hook_form_1.Field.Phone, { name: "phoneNumber", label: "Phone number" }) }), (0, jsx_runtime_1.jsx)(Block, { children: (0, jsx_runtime_1.jsx)(hook_form_1.Field.Text, { name: "age", label: "Age", type: "number" }) })] }), (0, jsx_runtime_1.jsxs)(Grid2, { children: [(0, jsx_runtime_1.jsx)(hook_form_1.Field.DatePicker, { name: "startDate", label: "Start date" }), (0, jsx_runtime_1.jsx)(hook_form_1.Field.DatePicker, { name: "endDate", label: "End date" })] }), (0, jsx_runtime_1.jsxs)(Grid2, { children: [(0, jsx_runtime_1.jsx)(Block, { children: (0, jsx_runtime_1.jsx)(hook_form_1.Field.Text, { name: "password", label: "Password", type: password ? 'text' : 'password', InputProps: {
                                                        endAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "end", children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: passwordActions.toggle, edge: "end", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: password ? 'solar:eye-bold' : 'solar:eye-closed-bold' }) }) })),
                                                    } }) }), (0, jsx_runtime_1.jsx)(Block, { children: (0, jsx_runtime_1.jsx)(hook_form_1.Field.Text, { name: "confirmPassword", label: "Confirm password", type: password ? 'text' : 'password', InputProps: {
                                                        endAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "end", children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: passwordActions.toggle, edge: "end", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: password ? 'solar:eye-bold' : 'solar:eye-closed-bold' }) }) })),
                                                    } }) })] }), (0, jsx_runtime_1.jsx)(Block, { label: "RHFAutocomplete", children: (0, jsx_runtime_1.jsx)(hook_form_1.Field.Autocomplete, { name: "autocomplete", label: "Autocomplete", options: OPTIONS, getOptionLabel: function (option) { return option.label; }, isOptionEqualToValue: function (option, value) { return option.value === value.value; }, renderOption: function (props, option) { return ((0, react_1.createElement)("li", __assign({}, props, { key: option.value }), option.label)); } }) }), (0, jsx_runtime_1.jsx)(Block, { label: "RHFAutocomplete", children: (0, jsx_runtime_1.jsx)(hook_form_1.Field.CountrySelect, { fullWidth: true, name: "singleCountry", label: "Single country", placeholder: "Choose a country" }) }), (0, jsx_runtime_1.jsx)(Block, { label: "RHFAutocomplete", children: (0, jsx_runtime_1.jsx)(hook_form_1.Field.CountrySelect, { multiple: true, fullWidth: true, limitTags: 3, name: "multiCountry", label: "Multi country", placeholder: "Choose a country", helperText: "Helper text" }) }), (0, jsx_runtime_1.jsxs)(Grid2, { children: [(0, jsx_runtime_1.jsx)(Block, { label: "RHFSelect", children: (0, jsx_runtime_1.jsxs)(hook_form_1.Field.Select, { name: "singleSelect", label: "Single select", children: [(0, jsx_runtime_1.jsx)(MenuItem_1.default, { value: "", children: "None" }), (0, jsx_runtime_1.jsx)(Divider_1.default, { sx: { borderStyle: 'dashed' } }), OPTIONS.map(function (option) { return ((0, jsx_runtime_1.jsx)(MenuItem_1.default, { value: option.label, children: option.label }, option.value)); })] }) }), (0, jsx_runtime_1.jsx)(Block, { label: "RHFMultiSelect", children: (0, jsx_runtime_1.jsx)(hook_form_1.Field.MultiSelect, { chip: true, checkbox: true, name: "multiSelect", label: "Multi select", options: OPTIONS }) })] }), (0, jsx_runtime_1.jsx)(Block, { label: "RHFEditor", children: (0, jsx_runtime_1.jsx)(hook_form_1.Field.Editor, { fullItem: true, name: "editor", sx: { maxHeight: 480 } }) })] }), (0, jsx_runtime_1.jsxs)(Box_1.default, { gap: 3, display: "flex", flex: "1 0 auto", flexDirection: "column", sx: { width: { xs: 1, md: 0.5 } }, children: [(0, jsx_runtime_1.jsx)(Block, { label: "RHFUpload", children: (0, jsx_runtime_1.jsx)(hook_form_1.Field.Upload, { name: "singleUpload", maxSize: 3145728, onDelete: function () { return setValue('singleUpload', null, { shouldValidate: true }); } }) }), (0, jsx_runtime_1.jsx)(Block, { label: "RHFUpload", children: (0, jsx_runtime_1.jsx)(hook_form_1.Field.Upload, { multiple: true, thumbnail: true, name: "multiUpload", maxSize: 3145728, onRemove: function (inputFile) {
                                                return setValue('multiUpload', values.multiUpload.filter(function (file) { return file !== inputFile; }), { shouldValidate: true });
                                            }, onRemoveAll: function () { return setValue('multiUpload', [], { shouldValidate: true }); }, onUpload: function () { return console.info('ON UPLOAD'); } }) }), (0, jsx_runtime_1.jsx)(hook_form_1.Field.Rating, { name: "rating" }), (0, jsx_runtime_1.jsx)(hook_form_1.Field.Checkbox, { name: "checkbox", label: "RHFCheckbox" }), (0, jsx_runtime_1.jsx)(hook_form_1.Field.Switch, { name: "switch", label: "RHFSwitch" }), (0, jsx_runtime_1.jsx)(hook_form_1.Field.RadioGroup, { row: true, name: "radioGroup", label: "RHFRadioGroup", options: [
                                            { label: 'Option 1', value: 'radio-1' },
                                            { label: 'Option 2', value: 'radio-2' },
                                            { label: 'Option 3', value: 'radio-3' },
                                        ], sx: { gap: 4 } }), (0, jsx_runtime_1.jsx)(hook_form_1.Field.MultiCheckbox, { row: true, name: "multiCheckbox", label: "RHFMultiCheckbox", options: [
                                            { label: 'Option 1', value: 'checkbox-1' },
                                            { label: 'Option 2', value: 'checkbox-2' },
                                            { label: 'Option 3', value: 'checkbox-3' },
                                        ], sx: { gap: 4 } }), (0, jsx_runtime_1.jsx)(hook_form_1.Field.MultiSwitch, { name: "multiSwitch", label: "RHFMultiSwitch", options: [
                                            { label: 'Option 1', value: 'switch-1' },
                                            { label: 'Option 2', value: 'switch-2' },
                                            { label: 'Option 3', value: 'switch-3' },
                                        ] }), (0, jsx_runtime_1.jsx)(Block, { label: "RHFSlider", children: (0, jsx_runtime_1.jsx)(hook_form_1.Field.Slider, { name: "slider" }) }), (0, jsx_runtime_1.jsx)(Block, { label: "RHFSlider", children: (0, jsx_runtime_1.jsx)(hook_form_1.Field.Slider, { name: "sliderRange" }) }), (0, jsx_runtime_1.jsx)(LoadingButton_1.default, { fullWidth: true, color: "info", size: "large", type: "submit", variant: "soft", loading: isSubmitting, children: "Submit to check" })] })] })] })] }));
}
function Block(_a) {
    var sx = _a.sx, children = _a.children, _b = _a.label, label = _b === void 0 ? 'RHFTextField' : _b;
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, sx: __assign({ width: 1 }, sx), children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "caption", sx: {
                    textAlign: 'right',
                    fontStyle: 'italic',
                    color: 'text.disabled',
                    fontSize: function (theme) { return theme.typography.pxToRem(10); },
                }, children: label }), children] }));
}
// ----------------------------------------------------------------------
function Grid2(_a) {
    var children = _a.children, sx = _a.sx, other = __rest(_a, ["children", "sx"]);
    return ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({ rowGap: 3, columnGap: 2, display: "grid", gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }, sx: __assign({}, sx) }, other, { children: children })));
}
