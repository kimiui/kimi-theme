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
exports.DashboardLayout = DashboardLayout;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ahooks_1 = require("ahooks");
var Alert_1 = __importDefault(require("@mui/material/Alert"));
var styles_1 = require("@mui/material/styles");
var material_1 = require("@mui/material");
var IconButton_1 = require("@mui/material/IconButton");
var locales_1 = require("../../locales");
var logo_1 = require("../../components/logo");
var _mock_1 = require("../../_mock");
var styles_2 = require("../../theme/styles");
var nav_section_1 = require("../../components/nav-section");
var settings_1 = require("../../components/settings");
var main_1 = require("./main");
var nav_mobile_1 = require("./nav-mobile");
var classes_1 = require("../classes");
var nav_vertical_1 = require("./nav-vertical");
var config_nav_account_1 = require("../config-nav-account");
var header_base_1 = require("../core/header-base");
var nav_horizontal_1 = require("./nav-horizontal");
var nav_helper_1 = require("../components/nav-helper");
var config_nav_workspace_1 = require("../config-nav-workspace");
var layout_section_1 = require("../core/layout-section");
function DashboardLayout(_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    var sx = _a.sx, children = _a.children, data = _a.data, slotProps = _a.slotProps;
    var theme = (0, styles_1.useTheme)();
    var _u = (0, ahooks_1.useBoolean)(), mobileNavOpen = _u[0], mobileNavOpenActions = _u[1];
    var settings = (0, settings_1.useSettingsContext)();
    var navColorVars = useNavColorVars(theme, settings);
    var layoutQuery = 'lg';
    var navData = (_j = data === null || data === void 0 ? void 0 : data.nav) !== null && _j !== void 0 ? _j : [];
    var isNavMini = settings.navLayout === 'mini';
    var isNavHorizontal = settings.navLayout === 'horizontal';
    var isNavVertical = isNavMini || settings.navLayout === 'vertical';
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(nav_mobile_1.NavMobile, { data: navData, open: mobileNavOpen, onClose: mobileNavOpenActions.setFalse, cssVars: navColorVars.section }), (0, jsx_runtime_1.jsx)(layout_section_1.LayoutSection
            /** **************************************
             * Header
             *************************************** */
            , { 
                /** **************************************
                 * Header
                 *************************************** */
                headerSection: (0, jsx_runtime_1.jsx)(header_base_1.HeaderBase, { layoutQuery: layoutQuery, disableElevation: isNavVertical, onOpenNav: mobileNavOpenActions.setTrue, data: {
                        nav: navData,
                        langs: locales_1.allLangs,
                        account: config_nav_account_1._account,
                        contacts: _mock_1._contacts,
                        workspaces: config_nav_workspace_1._workspaces,
                        notifications: _mock_1._notifications,
                    }, slotsDisplay: __assign({ signIn: false, purchase: false, helpLink: false, workspaces: false, contacts: false, localization: false }, (_k = slotProps === null || slotProps === void 0 ? void 0 : slotProps.header) === null || _k === void 0 ? void 0 : _k.slotsDisplay), slots: {
                        topArea: ((0, jsx_runtime_1.jsx)(Alert_1.default, { severity: "info", sx: { display: 'none', borderRadius: 0 }, children: "This is an info Alert." })),
                        bottomArea: isNavHorizontal ? ((0, jsx_runtime_1.jsx)(nav_horizontal_1.NavHorizontal, { data: navData, layoutQuery: layoutQuery, cssVars: navColorVars.section })) : null,
                    }, slotProps: {
                        toolbar: {
                            sx: __assign((_b = {}, _b["& [data-slot=\"logo\"]"] = {
                                display: 'none',
                            }, _b["& [data-area=\"right\"]"] = {
                                gap: { xs: 0, sm: 0.75 },
                            }, _b), (isNavHorizontal && (_c = {
                                    bgcolor: 'var(--layout-nav-bg)'
                                },
                                _c["& .".concat(IconButton_1.iconButtonClasses.root)] = {
                                    color: 'var(--layout-nav-text-secondary-color)',
                                },
                                _c[theme.breakpoints.up(layoutQuery)] = {
                                    height: 'var(--layout-nav-horizontal-height)',
                                },
                                _c["& [data-slot=\"workspaces\"]"] = {
                                    color: 'var(--layout-nav-text-primary-color)',
                                },
                                _c["& [data-slot=\"logo\"]"] = (_d = {
                                        display: 'none'
                                    },
                                    _d[theme.breakpoints.up(layoutQuery)] = {
                                        display: 'inline-flex',
                                    },
                                    _d),
                                _c["& [data-slot=\"divider\"]"] = (_e = {},
                                    _e[theme.breakpoints.up(layoutQuery)] = {
                                        display: 'flex',
                                    },
                                    _e),
                                _c))),
                        },
                        container: {
                            maxWidth: false,
                            sx: __assign({}, (isNavVertical && { px: (_f = {}, _f[layoutQuery] = 5, _f) })),
                        },
                    } }), 
                /** **************************************
                 * Sidebar
                 *************************************** */
                sidebarSection: isNavHorizontal ? null : ((0, jsx_runtime_1.jsx)(nav_vertical_1.NavVertical, { data: navData, isNavMini: isNavMini, layoutQuery: layoutQuery, cssVars: navColorVars.section, onToggleNav: ((_m = (_l = slotProps === null || slotProps === void 0 ? void 0 : slotProps.sidebar) === null || _l === void 0 ? void 0 : _l.toggleNav) === null || _m === void 0 ? void 0 : _m.display)
                        ? function () {
                            return settings.onUpdateField('navLayout', settings.navLayout === 'vertical' ? 'mini' : 'vertical');
                        }
                        : undefined, slotProps: __assign({ top: 'top' in ((_o = data === null || data === void 0 ? void 0 : data.sidebar) !== null && _o !== void 0 ? _o : {}) ? ((_p = data === null || data === void 0 ? void 0 : data.sidebar) === null || _p === void 0 ? void 0 : _p.top) : ((0, jsx_runtime_1.jsxs)(material_1.Stack, { sx: { pl: 3.5, pt: 2.5, pb: 2.5 }, direction: "row", alignItems: "center", children: [(0, jsx_runtime_1.jsx)(logo_1.Logo, {}), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h5", sx: { ml: 1, color: theme.palette.primary.main }, children: "Kimi Admin" })] })), topMini: 'topMini' in ((_q = data === null || data === void 0 ? void 0 : data.sidebar) !== null && _q !== void 0 ? _q : {}) ? ((_r = data === null || data === void 0 ? void 0 : data.sidebar) === null || _r === void 0 ? void 0 : _r.topMini) : ((0, jsx_runtime_1.jsx)(material_1.Box, { sx: { display: 'flex', justifyContent: 'center', py: 2.5 }, children: (0, jsx_runtime_1.jsx)(logo_1.Logo, {}) })), bottom: 'bottom' in ((_s = data === null || data === void 0 ? void 0 : data.sidebar) !== null && _s !== void 0 ? _s : {}) ? (_t = data === null || data === void 0 ? void 0 : data.sidebar) === null || _t === void 0 ? void 0 : _t.bottom : (0, jsx_runtime_1.jsx)(nav_helper_1.NavHelper, {}) }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.sidebar) })), 
                /** **************************************
                 * Footer
                 *************************************** */
                footerSection: null, 
                /** **************************************
                 * Style
                 *************************************** */
                cssVars: __assign(__assign({}, navColorVars.layout), { '--layout-transition-easing': 'linear', '--layout-transition-duration': '120ms', '--layout-nav-mini-width': '88px', '--layout-nav-vertical-width': '300px', '--layout-nav-horizontal-height': '64px', '--layout-dashboard-content-pt': theme.spacing(1), '--layout-dashboard-content-pb': theme.spacing(8), '--layout-dashboard-content-px': theme.spacing(5) }), sx: __assign((_g = {}, _g["& .".concat(classes_1.layoutClasses.hasSidebar)] = (_h = {},
                    _h[theme.breakpoints.up(layoutQuery)] = {
                        transition: theme.transitions.create(['padding-left'], {
                            easing: 'var(--layout-transition-easing)',
                            duration: 'var(--layout-transition-duration)',
                        }),
                        pl: isNavMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)',
                    },
                    _h), _g), sx), children: (0, jsx_runtime_1.jsx)(main_1.Main, { isNavHorizontal: isNavHorizontal, children: children }) })] }));
}
// ----------------------------------------------------------------------
function useNavColorVars(theme, settings) {
    var palette = theme.vars.palette;
    return (0, react_1.useMemo)(function () {
        var _a, _b;
        switch (settings.navColor) {
            case 'integrate':
                return {
                    layout: (_a = {
                            '--layout-nav-bg': palette.background.default,
                            '--layout-nav-horizontal-bg': (0, styles_2.varAlpha)(palette.background.defaultChannel, 0.8),
                            '--layout-nav-border-color': (0, styles_2.varAlpha)(palette.grey['500Channel'], 0.12),
                            '--layout-nav-text-primary-color': palette.text.primary,
                            '--layout-nav-text-secondary-color': palette.text.secondary,
                            '--layout-nav-text-disabled-color': palette.text.disabled
                        },
                        _a[styles_2.stylesMode.dark] = {
                            '--layout-nav-border-color': (0, styles_2.varAlpha)(palette.grey['500Channel'], 0.08),
                            '--layout-nav-horizontal-bg': (0, styles_2.varAlpha)(palette.background.defaultChannel, 0.96),
                        },
                        _a),
                    section: {},
                };
            case 'apparent':
                return {
                    layout: (_b = {
                            '--layout-nav-bg': palette.grey[900],
                            '--layout-nav-horizontal-bg': (0, styles_2.varAlpha)(palette.grey['900Channel'], 0.96),
                            '--layout-nav-border-color': 'transparent',
                            '--layout-nav-text-primary-color': palette.common.white,
                            '--layout-nav-text-secondary-color': palette.grey[500],
                            '--layout-nav-text-disabled-color': palette.grey[600]
                        },
                        _b[styles_2.stylesMode.dark] = {
                            '--layout-nav-bg': palette.grey[800],
                            '--layout-nav-horizontal-bg': (0, styles_2.varAlpha)(palette.grey['800Channel'], 0.8),
                        },
                        _b),
                    section: __assign({ 
                        // caption
                        '--nav-item-caption-color': palette.grey[600], 
                        // subheader
                        '--nav-subheader-color': palette.grey[600], '--nav-subheader-hover-color': palette.common.white, 
                        // item
                        '--nav-item-color': palette.grey[500], '--nav-item-root-active-color': palette.primary.light, '--nav-item-root-open-color': palette.common.white, 
                        // bullet
                        '--nav-bullet-light-color': nav_section_1.bulletColor.dark }, (settings.navLayout === 'vertical' && {
                        '--nav-item-sub-active-color': palette.common.white,
                        '--nav-item-sub-open-color': palette.common.white,
                    })),
                };
            default:
                throw new Error("Invalid color: ".concat(settings.navColor));
        }
    }, [
        palette.background.default,
        palette.background.defaultChannel,
        palette.common.white,
        palette.grey,
        palette.primary.light,
        palette.text.disabled,
        palette.text.primary,
        palette.text.secondary,
        settings.navColor,
        settings.navLayout,
    ]);
}
