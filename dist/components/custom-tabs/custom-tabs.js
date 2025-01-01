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
exports.CustomTabs = CustomTabs;
var jsx_runtime_1 = require("react/jsx-runtime");
var NoSsr_1 = __importDefault(require("@mui/material/NoSsr"));
var Tab_1 = require("@mui/material/Tab");
var Tabs_1 = __importStar(require("@mui/material/Tabs"));
var styles_1 = require("../../theme/styles");
function CustomTabs(_a) {
    var _b, _c, _d;
    var children = _a.children, slotProps = _a.slotProps, sx = _a.sx, other = __rest(_a, ["children", "slotProps", "sx"]);
    return ((0, jsx_runtime_1.jsx)(Tabs_1.default, __assign({ sx: __assign((_b = { gap: { sm: 0 }, minHeight: 38, flexShrink: 0, alignItems: 'center', bgcolor: 'background.neutral' }, _b["& .".concat(Tabs_1.tabsClasses.scroller)] = __assign({ p: 1 }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.scroller), _b["& .".concat(Tabs_1.tabsClasses.flexContainer)] = __assign({ gap: 0 }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.flexContainer), _b["& .".concat(Tabs_1.tabsClasses.scrollButtons)] = __assign({ borderRadius: 1, minHeight: 'inherit' }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.scrollButtons), _b["& .".concat(Tabs_1.tabsClasses.indicator)] = {
            py: 1,
            height: 1,
            bgcolor: 'transparent',
            '& > span': __assign((_c = { width: 1, height: 1, borderRadius: 1, display: 'block', bgcolor: 'common.white', boxShadow: function (theme) { return theme.shadows[1]; } }, _c[styles_1.stylesMode.dark] = { bgcolor: 'grey.900' }, _c), slotProps === null || slotProps === void 0 ? void 0 : slotProps.indicator),
        }, _b["& .".concat(Tab_1.tabClasses.root)] = __assign(__assign({ py: 1, px: 2, zIndex: 1, minHeight: 'auto' }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.tab), (_d = {}, _d["&.".concat(Tab_1.tabClasses.selected)] = __assign({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.selected), _d)), _b), sx) }, other, { TabIndicatorProps: {
            children: ((0, jsx_runtime_1.jsx)(NoSsr_1.default, { children: (0, jsx_runtime_1.jsx)("span", {}) })),
        }, children: children })));
}
