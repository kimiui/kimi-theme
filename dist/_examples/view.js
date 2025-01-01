"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsView = ComponentsView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Link_1 = __importDefault(require("@mui/material/Link"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var Container_1 = __importDefault(require("@mui/material/Container"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var helper_1 = require("lib/utils/helper");
var component_card_1 = require("./component-card");
var config_nav_1 = require("./config-nav");
// ----------------------------------------------------------------------
function ComponentsView() {
    return ((0, jsx_runtime_1.jsx)(Container_1.default, { sx: { mt: 10, mb: 15 }, children: (0, jsx_runtime_1.jsx)(Stack_1.default, { direction: { xs: 'column', md: 'row' }, alignItems: { md: 'flex-start' }, children: (0, jsx_runtime_1.jsxs)(Stack_1.default, { divider: (0, jsx_runtime_1.jsx)(Divider_1.default, { sx: { borderStyle: 'dashed', my: 8 } }), children: [(0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 3, children: [(0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h5", children: "Foundation" }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", sx: { color: 'text.secondary' }, children: "Colors, typography, shadows\u2026" })] }), (0, jsx_runtime_1.jsx)(Grid, { children: config_nav_1.foundationNav.map(function (item) { return ((0, jsx_runtime_1.jsx)(component_card_1.ComponentCard, { item: item }, item.name)); }) })] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 3, children: [(0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h5", children: "MUI" }), (0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "body2", sx: { color: 'text.secondary' }, children: ["Components from", ' ', (0, jsx_runtime_1.jsx)(Link_1.default, { href: "https://mui.com/components/", target: "_blank", rel: "noopener", children: "Material UI" }), "."] }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "caption", sx: { color: 'text.secondary' }, children: (0, jsx_runtime_1.jsxs)("i", { children: ["Some advanced components from MUI X will not be included. So you need to purchase a separate", (0, jsx_runtime_1.jsx)(Link_1.default, { href: "https://mui.com/pricing/", target: "_blank", rel: "noopener", sx: { ml: 0.5 }, children: "license" }), "."] }) })] }), (0, jsx_runtime_1.jsx)(Grid, { children: (0, helper_1.orderBy)(config_nav_1.muiNav, ['name'], ['asc']).map(function (item) { return ((0, jsx_runtime_1.jsx)(component_card_1.ComponentCard, { item: item }, item.name)); }) })] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 3, children: [(0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h5", children: "Extra Components" }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", sx: { color: 'text.secondary' }, children: "Some custom components / use 3rd party dependencies (chart, map, editor\u2026)." })] }), (0, jsx_runtime_1.jsx)(Grid, { children: (0, helper_1.orderBy)(config_nav_1.extraNav, ['name'], ['asc']).map(function (item) { return ((0, jsx_runtime_1.jsx)(component_card_1.ComponentCard, { item: item }, item.name)); }) })] })] }) }) }));
}
// ----------------------------------------------------------------------
function Grid(_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)(Box_1.default, { rowGap: 3, display: "grid", columnGap: 2.5, gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
            lg: 'repeat(5, 1fr)',
        }, children: children }));
}
