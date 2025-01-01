'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormValidationView = FormValidationView;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var paths_1 = require("../../../routes/paths");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var react_hook_form_1 = require("./react-hook-form");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
function FormValidationView() {
    var _a = (0, react_1.useState)(true), debug = _a[0], setDebug = _a[1];
    var handleChangeDebug = function (event) {
        setDebug(event.target.checked);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Form validation", links: [
                        { name: 'Components', href: paths_1.paths.docs.components.root },
                        { name: 'Form validation' },
                    ], moreLink: ['https://react-hook-form.com', 'https://zod.dev'] }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentContainer, { maxWidth: "xl", sx: { position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h4", children: " React hook form + Zod " }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { name: "switch-debug", checked: debug, onChange: handleChangeDebug }), label: "Show Debug", sx: { alignSelf: 'flex-start' } }), (0, jsx_runtime_1.jsx)(Divider_1.default, { sx: { my: 5 } }), (0, jsx_runtime_1.jsx)(react_hook_form_1.ReactHookForm, { debug: debug })] })] }));
}
