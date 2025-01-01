"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlPanel = ControlPanel;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Slider_1 = __importDefault(require("@mui/material/Slider"));
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var format_time_1 = require("lib/utils/format-time");
var styles_1 = require("../styles");
function ControlPanel(_a) {
    var startTime = _a.startTime, endTime = _a.endTime, allDays = _a.allDays, selectedTime = _a.selectedTime, onChangeTime = _a.onChangeTime, onChangeAllDays = _a.onChangeAllDays;
    var day = 24 * 60 * 60 * 1000;
    var days = Math.round((endTime - startTime) / day);
    var selectedDay = Math.round((selectedTime - startTime) / day);
    var handleChangeDays = function (value) {
        var daysToAdd = value;
        var newTime = startTime + daysToAdd * day;
        onChangeTime(newTime);
    };
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledControlPanel, { children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { sx: {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", sx: { color: 'common.white' }, children: "All days" }), (0, jsx_runtime_1.jsx)(Switch_1.default, { size: "small", checked: allDays, onChange: function (event) { return onChangeAllDays(event.target.checked); } })] }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)(Typography_1.default, { gutterBottom: true, variant: "body2", sx: { color: allDays ? 'text.disabled' : 'common.white' }, children: ["Each day: ", (0, format_time_1.fDate)(selectedTime)] }), (0, jsx_runtime_1.jsx)(Slider_1.default, { min: 1, step: 1, max: days, disabled: allDays, value: selectedDay, onChange: function (event, newValue) {
                    if (typeof newValue === 'number')
                        handleChangeDays(newValue);
                } })] }));
}
