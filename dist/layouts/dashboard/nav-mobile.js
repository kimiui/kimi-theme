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
exports.NavMobile = NavMobile;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var routes_react_1 = require("routes-react");
var Drawer_1 = __importStar(require("@mui/material/Drawer"));
var logo_1 = require("../../components/logo");
var scrollbar_1 = require("../../components/scrollbar");
var nav_section_1 = require("../../components/nav-section");
var nav_helper_1 = require("../components/nav-helper");
function NavMobile(_a) {
    var _b;
    var _c;
    var data = _a.data, open = _a.open, onClose = _a.onClose, slots = _a.slots, sx = _a.sx, other = __rest(_a, ["data", "open", "onClose", "slots", "sx"]);
    var pathname = (0, routes_react_1.usePathname)();
    (0, react_1.useEffect)(function () {
        if (open) {
            onClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    return ((0, jsx_runtime_1.jsxs)(Drawer_1.default, { open: open, onClose: onClose, sx: (_b = {},
            _b["& .".concat(Drawer_1.drawerClasses.paper)] = __assign({ overflow: 'unset', bgcolor: 'var(--layout-nav-bg)', width: 'var(--layout-nav-mobile-width)' }, sx),
            _b), children: [(_c = slots === null || slots === void 0 ? void 0 : slots.topArea) !== null && _c !== void 0 ? _c : ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: { pl: 3.5, pt: 2.5, pb: 1 }, children: (0, jsx_runtime_1.jsx)(logo_1.Logo, {}) })), (0, jsx_runtime_1.jsxs)(scrollbar_1.Scrollbar, { fillContent: true, children: [(0, jsx_runtime_1.jsx)(nav_section_1.NavSectionVertical, __assign({ data: data, sx: { px: 2, flex: '1 1 auto' } }, other)), (0, jsx_runtime_1.jsx)(nav_helper_1.NavHelper, {})] }), slots === null || slots === void 0 ? void 0 : slots.bottomArea] }));
}
