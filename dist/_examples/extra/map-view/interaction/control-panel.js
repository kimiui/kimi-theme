'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlPanel = ControlPanel;
var jsx_runtime_1 = require("react/jsx-runtime");
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var styles_1 = require("@mui/material/styles");
var InputBase_1 = __importDefault(require("@mui/material/InputBase"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_2 = require("lib/theme/styles");
var styles_3 = require("../styles");
// ----------------------------------------------------------------------
var StyledRow = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        alignItems: 'center',
        textTransform: 'capitalize',
        justifyContent: 'space-between',
        color: theme.palette.common.white,
        '&:not(:last-of-type)': { marginBottom: theme.spacing(1) },
    });
});
// ----------------------------------------------------------------------
var camelPattern = /(^|[A-Z])[a-z]*/g;
function formatSettingName(name) {
    var _a;
    return (_a = name.match(camelPattern)) === null || _a === void 0 ? void 0 : _a.join(' ');
}
// ----------------------------------------------------------------------
function ControlPanel(_a) {
    var settings = _a.settings, onChange = _a.onChange;
    var renderSetting = function (name, value) {
        switch (typeof value) {
            case 'boolean':
                return ((0, jsx_runtime_1.jsxs)(StyledRow, { children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", children: formatSettingName(name) }), (0, jsx_runtime_1.jsx)(Switch_1.default, { size: "small", checked: value, onChange: function (event) { return onChange(name, event.target.checked); } })] }, name));
            case 'number':
                return ((0, jsx_runtime_1.jsxs)(StyledRow, { children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", children: formatSettingName(name) }), (0, jsx_runtime_1.jsx)(InputBase_1.default, { value: value, onChange: function (event) { return onChange(name, Number(event.target.value)); }, inputProps: { type: 'number' }, sx: {
                                '& input': {
                                    py: 0.25,
                                    width: 40,
                                    fontSize: 14,
                                    borderRadius: 0.5,
                                    textAlign: 'center',
                                    color: 'common.white',
                                    bgcolor: function (theme) { return (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12); },
                                },
                            } })] }, name));
            default:
                return null;
        }
    };
    return ((0, jsx_runtime_1.jsx)(styles_3.StyledControlPanel, { children: Object.keys(settings).map(function (name) {
            return renderSetting(name, settings[name]);
        }) }));
}
