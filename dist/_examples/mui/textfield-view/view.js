"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextfieldView = TextfieldView;
var jsx_runtime_1 = require("react/jsx-runtime");
var paths_1 = require("lib/routes/paths");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var textfield_1 = require("./textfield");
var component_hero_1 = require("../../component-hero");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
function TextfieldView() {
    var DEMO = [
        { name: 'Outlined', component: (0, jsx_runtime_1.jsx)(textfield_1.Textfields, { variant: "outlined" }) },
        { name: 'Filled', component: (0, jsx_runtime_1.jsx)(textfield_1.Textfields, { variant: "filled" }) },
        { name: 'Standard', component: (0, jsx_runtime_1.jsx)(textfield_1.Textfields, { variant: "standard" }) },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Textfield", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Textfield' }], moreLink: ['https://mui.com/components/text-fields'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
