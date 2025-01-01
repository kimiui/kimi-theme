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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledItem = exports.StyledItemWrap = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var styles_1 = require("@mui/material/styles");
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var react_1 = require("react");
var iconify_1 = require("lib/components/iconify");
var styles_2 = require("lib/theme/styles");
var classes_1 = require("./classes");
// ----------------------------------------------------------------------
exports.StyledItemWrap = (0, styles_1.styled)('li')(function () {
    var _a;
    return (_a = {
            flexShrink: 0,
            display: 'flex',
            transform: 'translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1))',
            transformOrigin: '0 0',
            touchAction: 'manipulation'
        },
        _a["&.".concat(classes_1.itemClasses.state.dragOverlay)] = { zIndex: 999 },
        _a);
});
exports.StyledItem = (0, styles_1.styled)(Stack_1.default)(function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return (__assign(__assign({}, theme.typography.h2), (_b = { width: '100%', outline: 'none', overflow: 'hidden', textAlign: 'center', position: 'relative', padding: theme.spacing(5), transformOrigin: '50% 50%', touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent', borderRadius: theme.shape.borderRadius * 2, backgroundColor: theme.vars.palette.common.white, transition: theme.transitions.create(['box-shadow']), color: (0, styles_2.varAlpha)(theme.vars.palette.text.disabledChannel, 0.24), border: "solid 1px ".concat((0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16)) }, _b[styles_2.stylesMode.dark] = { backgroundColor: theme.vars.palette.grey[900] }, _b['&:hover'] = (_c = {}, _c["& .".concat(classes_1.itemClasses.removeBtn)] = { opacity: 0.48 }, _c), _b["& .".concat(classes_1.itemClasses.removeBtn)] = {
        opacity: 0,
        transition: theme.transitions.create(['opacity']),
    }, _b["&.".concat(classes_1.itemClasses.state.dragOverlay)] = (_d = {
            backdropFilter: "blur(6px)",
            boxShadow: theme.shadows[20],
            color: theme.vars.palette.text.primary,
            backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.common.whiteChannel, 0.48)
        },
        _d[styles_2.stylesMode.dark] = {
            backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.grey['900Channel'], 0.48),
        },
        _d), _b["&.".concat(classes_1.itemClasses.state.dragging)] = {
        opacity: 0.24,
        backgroundColor: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12),
    }, _b)));
});
var ItemBase = (0, react_1.forwardRef)(function (_a, ref) {
    var item = _a.item, stateProps = _a.stateProps, onRemove = _a.onRemove, sx = _a.sx, other = __rest(_a, ["item", "stateProps", "onRemove", "sx"]);
    (0, react_1.useEffect)(function () {
        if (!(stateProps === null || stateProps === void 0 ? void 0 : stateProps.dragOverlay)) {
            return;
        }
        document.body.style.cursor = 'grabbing';
        // eslint-disable-next-line consistent-return
        return function () {
            document.body.style.cursor = '';
        };
    }, [stateProps === null || stateProps === void 0 ? void 0 : stateProps.dragOverlay]);
    var itemWrapClassName = classes_1.itemClasses.itemWrap.concat(((stateProps === null || stateProps === void 0 ? void 0 : stateProps.dragOverlay) && " ".concat(classes_1.itemClasses.state.dragging)) ||
        ((stateProps === null || stateProps === void 0 ? void 0 : stateProps.dragOverlay) && " ".concat(classes_1.itemClasses.state.sorting)) ||
        ((stateProps === null || stateProps === void 0 ? void 0 : stateProps.dragOverlay) && " ".concat(classes_1.itemClasses.state.dragOverlay)) ||
        '');
    var itemClassName = classes_1.itemClasses.item.concat(((stateProps === null || stateProps === void 0 ? void 0 : stateProps.dragging) && " ".concat(classes_1.itemClasses.state.dragging)) ||
        ((stateProps === null || stateProps === void 0 ? void 0 : stateProps.sorting) && " ".concat(classes_1.itemClasses.state.sorting)) ||
        ((stateProps === null || stateProps === void 0 ? void 0 : stateProps.dragOverlay) && " ".concat(classes_1.itemClasses.state.dragOverlay)) ||
        '');
    return ((0, jsx_runtime_1.jsx)(exports.StyledItemWrap, { ref: ref, className: itemWrapClassName, sx: __assign(__assign({}, (!!(stateProps === null || stateProps === void 0 ? void 0 : stateProps.transition) && {
            transition: stateProps.transition,
        })), (!!(stateProps === null || stateProps === void 0 ? void 0 : stateProps.transform) && {
            '--translate-x': "".concat(Math.round(stateProps.transform.x), "px"),
            '--translate-y': "".concat(Math.round(stateProps.transform.y), "px"),
            '--scale-x': "".concat(stateProps.transform.scaleX),
            '--scale-y': "".concat(stateProps.transform.scaleY),
        })), children: (0, jsx_runtime_1.jsxs)(exports.StyledItem, __assign({ className: itemClassName, "data-cypress": "draggable-item", sx: sx }, other, { children: [item, (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", sx: {
                        top: 6,
                        right: 6,
                        zIndex: 9,
                        position: 'absolute',
                    }, children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { disableRipple: true, disableFocusRipple: true, disableTouchRipple: true, size: "small", onClick: onRemove, className: classes_1.itemClasses.removeBtn, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:close-circle-bold" }) }), (0, jsx_runtime_1.jsx)(IconButton_1.default, __assign({ disableRipple: true, disableFocusRipple: true, disableTouchRipple: true }, stateProps === null || stateProps === void 0 ? void 0 : stateProps.handleProps, stateProps === null || stateProps === void 0 ? void 0 : stateProps.listeners, { size: "small", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "nimbus:drag-dots" }) }))] })] })) }));
});
exports.default = (0, react_1.memo)(ItemBase);
