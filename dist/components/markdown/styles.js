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
exports.StyledRoot = void 0;
var react_markdown_1 = __importDefault(require("react-markdown"));
var styles_1 = require("@mui/material/styles");
var styles_2 = require("../../theme/styles");
var classes_1 = require("./classes");
// ----------------------------------------------------------------------
var MARGIN = '0.75em';
exports.StyledRoot = (0, styles_1.styled)(react_markdown_1.default)(function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return (_b = {
            '> * + *': {
                marginTop: 0,
                marginBottom: MARGIN,
            },
            /**
             * Heading & Paragraph
             */
            h1: __assign(__assign({}, theme.typography.h1), { marginTop: 40, marginBottom: 8 }),
            h2: __assign(__assign({}, theme.typography.h2), { marginTop: 40, marginBottom: 8 }),
            h3: __assign(__assign({}, theme.typography.h3), { marginTop: 24, marginBottom: 8 }),
            h4: __assign(__assign({}, theme.typography.h4), { marginTop: 24, marginBottom: 8 }),
            h5: __assign(__assign({}, theme.typography.h5), { marginTop: 24, marginBottom: 8 }),
            h6: __assign(__assign({}, theme.typography.h6), { marginTop: 24, marginBottom: 8 }),
            p: __assign(__assign({}, theme.typography.body1), { marginBottom: '1.25rem' }),
            /**
             * Hr Divider
             */
            hr: {
                flexShrink: 0,
                borderWidth: 0,
                margin: '2em 0',
                msFlexNegative: 0,
                WebkitFlexShrink: 0,
                borderStyle: 'solid',
                borderBottomWidth: 'thin',
                borderColor: theme.vars.palette.divider,
            }
        },
        /**
         * Image
         */
        _b["& .".concat(classes_1.markdownClasses.content.image)] = {
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            margin: 'auto auto 1.25em',
        },
        /**
         * List
         */
        _b['& ul'] = {
            listStyleType: 'disc',
        },
        _b['& ul, & ol'] = {
            paddingLeft: 16,
            '& > li': {
                lineHeight: 2,
                '& > p': { margin: 0, display: 'inline-block' },
            },
        },
        /**
         * Blockquote
         */
        _b['& blockquote'] = (_c = {
                lineHeight: 1.5,
                fontSize: '1.5em',
                margin: '24px auto',
                position: 'relative',
                fontFamily: 'Georgia, serif',
                padding: theme.spacing(3, 3, 3, 8),
                color: theme.vars.palette.text.secondary,
                borderLeft: "solid 8px ".concat((0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08))
            },
            _c[theme.breakpoints.up('md')] = {
                width: '100%',
                maxWidth: 640,
            },
            _c['& p'] = {
                margin: 0,
                fontSize: 'inherit',
                fontFamily: 'inherit',
            },
            _c['&::before'] = {
                left: 16,
                top: -8,
                display: 'block',
                fontSize: '3em',
                content: '"\\201C"',
                position: 'absolute',
                color: theme.vars.palette.text.disabled,
            },
            _c),
        /**
         * Code inline
         */
        _b["& .".concat(classes_1.markdownClasses.content.codeInline)] = {
            padding: theme.spacing(0.25, 0.5),
            color: theme.vars.palette.text.secondary,
            fontSize: theme.typography.body2.fontSize,
            borderRadius: theme.shape.borderRadius / 2,
            backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.2),
        },
        /**
         * Code Block
         */
        _b["& .".concat(classes_1.markdownClasses.content.codeBlock)] = {
            position: 'relative',
            '& pre': {
                overflowX: 'auto',
                padding: theme.spacing(3),
                color: theme.vars.palette.common.white,
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.vars.palette.grey[900],
                fontFamily: "'JetBrainsMono', monospace",
                '& code': { fontSize: theme.typography.body2.fontSize },
            },
        },
        /**
         * Table
         */
        _b.table = {
            width: '100%',
            borderCollapse: 'collapse',
            border: "1px solid ".concat(theme.vars.palette.divider),
            'th, td': {
                padding: theme.spacing(1),
                border: "1px solid ".concat(theme.vars.palette.divider),
            },
            'tbody tr:nth-of-type(odd)': {
                backgroundColor: theme.vars.palette.background.neutral,
            },
        },
        /**
         * Checkbox
         */
        _b.input = {
            '&[type=checkbox]': {
                position: 'relative',
                cursor: 'pointer',
                '&:before': (_d = {
                        content: '""',
                        top: -2,
                        left: -2,
                        width: 17,
                        height: 17,
                        borderRadius: 3,
                        position: 'absolute',
                        backgroundColor: theme.vars.palette.grey[300]
                    },
                    _d[styles_2.stylesMode.dark] = { backgroundColor: theme.vars.palette.grey[700] },
                    _d),
                '&:checked': {
                    '&:before': { backgroundColor: theme.vars.palette.primary.main },
                    '&:after': {
                        content: '""',
                        top: 1,
                        left: 5,
                        width: 4,
                        height: 9,
                        position: 'absolute',
                        transform: 'rotate(45deg)',
                        msTransform: 'rotate(45deg)',
                        WebkitTransform: 'rotate(45deg)',
                        border: "solid ".concat(theme.vars.palette.common.white),
                        borderWidth: '0 2px 2px 0',
                    },
                },
            },
        },
        _b);
});
