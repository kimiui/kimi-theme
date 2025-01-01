'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormWizardView = FormWizardView;
var jsx_runtime_1 = require("react/jsx-runtime");
var paths_1 = require("lib/routes/paths");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var form_wizard_1 = require("./form-wizard");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
function FormWizardView() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Form wizard", links: [
                        { name: 'Components', href: paths_1.paths.docs.components.root },
                        { name: 'Form wizard' },
                    ], moreLink: ['https://react-hook-form.com', 'https://zod.dev'] }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentContainer, { children: (0, jsx_runtime_1.jsx)(form_wizard_1.FormWizard, {}) })] }));
}
