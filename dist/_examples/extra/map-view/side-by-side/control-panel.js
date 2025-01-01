"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlPanel = ControlPanel;
var jsx_runtime_1 = require("react/jsx-runtime");
var ToggleButton_1 = __importDefault(require("@mui/material/ToggleButton"));
var ToggleButtonGroup_1 = __importDefault(require("@mui/material/ToggleButtonGroup"));
var styles_1 = require("../styles");
function ControlPanel(_a) {
    var mode = _a.mode, onModeChange = _a.onModeChange;
    return ((0, jsx_runtime_1.jsx)(styles_1.StyledControlPanel, { children: (0, jsx_runtime_1.jsxs)(ToggleButtonGroup_1.default, { color: "primary", value: mode, exclusive: true, onChange: onModeChange, children: [(0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: "side-by-side", children: "Side by side" }), (0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: "split-screen", children: "Split screen" })] }) }));
}
