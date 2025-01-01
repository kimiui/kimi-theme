'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonView = ButtonView;
var jsx_runtime_1 = require("react/jsx-runtime");
var paths_1 = require("lib/routes/paths");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var icon_buttons_1 = require("./icon-buttons");
var button_groups_1 = require("./button-groups");
var toggle_buttons_1 = require("./toggle-buttons");
var button_variants_1 = require("./button-variants");
var component_hero_1 = require("../../component-hero");
var component_template_1 = require("../../component-template");
var floating_action_button_1 = require("./floating-action-button");
// ----------------------------------------------------------------------
function ButtonView() {
    var DEMO = [
        { name: 'Contained', component: (0, jsx_runtime_1.jsx)(button_variants_1.ButtonVariants, { variant: "contained" }) },
        { name: 'Outlined', component: (0, jsx_runtime_1.jsx)(button_variants_1.ButtonVariants, { variant: "outlined" }) },
        { name: 'Text', component: (0, jsx_runtime_1.jsx)(button_variants_1.ButtonVariants, { variant: "text" }) },
        { name: 'Soft', component: (0, jsx_runtime_1.jsx)(button_variants_1.ButtonVariants, { variant: "soft" }) },
        { name: 'Icon button', component: (0, jsx_runtime_1.jsx)(icon_buttons_1.IconButtons, {}) },
        { name: 'Fab', component: (0, jsx_runtime_1.jsx)(floating_action_button_1.FloatingActionButton, {}) },
        { name: 'Groups', component: (0, jsx_runtime_1.jsx)(button_groups_1.ButtonGroups, {}) },
        { name: 'Toggle', component: (0, jsx_runtime_1.jsx)(toggle_buttons_1.ToggleButtons, {}) },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Buttons", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Buttons' }], moreLink: [
                        'https://mui.com/components/buttons',
                        'https://mui.com/components/button-group',
                        'https://mui.com/components/floating-action-button',
                        'https://mui.com/components/toggle-button',
                    ] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
