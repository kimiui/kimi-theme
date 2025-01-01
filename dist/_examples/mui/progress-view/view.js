'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressView = ProgressView;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var paths_1 = require("lib/routes/paths");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var progress_linear_1 = require("./progress-linear");
var component_hero_1 = require("../../component-hero");
var progress_circular_1 = require("./progress-circular");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
function ProgressView() {
    var _a = (0, react_1.useState)(0), progress = _a[0], setProgress = _a[1];
    var _b = (0, react_1.useState)(10), buffer = _b[0], setBuffer = _b[1];
    (0, react_1.useEffect)(function () {
        var timer = setInterval(function () {
            setProgress(function (oldProgress) {
                if (oldProgress === 100) {
                    return 0;
                }
                var diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);
        return function () {
            clearInterval(timer);
        };
    }, []);
    var progressRef = (0, react_1.useRef)(function () { });
    (0, react_1.useEffect)(function () {
        progressRef.current = function () {
            if (progress > 100) {
                setProgress(0);
                setBuffer(10);
            }
            else {
                var diff = Math.random() * 10;
                var diff2 = Math.random() * 10;
                setProgress(progress + diff);
                setBuffer(progress + diff + diff2);
            }
        };
    });
    (0, react_1.useEffect)(function () {
        var timer = setInterval(function () {
            progressRef.current();
        }, 500);
        return function () {
            clearInterval(timer);
        };
    }, []);
    var DEMO = [
        { name: 'Circular', component: (0, jsx_runtime_1.jsx)(progress_circular_1.ProgressCircular, { progress: progress }) },
        {
            name: 'Linear',
            component: (0, jsx_runtime_1.jsx)(progress_linear_1.ProgressLinear, { progress: progress, buffer: buffer }),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Progress", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Progress' }], moreLink: ['https://mui.com/components/progress'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
