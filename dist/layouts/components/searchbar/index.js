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
exports.Searchbar = Searchbar;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var ahooks_1 = require("ahooks");
var routes_react_1 = require("routes-react");
var SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
var react_1 = require("react");
var match_1 = __importDefault(require("autosuggest-highlight/match"));
var parse_1 = __importDefault(require("autosuggest-highlight/parse"));
var InputBase_1 = __importDefault(require("@mui/material/InputBase"));
var styles_1 = require("@mui/material/styles");
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
var Dialog_1 = __importStar(require("@mui/material/Dialog"));
var utils_1 = require("lib/utils");
var styles_2 = require("lib/theme/styles");
var hooks_1 = require("lib/hooks");
var label_1 = require("lib/components/label");
var iconify_1 = require("lib/components/iconify");
var scrollbar_1 = require("lib/components/scrollbar");
var search_not_found_1 = require("lib/components/search-not-found");
var result_item_1 = require("./result-item");
var utils_2 = require("./utils");
function Searchbar(_a) {
    var _b;
    var _c = _a.data, navItems = _c === void 0 ? [] : _c, sx = _a.sx, other = __rest(_a, ["data", "sx"]);
    var theme = (0, styles_1.useTheme)();
    var router = (0, routes_react_1.useRouter)();
    var _d = (0, ahooks_1.useBoolean)(), search = _d[0], _e = _d[1], toggle = _e.toggle, setTrue = _e.setTrue, setFalse = _e.setFalse;
    var _f = (0, react_1.useState)(''), searchQuery = _f[0], setSearchQuery = _f[1];
    var handleClose = (0, react_1.useCallback)(function () {
        setFalse();
        setSearchQuery('');
    }, [setFalse]);
    var handleKeyDown = function (event) {
        if (event.key === 'k' && event.metaKey) {
            toggle();
            setSearchQuery('');
        }
    };
    (0, hooks_1.useEventListener)('keydown', handleKeyDown);
    var handleClick = (0, react_1.useCallback)(function (path) {
        if ((0, utils_1.isExternalLink)(path)) {
            window.open(path);
        }
        else {
            router.push(path);
        }
        handleClose();
    }, [handleClose, router]);
    var handleSearch = (0, react_1.useCallback)(function (event) {
        setSearchQuery(event.target.value);
    }, []);
    var dataFiltered = (0, utils_2.applyFilter)({
        inputData: (0, utils_2.getAllItems)({ data: navItems }),
        query: searchQuery,
    });
    var notFound = searchQuery && !dataFiltered.length;
    var renderItems = function () {
        var dataGroups = (0, utils_2.groupItems)(dataFiltered);
        return Object.keys(dataGroups)
            .sort(function (a, b) { return -b.localeCompare(a); })
            .map(function (group, index) { return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "ul", children: dataGroups[group].map(function (item) {
                var title = item.title, path = item.path;
                var partsTitle = (0, parse_1.default)(title, (0, match_1.default)(title, searchQuery));
                var partsPath = (0, parse_1.default)(path, (0, match_1.default)(path, searchQuery));
                return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", sx: { display: 'flex' }, children: (0, jsx_runtime_1.jsx)(result_item_1.ResultItem, { path: partsPath, title: partsTitle, groupLabel: searchQuery && group, onClickItem: function () { return handleClick(path); } }) }, "".concat(title).concat(path)));
            }) }, "".concat(group, "-").concat(index))); });
    };
    var renderButton = ((0, jsx_runtime_1.jsxs)(Box_1.default, __assign({ display: "flex", alignItems: "center", onClick: setTrue, sx: __assign({ pr: { sm: 1 }, borderRadius: { sm: 1.5 }, cursor: { sm: 'pointer' }, bgcolor: { sm: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08) } }, sx) }, other, { children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { disableRipple: true, children: (0, jsx_runtime_1.jsx)(SvgIcon_1.default, { sx: { width: 20, height: 20 }, children: (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6" }) }) }), (0, jsx_runtime_1.jsx)(label_1.Label, { sx: {
                    fontSize: 12,
                    color: 'grey.800',
                    bgcolor: 'common.white',
                    boxShadow: theme.shadows[1],
                    display: { xs: 'none', sm: 'inline-flex' },
                }, children: "\u2318K" })] })));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [renderButton, (0, jsx_runtime_1.jsxs)(Dialog_1.default, { fullWidth: true, disableRestoreFocus: true, maxWidth: "sm", open: search, onClose: handleClose, transitionDuration: {
                    enter: theme.transitions.duration.shortest,
                    exit: 0,
                }, PaperProps: { sx: { mt: 15, overflow: 'unset' } }, sx: (_b = {}, _b["& .".concat(Dialog_1.dialogClasses.container)] = { alignItems: 'flex-start' }, _b), children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: { p: 3, borderBottom: "solid 1px ".concat(theme.vars.palette.divider) }, children: (0, jsx_runtime_1.jsx)(InputBase_1.default, { fullWidth: true, autoFocus: true, placeholder: "Search...", value: searchQuery, onChange: handleSearch, startAdornment: (0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "start", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:search-fill", width: 24, sx: { color: 'text.disabled' } }) }), endAdornment: (0, jsx_runtime_1.jsx)(label_1.Label, { sx: { letterSpacing: 1, color: 'text.secondary' }, children: "esc" }), inputProps: { sx: { typography: 'h6' } } }) }), notFound ? ((0, jsx_runtime_1.jsx)(search_not_found_1.SearchNotFound, { query: searchQuery, sx: { py: 15 } })) : ((0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { sx: { px: 3, pb: 3, pt: 2, height: 400 }, children: renderItems() }))] })] }));
}
