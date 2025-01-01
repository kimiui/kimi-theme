'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarView = AvatarView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Badge_1 = __importDefault(require("@mui/material/Badge"));
var Avatar_1 = __importDefault(require("@mui/material/Avatar"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var styles_1 = require("@mui/material/styles");
var AvatarGroup_1 = __importStar(require("@mui/material/AvatarGroup"));
var _mock_1 = require("../../../_mock");
var paths_1 = require("../../../routes/paths");
var iconify_1 = require("../../../components/iconify");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
var SIZES = [24, 32, 40, 56];
var VARIANTS = ['circular', 'rounded', 'square'];
var STATUS = ['online', 'alway', 'busy', 'offline'];
// ----------------------------------------------------------------------
function AvatarView() {
    var theme = (0, styles_1.useTheme)();
    var DEMO = [
        {
            name: 'Image',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: [1, 2, 3, 4, 5].map(function (_, index) { return ((0, jsx_runtime_1.jsx)(Avatar_1.default, { alt: _mock_1._mock.fullName(index + 1), src: _mock_1._mock.image.avatar(index + 1) }, index)); }) })),
        },
        {
            name: 'Letter',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: COLORS.map(function (color, index) { return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: color, children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { alt: _mock_1._mock.fullName(index + 3), children: _mock_1._mock
                            .fullName(index + 3)
                            .charAt(0)
                            .toUpperCase() }) }, color)); }) })),
        },
        {
            name: 'Icon',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(Avatar_1.default, { color: color, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:folder-add-outline", width: 24 }) }, color)); }) })),
        },
        {
            name: 'Variant',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: VARIANTS.map(function (variant) { return ((0, jsx_runtime_1.jsx)(Avatar_1.default, { variant: variant, sx: { bgcolor: 'primary.main', color: 'primary.contrastText' }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:folder-add-outline", width: 24 }) }, variant)); }) })),
        },
        {
            name: 'Grouped',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { flexDirection: "column", alignItems: "center", children: [SIZES.map(function (size) {
                        var _a;
                        return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: size, children: (0, jsx_runtime_1.jsx)(AvatarGroup_1.default, { sx: (_a = {},
                                    _a["& .".concat(AvatarGroup_1.avatarGroupClasses.avatar)] = {
                                        width: size,
                                        height: size,
                                    },
                                    _a), children: COLORS.map(function (color, index) { return ((0, jsx_runtime_1.jsx)(Avatar_1.default, { alt: _mock_1._mock.fullAddress(index + 1), src: _mock_1._mock.image.avatar(index + 1) }, color)); }) }, size) }, size));
                    }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "compact", children: (0, jsx_runtime_1.jsx)(Badge_1.default, { variant: "online", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, children: (0, jsx_runtime_1.jsx)(AvatarGroup_1.default, { variant: "compact", sx: { width: 48, height: 48 }, children: COLORS.slice(0, 2).map(function (color, index) { return ((0, jsx_runtime_1.jsx)(Avatar_1.default, { alt: _mock_1._mock.fullName(index + 1), src: _mock_1._mock.image.avatar(index + 1) }, color)); }) }) }) })] })),
        },
        {
            name: 'With badge',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { children: [(0, jsx_runtime_1.jsx)(Badge_1.default, { overlap: "circular", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, badgeContent: (0, jsx_runtime_1.jsx)(Avatar_1.default, { alt: _mock_1._mock.fullName(7), src: _mock_1._mock.image.avatar(7), sx: {
                                p: 0,
                                width: 24,
                                height: 24,
                                border: "solid 2px ".concat(theme.vars.palette.background.paper),
                            } }), children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { alt: _mock_1._mock.fullName(8), src: _mock_1._mock.image.avatar(8) }) }), STATUS.map(function (status, index) { return ((0, jsx_runtime_1.jsx)(Badge_1.default, { variant: status, anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { alt: _mock_1._mock.fullName(index + 1), src: _mock_1._mock.image.avatar(index + 1) }) }, status)); })] })),
        },
        {
            name: 'Sizes',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: [24, 32, 48, 56, 64, 80, 128].map(function (size, index) { return ((0, jsx_runtime_1.jsx)(Avatar_1.default, { alt: _mock_1._mock.fullName(index + 4), src: _mock_1._mock.image.avatar(index + 4), sx: { width: size, height: size } }, size)); }) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Avatar", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Avatar' }], moreLink: ['https://mui.com/components/avatars'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
