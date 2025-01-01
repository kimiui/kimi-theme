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
exports.CustomDateRangePicker = CustomDateRangePicker;
var jsx_runtime_1 = require("react/jsx-runtime");
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var DatePicker_1 = require("@mui/x-date-pickers/DatePicker");
var DateCalendar_1 = require("@mui/x-date-pickers/DateCalendar");
var hooks_1 = require("lib/hooks");
// ----------------------------------------------------------------------
function CustomDateRangePicker(_a) {
    var open = _a.open, error = _a.error, endDate = _a.endDate, onClose = _a.onClose, startDate = _a.startDate, onChangeEndDate = _a.onChangeEndDate, _b = _a.variant, variant = _b === void 0 ? 'input' : _b, onChangeStartDate = _a.onChangeStartDate, _c = _a.title, title = _c === void 0 ? 'Select date range' : _c;
    var mdUp = (0, hooks_1.useResponsive)('up', 'md');
    var isCalendarView = variant === 'calendar';
    return ((0, jsx_runtime_1.jsxs)(Dialog_1.default, { fullWidth: true, maxWidth: isCalendarView ? false : 'xs', open: open, onClose: onClose, PaperProps: { sx: __assign({}, (isCalendarView && { maxWidth: 720 })) }, children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, { sx: { pb: 2 }, children: title }), (0, jsx_runtime_1.jsxs)(DialogContent_1.default, { sx: __assign({}, (isCalendarView && mdUp && { overflow: 'unset' })), children: [(0, jsx_runtime_1.jsx)(Stack_1.default, { justifyContent: "center", spacing: isCalendarView ? 3 : 2, direction: isCalendarView && mdUp ? 'row' : 'column', sx: { pt: 1 }, children: isCalendarView ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Paper_1.default, { variant: "outlined", sx: {
                                        borderRadius: 2,
                                        borderColor: 'divider',
                                        borderStyle: 'dashed',
                                    }, children: (0, jsx_runtime_1.jsx)(DateCalendar_1.DateCalendar, { value: startDate, onChange: onChangeStartDate }) }), (0, jsx_runtime_1.jsx)(Paper_1.default, { variant: "outlined", sx: {
                                        borderRadius: 2,
                                        borderColor: 'divider',
                                        borderStyle: 'dashed',
                                    }, children: (0, jsx_runtime_1.jsx)(DateCalendar_1.DateCalendar, { value: endDate, onChange: onChangeEndDate }) })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, { label: "Start date", value: startDate, onChange: onChangeStartDate }), (0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, { label: "End date", value: endDate, onChange: onChangeEndDate })] })) }), error && ((0, jsx_runtime_1.jsx)(FormHelperText_1.default, { error: true, sx: { px: 2 }, children: "End date must be later than start date" }))] }), (0, jsx_runtime_1.jsxs)(DialogActions_1.default, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outlined", color: "inherit", onClick: onClose, children: "Cancel" }), (0, jsx_runtime_1.jsx)(Button_1.default, { disabled: error, variant: "contained", onClick: onClose, children: "Apply" })] })] }));
}
