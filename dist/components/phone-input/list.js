'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryListPopover = CountryListPopover;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Popover_1 = __importDefault(require("@mui/material/Popover"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var react_1 = require("react");
var MenuList_1 = __importDefault(require("@mui/material/MenuList"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
var countries_1 = require("lib/assets/data/countries");
var iconify_1 = require("lib/components/iconify");
var search_not_found_1 = require("lib/components/search-not-found");
var custom_popover_1 = require("../custom-popover");
var utils_1 = require("./utils");
// ----------------------------------------------------------------------
function CountryListPopover(_a) {
    var countryCode = _a.countryCode, onClickCountry = _a.onClickCountry;
    var popover = (0, custom_popover_1.usePopover)();
    var selectedCountry = (0, utils_1.getCountry)(countryCode);
    var _b = (0, react_1.useState)(''), searchCountry = _b[0], setSearchCountry = _b[1];
    var handleSearchCountry = (0, react_1.useCallback)(function (event) {
        setSearchCountry(event.target.value);
    }, []);
    var dataFiltered = (0, utils_1.applyFilter)({
        inputData: countries_1.countries,
        query: searchCountry,
    });
    var notFound = !dataFiltered.length && !!setSearchCountry;
    var renderButton = ((0, jsx_runtime_1.jsxs)(ButtonBase_1.default, { disableRipple: true, onClick: popover.onOpen, children: [(0, jsx_runtime_1.jsx)(iconify_1.FlagIcon, { code: selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.code, sx: { width: 22, height: 22, borderRadius: '50%' } }), (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:chevron-down-fill", sx: { ml: 0.5, flexShrink: 0, color: 'text.disabled' } }), (0, jsx_runtime_1.jsx)(Divider_1.default, { orientation: "vertical", flexItem: true, sx: { mr: 1 } })] }));
    var renderList = ((0, jsx_runtime_1.jsx)(MenuList_1.default, { children: dataFiltered.map(function (country) {
            if (!country.code) {
                return null;
            }
            return ((0, jsx_runtime_1.jsxs)(MenuItem_1.default, { selected: countryCode === country.code, autoFocus: countryCode === country.code, onClick: function () {
                    popover.onClose();
                    setSearchCountry('');
                    onClickCountry(country.code);
                }, children: [(0, jsx_runtime_1.jsx)(iconify_1.FlagIcon, { code: country.code, sx: { mr: 1, width: 22, height: 22, borderRadius: '50%' } }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: country.label, secondary: "".concat(country.code, " (+").concat(country.phone, ")"), primaryTypographyProps: { noWrap: true, typography: 'body2' }, secondaryTypographyProps: { typography: 'caption' } })] }, country.code));
        }) }));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [renderButton, (0, jsx_runtime_1.jsxs)(Popover_1.default, { disableRestoreFocus: true, open: popover.open, anchorEl: popover.anchorEl, onClose: function () {
                    popover.onClose();
                    setSearchCountry('');
                }, anchorOrigin: { vertical: 'bottom', horizontal: 'left' }, transformOrigin: { vertical: 'top', horizontal: 'left' }, slotProps: {
                    paper: {
                        sx: {
                            width: 1,
                            height: 320,
                            maxWidth: 320,
                            display: 'flex',
                            flexDirection: 'column',
                        },
                    },
                }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: { px: 1, py: 1.5 }, children: (0, jsx_runtime_1.jsx)(TextField_1.default, { autoFocus: true, fullWidth: true, value: searchCountry, onChange: handleSearchCountry, placeholder: "Search...", InputProps: {
                                startAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "start", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:search-fill", sx: { color: 'text.disabled' } }) })),
                            } }) }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { flex: '1 1 auto', overflowX: 'hidden' }, children: notFound ? (0, jsx_runtime_1.jsx)(search_not_found_1.SearchNotFound, { query: searchCountry, sx: { px: 2, pt: 5 } }) : renderList })] })] }));
}
