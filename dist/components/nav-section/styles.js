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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedStyles = void 0;
exports.stateClasses = stateClasses;
exports.Subheader = Subheader;
exports.NavCollapse = NavCollapse;
exports.NavLi = NavLi;
exports.NavUl = NavUl;
var jsx_runtime_1 = require("react/jsx-runtime");
var Collapse_1 = __importDefault(require("@mui/material/Collapse"));
var styles_1 = require("@mui/material/styles");
var ListSubheader_1 = __importDefault(require("@mui/material/ListSubheader"));
var styles_2 = require("../../theme/styles");
var classes_1 = require("./classes");
var svg_color_1 = require("../svg-color");
var iconify_1 = require("../iconify");
// ----------------------------------------------------------------------
function stateClasses(_a) {
    var open = _a.open, active = _a.active, disabled = _a.disabled;
    var classes = classes_1.navSectionClasses.item.root;
    if (active) {
        classes += " ".concat(classes_1.navSectionClasses.state.active);
    }
    else if (open) {
        classes += " ".concat(classes_1.navSectionClasses.state.open);
    }
    else if (disabled) {
        classes += " ".concat(classes_1.navSectionClasses.state.disabled);
    }
    return classes;
}
// ----------------------------------------------------------------------
exports.sharedStyles = {
    icon: (_a = {
            flexShrink: 0,
            display: 'inline-flex'
        },
        _a["& svg, & img, & .".concat(iconify_1.iconifyClasses.root, ", & .").concat(svg_color_1.svgColorClasses.root)] = {
            width: '100%',
            height: '100%',
        },
        _a),
    arrow: {
        width: 16,
        height: 16,
        flexShrink: 0,
        marginLeft: '6px',
        display: 'inline-flex',
    },
    info: {
        fontSize: 12,
        flexShrink: 0,
        fontWeight: 600,
        marginLeft: '6px',
        lineHeight: 18 / 12,
        display: 'inline-flex',
    },
    noWrap: {
        width: '100%',
        maxWidth: '100%',
        display: 'block',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    disabled: { opacity: 0.48, pointerEvents: 'none' },
};
// ----------------------------------------------------------------------
function Subheader(_a) {
    var _b;
    var sx = _a.sx, open = _a.open, children = _a.children, other = __rest(_a, ["sx", "open", "children"]);
    return ((0, jsx_runtime_1.jsxs)(ListSubheader_1.default, __assign({ disableSticky: true, component: "div", className: classes_1.navSectionClasses.subheader, sx: __assign({ gap: 1, cursor: 'pointer', alignItems: 'center', position: 'relative', typography: 'overline', display: 'inline-flex', alignSelf: 'flex-start', color: 'var(--nav-subheader-color)', padding: function (theme) { return theme.spacing(2, 1, 1, 1.5); }, fontSize: function (theme) { return theme.typography.pxToRem(11); }, transition: function (theme) {
                return theme.transitions.create(['color', 'padding-left'], {
                    duration: theme.transitions.duration.standard,
                });
            }, '&:hover': (_b = {
                    pl: 2,
                    color: 'var(--nav-subheader-hover-color)'
                },
                _b["& .".concat(iconify_1.iconifyClasses.root)] = { opacity: 1 },
                _b) }, sx) }, other, { children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 16, icon: open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill', sx: {
                    left: -4,
                    opacity: 0,
                    position: 'absolute',
                    transition: function (theme) {
                        return theme.transitions.create(['opacity'], {
                            duration: theme.transitions.duration.standard,
                        });
                    },
                } }), children] })));
}
// ----------------------------------------------------------------------
function NavCollapse(_a) {
    var _b, _c;
    var sx = _a.sx, depth = _a.depth, children = _a.children, other = __rest(_a, ["sx", "depth", "children"]);
    return ((0, jsx_runtime_1.jsx)(Collapse_1.default, __assign({ sx: __assign(__assign({}, (depth + 1 !== 1 && (_b = {
                pl: 'calc(var(--nav-item-pl) + var(--nav-icon-size) / 2)'
            },
            _b["& .".concat(classes_1.navSectionClasses.ul)] = {
                position: 'relative',
                pl: 'var(--nav-bullet-size)',
                '&::before': (_c = {
                        top: 0,
                        left: 0,
                        width: '2px',
                        content: '""',
                        position: 'absolute',
                        bottom: 'calc(var(--nav-item-sub-height) - 2px - var(--nav-bullet-size) / 2)',
                        bgcolor: 'var(--nav-bullet-light-color)'
                    },
                    _c[styles_2.stylesMode.dark] = {
                        bgcolor: 'var(--nav-bullet-dark-color)',
                    },
                    _c),
            },
            _b))), sx) }, other, { children: children })));
}
// ----------------------------------------------------------------------
var StyledNavUl = (0, styles_1.styled)('ul', {
    shouldForwardProp: function (propName) { return propName !== 'sx'; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        paddingLeft: 0,
    });
});
var StyledNavLi = (0, styles_1.styled)('li', {
    shouldForwardProp: function (propName) { return propName !== 'sx'; },
})(function (_a) {
    var theme = _a.theme;
    return ({});
});
function NavLi(_a) {
    var sx = _a.sx, children = _a.children, disabled = _a.disabled;
    return ((0, jsx_runtime_1.jsx)(StyledNavLi, { className: classes_1.navSectionClasses.li, sx: __assign(__assign({ display: 'flex', flexDirection: 'column' }, (disabled && { cursor: 'not-allowed' })), sx), children: children }));
}
// ----------------------------------------------------------------------
function NavUl(_a) {
    var children = _a.children, sx = _a.sx;
    return ((0, jsx_runtime_1.jsx)(StyledNavUl, { className: classes_1.navSectionClasses.ul, sx: __assign({ display: 'flex', flexDirection: 'column' }, sx), children: children }));
}
