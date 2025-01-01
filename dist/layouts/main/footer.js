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
exports.Footer = Footer;
exports.HomeFooter = HomeFooter;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Link_1 = __importDefault(require("@mui/material/Link"));
var Grid2_1 = __importDefault(require("@mui/material/Grid2"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var routes_react_1 = require("routes-react");
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var styles_1 = require("@mui/material/styles");
var Container_1 = __importDefault(require("@mui/material/Container"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var _mock_1 = require("lib/_mock");
var logo_1 = require("lib/components/logo");
var iconify_1 = require("lib/components/iconify");
// ----------------------------------------------------------------------
var LINKS = [
    {
        headline: 'Legal',
        children: [
            { name: 'Terms and condition', href: '#' },
            { name: 'Privacy policy', href: '#' },
        ],
    },
    {
        headline: 'Contact',
        children: [{ name: 'support@kimistores.com', href: '#' }],
    },
];
function Footer(_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var layoutQuery = _a.layoutQuery, sx = _a.sx;
    var theme = (0, styles_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { component: "footer", sx: __assign({ position: 'relative', bgcolor: 'background.default' }, sx), children: [(0, jsx_runtime_1.jsx)(Divider_1.default, {}), (0, jsx_runtime_1.jsxs)(Container_1.default, { sx: (_b = {
                        pb: 5,
                        pt: 10,
                        textAlign: 'center'
                    },
                    _b[theme.breakpoints.up(layoutQuery)] = { textAlign: 'unset' },
                    _b), children: [(0, jsx_runtime_1.jsx)(logo_1.Logo, {}), (0, jsx_runtime_1.jsxs)(Grid2_1.default, { container: true, sx: (_c = {
                                mt: 3,
                                justifyContent: 'center'
                            },
                            _c[theme.breakpoints.up(layoutQuery)] = {
                                justifyContent: 'space-between',
                            },
                            _c), children: [(0, jsx_runtime_1.jsxs)(Grid2_1.default, (_d = {}, _d[layoutQuery] = 3, _d.size = 12, _d.children = [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", sx: (_e = {
                                            mx: 'auto',
                                            maxWidth: 280
                                        },
                                        _e[theme.breakpoints.up(layoutQuery)] = { mx: 'unset' },
                                        _e), children: "The starting point for your next project with Kimi Admin UI Kit, built on the newest version of Material-UI \u00A9, ready to be customized to your style." }), (0, jsx_runtime_1.jsx)(Stack_1.default, { direction: "row", sx: (_f = {
                                            mt: 3,
                                            mb: 5,
                                            justifyContent: 'center'
                                        },
                                        _f[theme.breakpoints.up(layoutQuery)] = {
                                            mb: 0,
                                            justifyContent: 'flex-start',
                                        },
                                        _f), children: _mock_1._socials.map(function (social) { return ((0, jsx_runtime_1.jsx)(IconButton_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.SocialIcon, { icon: social.name }) }, social.name)); }) })], _d)), (0, jsx_runtime_1.jsx)(Grid2_1.default, (_g = {}, _g[layoutQuery] = 6, _g.size = 12, _g.children =
                                (0, jsx_runtime_1.jsx)(Stack_1.default, { spacing: 5, sx: (_h = {
                                            flexDirection: 'column'
                                        },
                                        _h[theme.breakpoints.up(layoutQuery)] = { flexDirection: 'row' },
                                        _h), children: LINKS.map(function (list) {
                                        var _a;
                                        return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 2, sx: (_a = {
                                                    width: 1,
                                                    alignItems: 'center'
                                                },
                                                _a[theme.breakpoints.up(layoutQuery)] = {
                                                    alignItems: 'flex-start',
                                                },
                                                _a), children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { component: "div", variant: "overline", children: list.headline }), list.children.map(function (link) { return ((0, jsx_runtime_1.jsx)(Link_1.default, { component: routes_react_1.RouterLink, href: link.href, color: "inherit", variant: "body2", children: link.name }, link.name)); })] }, list.headline));
                                    }) }), _g))] }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", sx: { mt: 10 }, children: "\u00A9 All rights reserved." })] })] }));
}
function HomeFooter(_a) {
    var sx = _a.sx;
    return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "footer", sx: __assign({ py: 5, textAlign: 'center', position: 'relative', bgcolor: 'background.default' }, sx), children: (0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsx)(logo_1.Logo, {}), (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { mt: 1, typography: 'caption' }, children: ["\u00A9 All rights reserved.", (0, jsx_runtime_1.jsx)("br", {}), " made by", (0, jsx_runtime_1.jsx)(Link_1.default, { href: "https://kimistores.com/", children: " kimistores.com " })] })] }) }));
}
