"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavContent = NavContent;
var jsx_runtime_1 = require("react/jsx-runtime");
var Masonry_1 = __importDefault(require("@mui/lab/Masonry"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var menu_tags_1 = require("./menu-tags");
var nav_sub_list_1 = require("./nav-sub-list");
var menu_carousel_1 = require("./menu-carousel");
var menu_more_link_1 = require("./menu-more-link");
var nav_section_1 = require("../../nav-section");
// ----------------------------------------------------------------------
function NavContent(_a) {
    var _b, _c;
    var data = _a.data, slotProps = _a.slotProps, singleList = _a.singleList;
    if (!data.children) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: singleList ? ((0, jsx_runtime_1.jsx)(nav_section_1.NavUl, { children: (0, jsx_runtime_1.jsx)(nav_sub_list_1.NavSubList, { data: data.children, slotProps: slotProps }) })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Masonry_1.default, { component: "ul", className: nav_section_1.navSectionClasses.ul, columns: 4, defaultColumns: 4, spacing: 3, defaultSpacing: 3, sx: { p: 0 }, children: (0, jsx_runtime_1.jsx)(nav_sub_list_1.NavSubList, { data: data.children, slotProps: slotProps }) }), !!data.moreLink && ((0, jsx_runtime_1.jsx)(menu_more_link_1.MenuMoreLink, { path: data.moreLink.path, title: data.moreLink.title, sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.moreLink })), !!data.slides && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Divider_1.default, { sx: { borderStyle: 'dashed', my: 3 } }), (0, jsx_runtime_1.jsx)(menu_carousel_1.MenuCarousel, { slides: data.slides, displayCount: (_b = slotProps === null || slotProps === void 0 ? void 0 : slotProps.carousel) === null || _b === void 0 ? void 0 : _b.displayCount, sx: (_c = slotProps === null || slotProps === void 0 ? void 0 : slotProps.carousel) === null || _c === void 0 ? void 0 : _c.sx })] })), !!data.tags && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Divider_1.default, { sx: { borderStyle: 'dashed', my: 3 } }), (0, jsx_runtime_1.jsx)(menu_tags_1.MenuTags, { tags: data.tags, sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.tags })] }))] })) }));
}
