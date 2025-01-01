"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rtl = Rtl;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var cache_1 = __importDefault(require("@emotion/cache"));
var stylis_plugin_rtl_1 = __importDefault(require("stylis-plugin-rtl"));
var react_2 = require("@emotion/react");
function Rtl(_a) {
    var children = _a.children, direction = _a.direction;
    var cacheRtl = (0, cache_1.default)({
        key: 'rtl',
        prepend: true,
        stylisPlugins: [stylis_plugin_rtl_1.default],
    });
    (0, react_1.useEffect)(function () {
        document.dir = direction;
    }, [direction]);
    if (direction === 'rtl') {
        return (0, jsx_runtime_1.jsx)(react_2.CacheProvider, { value: cacheRtl, children: children });
    }
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
}
