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
exports.NavAPI = NavAPI;
var jsx_runtime_1 = require("react/jsx-runtime");
var swr_1 = __importDefault(require("swr"));
var react_1 = require("react");
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Skeleton_1 = __importDefault(require("@mui/material/Skeleton"));
var axios_1 = require("lib/utils/axios");
var label_1 = require("lib/components/label");
var svg_color_1 = require("lib/components/svg-color");
var nav_section_1 = require("lib/components/nav-section");
// ----------------------------------------------------------------------
function useGetNavItems() {
    var URL = '/api/navbar';
    var _a = (0, swr_1.default)(URL, axios_1.fetcher), data = _a.data, isLoading = _a.isLoading, error = _a.error, isValidating = _a.isValidating;
    var memoizedValue = (0, react_1.useMemo)(function () {
        var _a;
        return ({
            data: (_a = data === null || data === void 0 ? void 0 : data.navItems) !== null && _a !== void 0 ? _a : [],
            isLoading: isLoading,
            error: error,
            isValidating: isValidating,
            isEmpty: !isLoading && !(data === null || data === void 0 ? void 0 : data.navItems.length),
        });
    }, [data === null || data === void 0 ? void 0 : data.navItems, error, isLoading, isValidating]);
    return memoizedValue;
}
// ----------------------------------------------------------------------
function NavAPI() {
    var navItems = useGetNavItems();
    return ((0, jsx_runtime_1.jsx)(Paper_1.default, { variant: "outlined", sx: {
            p: 2,
            width: 1,
            mx: 'auto',
            maxWidth: 320,
            borderRadius: 2,
        }, children: navItems.isLoading ? (__spreadArray([], Array(8), true).map(function (i, index) { return ((0, jsx_runtime_1.jsx)(Skeleton_1.default, { variant: "rounded", height: 48, sx: { borderRadius: 1, my: 0.5 } }, index)); })) : ((0, jsx_runtime_1.jsx)(nav_section_1.NavSectionVertical, { data: navItems.data, render: {
                navIcon: NAV_ICONS,
                navInfo: function (val) { return ({
                    'info.landing': (0, jsx_runtime_1.jsx)(label_1.Label, { color: "error", children: val }),
                    'info.blog': (0, jsx_runtime_1.jsx)(label_1.Label, { color: "info", children: val }),
                    'info.blog.item1': (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: val }),
                }); },
            } })) }));
}
// ----------------------------------------------------------------------
var NAV_ICONS = {
    'icon.landing': (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-dashboard.svg" }),
    'icon.services': (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-analytics.svg" }),
    'icon.blog': (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-blog.svg" }),
    'icon.about': (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-user.svg" }),
    'icon.tour': (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-tour.svg" }),
    'icon.menu': (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-menu-item.svg" }),
    'icon.level2a': (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-chat.svg" }),
    'icon.level2b': (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-mail.svg" }),
    'icon.level2c': (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-calendar.svg" }),
};
