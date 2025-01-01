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
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var styles_1 = require("@mui/material/styles");
var styles_2 = require("../../theme/styles");
var classes_1 = require("./classes");
// ----------------------------------------------------------------------
var MARGIN = '0.75em';
exports.StyledRoot = (0, styles_1.styled)(Stack_1.default, {
    shouldForwardProp: function (prop) { return prop !== 'error' && prop !== 'disabled' && prop !== 'fullScreen'; },
})(function (_a) {
    var _b, _c, _d, _e, _f;
    var theme = _a.theme;
    return (_b = {
            minHeight: 240,
            borderRadius: theme.shape.borderRadius,
            border: "solid 1px ".concat((0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.2)),
            scrollbarWidth: 'thin',
            scrollbarColor: "".concat((0, styles_2.varAlpha)(theme.vars.palette.text.disabledChannel, 0.4), " ").concat((0, styles_2.varAlpha)(theme.vars.palette.text.disabledChannel, 0.08))
        },
        /**
         * Placeholder
         */
        _b["& .".concat(classes_1.editorClasses.content.placeholder)] = {
            '&:first-of-type::before': __assign(__assign({}, theme.typography.body2), { height: 0, float: 'left', pointerEvents: 'none', content: 'attr(data-placeholder)', color: theme.vars.palette.text.disabled }),
        },
        /**
         * Content
         */
        _b["& .".concat(classes_1.editorClasses.content.root)] = {
            display: 'flex',
            flex: '1 1 auto',
            overflowY: 'auto',
            flexDirection: 'column',
            borderBottomLeftRadius: 'inherit',
            borderBottomRightRadius: 'inherit',
            backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08),
            '& .tiptap': (_c = {
                    '> * + *': {
                        marginTop: 0,
                        marginBottom: MARGIN,
                    },
                    '&.ProseMirror': {
                        flex: '1 1 auto',
                        outline: 'none',
                        padding: theme.spacing(0, 2),
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
                    p: __assign(__assign({}, theme.typography.body1), { marginBottom: '1.25rem' })
                },
                _c["& .".concat(classes_1.editorClasses.content.heading)] = {},
                /**
                 * Link
                 */
                _c["& .".concat(classes_1.editorClasses.content.link)] = {
                    color: theme.vars.palette.primary.main,
                },
                /**
                 * Hr Divider
                 */
                _c["& .".concat(classes_1.editorClasses.content.hr)] = {
                    flexShrink: 0,
                    borderWidth: 0,
                    margin: '2em 0',
                    msFlexNegative: 0,
                    WebkitFlexShrink: 0,
                    borderStyle: 'solid',
                    borderBottomWidth: 'thin',
                    borderColor: theme.vars.palette.divider,
                },
                /**
                 * Image
                 */ _c["& .".concat(classes_1.editorClasses.content.image)] = {
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%',
                    margin: 'auto auto 1.25em',
                },
                /**
                 * List
                 */ _c["& .".concat(classes_1.editorClasses.content.bulletList)] = {
                    paddingLeft: 16,
                    listStyleType: 'disc',
                },
                _c["& .".concat(classes_1.editorClasses.content.orderedList)] = {
                    paddingLeft: 16,
                },
                _c["& .".concat(classes_1.editorClasses.content.listItem)] = {
                    lineHeight: 2,
                    '& > p': { margin: 0, display: 'inline-block' },
                },
                /**
                 * Blockquote
                 */
                _c["& .".concat(classes_1.editorClasses.content.blockquote)] = (_d = {
                        lineHeight: 1.5,
                        fontSize: '1.5em',
                        margin: '24px auto',
                        position: 'relative',
                        fontFamily: 'Georgia, serif',
                        padding: theme.spacing(3, 3, 3, 8),
                        color: theme.vars.palette.text.secondary,
                        borderLeft: "solid 8px ".concat((0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08))
                    },
                    _d[theme.breakpoints.up('md')] = {
                        width: '100%',
                        maxWidth: 640,
                    },
                    _d['& p'] = {
                        margin: 0,
                        fontSize: 'inherit',
                        fontFamily: 'inherit',
                    },
                    _d['&::before'] = {
                        left: 16,
                        top: -8,
                        display: 'block',
                        fontSize: '3em',
                        content: '"\\201C"',
                        position: 'absolute',
                        color: theme.vars.palette.text.disabled,
                    },
                    _d),
                /**
                 * Code inline
                 */
                _c["& .".concat(classes_1.editorClasses.content.codeInline)] = {
                    padding: theme.spacing(0.25, 0.5),
                    color: theme.vars.palette.text.secondary,
                    fontSize: theme.typography.body2.fontSize,
                    borderRadius: theme.shape.borderRadius / 2,
                    backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.2),
                },
                /**
                 * Code block
                 */
                _c["& .".concat(classes_1.editorClasses.content.codeBlock)] = (_e = {
                        position: 'relative',
                        '& pre': {
                            overflowX: 'auto',
                            color: theme.vars.palette.common.white,
                            padding: theme.spacing(5, 3, 3, 3),
                            borderRadius: theme.shape.borderRadius,
                            backgroundColor: theme.vars.palette.grey[900],
                            fontFamily: "'JetBrainsMono', monospace",
                            '& code': { fontSize: theme.typography.body2.fontSize },
                        }
                    },
                    _e["& .".concat(classes_1.editorClasses.content.langSelect)] = {
                        top: 8,
                        right: 8,
                        zIndex: 1,
                        padding: 4,
                        outline: 'none',
                        borderRadius: 4,
                        position: 'absolute',
                        color: theme.vars.palette.common.white,
                        fontWeight: theme.typography.fontWeightMedium,
                        borderColor: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08),
                        backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08),
                    },
                    _e),
                _c),
        },
        _b.variants = [
            {
                props: { error: true },
                style: {
                    border: "solid 1px ".concat(theme.vars.palette.error.main),
                },
            },
            {
                props: { disabled: true },
                style: {
                    opacity: 0.48,
                    pointerEvents: 'none',
                },
            },
            {
                props: { fullScreen: true },
                style: {
                    top: 16,
                    left: 16,
                    position: 'fixed',
                    zIndex: theme.zIndex.modal,
                    maxHeight: 'unset !important',
                    width: "calc(100% - ".concat(32, "px)"),
                    height: "calc(100% - ".concat(32, "px)"),
                    backgroundColor: theme.vars.palette.background.default,
                },
            },
            {
                props: { error: true },
                style: (_f = {},
                    _f["& .".concat(classes_1.editorClasses.content.root)] = {
                        backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.error.mainChannel, 0.08),
                    },
                    _f),
            },
        ],
        _b);
});
