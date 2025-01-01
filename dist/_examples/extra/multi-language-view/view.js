'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiLanguageView = MultiLanguageView;
var jsx_runtime_1 = require("react/jsx-runtime");
var dayjs_1 = __importDefault(require("dayjs"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var Radio_1 = __importDefault(require("@mui/material/Radio"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var RadioGroup_1 = __importDefault(require("@mui/material/RadioGroup"));
var TablePagination_1 = __importDefault(require("@mui/material/TablePagination"));
var DatePicker_1 = require("@mui/x-date-pickers/DatePicker");
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var paths_1 = require("../../../routes/paths");
var format_time_1 = require("../../../utils/format-time");
var iconify_1 = require("../../../components/iconify");
var locales_1 = require("../../../locales");
var nav_section_1 = require("../../../components/nav-section");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var format_number_1 = require("../../../utils/format-number");
var component_hero_1 = require("../../component-hero");
var config_nav_1 = require("./config-nav");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var StyledPaper = (0, styles_1.styled)(function (props) { return (0, jsx_runtime_1.jsx)(Paper_1.default, __assign({ variant: "outlined" }, props)); })(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({}, theme.typography.body2), { display: 'flex', gap: theme.spacing(1), flexDirection: 'column', padding: theme.spacing(3), borderRadius: theme.shape.borderRadius * 2 }));
});
// ----------------------------------------------------------------------
function MultiLanguageView() {
    var _a = (0, locales_1.useTranslate)(), t = _a.t, onChangeLang = _a.onChangeLang, currentLang = _a.currentLang;
    var _b = (0, react_1.useState)((0, dayjs_1.default)('2022-04-17')), date = _b[0], setDate = _b[1];
    var _c = (0, react_1.useState)(2), page = _c[0], setPage = _c[1];
    var _d = (0, react_1.useState)(10), rowsPerPage = _d[0], setRowsPerPage = _d[1];
    var tnav = (0, locales_1.useTranslate)('navbar').t;
    var navData = (0, config_nav_1.navData)(tnav);
    var handleChangePage = (0, react_1.useCallback)(function (event, newPage) {
        setPage(newPage);
    }, []);
    var handleChangeRowsPerPage = (0, react_1.useCallback)(function (event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }, []);
    var renderMenu = ((0, jsx_runtime_1.jsxs)(Paper_1.default, { sx: {
            m: 2,
            pb: 1,
            pt: 2,
            px: 2,
            right: 0,
            zIndex: 1,
            top: '25%',
            position: 'fixed',
            borderRadius: 1.5,
            bgcolor: 'background.paper',
            boxShadow: function (theme) { return theme.shadows[8]; },
        }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", sx: { mb: 1, color: 'text.sexcondary' }, children: "Langs" }), (0, jsx_runtime_1.jsx)(RadioGroup_1.default, { value: currentLang === null || currentLang === void 0 ? void 0 : currentLang.value, onChange: function (event) {
                    onChangeLang(event.target.value);
                }, children: locales_1.allLangs.map(function (lang) { return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: lang.value, label: lang.label, control: (0, jsx_runtime_1.jsx)(Radio_1.default, {}) }, lang.value)); }) })] }));
    var DEMO = [
        {
            name: 'Flexible',
            component: ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { sx: {
                            gap: 1,
                            mb: 2,
                            display: 'flex',
                            typography: 'h3',
                            alignItems: 'center',
                        }, children: [(0, jsx_runtime_1.jsx)(iconify_1.FlagIcon, { code: currentLang.countryCode }), t('demo.lang')] }), (0, jsx_runtime_1.jsx)(Typography_1.default, { children: t('demo.description') })] })),
        },
        {
            name: 'System (MUI)',
            component: ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: { typography: 'subtitle2' }, children: "Supports other components including:" }), (0, jsx_runtime_1.jsxs)(Box_1.default, { component: "ul", sx: {
                            mt: 1,
                            mb: 3,
                            pl: 3,
                            typography: 'body2',
                            listStyleType: 'disc',
                        }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", children: " Data Grid" }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", children: " Date Pickers" })] }), (0, jsx_runtime_1.jsx)(TablePagination_1.default, { component: "div", count: 100, page: page, onPageChange: handleChangePage, rowsPerPage: rowsPerPage, onRowsPerPageChange: handleChangeRowsPerPage, sx: {
                            borderRadius: 2,
                            border: function (theme) { return "solid 1px ".concat(theme.vars.palette.divider); },
                        } })] })),
        },
        {
            name: 'Nav',
            component: ((0, jsx_runtime_1.jsx)(Paper_1.default, { variant: "outlined", sx: { p: 2, width: 1, maxWidth: 320, borderRadius: 2 }, children: (0, jsx_runtime_1.jsx)(nav_section_1.NavSectionVertical, { data: navData }) })),
        },
        {
            name: 'Numbers',
            component: ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(Box_1.default, { gap: 3, display: "grid", gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }, children: [(0, jsx_runtime_1.jsx)(NumberBlock, { title: "Currency", type: "currency", data: [
                                2217.01,
                                247598.18,
                                677606.08,
                                4734447.51,
                                8471442.09,
                                undefined,
                                null,
                                NaN,
                                0,
                            ] }), (0, jsx_runtime_1.jsx)(NumberBlock, { title: "Percent", type: "percent", data: [1.7, 17.67, 28.1, 41.3, 91.16, undefined, null, NaN, 0] }), (0, jsx_runtime_1.jsx)(NumberBlock, { title: "Shorten", type: "shorten", data: [719, 719.63, 3683.72, 5583407.51, 3345583407.51, undefined, null, NaN, 0] }), (0, jsx_runtime_1.jsx)(NumberBlock, { title: "Data", type: "data", data: [719, 719.63, 3683.72, 5583407.51, 3345583407.51, undefined, null, NaN, 0] }), (0, jsx_runtime_1.jsx)(NumberBlock, { title: "Number", type: "number", data: [451, 451.82, 1081.62, 27921.9, 600668.81, 7587054.86, undefined, null, NaN, 0] }), (0, jsx_runtime_1.jsxs)(StyledPaper, { children: [(0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, { label: "Input", value: date, onChange: function (newValue) { return setDate(newValue); }, slotProps: { textField: { fullWidth: true } } }), (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { mt: 2, typography: 'subtitle2' }, children: ["Output: ", (0, format_time_1.fDate)(new Date())] })] })] }) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Multi language", links: [
                        { name: 'Components', href: paths_1.paths.docs.components.root },
                        { name: 'Multi language' },
                    ], moreLink: [
                        'https://react.i18next.com',
                        'https://mui.com/guides/localization/#main-content',
                    ] }) }), renderMenu, (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
function NumberBlock(_a) {
    var data = _a.data, type = _a.type, title = _a.title;
    var renderLabel = function (value) {
        if (value === undefined) {
            return 'undefined';
        }
        if (value === null) {
            return 'null';
        }
        if (String(value) === 'NaN') {
            return 'NaN';
        }
        return value;
    };
    return ((0, jsx_runtime_1.jsxs)(StyledPaper, { children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: { typography: 'subtitle2' }, children: title }), data.map(function (numb, index) { return ((0, jsx_runtime_1.jsxs)(Box_1.default, { children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: { color: 'text.primary' }, children: renderLabel(numb) }), (0, jsx_runtime_1.jsxs)(Box_1.default, { component: "span", sx: { color: 'text.secondary' }, children: [' => ', (type === 'currency' && (0, format_number_1.fCurrency)(numb)) ||
                                (type === 'percent' && (0, format_number_1.fPercent)(numb)) ||
                                (type === 'shorten' && (0, format_number_1.fShortenNumber)(numb)) ||
                                (type === 'data' && (0, format_number_1.fData)(numb)) ||
                                (type === 'number' && (0, format_number_1.fNumber)(numb))] })] }, String(index))); })] }));
}
