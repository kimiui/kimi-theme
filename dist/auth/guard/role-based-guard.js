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
exports.RoleBasedGuard = RoleBasedGuard;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Container_1 = __importDefault(require("@mui/material/Container"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var illustrations_1 = require("lib/assets/illustrations");
var animate_1 = require("lib/components/animate");
function RoleBasedGuard(_a) {
    var sx = _a.sx, children = _a.children, hasContent = _a.hasContent, currentRole = _a.currentRole, acceptRoles = _a.acceptRoles;
    if (typeof acceptRoles !== 'undefined' && !acceptRoles.includes(currentRole)) {
        return hasContent ? ((0, jsx_runtime_1.jsxs)(Container_1.default, { component: animate_1.MotionContainer, sx: __assign({ textAlign: 'center' }, sx), children: [(0, jsx_runtime_1.jsx)(framer_motion_1.m.div, { variants: (0, animate_1.varBounce)().in, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h3", sx: { mb: 2 }, children: "Permission denied" }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.m.div, { variants: (0, animate_1.varBounce)().in, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { sx: { color: 'text.secondary' }, children: "You do not have permission to access this page." }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.m.div, { variants: (0, animate_1.varBounce)().in, children: (0, jsx_runtime_1.jsx)(illustrations_1.ForbiddenIllustration, { sx: { my: { xs: 5, sm: 10 } } }) })] })) : null;
    }
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [" ", children, " "] });
}
