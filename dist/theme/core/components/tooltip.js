"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.tooltip = void 0;
var Tooltip_1 = require("@mui/material/Tooltip");
var styles_1 = require("../../styles");
// ----------------------------------------------------------------------
var MuiTooltip = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        tooltip: function (_a) {
            var _b;
            var theme = _a.theme;
            return (_b = {
                    backgroundColor: theme.vars.palette.grey[800]
                },
                _b[styles_1.stylesMode.dark] = {
                    backgroundColor: theme.vars.palette.grey[700],
                },
                _b);
        },
        arrow: function (_a) {
            var _b;
            var theme = _a.theme;
            return (_b = {
                    color: theme.vars.palette.grey[800]
                },
                _b[styles_1.stylesMode.dark] = {
                    color: theme.vars.palette.grey[700],
                },
                _b);
        },
        popper: (_a = {},
            _a["&.".concat(Tooltip_1.tooltipClasses.popper, "[data-popper-placement*=\"bottom\"] .").concat(Tooltip_1.tooltipClasses.tooltip)] = {
                marginTop: 12,
            },
            _a["&.".concat(Tooltip_1.tooltipClasses.popper, "[data-popper-placement*=\"top\"] .").concat(Tooltip_1.tooltipClasses.tooltip)] = {
                marginBottom: 12,
            },
            _a["&.".concat(Tooltip_1.tooltipClasses.popper, "[data-popper-placement*=\"right\"] .").concat(Tooltip_1.tooltipClasses.tooltip)] = {
                marginLeft: 12,
            },
            _a["&.".concat(Tooltip_1.tooltipClasses.popper, "[data-popper-placement*=\"left\"] .").concat(Tooltip_1.tooltipClasses.tooltip)] = {
                marginRight: 12,
            },
            _a),
    },
};
// ----------------------------------------------------------------------
exports.tooltip = { MuiTooltip: MuiTooltip };
