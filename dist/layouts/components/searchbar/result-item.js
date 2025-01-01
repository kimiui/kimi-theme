"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultItem = ResultItem;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var ListItemButton_1 = __importDefault(require("@mui/material/ListItemButton"));
var styles_1 = require("../../../theme/styles");
var label_1 = require("../../../components/label");
function ResultItem(_a) {
    var title = _a.title, path = _a.path, groupLabel = _a.groupLabel, onClickItem = _a.onClickItem;
    return ((0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { onClick: onClickItem, sx: {
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: 'transparent',
            borderBottomColor: function (theme) { return theme.vars.palette.divider; },
            '&:hover': {
                borderRadius: 1,
                borderColor: function (theme) { return theme.vars.palette.primary.main; },
                backgroundColor: function (theme) {
                    return (0, styles_1.varAlpha)(theme.vars.palette.primary.mainChannel, theme.vars.palette.action.hoverOpacity);
                },
            },
        }, children: [(0, jsx_runtime_1.jsx)(ListItemText_1.default, { slotProps: {
                    primary: { typography: 'subtitle2', sx: { textTransform: 'capitalize' } },
                    secondary: { typography: 'caption', noWrap: true },
                }, primary: title.map(function (part, index) { return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: { color: part.highlight ? 'primary.main' : 'text.primary' }, children: part.text }, index)); }), secondary: path.map(function (part, index) { return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: { color: part.highlight ? 'primary.main' : 'text.secondary' }, children: part.text }, index)); }) }), groupLabel && (0, jsx_runtime_1.jsx)(label_1.Label, { color: "info", children: groupLabel })] }));
}
