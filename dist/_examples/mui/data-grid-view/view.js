'use client';
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGridView = DataGridView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Link_1 = __importDefault(require("@mui/material/Link"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Container_1 = __importDefault(require("@mui/material/Container"));
var CardHeader_1 = __importDefault(require("@mui/material/CardHeader"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var _mock_1 = require("lib/_mock");
var paths_1 = require("lib/routes/paths");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var data_grid_basic_1 = require("./data-grid-basic");
var data_grid_custom_1 = require("./data-grid-custom");
var component_hero_1 = require("../../component-hero");
// ----------------------------------------------------------------------
var _dataGrid = __spreadArray([], Array(20), true).map(function (_, index) {
    var status = (index % 2 && 'online') || (index % 3 && 'alway') || (index % 4 && 'busy') || 'offline';
    return {
        id: _mock_1._mock.id(index),
        status: status,
        email: _mock_1._mock.email(index),
        name: _mock_1._mock.fullName(index),
        age: _mock_1._mock.number.age(index),
        lastLogin: _mock_1._mock.time(index),
        isAdmin: _mock_1._mock.boolean(index),
        lastName: _mock_1._mock.lastName(index),
        rating: _mock_1._mock.number.rating(index),
        firstName: _mock_1._mock.firstName(index),
        performance: _mock_1._mock.number.percent(index),
    };
});
// ----------------------------------------------------------------------
function DataGridView() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(component_hero_1.ComponentHero, { children: [(0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "DataGrid", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'DataGrid' }], moreLink: ['https://mui.com/x/react-data-grid/'], sx: { mb: 0 } }), (0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "body2", sx: { my: 3 }, children: ["This component includes 2 ", (0, jsx_runtime_1.jsx)("strong", { children: "Free" }), " and ", (0, jsx_runtime_1.jsx)("strong", { children: "Paid" }), " versions from MUI.", (0, jsx_runtime_1.jsx)("br", {}), "Paid version will have more features. Please read more", ' ', (0, jsx_runtime_1.jsx)(Link_1.default, { href: "https://mui.com/x/react-data-grid/", target: "_blank", rel: "noopener", children: "here" })] })] }), (0, jsx_runtime_1.jsx)(Container_1.default, { sx: { my: 10 }, children: (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 5, children: [(0, jsx_runtime_1.jsxs)(Card_1.default, { children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { title: "Basic", sx: { mb: 2 } }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { height: 390 }, children: (0, jsx_runtime_1.jsx)(data_grid_basic_1.DataGridBasic, { data: _dataGrid }) })] }), (0, jsx_runtime_1.jsxs)(Card_1.default, { children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { title: "Custom", sx: { mb: 2 } }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { height: 720 }, children: (0, jsx_runtime_1.jsx)(data_grid_custom_1.DataGridCustom, { data: _dataGrid }) })] })] }) })] }));
}
