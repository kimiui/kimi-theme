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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComponentsWithSettings = updateComponentsWithSettings;
function getSlotStyles(slot, props) {
    var slotStyles = typeof slot === 'function' && props ? slot(props) : (slot !== null && slot !== void 0 ? slot : {});
    return slotStyles;
}
// ----------------------------------------------------------------------
function updateComponentsWithSettings(components, settingsState) {
    var MuiCard = {
        styleOverrides: {
            root: function (props) {
                var _a, _b;
                var theme = props.theme;
                var rootStyles = getSlotStyles((_b = (_a = components === null || components === void 0 ? void 0 : components.MuiCard) === null || _a === void 0 ? void 0 : _a.styleOverrides) === null || _b === void 0 ? void 0 : _b.root, props);
                return __assign(__assign({}, rootStyles), ((settingsState === null || settingsState === void 0 ? void 0 : settingsState.contrast) === 'high' && {
                    boxShadow: theme.vars.shadows[1],
                }));
            },
        },
    };
    var MuiCssBaseline = {
        styleOverrides: {
            html: {
                fontSize: settingsState === null || settingsState === void 0 ? void 0 : settingsState.fontSize,
            },
        },
    };
    return {
        components: {
            MuiCard: MuiCard,
            MuiCssBaseline: MuiCssBaseline,
        },
    };
}
